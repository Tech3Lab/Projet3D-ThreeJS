import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';

const WS_BASE = 'wss://t3l-collector-backend.herokuapp.com/?listen=';
// const WS_BASE = 'ws://localhost:4000/?listen=';
const WS_CONNECT_TIMEOUT_MS = 10000;

const link = document.createElement('a');
link.style.display = 'none';
document.body.appendChild(link);

function save(blob, filename) {
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

function saveArrayBuffer(buffer, filename) {
    save(new Blob([buffer], { type: 'application/octet-stream' }), filename);
}

function applyMorphTargets(geometry, influences) {
    if (!geometry.morphAttributes.position) return geometry.clone();

    const modifiedGeometry = geometry.clone();
    modifiedGeometry.morphAttributes = {};

    const morphAttributes = geometry.morphAttributes.position;
    for (let i = 0; i < morphAttributes.length; i++) {
        const morphAttribute = morphAttributes[i];
        for (let j = 0; j < morphAttribute.count; j++) {
            const morphInfluence = influences[i] || 0;
            const basePosition = new THREE.Vector3().fromBufferAttribute(modifiedGeometry.attributes.position, j);
            const morphPosition = new THREE.Vector3().fromBufferAttribute(morphAttribute, j);
            basePosition.lerp(morphPosition, morphInfluence);
            modifiedGeometry.attributes.position.setXYZ(j, basePosition.x, basePosition.y, basePosition.z);
        }
    }
    modifiedGeometry.attributes.position.needsUpdate = true;
    return modifiedGeometry;
}

class Viewer3D {
    constructor(container, listenChannel, guiTitle, guiAlignLeft) {
        this.container = container;
        this.listenChannel = listenChannel;
        this.mat = {};
        this.shape = {};
        this.radianX = 0;
        this.radianY = 0;
        this.radianZ = 0;
        this.morph0 = 0;
        this.morph1 = 0;

        this.effectController = {
            width: 1,
            height: 1,
            depth: 1,
            torsion: 0,
            sphere: 0,
            spin: false,
            newShading: 'flat',
            exportSTL: () => this.exportSTL(),
            tess: 5,
            shape: 'Box',
            upload: (url) => this.loadGLTFile(url),
            x: false,
            y: true,
            z: false
        };

        this.init();
        this.setupGui(guiTitle, guiAlignLeft);
        this.connectWebSocket();
        this.setupDragDrop();
        this.setupResizeObserver();
        this.animate();
    }

    init() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x8FBCD4);

        const width = this.container.clientWidth;
        const height = this.container.clientHeight;

        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        this.camera.position.set(0, 3, 5);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.listenToKeyEvents(window);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.screenSpacePanning = false;
        this.controls.minDistance = 1;
        this.controls.maxDistance = 1000;
        this.controls.maxPolarAngle = Math.PI / 2;

        this.setupLights();

        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshLambertMaterial({ side: THREE.DoubleSide });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.material.color.set('grey');
        this.mesh.position.set(0, 1, 0);
        this.scene.add(this.mesh);
    }

    setupLights() {
        const dirLight1 = new THREE.DirectionalLight(0xffffff);
        dirLight1.position.set(6, 2, 6);

        const dirLight2 = new THREE.DirectionalLight(0xffffff);
        dirLight2.position.set(-6, 2, 6);

        const dirLight3 = new THREE.DirectionalLight(0xffffff, 0.5);
        dirLight3.position.set(-6, 2, -6);

        const dirLight4 = new THREE.DirectionalLight(0xffffff, 0.5);
        dirLight4.position.set(6, 2, -6);

        const ambientLight = new THREE.AmbientLight(0x4d4c4c);

        this.scene.add(dirLight1, dirLight2, dirLight3, dirLight4, ambientLight);
    }

    connectWebSocket() {
        const channel = this.listenChannel;
        let herokuConnected = false;
        let connectAlertShown = false;

        const showHerokuConnectError = (detail) => {
            if (connectAlertShown) return;
            connectAlertShown = true;
            alert(`[error] Impossible de rejoindre Heroku (canal ${channel})${detail ? ` — ${detail}` : ''}`);
        };

        const socket = new WebSocket(`${WS_BASE}${channel}`);

        const connectionTimeout = setTimeout(() => {
            if (!herokuConnected && socket.readyState !== WebSocket.OPEN) {
                showHerokuConnectError('délai dépassé');
                if (socket.readyState === WebSocket.CONNECTING) {
                    socket.close();
                }
            }
        }, WS_CONNECT_TIMEOUT_MS);

        socket.onopen = () => {
            herokuConnected = true;
            clearTimeout(connectionTimeout);
            console.log(`[canal ${channel}] Connecté à Heroku, en attente du device`);
            socket.send('My name is John');
        };

        socket.onmessage = (event) => {
            console.log(`[canal ${channel}] Data received: ${event.data}`);
            this.update(event.data);
        };

        socket.onclose = (event) => {
            clearTimeout(connectionTimeout);
            if (!herokuConnected) {
                const detail = event.wasClean
                    ? `code=${event.code} reason=${event.reason}`
                    : 'connexion refusée ou interrompue';
                showHerokuConnectError(detail);
            } else {
                console.log(`[canal ${channel}] Déconnecté de Heroku (code=${event.code})`);
            }
        };

        socket.onerror = () => {
            console.log(`[error] Canal ${channel} — échec connexion Heroku`);
        };

        this.socket = socket;
    }

    setupGui(title, alignLeft) {
        const gui = new GUI({ title });
        if (alignLeft) {
            gui.domElement.style.left = '10px';
            gui.domElement.style.right = 'auto';
        } else {
            gui.domElement.style.right = '10px';
            gui.domElement.style.left = 'auto';
        }

        const visuFolder = gui.addFolder('Vue');
        visuFolder.add(this.effectController, 'spin').listen().name('Spining');
        visuFolder.add(this.effectController, 'shape', ['Box', 'Sphere']).name('Shape').listen().onChange(() => this.render());
        visuFolder.add(this.effectController, 'newShading', ['wireframe', 'flat', 'smooth', 'basic']).name('Shading').listen().onChange(() => this.render());

        const effectFolder = gui.addFolder('Effet');
        effectFolder.add(this.effectController, 'sphere').min(-100).max(200).step(0.01).listen().onChange(() => this.render());
        effectFolder.add(this.effectController, 'torsion').min(-100).max(100).step(0.01).listen().onChange(() => this.render());
        effectFolder.add(this.effectController, 'width').min(0).max(2).listen().onChange(() => this.render());
        effectFolder.add(this.effectController, 'height').min(0).max(2).listen().onChange(() => this.render());
        effectFolder.add(this.effectController, 'depth').min(0).max(2).listen().onChange(() => this.render());
        effectFolder.add(this.effectController, 'tess').min(1).max(64).step(1).listen().onChange(() => this.render());

        const torsionFolder = gui.addFolder('Sens de torsion ');
        torsionFolder.add(this.effectController, 'x').listen().name('X');
        torsionFolder.add(this.effectController, 'y').listen().name('Y');
        torsionFolder.add(this.effectController, 'z').listen().name('Z');

        const exportFolder = gui.addFolder('Fichier');
        exportFolder.add(this.effectController, 'exportSTL').name('Télécharger ');
        exportFolder.close();

        this.gui = gui;
    }

    setupDragDrop() {
        this.container.addEventListener('dragover', (event) => {
            event.preventDefault();
            event.stopPropagation();
            event.dataTransfer.dropEffect = 'copy';
        });

        this.container.addEventListener('drop', (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (event.dataTransfer.types[0] === 'text/plain') return;

            if (event.dataTransfer.items) {
                [...event.dataTransfer.items].forEach((item) => {
                    if (item.kind === 'file') {
                        const file = item.getAsFile();
                        const url = URL.createObjectURL(file);
                        this.loadGLTFile(url);
                    }
                });
            }
        });
    }

    setupResizeObserver() {
        this.resizeObserver = new ResizeObserver(() => this.onResize());
        this.resizeObserver.observe(this.container);
    }

    onResize() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        if (width === 0 || height === 0) return;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        if (this.effectController.spin) {
            this.radianX += 0.02;
            this.radianY += 0.01;
            this.radianZ += 0.01;
            this.mesh.rotation.x = this.radianX;
            this.mesh.rotation.y = this.radianY;
            this.mesh.rotation.z = this.radianZ;
        } else {
            this.radianX = 0;
            this.radianY = 0;
            this.radianZ = 0;
            this.mesh.rotation.x = 0;
            this.mesh.rotation.y = 0;
            this.mesh.rotation.z = 0;
        }

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        if (this.effectController.shape === 'Box') {
            this.renderCube();
        } else if (this.effectController.shape === 'Sphere') {
            this.renderSphere();
        } else if (this.effectController.shape === 'upload') {
            this.renderUploadedShape();
        }
    }

    buildMorphGeometry() {
        this.mat['wireframe'] = new THREE.MeshStandardMaterial({ wireframe: true });
        this.mat['flat'] = new THREE.MeshPhongMaterial({ specular: 0x000000, flatShading: true, side: THREE.DoubleSide });
        this.mat['smooth'] = new THREE.MeshLambertMaterial({ side: THREE.DoubleSide });
        this.mat['basic'] = new THREE.MeshBasicMaterial();

        this.shape['Box'] = new THREE.BoxGeometry(
            this.effectController.height,
            this.effectController.width,
            this.effectController.depth,
            this.effectController.tess,
            this.effectController.tess,
            this.effectController.tess
        );
        this.shape['Sphere'] = new THREE.SphereGeometry(
            this.effectController.height,
            this.effectController.tess,
            this.effectController.tess
        );
        this.shape[this.effectController.shape].morphAttributes.position = [];

        const positionAttribute = this.shape[this.effectController.shape].attributes.position;
        const spherePositions = [];
        const twistPositions = [];
        const direction = new THREE.Vector3(this.effectController.x, this.effectController.y, this.effectController.z);
        const vertex = new THREE.Vector3();

        for (let i = 0; i < positionAttribute.count; i++) {
            const x = positionAttribute.getX(i);
            const y = positionAttribute.getY(i);
            const z = positionAttribute.getZ(i);
            spherePositions.push(
                x * Math.sqrt(1 - (y * y / 2) - (z * z / 2) + (y * y * z * z / 3)),
                y * Math.sqrt(1 - (z * z / 2) - (x * x / 2) + (z * z * x * x / 3)),
                z * Math.sqrt(1 - (x * x / 2) - (y * y / 2) + (x * x * y * y / 3))
            );
            vertex.set(x, y * 2, z);
            vertex.applyAxisAngle(direction, Math.PI * y / 2).toArray(twistPositions, twistPositions.length);
        }

        this.shape[this.effectController.shape].morphAttributes.position[0] = new THREE.Float32BufferAttribute(spherePositions, 3);
        this.shape[this.effectController.shape].morphAttributes.position[1] = new THREE.Float32BufferAttribute(twistPositions, 3);

        return this.shape[this.effectController.shape];
    }

    disposeMesh() {
        if (this.mesh !== undefined) {
            this.mesh.geometry.dispose();
            this.scene.remove(this.mesh);
        }
    }

    renderCube() {
        this.disposeMesh();
        const geometry = this.buildMorphGeometry();
        this.mesh = new THREE.Mesh(geometry, this.mat[this.effectController.newShading]);
        this.mesh.morphTargetInfluences[0] = this.effectController.sphere;
        this.mesh.morphTargetInfluences[1] = this.effectController.torsion;
        this.addMeshToScene();
    }

    renderSphere() {
        this.disposeMesh();
        const geometry = this.buildMorphGeometry();
        this.mesh = new THREE.Mesh(geometry, this.mat[this.effectController.newShading]);
        this.mesh.morphTargetInfluences[0] = this.effectController.sphere;
        this.mesh.morphTargetInfluences[1] = this.effectController.torsion;
        this.addMeshToScene();
    }

    renderUploadedShape() {
        this.disposeMesh();
        const cube = new THREE.BoxGeometry(
            this.effectController.height,
            this.effectController.width,
            this.effectController.depth,
            this.effectController.tess,
            this.effectController.tess,
            this.effectController.tess
        );
        cube.morphAttributes.position = [];

        const positionAttribute = cube.attributes.position;
        const spherePositions = [];
        const twistPositions = [];
        const direction = new THREE.Vector3(0, 1, 0);
        const vertex = new THREE.Vector3();

        for (let i = 0; i < positionAttribute.count; i++) {
            const x = positionAttribute.getX(i);
            const y = positionAttribute.getY(i);
            const z = positionAttribute.getZ(i);
            spherePositions.push(
                x * Math.sqrt(1 - (y * y / 2) - (z * z / 2) + (y * y * z * z / 3)),
                y * Math.sqrt(1 - (z * z / 2) - (x * x / 2) + (z * z * x * x / 3)),
                z * Math.sqrt(1 - (x * x / 2) - (y * y / 2) + (x * x * y * y / 3))
            );
            vertex.set(x, y * 2, z);
            vertex.applyAxisAngle(direction, Math.PI * y / 2).toArray(twistPositions, twistPositions.length);
        }

        cube.morphAttributes.position[0] = new THREE.Float32BufferAttribute(spherePositions, 3);
        cube.morphAttributes.position[1] = new THREE.Float32BufferAttribute(twistPositions, 3);

        this.mat['wireframe'] = new THREE.MeshStandardMaterial({ wireframe: true });
        this.mat['flat'] = new THREE.MeshPhongMaterial({ specular: 0x000000, flatShading: true, side: THREE.DoubleSide });
        this.mat['smooth'] = new THREE.MeshLambertMaterial({ side: THREE.DoubleSide });
        this.mat['basic'] = new THREE.MeshBasicMaterial();

        this.mesh = new THREE.Mesh(cube, this.mat[this.effectController.newShading]);
        this.mesh.morphTargetInfluences[0] = this.effectController.sphere + this.morph0;
        this.mesh.morphTargetInfluences[1] = this.effectController.torsion + this.morph1;
        this.addMeshToScene();
    }

    addMeshToScene() {
        this.scene.add(this.mesh);
        this.mesh.material.color.set('grey');
        this.mesh.position.set(0, 1, 0);
        this.mesh.rotation.x = this.radianX;
        this.mesh.rotation.y = this.radianY;
        this.mesh.rotation.z = this.radianZ;
    }

    exportSTL() {
        const exporter = new STLExporter();
        const modifiedGeometry = applyMorphTargets(this.mesh.geometry, this.mesh.morphTargetInfluences);
        const result = exporter.parse(new THREE.Mesh(modifiedGeometry), { binary: true });
        saveArrayBuffer(result, `model-canal-${this.listenChannel}.stl`);
    }

    loadGLTFile(URL) {
        const loader = new GLTFLoader();
        this.effectController.shape = 'upload';

        loader.load(URL, (gltf) => {
            this.disposeMesh();
            this.mesh = gltf.scene.children[0];
            this.morph0 = this.mesh.morphTargetInfluences[0];
            this.morph1 = this.mesh.morphTargetInfluences[1];
            this.scene.add(this.mesh);
        }, undefined, (error) => {
            console.error(error);
        });
    }

    update(data) {
        const json = JSON.parse(data);

        if (json.newShading) this.effectController.newShading = json.newShading;
        if (json.tess) this.effectController.tess = json.tess;
        if (json.sphere) this.effectController.sphere = json.sphere;
        if (json.torsion) this.effectController.torsion = json.torsion;
        if (json.width) this.effectController.width = json.width;
        if (json.depth) this.effectController.depth = json.depth;
        if (json.height) this.effectController.height = json.height;
        if (json.shape) this.effectController.shape = json.shape;
        if (typeof json.x !== 'undefined') this.effectController.x = json.x;
        if (typeof json.y !== 'undefined') this.effectController.y = json.y;
        if (typeof json.z !== 'undefined') this.effectController.z = json.z;

        this.render();
    }

    setPanelVisible(visible) {
        if (this.gui) {
            this.gui.domElement.style.display = visible ? '' : 'none';
        }
    }
}

