# Three.js Journey

## Installation en local :
Télécharger [Node.js](https://nodejs.org/en/download/).
effectué ces commandes dans le répertoire :

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```
Ensuite, une page devrait s'ouvrir, et vous devriez y voir un cube. Le websocket se connectera automatiquement si possible. Sinon, un pop-up apparaîtra pour vous informer que le websocket n'est pas connecté. Vous pourrez rafraîchir la page pour tenter de re-connecter le websocket.

## Resources :

[Documentation ThreeJs](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene).

[Exemples ThreeJs](https://threejs.org/examples/#webgl_animation_keyframes).

[Exemple de morph](https://threejs.org/examples/?q=mor#webgl_morphtargets). Cet exemple peut être modifié en rajoutant des modifications en s'inspirant du code.

## Déploiment GitPage :

Pour déployer le site sur Git Page, il faut rendre le repo public. Ensuite, il faut décommenter le code qui se trouve dans le fichier main.yml. Le site devrait se lancer, et vous pourrez suivre son avancement dans les Actions sur GitHub.