const viewers = [
    new Viewer3D(document.getElementById('viewer-75'), '75', 'Canal 75', true),
    new Viewer3D(document.getElementById('viewer-76'), '76', 'Canal 76', false)
];

function applyPanelLayout(panelLeft, panelRight, leftWidth, availableWidth) {
    const leftCollapsed = leftWidth <= 0;
    const rightCollapsed = leftWidth >= availableWidth;

    panelLeft.style.flex = `0 0 ${leftWidth}px`;
    panelRight.style.flex = '1 1 auto';
    panelLeft.classList.toggle('collapsed', leftCollapsed);
    panelRight.classList.toggle('collapsed', rightCollapsed);
    viewers[0].setPanelVisible(!leftCollapsed);
    viewers[1].setPanelVisible(!rightCollapsed);
}

function setupResizer(panelLeft, panelRight, resizer) {
    let isResizing = false;

    resizer.addEventListener('mousedown', (e) => {
        isResizing = true;
        resizer.classList.add('active');
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
        e.preventDefault();
    });

    resizer.addEventListener('dblclick', () => {
        const app = panelLeft.parentElement;
        const availableWidth = app.getBoundingClientRect().width - resizer.offsetWidth;
        applyPanelLayout(panelLeft, panelRight, availableWidth / 2, availableWidth);
        viewers.forEach((v) => v.onResize());
    });

    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;

        const app = panelLeft.parentElement;
        const appRect = app.getBoundingClientRect();
        const availableWidth = appRect.width - resizer.offsetWidth;
        const leftWidth = Math.max(0, Math.min(e.clientX - appRect.left, availableWidth));

        applyPanelLayout(panelLeft, panelRight, leftWidth, availableWidth);
    });

    document.addEventListener('mouseup', () => {
        if (!isResizing) return;
        isResizing = false;
        resizer.classList.remove('active');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        viewers.forEach((v) => v.onResize());
    });
}

setupResizer(
    document.getElementById('panel-left'),
    document.getElementById('panel-right'),
    document.getElementById('resizer')
);
