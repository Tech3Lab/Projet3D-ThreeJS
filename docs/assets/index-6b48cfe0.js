(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vr="148",zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zl=0,ra=1,kl=2,Jo=1,Vl=2,Ri=3,mn=0,It=1,Qt=2,Yi=3,fn=0,ii=1,aa=2,oa=3,la=4,Hl=5,ti=100,Gl=101,Wl=102,ca=103,ha=104,Xl=200,$l=201,jl=202,ql=203,Qo=204,el=205,Yl=206,Kl=207,Zl=208,Jl=209,Ql=210,ec=0,tc=1,nc=2,Er=3,ic=4,sc=5,rc=6,ac=7,Cs=0,oc=1,lc=2,sn=0,cc=1,hc=2,uc=3,dc=4,fc=5,tl=300,ai=301,oi=302,Ar=303,Cr=304,Ls=306,li=1e3,Pt=1001,Ts=1002,at=1003,Lr=1004,Ms=1005,bt=1006,nl=1007,Pn=1008,Dn=1009,pc=1010,mc=1011,il=1012,gc=1013,En=1014,dn=1015,Oi=1016,_c=1017,xc=1018,si=1020,vc=1021,yc=1022,Dt=1023,bc=1024,Mc=1025,Cn=1026,ci=1027,Sc=1028,wc=1029,Tc=1030,Ec=1031,Ac=1033,Us=33776,Bs=33777,zs=33778,ks=33779,ua=35840,da=35841,fa=35842,pa=35843,Cc=36196,ma=37492,ga=37496,_a=37808,xa=37809,va=37810,ya=37811,ba=37812,Ma=37813,Sa=37814,wa=37815,Ta=37816,Ea=37817,Aa=37818,Ca=37819,La=37820,Ra=37821,Pa=36492,Ui=2300,hi=2301,Vs=2302,Da=2400,Ia=2401,Na=2402,Lc=2500,Rc=1,sl=2,In=3e3,ze=3001,Pc=3200,Dc=3201,Rs=0,Ic=1,kt="srgb",Bi="srgb-linear",Hs=7680,Nc=519,Rr=35044,Fa="300 es",Pr=1035;class Un{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oa=1234567;const Ii=Math.PI/180,zi=180/Math.PI;function Bt(){const l=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ht[l&255]+ht[l>>8&255]+ht[l>>16&255]+ht[l>>24&255]+"-"+ht[t&255]+ht[t>>8&255]+"-"+ht[t>>16&15|64]+ht[t>>24&255]+"-"+ht[n&63|128]+ht[n>>8&255]+"-"+ht[n>>16&255]+ht[n>>24&255]+ht[i&255]+ht[i>>8&255]+ht[i>>16&255]+ht[i>>24&255]).toLowerCase()}function ut(l,t,n){return Math.max(t,Math.min(n,l))}function Hr(l,t){return(l%t+t)%t}function Fc(l,t,n,i,s){return i+(l-t)*(s-i)/(n-t)}function Oc(l,t,n){return l!==t?(n-l)/(t-l):0}function Ni(l,t,n){return(1-n)*l+n*t}function Uc(l,t,n,i){return Ni(l,t,1-Math.exp(-n*i))}function Bc(l,t=1){return t-Math.abs(Hr(l,t*2)-t)}function zc(l,t,n){return l<=t?0:l>=n?1:(l=(l-t)/(n-t),l*l*(3-2*l))}function kc(l,t,n){return l<=t?0:l>=n?1:(l=(l-t)/(n-t),l*l*l*(l*(l*6-15)+10))}function Vc(l,t){return l+Math.floor(Math.random()*(t-l+1))}function Hc(l,t){return l+Math.random()*(t-l)}function Gc(l){return l*(.5-Math.random())}function Wc(l){l!==void 0&&(Oa=l);let t=Oa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xc(l){return l*Ii}function $c(l){return l*zi}function Dr(l){return(l&l-1)===0&&l!==0}function rl(l){return Math.pow(2,Math.ceil(Math.log(l)/Math.LN2))}function Es(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}function jc(l,t,n,i,s){const r=Math.cos,a=Math.sin,o=r(n/2),c=a(n/2),h=r((t+i)/2),u=a((t+i)/2),d=r((t-i)/2),f=a((t-i)/2),g=r((i-t)/2),x=a((i-t)/2);switch(s){case"XYX":l.set(o*u,c*d,c*f,o*h);break;case"YZY":l.set(c*f,o*u,c*d,o*h);break;case"ZXZ":l.set(c*d,c*f,o*u,o*h);break;case"XZX":l.set(o*u,c*x,c*g,o*h);break;case"YXY":l.set(c*g,o*u,c*x,o*h);break;case"ZYZ":l.set(c*x,c*g,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function tn(l,t){switch(t.constructor){case Float32Array:return l;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function Ge(l,t){switch(t.constructor){case Float32Array:return l;case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}var qc=Object.freeze({__proto__:null,DEG2RAD:Ii,RAD2DEG:zi,generateUUID:Bt,clamp:ut,euclideanModulo:Hr,mapLinear:Fc,inverseLerp:Oc,lerp:Ni,damp:Uc,pingpong:Bc,smoothstep:zc,smootherstep:kc,randInt:Vc,randFloat:Hc,randFloatSpread:Gc,seededRandom:Wc,degToRad:Xc,radToDeg:$c,isPowerOfTwo:Dr,ceilPowerOfTwo:rl,floorPowerOfTwo:Es,setQuaternionFromProperEuler:jc,normalize:Ge,denormalize:tn});class be{constructor(t=0,n=0){be.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Et{constructor(){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,n,i,s,r,a,o,c,h){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=n,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],c=i[6],h=i[1],u=i[4],d=i[7],f=i[2],g=i[5],x=i[8],m=s[0],p=s[3],_=s[6],S=s[1],y=s[4],T=s[7],b=s[2],L=s[5],D=s[8];return r[0]=a*m+o*S+c*b,r[3]=a*p+o*y+c*L,r[6]=a*_+o*T+c*D,r[1]=h*m+u*S+d*b,r[4]=h*p+u*y+d*L,r[7]=h*_+u*T+d*D,r[2]=f*m+g*S+x*b,r[5]=f*p+g*y+x*L,r[8]=f*_+g*T+x*D,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return n*a*u-n*o*h-i*r*u+i*o*c+s*r*h-s*a*c}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],d=u*a-o*h,f=o*c-u*r,g=h*r-a*c,x=n*d+i*f+s*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/x;return t[0]=d*m,t[1]=(s*h-u*i)*m,t[2]=(o*i-s*a)*m,t[3]=f*m,t[4]=(u*n-s*c)*m,t[5]=(s*r-o*n)*m,t[6]=g*m,t[7]=(i*c-h*n)*m,t[8]=(a*n-i*r)*m,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(i*c,i*h,-i*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Gs.makeScale(t,n)),this}rotate(t){return this.premultiply(Gs.makeRotation(-t)),this}translate(t,n){return this.premultiply(Gs.makeTranslation(t,n)),this}makeTranslation(t,n){return this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new Et;function al(l){for(let t=l.length-1;t>=0;--t)if(l[t]>=65535)return!0;return!1}function ki(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function Ln(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function Ss(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}const Ws={[kt]:{[Bi]:Ln},[Bi]:{[kt]:Ss}},mt={legacyMode:!0,get workingColorSpace(){return Bi},set workingColorSpace(l){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(l,t,n){if(this.legacyMode||t===n||!t||!n)return l;if(Ws[t]&&Ws[t][n]!==void 0){const i=Ws[t][n];return l.r=i(l.r),l.g=i(l.g),l.b=i(l.b),l}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(l,t){return this.convert(l,this.workingColorSpace,t)},toWorkingColorSpace:function(l,t){return this.convert(l,t,this.workingColorSpace)}},ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qe={r:0,g:0,b:0},Ft={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function Xs(l,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?l+(t-l)*6*n:n<1/2?t:n<2/3?l+(t-l)*6*(2/3-n):l}function Zi(l,t){return t.r=l.r,t.g=l.g,t.b=l.b,t}class Me{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(t):this.setRGB(t,n,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=kt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,mt.toWorkingColorSpace(this,n),this}setRGB(t,n,i,s=mt.workingColorSpace){return this.r=t,this.g=n,this.b=i,mt.toWorkingColorSpace(this,s),this}setHSL(t,n,i,s=mt.workingColorSpace){if(t=Hr(t,1),n=ut(n,0,1),i=ut(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=Xs(a,r,t+1/3),this.g=Xs(a,r,t),this.b=Xs(a,r,t-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(t,n=kt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,mt.toWorkingColorSpace(this,n),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,mt.toWorkingColorSpace(this,n),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const c=parseFloat(r[1])/360,h=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return i(r[4]),this.setHSL(c,h,u,n)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,mt.toWorkingColorSpace(this,n),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,mt.toWorkingColorSpace(this,n),this}return t&&t.length>0?this.setColorName(t,n):this}setColorName(t,n=kt){const i=ol[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=kt){return mt.fromWorkingColorSpace(Zi(this,Qe),t),ut(Qe.r*255,0,255)<<16^ut(Qe.g*255,0,255)<<8^ut(Qe.b*255,0,255)<<0}getHexString(t=kt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=mt.workingColorSpace){mt.fromWorkingColorSpace(Zi(this,Qe),n);const i=Qe.r,s=Qe.g,r=Qe.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,h;const u=(o+a)/2;if(o===a)c=0,h=0;else{const d=a-o;switch(h=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,n=mt.workingColorSpace){return mt.fromWorkingColorSpace(Zi(this,Qe),n),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=kt){return mt.fromWorkingColorSpace(Zi(this,Qe),t),t!==kt?`color(${t} ${Qe.r} ${Qe.g} ${Qe.b})`:`rgb(${Qe.r*255|0},${Qe.g*255|0},${Qe.b*255|0})`}offsetHSL(t,n,i){return this.getHSL(Ft),Ft.h+=t,Ft.s+=n,Ft.l+=i,this.setHSL(Ft.h,Ft.s,Ft.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ft),t.getHSL(Ki);const i=Ni(Ft.h,Ki.h,n),s=Ni(Ft.s,Ki.s,n),r=Ni(Ft.l,Ki.l,n);return this.setHSL(i,s,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Me.NAMES=ol;let Vn;class ll{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vn===void 0&&(Vn=ki("canvas")),Vn.width=t.width,Vn.height=t.height;const i=Vn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Vn}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=ki("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ln(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ln(n[i]/255)*255):n[i]=Ln(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class cl{constructor(t=null){this.isSource=!0,this.uuid=Bt(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($s(s[a].image)):r.push($s(s[a]))}else r=$s(s);i.url=r}return n||(t.images[this.uuid]=i),i}}function $s(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?ll.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yc=0;class lt extends Un{constructor(t=lt.DEFAULT_IMAGE,n=lt.DEFAULT_MAPPING,i=Pt,s=Pt,r=bt,a=Pn,o=Dt,c=Dn,h=lt.DEFAULT_ANISOTROPY,u=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Bt(),this.name="",this.source=new cl(t),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case li:t.x=t.x-Math.floor(t.x);break;case Pt:t.x=t.x<0?0:1;break;case Ts:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case li:t.y=t.y-Math.floor(t.y);break;case Pt:t.y=t.y<0?0:1;break;case Ts:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}lt.DEFAULT_IMAGE=null;lt.DEFAULT_MAPPING=tl;lt.DEFAULT_ANISOTROPY=1;class We{constructor(t=0,n=0,i=0,s=1){We.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r;const c=t.elements,h=c[0],u=c[4],d=c[8],f=c[1],g=c[5],x=c[9],m=c[2],p=c[6],_=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-m)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+m)<.1&&Math.abs(x+p)<.1&&Math.abs(h+g+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(h+1)/2,T=(g+1)/2,b=(_+1)/2,L=(u+f)/4,D=(d+m)/4,v=(x+p)/4;return y>T&&y>b?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=L/i,r=D/i):T>b?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=L/s,r=v/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=D/r,s=v/r),this.set(i,s,r,n),this}let S=Math.sqrt((p-x)*(p-x)+(d-m)*(d-m)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-x)/S,this.y=(d-m)/S,this.z=(f-u)/S,this.w=Math.acos((h+g+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nn extends Un{constructor(t=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new We(0,0,t,n),this.scissorTest=!1,this.viewport=new We(0,0,t,n);const s={width:t,height:n,depth:1};this.texture=new lt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:bt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,n,i=1){(this.width!==t||this.height!==n||this.depth!==i)&&(this.width=t,this.height=n,this.depth=i,this.texture.image.width=t,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new cl(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hl extends lt{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=at,this.minFilter=at,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kc extends lt{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=at,this.minFilter=at,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gt{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,a,o){let c=i[s+0],h=i[s+1],u=i[s+2],d=i[s+3];const f=r[a+0],g=r[a+1],x=r[a+2],m=r[a+3];if(o===0){t[n+0]=c,t[n+1]=h,t[n+2]=u,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=g,t[n+2]=x,t[n+3]=m;return}if(d!==m||c!==f||h!==g||u!==x){let p=1-o;const _=c*f+h*g+u*x+d*m,S=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const b=Math.sqrt(y),L=Math.atan2(b,_*S);p=Math.sin(p*L)/b,o=Math.sin(o*L)/b}const T=o*S;if(c=c*p+f*T,h=h*p+g*T,u=u*p+x*T,d=d*p+m*T,p===1-o){const b=1/Math.sqrt(c*c+h*h+u*u+d*d);c*=b,h*=b,u*=b,d*=b}}t[n]=c,t[n+1]=h,t[n+2]=u,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,r,a){const o=i[s],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a],f=r[a+1],g=r[a+2],x=r[a+3];return t[n]=o*x+u*d+c*g-h*f,t[n+1]=c*x+u*f+h*d-o*g,t[n+2]=h*x+u*g+o*f-c*d,t[n+3]=u*x-o*d-c*f-h*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(i/2),u=o(s/2),d=o(r/2),f=c(i/2),g=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=f*u*d+h*g*x,this._y=h*g*d-f*u*x,this._z=h*u*x+f*g*d,this._w=h*u*d-f*g*x;break;case"YXZ":this._x=f*u*d+h*g*x,this._y=h*g*d-f*u*x,this._z=h*u*x-f*g*d,this._w=h*u*d+f*g*x;break;case"ZXY":this._x=f*u*d-h*g*x,this._y=h*g*d+f*u*x,this._z=h*u*x+f*g*d,this._w=h*u*d-f*g*x;break;case"ZYX":this._x=f*u*d-h*g*x,this._y=h*g*d+f*u*x,this._z=h*u*x-f*g*d,this._w=h*u*d+f*g*x;break;case"YZX":this._x=f*u*d+h*g*x,this._y=h*g*d+f*u*x,this._z=h*u*x-f*g*d,this._w=h*u*d-f*g*x;break;case"XZY":this._x=f*u*d-h*g*x,this._y=h*g*d-f*u*x,this._z=h*u*x+f*g*d,this._w=h*u*d+f*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],c=n[9],h=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(u-c)*g,this._y=(r-h)*g,this._z=(a-s)*g}else if(i>o&&i>d){const g=2*Math.sqrt(1+i-o-d);this._w=(u-c)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+h)/g}else if(o>d){const g=2*Math.sqrt(1+o-i-d);this._w=(r-h)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+d-i-o);this._w=(a-s)/g,this._x=(r+h)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ut(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,s=t._y,r=t._z,a=t._w,o=n._x,c=n._y,h=n._z,u=n._w;return this._x=i*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-i*h,this._z=r*u+a*h+i*c-s*o,this._w=a*u-i*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*s+n*this._y,this._z=g*r+n*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(c),u=Math.atan2(h,o),d=Math.sin((1-n)*u)/h,f=Math.sin(n*u)/h;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=Math.random(),n=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(r),i*Math.cos(r),n*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,n=0,i=0){R.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Ua.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Ua.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const n=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=c*n+a*s-o*i,u=c*i+o*n-r*s,d=c*s+r*i-a*n,f=-r*n-a*i-o*s;return this.x=h*c+f*-r+u*-o-d*-a,this.y=u*c+f*-a+d*-r-h*-o,this.z=d*c+f*-o+h*-a-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,s=t.y,r=t.z,a=n.x,o=n.y,c=n.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return js.copy(this).projectOnVector(t),this.sub(js)}reflect(t){return this.sub(js.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(ut(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const js=new R,Ua=new Gt;class fi{constructor(t=new R(1/0,1/0,1/0),n=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){let n=1/0,i=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let c=0,h=t.length;c<h;c+=3){const u=t[c],d=t[c+1],f=t[c+2];u<n&&(n=u),d<i&&(i=d),f<s&&(s=f),u>r&&(r=u),d>a&&(a=d),f>o&&(o=f)}return this.min.set(n,i,s),this.max.set(r,a,o),this}setFromBufferAttribute(t){let n=1/0,i=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let c=0,h=t.count;c<h;c++){const u=t.getX(c),d=t.getY(c),f=t.getZ(c);u<n&&(n=u),d<i&&(i=d),f<s&&(s=f),u>r&&(r=u),d>a&&(a=d),f>o&&(o=f)}return this.min.set(n,i,s),this.max.set(r,a,o),this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=yn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)yn.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(yn)}else i.boundingBox===null&&i.computeBoundingBox(),qs.copy(i.boundingBox),qs.applyMatrix4(t.matrixWorld),this.union(qs);const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vi),Ji.subVectors(this.max,vi),Hn.subVectors(t.a,vi),Gn.subVectors(t.b,vi),Wn.subVectors(t.c,vi),rn.subVectors(Gn,Hn),an.subVectors(Wn,Gn),bn.subVectors(Hn,Wn);let n=[0,-rn.z,rn.y,0,-an.z,an.y,0,-bn.z,bn.y,rn.z,0,-rn.x,an.z,0,-an.x,bn.z,0,-bn.x,-rn.y,rn.x,0,-an.y,an.x,0,-bn.y,bn.x,0];return!Ys(n,Hn,Gn,Wn,Ji)||(n=[1,0,0,0,1,0,0,0,1],!Ys(n,Hn,Gn,Wn,Ji))?!1:(Qi.crossVectors(rn,an),n=[Qi.x,Qi.y,Qi.z],Ys(n,Hn,Gn,Wn,Ji))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return yn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jt),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const jt=[new R,new R,new R,new R,new R,new R,new R,new R],yn=new R,qs=new fi,Hn=new R,Gn=new R,Wn=new R,rn=new R,an=new R,bn=new R,vi=new R,Ji=new R,Qi=new R,Mn=new R;function Ys(l,t,n,i,s){for(let r=0,a=l.length-3;r<=a;r+=3){Mn.fromArray(l,r);const o=s.x*Math.abs(Mn.x)+s.y*Math.abs(Mn.y)+s.z*Math.abs(Mn.z),c=t.dot(Mn),h=n.dot(Mn),u=i.dot(Mn);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}const Zc=new fi,yi=new R,Ks=new R;class pi{constructor(t=new R,n=-1){this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):Zc.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yi.subVectors(t,this.center);const n=yi.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(yi,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yi.copy(t.center).add(Ks)),this.expandByPoint(yi.copy(t.center).sub(Ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qt=new R,Zs=new R,es=new R,on=new R,Js=new R,ts=new R,Qs=new R;class Gr{constructor(t=new R,n=new R(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qt)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=qt.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(qt.copy(this.direction).multiplyScalar(n).add(this.origin),qt.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Zs.copy(t).add(n).multiplyScalar(.5),es.copy(n).sub(t).normalize(),on.copy(this.origin).sub(Zs);const r=t.distanceTo(n)*.5,a=-this.direction.dot(es),o=on.dot(this.direction),c=-on.dot(es),h=on.lengthSq(),u=Math.abs(1-a*a);let d,f,g,x;if(u>0)if(d=a*c-o,f=a*o-c,x=r*u,d>=0)if(f>=-x)if(f<=x){const m=1/u;d*=m,f*=m,g=d*(d+a*f+2*o)+f*(a*d+f+2*c)+h}else f=r,d=Math.max(0,-(a*f+o)),g=-d*d+f*(f+2*c)+h;else f=-r,d=Math.max(0,-(a*f+o)),g=-d*d+f*(f+2*c)+h;else f<=-x?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),g=-d*d+f*(f+2*c)+h):f<=x?(d=0,f=Math.min(Math.max(-r,-c),r),g=f*(f+2*c)+h):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),g=-d*d+f*(f+2*c)+h);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),g=-d*d+f*(f+2*c)+h;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),s&&s.copy(es).multiplyScalar(f).add(Zs),g}intersectSphere(t,n){qt.subVectors(t.center,this.origin);const i=qt.dot(this.direction),s=qt.dot(qt)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return o<0&&c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,a,o,c;const h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,qt)!==null}intersectTriangle(t,n,i,s,r){Js.subVectors(n,t),ts.subVectors(i,t),Qs.crossVectors(Js,ts);let a=this.direction.dot(Qs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;on.subVectors(this.origin,t);const c=o*this.direction.dot(ts.crossVectors(on,ts));if(c<0)return null;const h=o*this.direction.dot(Js.cross(on));if(h<0||c+h>a)return null;const u=-o*on.dot(Qs);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,n,i,s,r,a,o,c,h,u,d,f,g,x,m,p){const _=this.elements;return _[0]=t,_[4]=n,_[8]=i,_[12]=s,_[1]=r,_[5]=a,_[9]=o,_[13]=c,_[2]=h,_[6]=u,_[10]=d,_[14]=f,_[3]=g,_[7]=x,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,s=1/Xn.setFromMatrixColumn(t,0).length(),r=1/Xn.setFromMatrixColumn(t,1).length(),a=1/Xn.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*u,g=a*d,x=o*u,m=o*d;n[0]=c*u,n[4]=-c*d,n[8]=h,n[1]=g+x*h,n[5]=f-m*h,n[9]=-o*c,n[2]=m-f*h,n[6]=x+g*h,n[10]=a*c}else if(t.order==="YXZ"){const f=c*u,g=c*d,x=h*u,m=h*d;n[0]=f+m*o,n[4]=x*o-g,n[8]=a*h,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=g*o-x,n[6]=m+f*o,n[10]=a*c}else if(t.order==="ZXY"){const f=c*u,g=c*d,x=h*u,m=h*d;n[0]=f-m*o,n[4]=-a*d,n[8]=x+g*o,n[1]=g+x*o,n[5]=a*u,n[9]=m-f*o,n[2]=-a*h,n[6]=o,n[10]=a*c}else if(t.order==="ZYX"){const f=a*u,g=a*d,x=o*u,m=o*d;n[0]=c*u,n[4]=x*h-g,n[8]=f*h+m,n[1]=c*d,n[5]=m*h+f,n[9]=g*h-x,n[2]=-h,n[6]=o*c,n[10]=a*c}else if(t.order==="YZX"){const f=a*c,g=a*h,x=o*c,m=o*h;n[0]=c*u,n[4]=m-f*d,n[8]=x*d+g,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-h*u,n[6]=g*d+x,n[10]=f-m*d}else if(t.order==="XZY"){const f=a*c,g=a*h,x=o*c,m=o*h;n[0]=c*u,n[4]=-d,n[8]=h*u,n[1]=f*d+m,n[5]=a*u,n[9]=g*d-x,n[2]=x*d-g,n[6]=o*u,n[10]=m*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jc,t,Qc)}lookAt(t,n,i){const s=this.elements;return wt.subVectors(t,n),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),ln.crossVectors(i,wt),ln.lengthSq()===0&&(Math.abs(i.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),ln.crossVectors(i,wt)),ln.normalize(),ns.crossVectors(wt,ln),s[0]=ln.x,s[4]=ns.x,s[8]=wt.x,s[1]=ln.y,s[5]=ns.y,s[9]=wt.y,s[2]=ln.z,s[6]=ns.z,s[10]=wt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],c=i[8],h=i[12],u=i[1],d=i[5],f=i[9],g=i[13],x=i[2],m=i[6],p=i[10],_=i[14],S=i[3],y=i[7],T=i[11],b=i[15],L=s[0],D=s[4],v=s[8],C=s[12],U=s[1],q=s[5],te=s[9],I=s[13],N=s[2],H=s[6],Y=s[10],K=s[14],j=s[3],ie=s[7],Q=s[11],z=s[15];return r[0]=a*L+o*U+c*N+h*j,r[4]=a*D+o*q+c*H+h*ie,r[8]=a*v+o*te+c*Y+h*Q,r[12]=a*C+o*I+c*K+h*z,r[1]=u*L+d*U+f*N+g*j,r[5]=u*D+d*q+f*H+g*ie,r[9]=u*v+d*te+f*Y+g*Q,r[13]=u*C+d*I+f*K+g*z,r[2]=x*L+m*U+p*N+_*j,r[6]=x*D+m*q+p*H+_*ie,r[10]=x*v+m*te+p*Y+_*Q,r[14]=x*C+m*I+p*K+_*z,r[3]=S*L+y*U+T*N+b*j,r[7]=S*D+y*q+T*H+b*ie,r[11]=S*v+y*te+T*Y+b*Q,r[15]=S*C+y*I+T*K+b*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],u=t[2],d=t[6],f=t[10],g=t[14],x=t[3],m=t[7],p=t[11],_=t[15];return x*(+r*c*d-s*h*d-r*o*f+i*h*f+s*o*g-i*c*g)+m*(+n*c*g-n*h*f+r*a*f-s*a*g+s*h*u-r*c*u)+p*(+n*h*d-n*o*g-r*a*d+i*a*g+r*o*u-i*h*u)+_*(-s*o*u-n*c*d+n*o*f+s*a*d-i*a*f+i*c*u)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],d=t[9],f=t[10],g=t[11],x=t[12],m=t[13],p=t[14],_=t[15],S=d*p*h-m*f*h+m*c*g-o*p*g-d*c*_+o*f*_,y=x*f*h-u*p*h-x*c*g+a*p*g+u*c*_-a*f*_,T=u*m*h-x*d*h+x*o*g-a*m*g-u*o*_+a*d*_,b=x*d*c-u*m*c-x*o*f+a*m*f+u*o*p-a*d*p,L=n*S+i*y+s*T+r*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return t[0]=S*D,t[1]=(m*f*r-d*p*r-m*s*g+i*p*g+d*s*_-i*f*_)*D,t[2]=(o*p*r-m*c*r+m*s*h-i*p*h-o*s*_+i*c*_)*D,t[3]=(d*c*r-o*f*r-d*s*h+i*f*h+o*s*g-i*c*g)*D,t[4]=y*D,t[5]=(u*p*r-x*f*r+x*s*g-n*p*g-u*s*_+n*f*_)*D,t[6]=(x*c*r-a*p*r-x*s*h+n*p*h+a*s*_-n*c*_)*D,t[7]=(a*f*r-u*c*r+u*s*h-n*f*h-a*s*g+n*c*g)*D,t[8]=T*D,t[9]=(x*d*r-u*m*r-x*i*g+n*m*g+u*i*_-n*d*_)*D,t[10]=(a*m*r-x*o*r+x*i*h-n*m*h-a*i*_+n*o*_)*D,t[11]=(u*o*r-a*d*r-u*i*h+n*d*h+a*i*g-n*o*g)*D,t[12]=b*D,t[13]=(u*m*s-x*d*s+x*i*f-n*m*f-u*i*p+n*d*p)*D,t[14]=(x*o*s-a*m*s-x*i*c+n*m*c+a*i*p-n*o*p)*D,t[15]=(a*d*s-u*o*s+u*i*c-n*d*c-a*i*f+n*o*f)*D,this}scale(t){const n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,a=t.x,o=t.y,c=t.z,h=r*a,u=r*o;return this.set(h*a+i,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+i,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){const s=this.elements,r=n._x,a=n._y,o=n._z,c=n._w,h=r+r,u=a+a,d=o+o,f=r*h,g=r*u,x=r*d,m=a*u,p=a*d,_=o*d,S=c*h,y=c*u,T=c*d,b=i.x,L=i.y,D=i.z;return s[0]=(1-(m+_))*b,s[1]=(g+T)*b,s[2]=(x-y)*b,s[3]=0,s[4]=(g-T)*L,s[5]=(1-(f+_))*L,s[6]=(p+S)*L,s[7]=0,s[8]=(x+y)*D,s[9]=(p-S)*D,s[10]=(1-(f+m))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){const s=this.elements;let r=Xn.set(s[0],s[1],s[2]).length();const a=Xn.set(s[4],s[5],s[6]).length(),o=Xn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ot.copy(this);const h=1/r,u=1/a,d=1/o;return Ot.elements[0]*=h,Ot.elements[1]*=h,Ot.elements[2]*=h,Ot.elements[4]*=u,Ot.elements[5]*=u,Ot.elements[6]*=u,Ot.elements[8]*=d,Ot.elements[9]*=d,Ot.elements[10]*=d,n.setFromRotationMatrix(Ot),i.x=r,i.y=a,i.z=o,this}makePerspective(t,n,i,s,r,a){const o=this.elements,c=2*r/(n-t),h=2*r/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),f=-(a+r)/(a-r),g=-2*a*r/(a-r);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=h,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,n,i,s,r,a){const o=this.elements,c=1/(n-t),h=1/(i-s),u=1/(a-r),d=(n+t)*c,f=(i+s)*h,g=(a+r)*u;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*h,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Xn=new R,Ot=new Ce,Jc=new R(0,0,0),Qc=new R(1,1,1),ln=new R,ns=new R,wt=new R,Ba=new Ce,za=new Gt;class $i{constructor(t=0,n=0,i=0,s=$i.DefaultOrder){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],d=s[2],f=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Ba.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ba,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return za.setFromEuler(this),this.setFromQuaternion(za,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}$i.DefaultOrder="XYZ";$i.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ul{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eh=0;const ka=new R,$n=new Gt,Yt=new Ce,is=new R,bi=new R,th=new R,nh=new Gt,Va=new R(1,0,0),Ha=new R(0,1,0),Ga=new R(0,0,1),ih={type:"added"},Wa={type:"removed"};class $e extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Bt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DefaultUp.clone();const t=new R,n=new $i,i=new Gt,s=new R(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Et}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=$e.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=$e.DefaultMatrixWorldAutoUpdate,this.layers=new ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return $n.setFromAxisAngle(t,n),this.quaternion.multiply($n),this}rotateOnWorldAxis(t,n){return $n.setFromAxisAngle(t,n),this.quaternion.premultiply($n),this}rotateX(t){return this.rotateOnAxis(Va,t)}rotateY(t){return this.rotateOnAxis(Ha,t)}rotateZ(t){return this.rotateOnAxis(Ga,t)}translateOnAxis(t,n){return ka.copy(t).applyQuaternion(this.quaternion),this.position.add(ka.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Va,t)}translateY(t){return this.translateOnAxis(Ha,t)}translateZ(t){return this.translateOnAxis(Ga,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yt.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?is.copy(t):is.set(t,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yt.lookAt(bi,is,this.up):Yt.lookAt(is,bi,this.up),this.quaternion.setFromRotationMatrix(Yt),s&&(Yt.extractRotation(s.matrixWorld),$n.setFromRotationMatrix(Yt),this.quaternion.premultiply($n.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ih)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Wa)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const n=this.children[t];n.parent=null,n.dispatchEvent(Wa)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Yt.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yt.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yt),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n){let i=[];this[t]===n&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(t,n);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,t,th),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,nh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const r=n[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const d=c[h];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(n){const o=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),g=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){const c=[];for(const h in o){const u=o[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}$e.DefaultUp=new R(0,1,0);$e.DefaultMatrixAutoUpdate=!0;$e.DefaultMatrixWorldAutoUpdate=!0;const Ut=new R,Kt=new R,er=new R,Zt=new R,jn=new R,qn=new R,Xa=new R,tr=new R,nr=new R,ir=new R;class en{constructor(t=new R,n=new R,i=new R){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Ut.subVectors(t,n),s.cross(Ut);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){Ut.subVectors(s,n),Kt.subVectors(i,n),er.subVectors(t,n);const a=Ut.dot(Ut),o=Ut.dot(Kt),c=Ut.dot(er),h=Kt.dot(Kt),u=Kt.dot(er),d=a*h-o*o;if(d===0)return r.set(-2,-1,-1);const f=1/d,g=(h*c-o*u)*f,x=(a*u-o*c)*f;return r.set(1-g-x,x,g)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Zt),Zt.x>=0&&Zt.y>=0&&Zt.x+Zt.y<=1}static getUV(t,n,i,s,r,a,o,c){return this.getBarycoord(t,n,i,s,Zt),c.set(0,0),c.addScaledVector(r,Zt.x),c.addScaledVector(a,Zt.y),c.addScaledVector(o,Zt.z),c}static isFrontFacing(t,n,i,s){return Ut.subVectors(i,n),Kt.subVectors(t,n),Ut.cross(Kt).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ut.subVectors(this.c,this.b),Kt.subVectors(this.a,this.b),Ut.cross(Kt).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return en.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,i,s,r){return en.getUV(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,s=this.b,r=this.c;let a,o;jn.subVectors(s,i),qn.subVectors(r,i),tr.subVectors(t,i);const c=jn.dot(tr),h=qn.dot(tr);if(c<=0&&h<=0)return n.copy(i);nr.subVectors(t,s);const u=jn.dot(nr),d=qn.dot(nr);if(u>=0&&d<=u)return n.copy(s);const f=c*d-u*h;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),n.copy(i).addScaledVector(jn,a);ir.subVectors(t,r);const g=jn.dot(ir),x=qn.dot(ir);if(x>=0&&g<=x)return n.copy(r);const m=g*h-c*x;if(m<=0&&h>=0&&x<=0)return o=h/(h-x),n.copy(i).addScaledVector(qn,o);const p=u*x-g*d;if(p<=0&&d-u>=0&&g-x>=0)return Xa.subVectors(r,s),o=(d-u)/(d-u+(g-x)),n.copy(s).addScaledVector(Xa,o);const _=1/(p+m+f);return a=m*_,o=f*_,n.copy(i).addScaledVector(jn,a).addScaledVector(qn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let sh=0;class Nt extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Bt(),this.name="",this.type="Material",this.blending=ii,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Qo,this.blendDst=el,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const s=this[n];if(s===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(i.blending=this.blending),this.side!==mn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(n){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class nn extends Nt{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ke=new R,ss=new be;class vt{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Rr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ss.fromBufferAttribute(this,n),ss.applyMatrix3(t),this.setXY(n,ss.x,ss.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ke.fromBufferAttribute(this,n),Ke.applyMatrix3(t),this.setXYZ(n,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ke.fromBufferAttribute(this,n),Ke.applyMatrix4(t),this.setXYZ(n,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ke.fromBufferAttribute(this,n),Ke.applyNormalMatrix(t),this.setXYZ(n,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ke.fromBufferAttribute(this,n),Ke.transformDirection(t),this.setXYZ(n,Ke.x,Ke.y,Ke.z);return this}set(t,n=0){return this.array.set(t,n),this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=tn(n,this.array)),n}setX(t,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=tn(n,this.array)),n}setY(t,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=tn(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=tn(n,this.array)),n}setW(t,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Ge(n,this.array),i=Ge(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Ge(n,this.array),i=Ge(i,this.array),s=Ge(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=Ge(n,this.array),i=Ge(i,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rr&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class dl extends vt{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class fl extends vt{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class dt extends vt{constructor(t,n,i){super(new Float32Array(t),n,i)}}let rh=0;const Lt=new Ce,sr=new $e,Yn=new R,Tt=new fi,Mi=new fi,rt=new R;class zt extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Bt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(al(t)?fl:dl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Et().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Lt.makeRotationFromQuaternion(t),this.applyMatrix4(Lt),this}rotateX(t){return Lt.makeRotationX(t),this.applyMatrix4(Lt),this}rotateY(t){return Lt.makeRotationY(t),this.applyMatrix4(Lt),this}rotateZ(t){return Lt.makeRotationZ(t),this.applyMatrix4(Lt),this}translate(t,n,i){return Lt.makeTranslation(t,n,i),this.applyMatrix4(Lt),this}scale(t,n,i){return Lt.makeScale(t,n,i),this.applyMatrix4(Lt),this}lookAt(t){return sr.lookAt(t),sr.updateMatrix(),this.applyMatrix4(sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yn).negate(),this.translate(Yn.x,Yn.y,Yn.z),this}setFromPoints(t){const n=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Tt.setFromBufferAttribute(r),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,Tt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,Tt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(Tt.min),this.boundingBox.expandByPoint(Tt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){const i=this.boundingSphere.center;if(Tt.setFromBufferAttribute(t),n)for(let r=0,a=n.length;r<a;r++){const o=n[r];Mi.setFromBufferAttribute(o),this.morphTargetsRelative?(rt.addVectors(Tt.min,Mi.min),Tt.expandByPoint(rt),rt.addVectors(Tt.max,Mi.max),Tt.expandByPoint(rt)):(Tt.expandByPoint(Mi.min),Tt.expandByPoint(Mi.max))}Tt.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)rt.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(rt));if(n)for(let r=0,a=n.length;r<a;r++){const o=n[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)rt.fromBufferAttribute(o,h),c&&(Yn.fromBufferAttribute(t,h),rt.add(Yn)),s=Math.max(s,i.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=n.position.array,r=n.normal.array,a=n.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,h=[],u=[];for(let U=0;U<o;U++)h[U]=new R,u[U]=new R;const d=new R,f=new R,g=new R,x=new be,m=new be,p=new be,_=new R,S=new R;function y(U,q,te){d.fromArray(s,U*3),f.fromArray(s,q*3),g.fromArray(s,te*3),x.fromArray(a,U*2),m.fromArray(a,q*2),p.fromArray(a,te*2),f.sub(d),g.sub(d),m.sub(x),p.sub(x);const I=1/(m.x*p.y-p.x*m.y);isFinite(I)&&(_.copy(f).multiplyScalar(p.y).addScaledVector(g,-m.y).multiplyScalar(I),S.copy(g).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(I),h[U].add(_),h[q].add(_),h[te].add(_),u[U].add(S),u[q].add(S),u[te].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let U=0,q=T.length;U<q;++U){const te=T[U],I=te.start,N=te.count;for(let H=I,Y=I+N;H<Y;H+=3)y(i[H+0],i[H+1],i[H+2])}const b=new R,L=new R,D=new R,v=new R;function C(U){D.fromArray(r,U*3),v.copy(D);const q=h[U];b.copy(q),b.sub(D.multiplyScalar(D.dot(q))).normalize(),L.crossVectors(v,q);const I=L.dot(u[U])<0?-1:1;c[U*4]=b.x,c[U*4+1]=b.y,c[U*4+2]=b.z,c[U*4+3]=I}for(let U=0,q=T.length;U<q;++U){const te=T[U],I=te.start,N=te.count;for(let H=I,Y=I+N;H<Y;H+=3)C(i[H+0]),C(i[H+1]),C(i[H+2])}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const s=new R,r=new R,a=new R,o=new R,c=new R,h=new R,u=new R,d=new R;if(t)for(let f=0,g=t.count;f<g;f+=3){const x=t.getX(f+0),m=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),a.fromBufferAttribute(n,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),h.fromBufferAttribute(i,p),o.add(u),c.add(u),h.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(m,c.x,c.y,c.z),i.setXYZ(p,h.x,h.y,h.z)}else for(let f=0,g=n.count;f<g;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)rt.fromBufferAttribute(t,n),rt.normalize(),t.setXYZ(n,rt.x,rt.y,rt.z)}toNonIndexed(){function t(o,c){const h=o.array,u=o.itemSize,d=o.normalized,f=new h.constructor(c.length*u);let g=0,x=0;for(let m=0,p=c.length;m<p;m++){o.isInterleavedBufferAttribute?g=c[m]*o.data.stride+o.offset:g=c[m]*u;for(let _=0;_<u;_++)f[x++]=h[g++]}return new vt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zt,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],h=t(c,i);n.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let u=0,d=h.length;u<d;u++){const f=h[u],g=t(f,i);c.push(g)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const h=i[c];t.data.attributes[c]=h.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let d=0,f=h.length;d<f;d++){const g=h[d];u.push(g.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const s=t.attributes;for(const h in s){const u=s[h];this.setAttribute(h,u.clone(n))}const r=t.morphAttributes;for(const h in r){const u=[],d=r[h];for(let f=0,g=d.length;f<g;f++)u.push(d[f].clone(n));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,u=a.length;h<u;h++){const d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const $a=new Ce,Kn=new Gr,rr=new pi,Si=new R,wi=new R,Ti=new R,ar=new R,rs=new R,as=new be,os=new be,ls=new be,or=new R,cs=new R;class ot extends $e{constructor(t=new zt,n=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){rs.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const u=o[c],d=r[c];u!==0&&(ar.fromBufferAttribute(d,t),a?rs.addScaledVector(ar,u):rs.addScaledVector(ar.sub(n),u))}n.add(rs)}return this.isSkinnedMesh&&this.boneTransform(t,n),n}raycast(t,n){const i=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere),rr.applyMatrix4(r),t.ray.intersectsSphere(rr)===!1)||($a.copy(r).invert(),Kn.copy(t.ray).applyMatrix4($a),i.boundingBox!==null&&Kn.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,c=i.attributes.position,h=i.attributes.uv,u=i.attributes.uv2,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=s[m.materialIndex],_=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,T=S;y<T;y+=3){const b=o.getX(y),L=o.getX(y+1),D=o.getX(y+2);a=hs(this,p,t,Kn,h,u,b,L,D),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const _=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);a=hs(this,s,t,Kn,h,u,_,S,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=s[m.materialIndex],_=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,T=S;y<T;y+=3){const b=y,L=y+1,D=y+2;a=hs(this,p,t,Kn,h,u,b,L,D),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const _=m,S=m+1,y=m+2;a=hs(this,s,t,Kn,h,u,_,S,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function ah(l,t,n,i,s,r,a,o){let c;if(t.side===It?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===mn,o),c===null)return null;cs.copy(o),cs.applyMatrix4(l.matrixWorld);const h=n.ray.origin.distanceTo(cs);return h<n.near||h>n.far?null:{distance:h,point:cs.clone(),object:l}}function hs(l,t,n,i,s,r,a,o,c){l.getVertexPosition(a,Si),l.getVertexPosition(o,wi),l.getVertexPosition(c,Ti);const h=ah(l,t,n,i,Si,wi,Ti,or);if(h){s&&(as.fromBufferAttribute(s,a),os.fromBufferAttribute(s,o),ls.fromBufferAttribute(s,c),h.uv=en.getUV(or,Si,wi,Ti,as,os,ls,new be)),r&&(as.fromBufferAttribute(r,a),os.fromBufferAttribute(r,o),ls.fromBufferAttribute(r,c),h.uv2=en.getUV(or,Si,wi,Ti,as,os,ls,new be));const u={a,b:o,c,normal:new R,materialIndex:0};en.getNormal(Si,wi,Ti,u.normal),h.face=u}return h}class pn extends zt{constructor(t=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],u=[],d=[];let f=0,g=0;x("z","y","x",-1,-1,i,n,t,a,r,0),x("z","y","x",1,-1,i,n,-t,a,r,1),x("x","z","y",1,1,t,i,n,s,a,2),x("x","z","y",1,-1,t,i,-n,s,a,3),x("x","y","z",1,-1,t,n,i,s,r,4),x("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function x(m,p,_,S,y,T,b,L,D,v,C){const U=T/D,q=b/v,te=T/2,I=b/2,N=L/2,H=D+1,Y=v+1;let K=0,j=0;const ie=new R;for(let Q=0;Q<Y;Q++){const z=Q*q-I;for(let W=0;W<H;W++){const J=W*U-te;ie[m]=J*S,ie[p]=z*y,ie[_]=N,h.push(ie.x,ie.y,ie.z),ie[m]=0,ie[p]=0,ie[_]=L>0?1:-1,u.push(ie.x,ie.y,ie.z),d.push(W/D),d.push(1-Q/v),K+=1}}for(let Q=0;Q<v;Q++)for(let z=0;z<D;z++){const W=f+z+H*Q,J=f+z+H*(Q+1),ne=f+(z+1)+H*(Q+1),ae=f+(z+1)+H*Q;c.push(W,J,ae),c.push(J,ne,ae),j+=6}o.addGroup(g,j,C),g+=j,f+=K}}static fromJSON(t){return new pn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ui(l){const t={};for(const n in l){t[n]={};for(const i in l[n]){const s=l[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function _t(l){const t={};for(let n=0;n<l.length;n++){const i=ui(l[n]);for(const s in i)t[s]=i[s]}return t}function oh(l){const t=[];for(let n=0;n<l.length;n++)t.push(l[n].clone());return t}function pl(l){return l.getRenderTarget()===null&&l.outputEncoding===ze?kt:Bi}const lh={clone:ui,merge:_t};var ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Nt{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ch,this.fragmentShader=hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ui(t.uniforms),this.uniformsGroups=oh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ml extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class xt extends ml{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=zi*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ii*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zi*2*Math.atan(Math.tan(Ii*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,n,i,s,r,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Ii*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,n-=a.offsetY*i/h,s*=a.width/c,i*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Zn=-90,Jn=1;class uh extends $e{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new xt(Zn,Jn,t,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new xt(Zn,Jn,t,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new xt(Zn,Jn,t,n);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new xt(Zn,Jn,t,n);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new xt(Zn,Jn,t,n);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const h=new xt(Zn,Jn,t,n);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(t,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,a,o,c,h]=this.children,u=t.getRenderTarget(),d=t.toneMapping,f=t.xr.enabled;t.toneMapping=sn,t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(n,s),t.setRenderTarget(i,1),t.render(n,r),t.setRenderTarget(i,2),t.render(n,a),t.setRenderTarget(i,3),t.render(n,o),t.setRenderTarget(i,4),t.render(n,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5),t.render(n,h),t.setRenderTarget(u),t.toneMapping=d,t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class gl extends lt{constructor(t,n,i,s,r,a,o,c,h,u){t=t!==void 0?t:[],n=n!==void 0?n:ai,super(t,n,i,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dh extends Nn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new gl(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bt}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new pn(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:ui(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:fn});r.uniforms.tEquirect.value=n;const a=new ot(s,r),o=n.minFilter;return n.minFilter===Pn&&(n.minFilter=bt),new uh(1,10,this).update(t,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,n,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,s);t.setRenderTarget(r)}}const lr=new R,fh=new R,ph=new Et;class Sn{constructor(t=new R(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const s=lr.subVectors(i,n).cross(fh.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,n){const i=t.delta(lr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(i).multiplyScalar(r).add(t.start)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||ph.getNormalMatrix(t),s=this.coplanarPoint(lr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new pi,us=new R;class Wr{constructor(t=new Sn,n=new Sn,i=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[t,n,i,s,r,a]}set(t,n,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const n=this.planes,i=t.elements,s=i[0],r=i[1],a=i[2],o=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],_=i[13],S=i[14],y=i[15];return n[0].setComponents(o-s,d-c,m-f,y-p).normalize(),n[1].setComponents(o+s,d+c,m+f,y+p).normalize(),n[2].setComponents(o+r,d+h,m+g,y+_).normalize(),n[3].setComponents(o-r,d-h,m-g,y-_).normalize(),n[4].setComponents(o-a,d-u,m-x,y-S).normalize(),n[5].setComponents(o+a,d+u,m+x,y+S).normalize(),this}intersectsObject(t){const n=t.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Qn.copy(n.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSprite(t){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){const n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(us.x=s.normal.x>0?t.max.x:t.min.x,us.y=s.normal.y>0?t.max.y:t.min.y,us.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(us)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _l(){let l=null,t=!1,n=null,i=null;function s(r,a){n(r,a),i=l.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=l.requestAnimationFrame(s),t=!0)},stop:function(){l.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){l=r}}}function mh(l,t){const n=t.isWebGL2,i=new WeakMap;function s(h,u){const d=h.array,f=h.usage,g=l.createBuffer();l.bindBuffer(u,g),l.bufferData(u,d,f),h.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(n)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version}}function r(h,u,d){const f=u.array,g=u.updateRange;l.bindBuffer(d,h),g.count===-1?l.bufferSubData(d,0,f):(n?l.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):l.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=i.get(h);u&&(l.deleteBuffer(u.buffer),i.delete(h))}function c(h,u){if(h.isGLBufferAttribute){const f=i.get(h);(!f||f.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const d=i.get(h);d===void 0?i.set(h,s(h,u)):d.version<h.version&&(r(d.buffer,h,u),d.version=h.version)}return{get:a,remove:o,update:c}}class Xr extends zt{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};const r=t/2,a=n/2,o=Math.floor(i),c=Math.floor(s),h=o+1,u=c+1,d=t/o,f=n/c,g=[],x=[],m=[],p=[];for(let _=0;_<u;_++){const S=_*f-a;for(let y=0;y<h;y++){const T=y*d-r;x.push(T,-S,0),m.push(0,0,1),p.push(y/o),p.push(1-_/c)}}for(let _=0;_<c;_++)for(let S=0;S<o;S++){const y=S+h*_,T=S+h*(_+1),b=S+1+h*(_+1),L=S+1+h*_;g.push(y,T,L),g.push(T,b,L)}this.setIndex(g),this.setAttribute("position",new dt(x,3)),this.setAttribute("normal",new dt(m,3)),this.setAttribute("uv",new dt(p,2))}static fromJSON(t){return new Xr(t.width,t.height,t.widthSegments,t.heightSegments)}}var gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,_h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mh="vec3 transformed = vec3( position );",Sh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Th=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Eh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Oh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,kh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$h=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,su=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ru=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,au=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ou=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,uu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,du=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,mu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_u=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Su=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Au=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Cu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Lu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ru=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Fu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ou=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Uu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Bu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ku=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$u=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ju=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,qu=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yu=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Ku=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ju=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Qu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ed=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,td=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,id=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,ad=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,od=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ld=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,cd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,hd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ud=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,dd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,md=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_d=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Md=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Td=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ed=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ad=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ld=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Id=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Od=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ud=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,$d=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Te={alphamap_fragment:gh,alphamap_pars_fragment:_h,alphatest_fragment:xh,alphatest_pars_fragment:vh,aomap_fragment:yh,aomap_pars_fragment:bh,begin_vertex:Mh,beginnormal_vertex:Sh,bsdfs:wh,iridescence_fragment:Th,bumpmap_pars_fragment:Eh,clipping_planes_fragment:Ah,clipping_planes_pars_fragment:Ch,clipping_planes_pars_vertex:Lh,clipping_planes_vertex:Rh,color_fragment:Ph,color_pars_fragment:Dh,color_pars_vertex:Ih,color_vertex:Nh,common:Fh,cube_uv_reflection_fragment:Oh,defaultnormal_vertex:Uh,displacementmap_pars_vertex:Bh,displacementmap_vertex:zh,emissivemap_fragment:kh,emissivemap_pars_fragment:Vh,encodings_fragment:Hh,encodings_pars_fragment:Gh,envmap_fragment:Wh,envmap_common_pars_fragment:Xh,envmap_pars_fragment:$h,envmap_pars_vertex:jh,envmap_physical_pars_fragment:ru,envmap_vertex:qh,fog_vertex:Yh,fog_pars_vertex:Kh,fog_fragment:Zh,fog_pars_fragment:Jh,gradientmap_pars_fragment:Qh,lightmap_fragment:eu,lightmap_pars_fragment:tu,lights_lambert_fragment:nu,lights_lambert_pars_fragment:iu,lights_pars_begin:su,lights_toon_fragment:au,lights_toon_pars_fragment:ou,lights_phong_fragment:lu,lights_phong_pars_fragment:cu,lights_physical_fragment:hu,lights_physical_pars_fragment:uu,lights_fragment_begin:du,lights_fragment_maps:fu,lights_fragment_end:pu,logdepthbuf_fragment:mu,logdepthbuf_pars_fragment:gu,logdepthbuf_pars_vertex:_u,logdepthbuf_vertex:xu,map_fragment:vu,map_pars_fragment:yu,map_particle_fragment:bu,map_particle_pars_fragment:Mu,metalnessmap_fragment:Su,metalnessmap_pars_fragment:wu,morphcolor_vertex:Tu,morphnormal_vertex:Eu,morphtarget_pars_vertex:Au,morphtarget_vertex:Cu,normal_fragment_begin:Lu,normal_fragment_maps:Ru,normal_pars_fragment:Pu,normal_pars_vertex:Du,normal_vertex:Iu,normalmap_pars_fragment:Nu,clearcoat_normal_fragment_begin:Fu,clearcoat_normal_fragment_maps:Ou,clearcoat_pars_fragment:Uu,iridescence_pars_fragment:Bu,output_fragment:zu,packing:ku,premultiplied_alpha_fragment:Vu,project_vertex:Hu,dithering_fragment:Gu,dithering_pars_fragment:Wu,roughnessmap_fragment:Xu,roughnessmap_pars_fragment:$u,shadowmap_pars_fragment:ju,shadowmap_pars_vertex:qu,shadowmap_vertex:Yu,shadowmask_pars_fragment:Ku,skinbase_vertex:Zu,skinning_pars_vertex:Ju,skinning_vertex:Qu,skinnormal_vertex:ed,specularmap_fragment:td,specularmap_pars_fragment:nd,tonemapping_fragment:id,tonemapping_pars_fragment:sd,transmission_fragment:rd,transmission_pars_fragment:ad,uv_pars_fragment:od,uv_pars_vertex:ld,uv_vertex:cd,uv2_pars_fragment:hd,uv2_pars_vertex:ud,uv2_vertex:dd,worldpos_vertex:fd,background_vert:pd,background_frag:md,backgroundCube_vert:gd,backgroundCube_frag:_d,cube_vert:xd,cube_frag:vd,depth_vert:yd,depth_frag:bd,distanceRGBA_vert:Md,distanceRGBA_frag:Sd,equirect_vert:wd,equirect_frag:Td,linedashed_vert:Ed,linedashed_frag:Ad,meshbasic_vert:Cd,meshbasic_frag:Ld,meshlambert_vert:Rd,meshlambert_frag:Pd,meshmatcap_vert:Dd,meshmatcap_frag:Id,meshnormal_vert:Nd,meshnormal_frag:Fd,meshphong_vert:Od,meshphong_frag:Ud,meshphysical_vert:Bd,meshphysical_frag:zd,meshtoon_vert:kd,meshtoon_frag:Vd,points_vert:Hd,points_frag:Gd,shadow_vert:Wd,shadow_frag:Xd,sprite_vert:$d,sprite_frag:jd},re={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Et},uv2Transform:{value:new Et},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Et}}},Vt={basic:{uniforms:_t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:_t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Me(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:_t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:_t([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:_t([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Me(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:_t([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:_t([re.points,re.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:_t([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:_t([re.common,re.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:_t([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:_t([re.sprite,re.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:_t([re.common,re.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:_t([re.lights,re.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Vt.physical={uniforms:_t([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const ds={r:0,b:0,g:0};function qd(l,t,n,i,s,r,a){const o=new Me(0);let c=r===!0?0:1,h,u,d=null,f=0,g=null;function x(p,_){let S=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:t).get(y));const T=l.xr,b=T.getSession&&T.getSession();b&&b.environmentBlendMode==="additive"&&(y=null),y===null?m(o,c):y&&y.isColor&&(m(y,1),S=!0),(l.autoClear||S)&&l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ls)?(u===void 0&&(u=new ot(new pn(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:ui(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,D,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=y.encoding!==ze,(d!==y||f!==y.version||g!==l.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,g=l.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new ot(new Xr(2,2),new Fn({name:"BackgroundMaterial",uniforms:ui(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=y.encoding!==ze,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||g!==l.toneMapping)&&(h.material.needsUpdate=!0,d=y,f=y.version,g=l.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null))}function m(p,_){p.getRGB(ds,pl(l)),i.buffers.color.setClear(ds.r,ds.g,ds.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(p,_=1){o.set(p),c=_,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,m(o,c)},render:x}}function Yd(l,t,n,i){const s=l.getParameter(34921),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},c=p(null);let h=c,u=!1;function d(N,H,Y,K,j){let ie=!1;if(a){const Q=m(K,Y,H);h!==Q&&(h=Q,g(h.object)),ie=_(N,K,Y,j),ie&&S(N,K,Y,j)}else{const Q=H.wireframe===!0;(h.geometry!==K.id||h.program!==Y.id||h.wireframe!==Q)&&(h.geometry=K.id,h.program=Y.id,h.wireframe=Q,ie=!0)}j!==null&&n.update(j,34963),(ie||u)&&(u=!1,v(N,H,Y,K),j!==null&&l.bindBuffer(34963,n.get(j).buffer))}function f(){return i.isWebGL2?l.createVertexArray():r.createVertexArrayOES()}function g(N){return i.isWebGL2?l.bindVertexArray(N):r.bindVertexArrayOES(N)}function x(N){return i.isWebGL2?l.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function m(N,H,Y){const K=Y.wireframe===!0;let j=o[N.id];j===void 0&&(j={},o[N.id]=j);let ie=j[H.id];ie===void 0&&(ie={},j[H.id]=ie);let Q=ie[K];return Q===void 0&&(Q=p(f()),ie[K]=Q),Q}function p(N){const H=[],Y=[],K=[];for(let j=0;j<s;j++)H[j]=0,Y[j]=0,K[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:K,object:N,attributes:{},index:null}}function _(N,H,Y,K){const j=h.attributes,ie=H.attributes;let Q=0;const z=Y.getAttributes();for(const W in z)if(z[W].location>=0){const ne=j[W];let ae=ie[W];if(ae===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(ae=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(ae=N.instanceColor)),ne===void 0||ne.attribute!==ae||ae&&ne.data!==ae.data)return!0;Q++}return h.attributesNum!==Q||h.index!==K}function S(N,H,Y,K){const j={},ie=H.attributes;let Q=0;const z=Y.getAttributes();for(const W in z)if(z[W].location>=0){let ne=ie[W];ne===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor));const ae={};ae.attribute=ne,ne&&ne.data&&(ae.data=ne.data),j[W]=ae,Q++}h.attributes=j,h.attributesNum=Q,h.index=K}function y(){const N=h.newAttributes;for(let H=0,Y=N.length;H<Y;H++)N[H]=0}function T(N){b(N,0)}function b(N,H){const Y=h.newAttributes,K=h.enabledAttributes,j=h.attributeDivisors;Y[N]=1,K[N]===0&&(l.enableVertexAttribArray(N),K[N]=1),j[N]!==H&&((i.isWebGL2?l:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,H),j[N]=H)}function L(){const N=h.newAttributes,H=h.enabledAttributes;for(let Y=0,K=H.length;Y<K;Y++)H[Y]!==N[Y]&&(l.disableVertexAttribArray(Y),H[Y]=0)}function D(N,H,Y,K,j,ie){i.isWebGL2===!0&&(Y===5124||Y===5125)?l.vertexAttribIPointer(N,H,Y,j,ie):l.vertexAttribPointer(N,H,Y,K,j,ie)}function v(N,H,Y,K){if(i.isWebGL2===!1&&(N.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const j=K.attributes,ie=Y.getAttributes(),Q=H.defaultAttributeValues;for(const z in ie){const W=ie[z];if(W.location>=0){let J=j[z];if(J===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),J!==void 0){const ne=J.normalized,ae=J.itemSize,X=n.get(J);if(X===void 0)continue;const Le=X.buffer,fe=X.type,xe=X.bytesPerElement;if(J.isInterleavedBufferAttribute){const de=J.data,Ue=de.stride,we=J.offset;if(de.isInstancedInterleavedBuffer){for(let ve=0;ve<W.locationSize;ve++)b(W.location+ve,de.meshPerAttribute);N.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ve=0;ve<W.locationSize;ve++)T(W.location+ve);l.bindBuffer(34962,Le);for(let ve=0;ve<W.locationSize;ve++)D(W.location+ve,ae/W.locationSize,fe,ne,Ue*xe,(we+ae/W.locationSize*ve)*xe)}else{if(J.isInstancedBufferAttribute){for(let de=0;de<W.locationSize;de++)b(W.location+de,J.meshPerAttribute);N.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let de=0;de<W.locationSize;de++)T(W.location+de);l.bindBuffer(34962,Le);for(let de=0;de<W.locationSize;de++)D(W.location+de,ae/W.locationSize,fe,ne,ae*xe,ae/W.locationSize*de*xe)}}else if(Q!==void 0){const ne=Q[z];if(ne!==void 0)switch(ne.length){case 2:l.vertexAttrib2fv(W.location,ne);break;case 3:l.vertexAttrib3fv(W.location,ne);break;case 4:l.vertexAttrib4fv(W.location,ne);break;default:l.vertexAttrib1fv(W.location,ne)}}}}L()}function C(){te();for(const N in o){const H=o[N];for(const Y in H){const K=H[Y];for(const j in K)x(K[j].object),delete K[j];delete H[Y]}delete o[N]}}function U(N){if(o[N.id]===void 0)return;const H=o[N.id];for(const Y in H){const K=H[Y];for(const j in K)x(K[j].object),delete K[j];delete H[Y]}delete o[N.id]}function q(N){for(const H in o){const Y=o[H];if(Y[N.id]===void 0)continue;const K=Y[N.id];for(const j in K)x(K[j].object),delete K[j];delete Y[N.id]}}function te(){I(),u=!0,h!==c&&(h=c,g(h.object))}function I(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:te,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:U,releaseStatesOfProgram:q,initAttributes:y,enableAttribute:T,disableUnusedAttributes:L}}function Kd(l,t,n,i){const s=i.isWebGL2;let r;function a(h){r=h}function o(h,u){l.drawArrays(r,h,u),n.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(s)f=l,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),n.update(u,r,d)}this.setMode=a,this.render=o,this.renderInstances=c}function Zd(l,t,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");i=l.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(D){if(D==="highp"){if(l.getShaderPrecisionFormat(35633,36338).precision>0&&l.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&l.getShaderPrecisionFormat(35633,36337).precision>0&&l.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&l instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&l instanceof WebGL2ComputeRenderingContext;let o=n.precision!==void 0?n.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const h=a||t.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,d=l.getParameter(34930),f=l.getParameter(35660),g=l.getParameter(3379),x=l.getParameter(34076),m=l.getParameter(34921),p=l.getParameter(36347),_=l.getParameter(36348),S=l.getParameter(36349),y=f>0,T=a||t.has("OES_texture_float"),b=y&&T,L=a?l.getParameter(36183):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:b,maxSamples:L}}function Jd(l){const t=this;let n=null,i=0,s=!1,r=!1;const a=new Sn,o=new Et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,g){const x=d.length!==0||f||i!==0||s;return s=f,n=u(d,g,0),i=d.length,x},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,h()},this.setState=function(d,f,g){const x=d.clippingPlanes,m=d.clipIntersection,p=d.clipShadows,_=l.get(d);if(!s||x===null||x.length===0||r&&!p)r?u(null):h();else{const S=r?0:i,y=S*4;let T=_.clippingState||null;c.value=T,T=u(x,f,y,g);for(let b=0;b!==y;++b)T[b]=n[b];_.clippingState=T,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=S}};function h(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,g,x){const m=d!==null?d.length:0;let p=null;if(m!==0){if(p=c.value,x!==!0||p===null){const _=g+m*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<_)&&(p=new Float32Array(_));for(let y=0,T=g;y!==m;++y,T+=4)a.copy(d[y]).applyMatrix4(S,o),a.normal.toArray(p,T),p[T+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,p}}function Qd(l){let t=new WeakMap;function n(a,o){return o===Ar?a.mapping=ai:o===Cr&&(a.mapping=oi),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ar||o===Cr)if(t.has(a)){const c=t.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new dh(c.height/2);return h.fromEquirectangularTexture(l,a),t.set(a,h),a.addEventListener("dispose",s),n(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class $r extends ml{constructor(t=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+n,c=s-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ni=4,ja=[.125,.215,.35,.446,.526,.582],Tn=20,cr=new $r,qa=new Me;let hr=null;const wn=(1+Math.sqrt(5))/2,ei=1/wn,Ya=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,wn,ei),new R(0,wn,-ei),new R(ei,0,wn),new R(-ei,0,wn),new R(wn,ei,0),new R(-wn,ei,0)];class Ka{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100){hr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hr),t.scissorTest=!1,fs(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ai||t.mapping===oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hr=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:Oi,format:Dt,encoding:In,depthBuffer:!1},s=Za(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Za(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ef(r)),this._blurMaterial=tf(r,t,n)}return s}_compileMaterial(t){const n=new ot(this._lodPlanes[0],t);this._renderer.compile(n,cr)}_sceneToCubeUV(t,n,i,s){const o=new xt(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(qa),u.toneMapping=sn,u.autoClear=!1;const g=new nn({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),x=new ot(new pn,g);let m=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,m=!0):(g.color.copy(qa),m=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(o.up.set(0,c[_],0),o.lookAt(h[_],0,0)):S===1?(o.up.set(0,0,c[_]),o.lookAt(0,h[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,h[_]));const y=this._cubeSize;fs(s,S*y,_>2?y:0,y,y),u.setRenderTarget(s),m&&u.render(x,o),u.render(t,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,n){const i=this._renderer,s=t.mapping===ai||t.mapping===oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ja());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;fs(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,cr)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ya[(s-1)%Ya.length];this._blur(t,s-1,s,r,a)}n.autoClear=i}_blur(t,n,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ot(this._lodPlanes[s],h),f=h.uniforms,g=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Tn-1),m=r/x,p=isFinite(r)?1+Math.floor(u*m):Tn;p>Tn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Tn}`);const _=[];let S=0;for(let D=0;D<Tn;++D){const v=D/m,C=Math.exp(-v*v/2);_.push(C),D===0?S+=C:D<p&&(S+=2*C)}for(let D=0;D<_.length;D++)_[D]=_[D]/S;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=x,f.mipInt.value=y-i;const T=this._sizeLods[s],b=3*T*(s>y-ni?s-y+ni:0),L=4*(this._cubeSize-T);fs(n,b,L,3*T,2*T),c.setRenderTarget(n),c.render(d,cr)}}function ef(l){const t=[],n=[],i=[];let s=l;const r=l-ni+1+ja.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);n.push(o);let c=1/o;a>l-ni?c=ja[a-l+ni-1]:a===0&&(c=0),i.push(c);const h=1/(o-2),u=-h,d=1+h,f=[u,u,d,u,d,d,u,u,d,d,u,d],g=6,x=6,m=3,p=2,_=1,S=new Float32Array(m*x*g),y=new Float32Array(p*x*g),T=new Float32Array(_*x*g);for(let L=0;L<g;L++){const D=L%3*2/3-1,v=L>2?0:-1,C=[D,v,0,D+2/3,v,0,D+2/3,v+1,0,D,v,0,D+2/3,v+1,0,D,v+1,0];S.set(C,m*x*L),y.set(f,p*x*L);const U=[L,L,L,L,L,L];T.set(U,_*x*L)}const b=new zt;b.setAttribute("position",new vt(S,m)),b.setAttribute("uv",new vt(y,p)),b.setAttribute("faceIndex",new vt(T,_)),t.push(b),s>ni&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Za(l,t,n){const i=new Nn(l,t,n);return i.texture.mapping=Ls,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fs(l,t,n,i,s){l.viewport.set(t,n,i,s),l.scissor.set(t,n,i,s)}function tf(l,t,n){const i=new Float32Array(Tn),s=new R(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Tn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Ja(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Qa(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function jr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nf(l){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,h=c===Ar||c===Cr,u=c===ai||c===oi;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return n===null&&(n=new Ka(l)),d=h?n.fromEquirectangular(o,d):n.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(h&&d&&d.height>0||u&&d&&s(d)){n===null&&(n=new Ka(l));const f=h?n.fromEquirectangular(o):n.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let c=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function r(o){const c=o.target;c.removeEventListener("dispose",r);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function sf(l){const t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=l.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function rf(l,t,n,i){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete s[f.id];const g=r.get(f);g&&(t.remove(g),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,n.memory.geometries++),f}function c(d){const f=d.attributes;for(const x in f)t.update(f[x],34962);const g=d.morphAttributes;for(const x in g){const m=g[x];for(let p=0,_=m.length;p<_;p++)t.update(m[p],34962)}}function h(d){const f=[],g=d.index,x=d.attributes.position;let m=0;if(g!==null){const S=g.array;m=g.version;for(let y=0,T=S.length;y<T;y+=3){const b=S[y+0],L=S[y+1],D=S[y+2];f.push(b,L,L,D,D,b)}}else{const S=x.array;m=x.version;for(let y=0,T=S.length/3-1;y<T;y+=3){const b=y+0,L=y+1,D=y+2;f.push(b,L,L,D,D,b)}}const p=new(al(f)?fl:dl)(f,1);p.version=m;const _=r.get(d);_&&t.remove(_),r.set(d,p)}function u(d){const f=r.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function af(l,t,n,i){const s=i.isWebGL2;let r;function a(f){r=f}let o,c;function h(f){o=f.type,c=f.bytesPerElement}function u(f,g){l.drawElements(r,g,o,f*c),n.update(g,r,1)}function d(f,g,x){if(x===0)return;let m,p;if(s)m=l,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*c,x),n.update(g,r,x)}this.setMode=a,this.setIndex=h,this.render=u,this.renderInstances=d}function of(l){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case 4:n.triangles+=o*(r/3);break;case 1:n.lines+=o*(r/2);break;case 3:n.lines+=o*(r-1);break;case 2:n.lines+=o*r;break;case 0:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function lf(l,t){return l[0]-t[0]}function cf(l,t){return Math.abs(t[1])-Math.abs(l[1])}function hf(l,t,n){const i={},s=new Float32Array(8),r=new WeakMap,a=new We,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function c(h,u,d,f){const g=h.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=m!==void 0?m.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let Y=function(){N.dispose(),r.delete(u),u.removeEventListener("dispose",Y)};var x=Y;_!==void 0&&_.texture.dispose();const T=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let U=0;T===!0&&(U=1),b===!0&&(U=2),L===!0&&(U=3);let q=u.attributes.position.count*U,te=1;q>t.maxTextureSize&&(te=Math.ceil(q/t.maxTextureSize),q=t.maxTextureSize);const I=new Float32Array(q*te*4*p),N=new hl(I,q,te,p);N.type=dn,N.needsUpdate=!0;const H=U*4;for(let K=0;K<p;K++){const j=D[K],ie=v[K],Q=C[K],z=q*te*4*K;for(let W=0;W<j.count;W++){const J=W*H;T===!0&&(a.fromBufferAttribute(j,W),I[z+J+0]=a.x,I[z+J+1]=a.y,I[z+J+2]=a.z,I[z+J+3]=0),b===!0&&(a.fromBufferAttribute(ie,W),I[z+J+4]=a.x,I[z+J+5]=a.y,I[z+J+6]=a.z,I[z+J+7]=0),L===!0&&(a.fromBufferAttribute(Q,W),I[z+J+8]=a.x,I[z+J+9]=a.y,I[z+J+10]=a.z,I[z+J+11]=Q.itemSize===4?a.w:1)}}_={count:p,texture:N,size:new be(q,te)},r.set(u,_),u.addEventListener("dispose",Y)}let S=0;for(let T=0;T<g.length;T++)S+=g[T];const y=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(l,"morphTargetBaseInfluence",y),f.getUniforms().setValue(l,"morphTargetInfluences",g),f.getUniforms().setValue(l,"morphTargetsTexture",_.texture,n),f.getUniforms().setValue(l,"morphTargetsTextureSize",_.size)}else{const m=g===void 0?0:g.length;let p=i[u.id];if(p===void 0||p.length!==m){p=[];for(let b=0;b<m;b++)p[b]=[b,0];i[u.id]=p}for(let b=0;b<m;b++){const L=p[b];L[0]=b,L[1]=g[b]}p.sort(cf);for(let b=0;b<8;b++)b<m&&p[b][1]?(o[b][0]=p[b][0],o[b][1]=p[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(lf);const _=u.morphAttributes.position,S=u.morphAttributes.normal;let y=0;for(let b=0;b<8;b++){const L=o[b],D=L[0],v=L[1];D!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+b)!==_[D]&&u.setAttribute("morphTarget"+b,_[D]),S&&u.getAttribute("morphNormal"+b)!==S[D]&&u.setAttribute("morphNormal"+b,S[D]),s[b]=v,y+=v):(_&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),S&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),s[b]=0)}const T=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(l,"morphTargetBaseInfluence",T),f.getUniforms().setValue(l,"morphTargetInfluences",s)}}return{update:c}}function uf(l,t,n,i){let s=new WeakMap;function r(c){const h=i.render.frame,u=c.geometry,d=t.get(c,u);return s.get(d)!==h&&(t.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.update(c.instanceMatrix,34962),c.instanceColor!==null&&n.update(c.instanceColor,34962)),d}function a(){s=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:a}}const xl=new lt,vl=new hl,yl=new Kc,bl=new gl,eo=[],to=[],no=new Float32Array(16),io=new Float32Array(9),so=new Float32Array(4);function mi(l,t,n){const i=l[0];if(i<=0||i>0)return l;const s=t*n;let r=eo[s];if(r===void 0&&(r=new Float32Array(s),eo[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=n,l[a].toArray(r,o)}return r}function et(l,t){if(l.length!==t.length)return!1;for(let n=0,i=l.length;n<i;n++)if(l[n]!==t[n])return!1;return!0}function tt(l,t){for(let n=0,i=t.length;n<i;n++)l[n]=t[n]}function Ps(l,t){let n=to[t];n===void 0&&(n=new Int32Array(t),to[t]=n);for(let i=0;i!==t;++i)n[i]=l.allocateTextureUnit();return n}function df(l,t){const n=this.cache;n[0]!==t&&(l.uniform1f(this.addr,t),n[0]=t)}function ff(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(l.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(et(n,t))return;l.uniform2fv(this.addr,t),tt(n,t)}}function pf(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(l.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(l.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(et(n,t))return;l.uniform3fv(this.addr,t),tt(n,t)}}function mf(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(l.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(et(n,t))return;l.uniform4fv(this.addr,t),tt(n,t)}}function gf(l,t){const n=this.cache,i=t.elements;if(i===void 0){if(et(n,t))return;l.uniformMatrix2fv(this.addr,!1,t),tt(n,t)}else{if(et(n,i))return;so.set(i),l.uniformMatrix2fv(this.addr,!1,so),tt(n,i)}}function _f(l,t){const n=this.cache,i=t.elements;if(i===void 0){if(et(n,t))return;l.uniformMatrix3fv(this.addr,!1,t),tt(n,t)}else{if(et(n,i))return;io.set(i),l.uniformMatrix3fv(this.addr,!1,io),tt(n,i)}}function xf(l,t){const n=this.cache,i=t.elements;if(i===void 0){if(et(n,t))return;l.uniformMatrix4fv(this.addr,!1,t),tt(n,t)}else{if(et(n,i))return;no.set(i),l.uniformMatrix4fv(this.addr,!1,no),tt(n,i)}}function vf(l,t){const n=this.cache;n[0]!==t&&(l.uniform1i(this.addr,t),n[0]=t)}function yf(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(l.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(et(n,t))return;l.uniform2iv(this.addr,t),tt(n,t)}}function bf(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(l.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(et(n,t))return;l.uniform3iv(this.addr,t),tt(n,t)}}function Mf(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(l.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(et(n,t))return;l.uniform4iv(this.addr,t),tt(n,t)}}function Sf(l,t){const n=this.cache;n[0]!==t&&(l.uniform1ui(this.addr,t),n[0]=t)}function wf(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(l.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(et(n,t))return;l.uniform2uiv(this.addr,t),tt(n,t)}}function Tf(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(l.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(et(n,t))return;l.uniform3uiv(this.addr,t),tt(n,t)}}function Ef(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(l.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(et(n,t))return;l.uniform4uiv(this.addr,t),tt(n,t)}}function Af(l,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(l.uniform1i(this.addr,s),i[0]=s),n.setTexture2D(t||xl,s)}function Cf(l,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(l.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||yl,s)}function Lf(l,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(l.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||bl,s)}function Rf(l,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(l.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||vl,s)}function Pf(l){switch(l){case 5126:return df;case 35664:return ff;case 35665:return pf;case 35666:return mf;case 35674:return gf;case 35675:return _f;case 35676:return xf;case 5124:case 35670:return vf;case 35667:case 35671:return yf;case 35668:case 35672:return bf;case 35669:case 35673:return Mf;case 5125:return Sf;case 36294:return wf;case 36295:return Tf;case 36296:return Ef;case 35678:case 36198:case 36298:case 36306:case 35682:return Af;case 35679:case 36299:case 36307:return Cf;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return Rf}}function Df(l,t){l.uniform1fv(this.addr,t)}function If(l,t){const n=mi(t,this.size,2);l.uniform2fv(this.addr,n)}function Nf(l,t){const n=mi(t,this.size,3);l.uniform3fv(this.addr,n)}function Ff(l,t){const n=mi(t,this.size,4);l.uniform4fv(this.addr,n)}function Of(l,t){const n=mi(t,this.size,4);l.uniformMatrix2fv(this.addr,!1,n)}function Uf(l,t){const n=mi(t,this.size,9);l.uniformMatrix3fv(this.addr,!1,n)}function Bf(l,t){const n=mi(t,this.size,16);l.uniformMatrix4fv(this.addr,!1,n)}function zf(l,t){l.uniform1iv(this.addr,t)}function kf(l,t){l.uniform2iv(this.addr,t)}function Vf(l,t){l.uniform3iv(this.addr,t)}function Hf(l,t){l.uniform4iv(this.addr,t)}function Gf(l,t){l.uniform1uiv(this.addr,t)}function Wf(l,t){l.uniform2uiv(this.addr,t)}function Xf(l,t){l.uniform3uiv(this.addr,t)}function $f(l,t){l.uniform4uiv(this.addr,t)}function jf(l,t,n){const i=this.cache,s=t.length,r=Ps(n,s);et(i,r)||(l.uniform1iv(this.addr,r),tt(i,r));for(let a=0;a!==s;++a)n.setTexture2D(t[a]||xl,r[a])}function qf(l,t,n){const i=this.cache,s=t.length,r=Ps(n,s);et(i,r)||(l.uniform1iv(this.addr,r),tt(i,r));for(let a=0;a!==s;++a)n.setTexture3D(t[a]||yl,r[a])}function Yf(l,t,n){const i=this.cache,s=t.length,r=Ps(n,s);et(i,r)||(l.uniform1iv(this.addr,r),tt(i,r));for(let a=0;a!==s;++a)n.setTextureCube(t[a]||bl,r[a])}function Kf(l,t,n){const i=this.cache,s=t.length,r=Ps(n,s);et(i,r)||(l.uniform1iv(this.addr,r),tt(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||vl,r[a])}function Zf(l){switch(l){case 5126:return Df;case 35664:return If;case 35665:return Nf;case 35666:return Ff;case 35674:return Of;case 35675:return Uf;case 35676:return Bf;case 5124:case 35670:return zf;case 35667:case 35671:return kf;case 35668:case 35672:return Vf;case 35669:case 35673:return Hf;case 5125:return Gf;case 36294:return Wf;case 36295:return Xf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return qf;case 35680:case 36300:case 36308:case 36293:return Yf;case 36289:case 36303:case 36311:case 36292:return Kf}}class Jf{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.setValue=Pf(n.type)}}class Qf{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.size=n.size,this.setValue=Zf(n.type)}}class ep{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,n[o.id],i)}}}const ur=/(\w+)(\])?(\[|\.)?/g;function ro(l,t){l.seq.push(t),l.map[t.id]=t}function tp(l,t,n){const i=l.name,s=i.length;for(ur.lastIndex=0;;){const r=ur.exec(i),a=ur.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){ro(n,h===void 0?new Jf(o,l,t):new Qf(o,l,t));break}else{let d=n.map[o];d===void 0&&(d=new ep(o),ro(n,d)),n=d}}}class ws{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,35718);for(let s=0;s<i;++s){const r=t.getActiveUniform(n,s),a=t.getUniformLocation(n,r.name);tp(r,a,this)}}setValue(t,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){const s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,a=n.length;r!==a;++r){const o=n[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,n){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in n&&i.push(a)}return i}}function ao(l,t,n){const i=l.createShader(t);return l.shaderSource(i,n),l.compileShader(i),i}let np=0;function ip(l,t){const n=l.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function sp(l){switch(l){case In:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",l),["Linear","( value )"]}}function oo(l,t,n){const i=l.getShaderParameter(t,35713),s=l.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+ip(l.getShaderSource(t),a)}else return s}function rp(l,t){const n=sp(t);return"vec4 "+l+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function ap(l,t){let n;switch(t){case cc:n="Linear";break;case hc:n="Reinhard";break;case uc:n="OptimizedCineon";break;case dc:n="ACESFilmic";break;case fc:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+l+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function op(l){return[l.extensionDerivatives||l.envMapCubeUVHeight||l.bumpMap||l.tangentSpaceNormalMap||l.clearcoatNormalMap||l.flatShading||l.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(l.extensionFragDepth||l.logarithmicDepthBuffer)&&l.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",l.extensionDrawBuffers&&l.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(l.extensionShaderTextureLOD||l.envMap||l.transmission)&&l.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function lp(l){const t=[];for(const n in l){const i=l[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function cp(l,t){const n={},i=l.getProgramParameter(t,35721);for(let s=0;s<i;s++){const r=l.getActiveAttrib(t,s),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),n[a]={type:r.type,location:l.getAttribLocation(t,a),locationSize:o}}return n}function Pi(l){return l!==""}function lo(l,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function co(l,t){return l.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ir(l){return l.replace(hp,up)}function up(l,t){const n=Te[t];if(n===void 0)throw new Error("Can not resolve #include <"+t+">");return Ir(n)}const dp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ho(l){return l.replace(dp,fp)}function fp(l,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uo(l){let t="precision "+l.precision+` float;
precision `+l.precision+" int;";return l.precision==="highp"?t+=`
#define HIGH_PRECISION`:l.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pp(l){let t="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===Jo?t="SHADOWMAP_TYPE_PCF":l.shadowMapType===Vl?t="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===Ri&&(t="SHADOWMAP_TYPE_VSM"),t}function mp(l){let t="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case ai:case oi:t="ENVMAP_TYPE_CUBE";break;case Ls:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gp(l){let t="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case oi:t="ENVMAP_MODE_REFRACTION";break}return t}function _p(l){let t="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case Cs:t="ENVMAP_BLENDING_MULTIPLY";break;case oc:t="ENVMAP_BLENDING_MIX";break;case lc:t="ENVMAP_BLENDING_ADD";break}return t}function xp(l){const t=l.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function vp(l,t,n,i){const s=l.getContext(),r=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=pp(n),h=mp(n),u=gp(n),d=_p(n),f=xp(n),g=n.isWebGL2?"":op(n),x=lp(r),m=s.createProgram();let p,_,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=[x].filter(Pi).join(`
`),p.length>0&&(p+=`
`),_=[g,x].filter(Pi).join(`
`),_.length>0&&(_+=`
`)):(p=[uo(n),"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),_=[g,uo(n),"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sn?"#define TONE_MAPPING":"",n.toneMapping!==sn?Te.tonemapping_pars_fragment:"",n.toneMapping!==sn?ap("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,rp("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Pi).join(`
`)),a=Ir(a),a=lo(a,n),a=co(a,n),o=Ir(o),o=lo(o,n),o=co(o,n),a=ho(a),o=ho(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",n.glslVersion===Fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=S+p+a,T=S+_+o,b=ao(s,35633,y),L=ao(s,35632,T);if(s.attachShader(m,b),s.attachShader(m,L),n.index0AttributeName!==void 0?s.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),l.debug.checkShaderErrors){const C=s.getProgramInfoLog(m).trim(),U=s.getShaderInfoLog(b).trim(),q=s.getShaderInfoLog(L).trim();let te=!0,I=!0;if(s.getProgramParameter(m,35714)===!1){te=!1;const N=oo(s,b,"vertex"),H=oo(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+C+`
`+N+`
`+H)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(U===""||q==="")&&(I=!1);I&&(this.diagnostics={runnable:te,programLog:C,vertexShader:{log:U,prefix:p},fragmentShader:{log:q,prefix:_}})}s.deleteShader(b),s.deleteShader(L);let D;this.getUniforms=function(){return D===void 0&&(D=new ws(s,m)),D};let v;return this.getAttributes=function(){return v===void 0&&(v=cp(s,m)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=n.shaderName,this.id=np++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=L,this}let yp=0;class bp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new Mp(t),n.set(t,i)),i}}class Mp{constructor(t){this.id=yp++,this.code=t,this.usedTimes=0}}function Sp(l,t,n,i,s,r,a){const o=new ul,c=new bp,h=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let g=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v,C,U,q,te){const I=q.fog,N=te.geometry,H=v.isMeshStandardMaterial?q.environment:null,Y=(v.isMeshStandardMaterial?n:t).get(v.envMap||H),K=Y&&Y.mapping===Ls?Y.image.height:null,j=x[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const ie=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Q=ie!==void 0?ie.length:0;let z=0;N.morphAttributes.position!==void 0&&(z=1),N.morphAttributes.normal!==void 0&&(z=2),N.morphAttributes.color!==void 0&&(z=3);let W,J,ne,ae;if(j){const Ue=Vt[j];W=Ue.vertexShader,J=Ue.fragmentShader}else W=v.vertexShader,J=v.fragmentShader,c.update(v),ne=c.getVertexShaderID(v),ae=c.getFragmentShaderID(v);const X=l.getRenderTarget(),Le=v.alphaTest>0,fe=v.clearcoat>0,xe=v.iridescence>0;return{isWebGL2:u,shaderID:j,shaderName:v.type,vertexShader:W,fragmentShader:J,defines:v.defines,customVertexShaderID:ne,customFragmentShaderID:ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,instancing:te.isInstancedMesh===!0,instancingColor:te.isInstancedMesh===!0&&te.instanceColor!==null,supportsVertexTextures:f,outputEncoding:X===null?l.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:In,map:!!v.map,matcap:!!v.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:K,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Ic,tangentSpaceNormalMap:v.normalMapType===Rs,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===ze,clearcoat:fe,clearcoatMap:fe&&!!v.clearcoatMap,clearcoatRoughnessMap:fe&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!v.clearcoatNormalMap,iridescence:xe,iridescenceMap:xe&&!!v.iridescenceMap,iridescenceThicknessMap:xe&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===ii,alphaMap:!!v.alphaMap,alphaTest:Le,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!N.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!I,useFog:v.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:d,skinning:te.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:z,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:l.shadowMap.enabled&&U.length>0,shadowMapType:l.shadowMap.type,toneMapping:v.toneMapped?l.toneMapping:sn,physicallyCorrectLights:l.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Qt,flipSided:v.side===It,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)C.push(U),C.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(_(C,v),S(C,v),C.push(l.outputEncoding)),C.push(v.customProgramCacheKey),C.join()}function _(v,C){v.push(C.precision),v.push(C.outputEncoding),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.combine),v.push(C.vertexUvs),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function S(v,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.map&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.lightMap&&o.enable(7),C.aoMap&&o.enable(8),C.emissiveMap&&o.enable(9),C.bumpMap&&o.enable(10),C.normalMap&&o.enable(11),C.objectSpaceNormalMap&&o.enable(12),C.tangentSpaceNormalMap&&o.enable(13),C.clearcoat&&o.enable(14),C.clearcoatMap&&o.enable(15),C.clearcoatRoughnessMap&&o.enable(16),C.clearcoatNormalMap&&o.enable(17),C.iridescence&&o.enable(18),C.iridescenceMap&&o.enable(19),C.iridescenceThicknessMap&&o.enable(20),C.displacementMap&&o.enable(21),C.specularMap&&o.enable(22),C.roughnessMap&&o.enable(23),C.metalnessMap&&o.enable(24),C.gradientMap&&o.enable(25),C.alphaMap&&o.enable(26),C.alphaTest&&o.enable(27),C.vertexColors&&o.enable(28),C.vertexAlphas&&o.enable(29),C.vertexUvs&&o.enable(30),C.vertexTangents&&o.enable(31),C.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.physicallyCorrectLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.specularIntensityMap&&o.enable(15),C.specularColorMap&&o.enable(16),C.transmission&&o.enable(17),C.transmissionMap&&o.enable(18),C.thicknessMap&&o.enable(19),C.sheen&&o.enable(20),C.sheenColorMap&&o.enable(21),C.sheenRoughnessMap&&o.enable(22),C.decodeVideoTexture&&o.enable(23),C.opaque&&o.enable(24),v.push(o.mask)}function y(v){const C=x[v.type];let U;if(C){const q=Vt[C];U=lh.clone(q.uniforms)}else U=v.uniforms;return U}function T(v,C){let U;for(let q=0,te=h.length;q<te;q++){const I=h[q];if(I.cacheKey===C){U=I,++U.usedTimes;break}}return U===void 0&&(U=new vp(l,C,v,r),h.push(U)),U}function b(v){if(--v.usedTimes===0){const C=h.indexOf(v);h[C]=h[h.length-1],h.pop(),v.destroy()}}function L(v){c.remove(v)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:b,releaseShaderCache:L,programs:h,dispose:D}}function wp(){let l=new WeakMap;function t(r){let a=l.get(r);return a===void 0&&(a={},l.set(r,a)),a}function n(r){l.delete(r)}function i(r,a,o){l.get(r)[a]=o}function s(){l=new WeakMap}return{get:t,remove:n,update:i,dispose:s}}function Tp(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.material.id!==t.material.id?l.material.id-t.material.id:l.z!==t.z?l.z-t.z:l.id-t.id}function fo(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.z!==t.z?t.z-l.z:l.id-t.id}function po(){const l=[];let t=0;const n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(d,f,g,x,m,p){let _=l[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},l[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=m,_.group=p),t++,_}function o(d,f,g,x,m,p){const _=a(d,f,g,x,m,p);g.transmission>0?i.push(_):g.transparent===!0?s.push(_):n.push(_)}function c(d,f,g,x,m,p){const _=a(d,f,g,x,m,p);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):n.unshift(_)}function h(d,f){n.length>1&&n.sort(d||Tp),i.length>1&&i.sort(f||fo),s.length>1&&s.sort(f||fo)}function u(){for(let d=t,f=l.length;d<f;d++){const g=l[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:u,sort:h}}function Ep(){let l=new WeakMap;function t(i,s){const r=l.get(i);let a;return r===void 0?(a=new po,l.set(i,[a])):s>=r.length?(a=new po,r.push(a)):a=r[s],a}function n(){l=new WeakMap}return{get:t,dispose:n}}function Ap(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new R,color:new Me};break;case"SpotLight":n={position:new R,direction:new R,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new R,color:new Me,distance:0,decay:0};break;case"HemisphereLight":n={direction:new R,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":n={color:new Me,position:new R,halfWidth:new R,halfHeight:new R};break}return l[t.id]=n,n}}}function Cp(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[t.id]=n,n}}}let Lp=0;function Rp(l,t){return(t.castShadow?2:0)-(l.castShadow?2:0)+(t.map?1:0)-(l.map?1:0)}function Pp(l,t){const n=new Ap,i=Cp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new R);const r=new R,a=new Ce,o=new Ce;function c(u,d){let f=0,g=0,x=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let m=0,p=0,_=0,S=0,y=0,T=0,b=0,L=0,D=0,v=0;u.sort(Rp);const C=d!==!0?Math.PI:1;for(let q=0,te=u.length;q<te;q++){const I=u[q],N=I.color,H=I.intensity,Y=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=N.r*H*C,g+=N.g*H*C,x+=N.b*H*C;else if(I.isLightProbe)for(let j=0;j<9;j++)s.probe[j].addScaledVector(I.sh.coefficients[j],H);else if(I.isDirectionalLight){const j=n.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity*C),I.castShadow){const ie=I.shadow,Q=i.get(I);Q.shadowBias=ie.bias,Q.shadowNormalBias=ie.normalBias,Q.shadowRadius=ie.radius,Q.shadowMapSize=ie.mapSize,s.directionalShadow[m]=Q,s.directionalShadowMap[m]=K,s.directionalShadowMatrix[m]=I.shadow.matrix,T++}s.directional[m]=j,m++}else if(I.isSpotLight){const j=n.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(N).multiplyScalar(H*C),j.distance=Y,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,s.spot[_]=j;const ie=I.shadow;if(I.map&&(s.spotLightMap[D]=I.map,D++,ie.updateMatrices(I),I.castShadow&&v++),s.spotLightMatrix[_]=ie.matrix,I.castShadow){const Q=i.get(I);Q.shadowBias=ie.bias,Q.shadowNormalBias=ie.normalBias,Q.shadowRadius=ie.radius,Q.shadowMapSize=ie.mapSize,s.spotShadow[_]=Q,s.spotShadowMap[_]=K,L++}_++}else if(I.isRectAreaLight){const j=n.get(I);j.color.copy(N).multiplyScalar(H),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),s.rectArea[S]=j,S++}else if(I.isPointLight){const j=n.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity*C),j.distance=I.distance,j.decay=I.decay,I.castShadow){const ie=I.shadow,Q=i.get(I);Q.shadowBias=ie.bias,Q.shadowNormalBias=ie.normalBias,Q.shadowRadius=ie.radius,Q.shadowMapSize=ie.mapSize,Q.shadowCameraNear=ie.camera.near,Q.shadowCameraFar=ie.camera.far,s.pointShadow[p]=Q,s.pointShadowMap[p]=K,s.pointShadowMatrix[p]=I.shadow.matrix,b++}s.point[p]=j,p++}else if(I.isHemisphereLight){const j=n.get(I);j.skyColor.copy(I.color).multiplyScalar(H*C),j.groundColor.copy(I.groundColor).multiplyScalar(H*C),s.hemi[y]=j,y++}}S>0&&(t.isWebGL2||l.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=re.LTC_FLOAT_1,s.rectAreaLTC2=re.LTC_FLOAT_2):l.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=re.LTC_HALF_1,s.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=g,s.ambient[2]=x;const U=s.hash;(U.directionalLength!==m||U.pointLength!==p||U.spotLength!==_||U.rectAreaLength!==S||U.hemiLength!==y||U.numDirectionalShadows!==T||U.numPointShadows!==b||U.numSpotShadows!==L||U.numSpotMaps!==D)&&(s.directional.length=m,s.spot.length=_,s.rectArea.length=S,s.point.length=p,s.hemi.length=y,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=L+D-v,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=v,U.directionalLength=m,U.pointLength=p,U.spotLength=_,U.rectAreaLength=S,U.hemiLength=y,U.numDirectionalShadows=T,U.numPointShadows=b,U.numSpotShadows=L,U.numSpotMaps=D,s.version=Lp++)}function h(u,d){let f=0,g=0,x=0,m=0,p=0;const _=d.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const T=u[S];if(T.isDirectionalLight){const b=s.directional[f];b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),f++}else if(T.isSpotLight){const b=s.spot[x];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),x++}else if(T.isRectAreaLight){const b=s.rectArea[m];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(_),o.identity(),a.copy(T.matrixWorld),a.premultiply(_),o.extractRotation(a),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),m++}else if(T.isPointLight){const b=s.point[g];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(_),g++}else if(T.isHemisphereLight){const b=s.hemi[p];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(_),p++}}}return{setup:c,setupView:h,state:s}}function mo(l,t){const n=new Pp(l,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(d){i.push(d)}function o(d){s.push(d)}function c(d){n.setup(i,d)}function h(d){n.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o}}function Dp(l,t){let n=new WeakMap;function i(r,a=0){const o=n.get(r);let c;return o===void 0?(c=new mo(l,t),n.set(r,[c])):a>=o.length?(c=new mo(l,t),o.push(c)):c=o[a],c}function s(){n=new WeakMap}return{get:i,dispose:s}}class Ip extends Nt{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Np extends Nt{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Fp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Op=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Up(l,t,n){let i=new Wr;const s=new be,r=new be,a=new We,o=new Ip({depthPacking:Dc}),c=new Np,h={},u=n.maxTextureSize,d={0:It,1:mn,2:Qt},f=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Fp,fragmentShader:Op}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const x=new zt;x.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ot(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo,this.render=function(T,b,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const D=l.getRenderTarget(),v=l.getActiveCubeFace(),C=l.getActiveMipmapLevel(),U=l.state;U.setBlending(fn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let q=0,te=T.length;q<te;q++){const I=T[q],N=I.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const H=N.getFrameExtents();if(s.multiply(H),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/H.x),s.x=r.x*H.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/H.y),s.y=r.y*H.y,N.mapSize.y=r.y)),N.map===null){const K=this.type!==Ri?{minFilter:at,magFilter:at}:{};N.map=new Nn(s.x,s.y,K),N.map.texture.name=I.name+".shadowMap",N.camera.updateProjectionMatrix()}l.setRenderTarget(N.map),l.clear();const Y=N.getViewportCount();for(let K=0;K<Y;K++){const j=N.getViewport(K);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),U.viewport(a),N.updateMatrices(I,K),i=N.getFrustum(),y(b,L,N.camera,I,this.type)}N.isPointLightShadow!==!0&&this.type===Ri&&_(N,L),N.needsUpdate=!1}p.needsUpdate=!1,l.setRenderTarget(D,v,C)};function _(T,b){const L=t.update(m);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Nn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,l.setRenderTarget(T.mapPass),l.clear(),l.renderBufferDirect(b,null,L,f,m,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,l.setRenderTarget(T.map),l.clear(),l.renderBufferDirect(b,null,L,g,m,null)}function S(T,b,L,D,v,C){let U=null;const q=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(q!==void 0)U=q;else if(U=L.isPointLight===!0?c:o,l.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const te=U.uuid,I=b.uuid;let N=h[te];N===void 0&&(N={},h[te]=N);let H=N[I];H===void 0&&(H=U.clone(),N[I]=H),U=H}return U.visible=b.visible,U.wireframe=b.wireframe,C===Ri?U.side=b.shadowSide!==null?b.shadowSide:b.side:U.side=b.shadowSide!==null?b.shadowSide:d[b.side],U.alphaMap=b.alphaMap,U.alphaTest=b.alphaTest,U.map=b.map,U.clipShadows=b.clipShadows,U.clippingPlanes=b.clippingPlanes,U.clipIntersection=b.clipIntersection,U.displacementMap=b.displacementMap,U.displacementScale=b.displacementScale,U.displacementBias=b.displacementBias,U.wireframeLinewidth=b.wireframeLinewidth,U.linewidth=b.linewidth,L.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(U.referencePosition.setFromMatrixPosition(L.matrixWorld),U.nearDistance=D,U.farDistance=v),U}function y(T,b,L,D,v){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Ri)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const q=t.update(T),te=T.material;if(Array.isArray(te)){const I=q.groups;for(let N=0,H=I.length;N<H;N++){const Y=I[N],K=te[Y.materialIndex];if(K&&K.visible){const j=S(T,K,D,L.near,L.far,v);l.renderBufferDirect(L,null,q,j,T,Y)}}}else if(te.visible){const I=S(T,te,D,L.near,L.far,v);l.renderBufferDirect(L,null,q,I,T,null)}}const U=T.children;for(let q=0,te=U.length;q<te;q++)y(U[q],b,L,D,v)}}function Bp(l,t,n){const i=n.isWebGL2;function s(){let P=!1;const V=new We;let Z=null;const he=new We(0,0,0,0);return{setMask:function(ge){Z!==ge&&!P&&(l.colorMask(ge,ge,ge,ge),Z=ge)},setLocked:function(ge){P=ge},setClear:function(ge,Be,it,ct,gn){gn===!0&&(ge*=ct,Be*=ct,it*=ct),V.set(ge,Be,it,ct),he.equals(V)===!1&&(l.clearColor(ge,Be,it,ct),he.copy(V))},reset:function(){P=!1,Z=null,he.set(-1,0,0,0)}}}function r(){let P=!1,V=null,Z=null,he=null;return{setTest:function(ge){ge?Le(2929):fe(2929)},setMask:function(ge){V!==ge&&!P&&(l.depthMask(ge),V=ge)},setFunc:function(ge){if(Z!==ge){switch(ge){case ec:l.depthFunc(512);break;case tc:l.depthFunc(519);break;case nc:l.depthFunc(513);break;case Er:l.depthFunc(515);break;case ic:l.depthFunc(514);break;case sc:l.depthFunc(518);break;case rc:l.depthFunc(516);break;case ac:l.depthFunc(517);break;default:l.depthFunc(515)}Z=ge}},setLocked:function(ge){P=ge},setClear:function(ge){he!==ge&&(l.clearDepth(ge),he=ge)},reset:function(){P=!1,V=null,Z=null,he=null}}}function a(){let P=!1,V=null,Z=null,he=null,ge=null,Be=null,it=null,ct=null,gn=null;return{setTest:function(Xe){P||(Xe?Le(2960):fe(2960))},setMask:function(Xe){V!==Xe&&!P&&(l.stencilMask(Xe),V=Xe)},setFunc:function(Xe,Xt,Ct){(Z!==Xe||he!==Xt||ge!==Ct)&&(l.stencilFunc(Xe,Xt,Ct),Z=Xe,he=Xt,ge=Ct)},setOp:function(Xe,Xt,Ct){(Be!==Xe||it!==Xt||ct!==Ct)&&(l.stencilOp(Xe,Xt,Ct),Be=Xe,it=Xt,ct=Ct)},setLocked:function(Xe){P=Xe},setClear:function(Xe){gn!==Xe&&(l.clearStencil(Xe),gn=Xe)},reset:function(){P=!1,V=null,Z=null,he=null,ge=null,Be=null,it=null,ct=null,gn=null}}}const o=new s,c=new r,h=new a,u=new WeakMap,d=new WeakMap;let f={},g={},x=new WeakMap,m=[],p=null,_=!1,S=null,y=null,T=null,b=null,L=null,D=null,v=null,C=!1,U=null,q=null,te=null,I=null,N=null;const H=l.getParameter(35661);let Y=!1,K=0;const j=l.getParameter(7938);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=K>=2);let ie=null,Q={};const z=l.getParameter(3088),W=l.getParameter(2978),J=new We().fromArray(z),ne=new We().fromArray(W);function ae(P,V,Z){const he=new Uint8Array(4),ge=l.createTexture();l.bindTexture(P,ge),l.texParameteri(P,10241,9728),l.texParameteri(P,10240,9728);for(let Be=0;Be<Z;Be++)l.texImage2D(V+Be,0,6408,1,1,0,6408,5121,he);return ge}const X={};X[3553]=ae(3553,3553,1),X[34067]=ae(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Le(2929),c.setFunc(Er),Je(!1),ft(ra),Le(2884),nt(fn);function Le(P){f[P]!==!0&&(l.enable(P),f[P]=!0)}function fe(P){f[P]!==!1&&(l.disable(P),f[P]=!1)}function xe(P,V){return g[P]!==V?(l.bindFramebuffer(P,V),g[P]=V,i&&(P===36009&&(g[36160]=V),P===36160&&(g[36009]=V)),!0):!1}function de(P,V){let Z=m,he=!1;if(P)if(Z=x.get(V),Z===void 0&&(Z=[],x.set(V,Z)),P.isWebGLMultipleRenderTargets){const ge=P.texture;if(Z.length!==ge.length||Z[0]!==36064){for(let Be=0,it=ge.length;Be<it;Be++)Z[Be]=36064+Be;Z.length=ge.length,he=!0}}else Z[0]!==36064&&(Z[0]=36064,he=!0);else Z[0]!==1029&&(Z[0]=1029,he=!0);he&&(n.isWebGL2?l.drawBuffers(Z):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function Ue(P){return p!==P?(l.useProgram(P),p=P,!0):!1}const we={[ti]:32774,[Gl]:32778,[Wl]:32779};if(i)we[ca]=32775,we[ha]=32776;else{const P=t.get("EXT_blend_minmax");P!==null&&(we[ca]=P.MIN_EXT,we[ha]=P.MAX_EXT)}const ve={[Xl]:0,[$l]:1,[jl]:768,[Qo]:770,[Ql]:776,[Zl]:774,[Yl]:772,[ql]:769,[el]:771,[Jl]:775,[Kl]:773};function nt(P,V,Z,he,ge,Be,it,ct){if(P===fn){_===!0&&(fe(3042),_=!1);return}if(_===!1&&(Le(3042),_=!0),P!==Hl){if(P!==S||ct!==C){if((y!==ti||L!==ti)&&(l.blendEquation(32774),y=ti,L=ti),ct)switch(P){case ii:l.blendFuncSeparate(1,771,1,771);break;case aa:l.blendFunc(1,1);break;case oa:l.blendFuncSeparate(0,769,0,1);break;case la:l.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ii:l.blendFuncSeparate(770,771,1,771);break;case aa:l.blendFunc(770,1);break;case oa:l.blendFuncSeparate(0,769,0,1);break;case la:l.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,b=null,D=null,v=null,S=P,C=ct}return}ge=ge||V,Be=Be||Z,it=it||he,(V!==y||ge!==L)&&(l.blendEquationSeparate(we[V],we[ge]),y=V,L=ge),(Z!==T||he!==b||Be!==D||it!==v)&&(l.blendFuncSeparate(ve[Z],ve[he],ve[Be],ve[it]),T=Z,b=he,D=Be,v=it),S=P,C=!1}function Ze(P,V){P.side===Qt?fe(2884):Le(2884);let Z=P.side===It;V&&(Z=!Z),Je(Z),P.blending===ii&&P.transparent===!1?nt(fn):nt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),o.setMask(P.colorWrite);const he=P.stencilWrite;h.setTest(he),he&&(h.setMask(P.stencilWriteMask),h.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),h.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ke(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Le(32926):fe(32926)}function Je(P){U!==P&&(P?l.frontFace(2304):l.frontFace(2305),U=P)}function ft(P){P!==zl?(Le(2884),P!==q&&(P===ra?l.cullFace(1029):P===kl?l.cullFace(1028):l.cullFace(1032))):fe(2884),q=P}function je(P){P!==te&&(Y&&l.lineWidth(P),te=P)}function ke(P,V,Z){P?(Le(32823),(I!==V||N!==Z)&&(l.polygonOffset(V,Z),I=V,N=Z)):fe(32823)}function At(P){P?Le(3089):fe(3089)}function yt(P){P===void 0&&(P=33984+H-1),ie!==P&&(l.activeTexture(P),ie=P)}function E(P,V,Z){Z===void 0&&(ie===null?Z=33984+H-1:Z=ie);let he=Q[Z];he===void 0&&(he={type:void 0,texture:void 0},Q[Z]=he),(he.type!==P||he.texture!==V)&&(ie!==Z&&(l.activeTexture(Z),ie=Z),l.bindTexture(P,V||X[P]),he.type=P,he.texture=V)}function M(){const P=Q[ie];P!==void 0&&P.type!==void 0&&(l.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function k(){try{l.compressedTexImage2D.apply(l,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{l.compressedTexImage3D.apply(l,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{l.texSubImage2D.apply(l,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{l.texSubImage3D.apply(l,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{l.compressedTexSubImage2D.apply(l,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function A(){try{l.compressedTexSubImage3D.apply(l,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{l.texStorage2D.apply(l,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{l.texStorage3D.apply(l,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{l.texImage2D.apply(l,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{l.texImage3D.apply(l,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(P){J.equals(P)===!1&&(l.scissor(P.x,P.y,P.z,P.w),J.copy(P))}function pe(P){ne.equals(P)===!1&&(l.viewport(P.x,P.y,P.z,P.w),ne.copy(P))}function Re(P,V){let Z=d.get(V);Z===void 0&&(Z=new WeakMap,d.set(V,Z));let he=Z.get(P);he===void 0&&(he=l.getUniformBlockIndex(V,P.name),Z.set(P,he))}function Pe(P,V){const he=d.get(V).get(P);u.get(V)!==he&&(l.uniformBlockBinding(V,he,P.__bindingPointIndex),u.set(V,he))}function He(){l.disable(3042),l.disable(2884),l.disable(2929),l.disable(32823),l.disable(3089),l.disable(2960),l.disable(32926),l.blendEquation(32774),l.blendFunc(1,0),l.blendFuncSeparate(1,0,1,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(513),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(519,0,4294967295),l.stencilOp(7680,7680,7680),l.clearStencil(0),l.cullFace(1029),l.frontFace(2305),l.polygonOffset(0,0),l.activeTexture(33984),l.bindFramebuffer(36160,null),i===!0&&(l.bindFramebuffer(36009,null),l.bindFramebuffer(36008,null)),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),f={},ie=null,Q={},g={},x=new WeakMap,m=[],p=null,_=!1,S=null,y=null,T=null,b=null,L=null,D=null,v=null,C=!1,U=null,q=null,te=null,I=null,N=null,J.set(0,0,l.canvas.width,l.canvas.height),ne.set(0,0,l.canvas.width,l.canvas.height),o.reset(),c.reset(),h.reset()}return{buffers:{color:o,depth:c,stencil:h},enable:Le,disable:fe,bindFramebuffer:xe,drawBuffers:de,useProgram:Ue,setBlending:nt,setMaterial:Ze,setFlipSided:Je,setCullFace:ft,setLineWidth:je,setPolygonOffset:ke,setScissorTest:At,activeTexture:yt,bindTexture:E,unbindTexture:M,compressedTexImage2D:k,compressedTexImage3D:ee,texImage2D:ue,texImage3D:le,updateUBOMapping:Re,uniformBlockBinding:Pe,texStorage2D:F,texStorage3D:ce,texSubImage2D:se,texSubImage3D:oe,compressedTexSubImage2D:ye,compressedTexSubImage3D:A,scissor:me,viewport:pe,reset:He}}function zp(l,t,n,i,s,r,a){const o=s.isWebGL2,c=s.maxTextures,h=s.maxCubemapSize,u=s.maxTextureSize,d=s.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let m;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,M){return _?new OffscreenCanvas(E,M):ki("canvas")}function y(E,M,k,ee){let se=1;if((E.width>ee||E.height>ee)&&(se=ee/Math.max(E.width,E.height)),se<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const oe=M?Es:Math.floor,ye=oe(se*E.width),A=oe(se*E.height);m===void 0&&(m=S(ye,A));const F=k?S(ye,A):m;return F.width=ye,F.height=A,F.getContext("2d").drawImage(E,0,0,ye,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ye+"x"+A+")."),F}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function T(E){return Dr(E.width)&&Dr(E.height)}function b(E){return o?!1:E.wrapS!==Pt||E.wrapT!==Pt||E.minFilter!==at&&E.minFilter!==bt}function L(E,M){return E.generateMipmaps&&M&&E.minFilter!==at&&E.minFilter!==bt}function D(E){l.generateMipmap(E)}function v(E,M,k,ee,se=!1){if(o===!1)return M;if(E!==null){if(l[E]!==void 0)return l[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let oe=M;return M===6403&&(k===5126&&(oe=33326),k===5131&&(oe=33325),k===5121&&(oe=33321)),M===33319&&(k===5126&&(oe=33328),k===5131&&(oe=33327),k===5121&&(oe=33323)),M===6408&&(k===5126&&(oe=34836),k===5131&&(oe=34842),k===5121&&(oe=ee===ze&&se===!1?35907:32856),k===32819&&(oe=32854),k===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&t.get("EXT_color_buffer_float"),oe}function C(E,M,k){return L(E,k)===!0||E.isFramebufferTexture&&E.minFilter!==at&&E.minFilter!==bt?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function U(E){return E===at||E===Lr||E===Ms?9728:9729}function q(E){const M=E.target;M.removeEventListener("dispose",q),I(M),M.isVideoTexture&&x.delete(M)}function te(E){const M=E.target;M.removeEventListener("dispose",te),H(M)}function I(E){const M=i.get(E);if(M.__webglInit===void 0)return;const k=E.source,ee=p.get(k);if(ee){const se=ee[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&N(E),Object.keys(ee).length===0&&p.delete(k)}i.remove(E)}function N(E){const M=i.get(E);l.deleteTexture(M.__webglTexture);const k=E.source,ee=p.get(k);delete ee[M.__cacheKey],a.memory.textures--}function H(E){const M=E.texture,k=i.get(E),ee=i.get(M);if(ee.__webglTexture!==void 0&&(l.deleteTexture(ee.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)l.deleteFramebuffer(k.__webglFramebuffer[se]),k.__webglDepthbuffer&&l.deleteRenderbuffer(k.__webglDepthbuffer[se]);else{if(l.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&l.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&l.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let se=0;se<k.__webglColorRenderbuffer.length;se++)k.__webglColorRenderbuffer[se]&&l.deleteRenderbuffer(k.__webglColorRenderbuffer[se]);k.__webglDepthRenderbuffer&&l.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let se=0,oe=M.length;se<oe;se++){const ye=i.get(M[se]);ye.__webglTexture&&(l.deleteTexture(ye.__webglTexture),a.memory.textures--),i.remove(M[se])}i.remove(M),i.remove(E)}let Y=0;function K(){Y=0}function j(){const E=Y;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),Y+=1,E}function ie(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.encoding),M.join()}function Q(E,M){const k=i.get(E);if(E.isVideoTexture&&At(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(k,E,M);return}}n.bindTexture(3553,k.__webglTexture,33984+M)}function z(E,M){const k=i.get(E);if(E.version>0&&k.__version!==E.version){fe(k,E,M);return}n.bindTexture(35866,k.__webglTexture,33984+M)}function W(E,M){const k=i.get(E);if(E.version>0&&k.__version!==E.version){fe(k,E,M);return}n.bindTexture(32879,k.__webglTexture,33984+M)}function J(E,M){const k=i.get(E);if(E.version>0&&k.__version!==E.version){xe(k,E,M);return}n.bindTexture(34067,k.__webglTexture,33984+M)}const ne={[li]:10497,[Pt]:33071,[Ts]:33648},ae={[at]:9728,[Lr]:9984,[Ms]:9986,[bt]:9729,[nl]:9985,[Pn]:9987};function X(E,M,k){if(k?(l.texParameteri(E,10242,ne[M.wrapS]),l.texParameteri(E,10243,ne[M.wrapT]),(E===32879||E===35866)&&l.texParameteri(E,32882,ne[M.wrapR]),l.texParameteri(E,10240,ae[M.magFilter]),l.texParameteri(E,10241,ae[M.minFilter])):(l.texParameteri(E,10242,33071),l.texParameteri(E,10243,33071),(E===32879||E===35866)&&l.texParameteri(E,32882,33071),(M.wrapS!==Pt||M.wrapT!==Pt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),l.texParameteri(E,10240,U(M.magFilter)),l.texParameteri(E,10241,U(M.minFilter)),M.minFilter!==at&&M.minFilter!==bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const ee=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===at||M.minFilter!==Ms&&M.minFilter!==Pn||M.type===dn&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===Oi&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(l.texParameterf(E,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Le(E,M){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",q));const ee=M.source;let se=p.get(ee);se===void 0&&(se={},p.set(ee,se));const oe=ie(M);if(oe!==E.__cacheKey){se[oe]===void 0&&(se[oe]={texture:l.createTexture(),usedTimes:0},a.memory.textures++,k=!0),se[oe].usedTimes++;const ye=se[E.__cacheKey];ye!==void 0&&(se[E.__cacheKey].usedTimes--,ye.usedTimes===0&&N(M)),E.__cacheKey=oe,E.__webglTexture=se[oe].texture}return k}function fe(E,M,k){let ee=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=35866),M.isData3DTexture&&(ee=32879);const se=Le(E,M),oe=M.source;n.bindTexture(ee,E.__webglTexture,33984+k);const ye=i.get(oe);if(oe.version!==ye.__version||se===!0){n.activeTexture(33984+k),l.pixelStorei(37440,M.flipY),l.pixelStorei(37441,M.premultiplyAlpha),l.pixelStorei(3317,M.unpackAlignment),l.pixelStorei(37443,0);const A=b(M)&&T(M.image)===!1;let F=y(M.image,A,!1,u);F=yt(M,F);const ce=T(F)||o,ue=r.convert(M.format,M.encoding);let le=r.convert(M.type),me=v(M.internalFormat,ue,le,M.encoding,M.isVideoTexture);X(ee,M,ce);let pe;const Re=M.mipmaps,Pe=o&&M.isVideoTexture!==!0,He=ye.__version===void 0||se===!0,P=C(M,F,ce);if(M.isDepthTexture)me=6402,o?M.type===dn?me=36012:M.type===En?me=33190:M.type===si?me=35056:me=33189:M.type===dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Cn&&me===6402&&M.type!==il&&M.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=En,le=r.convert(M.type)),M.format===ci&&me===6402&&(me=34041,M.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=si,le=r.convert(M.type))),He&&(Pe?n.texStorage2D(3553,1,me,F.width,F.height):n.texImage2D(3553,0,me,F.width,F.height,0,ue,le,null));else if(M.isDataTexture)if(Re.length>0&&ce){Pe&&He&&n.texStorage2D(3553,P,me,Re[0].width,Re[0].height);for(let V=0,Z=Re.length;V<Z;V++)pe=Re[V],Pe?n.texSubImage2D(3553,V,0,0,pe.width,pe.height,ue,le,pe.data):n.texImage2D(3553,V,me,pe.width,pe.height,0,ue,le,pe.data);M.generateMipmaps=!1}else Pe?(He&&n.texStorage2D(3553,P,me,F.width,F.height),n.texSubImage2D(3553,0,0,0,F.width,F.height,ue,le,F.data)):n.texImage2D(3553,0,me,F.width,F.height,0,ue,le,F.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Pe&&He&&n.texStorage3D(35866,P,me,Re[0].width,Re[0].height,F.depth);for(let V=0,Z=Re.length;V<Z;V++)pe=Re[V],M.format!==Dt?ue!==null?Pe?n.compressedTexSubImage3D(35866,V,0,0,0,pe.width,pe.height,F.depth,ue,pe.data,0,0):n.compressedTexImage3D(35866,V,me,pe.width,pe.height,F.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?n.texSubImage3D(35866,V,0,0,0,pe.width,pe.height,F.depth,ue,le,pe.data):n.texImage3D(35866,V,me,pe.width,pe.height,F.depth,0,ue,le,pe.data)}else{Pe&&He&&n.texStorage2D(3553,P,me,Re[0].width,Re[0].height);for(let V=0,Z=Re.length;V<Z;V++)pe=Re[V],M.format!==Dt?ue!==null?Pe?n.compressedTexSubImage2D(3553,V,0,0,pe.width,pe.height,ue,pe.data):n.compressedTexImage2D(3553,V,me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?n.texSubImage2D(3553,V,0,0,pe.width,pe.height,ue,le,pe.data):n.texImage2D(3553,V,me,pe.width,pe.height,0,ue,le,pe.data)}else if(M.isDataArrayTexture)Pe?(He&&n.texStorage3D(35866,P,me,F.width,F.height,F.depth),n.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,ue,le,F.data)):n.texImage3D(35866,0,me,F.width,F.height,F.depth,0,ue,le,F.data);else if(M.isData3DTexture)Pe?(He&&n.texStorage3D(32879,P,me,F.width,F.height,F.depth),n.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,ue,le,F.data)):n.texImage3D(32879,0,me,F.width,F.height,F.depth,0,ue,le,F.data);else if(M.isFramebufferTexture){if(He)if(Pe)n.texStorage2D(3553,P,me,F.width,F.height);else{let V=F.width,Z=F.height;for(let he=0;he<P;he++)n.texImage2D(3553,he,me,V,Z,0,ue,le,null),V>>=1,Z>>=1}}else if(Re.length>0&&ce){Pe&&He&&n.texStorage2D(3553,P,me,Re[0].width,Re[0].height);for(let V=0,Z=Re.length;V<Z;V++)pe=Re[V],Pe?n.texSubImage2D(3553,V,0,0,ue,le,pe):n.texImage2D(3553,V,me,ue,le,pe);M.generateMipmaps=!1}else Pe?(He&&n.texStorage2D(3553,P,me,F.width,F.height),n.texSubImage2D(3553,0,0,0,ue,le,F)):n.texImage2D(3553,0,me,ue,le,F);L(M,ce)&&D(ee),ye.__version=oe.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function xe(E,M,k){if(M.image.length!==6)return;const ee=Le(E,M),se=M.source;n.bindTexture(34067,E.__webglTexture,33984+k);const oe=i.get(se);if(se.version!==oe.__version||ee===!0){n.activeTexture(33984+k),l.pixelStorei(37440,M.flipY),l.pixelStorei(37441,M.premultiplyAlpha),l.pixelStorei(3317,M.unpackAlignment),l.pixelStorei(37443,0);const ye=M.isCompressedTexture||M.image[0].isCompressedTexture,A=M.image[0]&&M.image[0].isDataTexture,F=[];for(let V=0;V<6;V++)!ye&&!A?F[V]=y(M.image[V],!1,!0,h):F[V]=A?M.image[V].image:M.image[V],F[V]=yt(M,F[V]);const ce=F[0],ue=T(ce)||o,le=r.convert(M.format,M.encoding),me=r.convert(M.type),pe=v(M.internalFormat,le,me,M.encoding),Re=o&&M.isVideoTexture!==!0,Pe=oe.__version===void 0||ee===!0;let He=C(M,ce,ue);X(34067,M,ue);let P;if(ye){Re&&Pe&&n.texStorage2D(34067,He,pe,ce.width,ce.height);for(let V=0;V<6;V++){P=F[V].mipmaps;for(let Z=0;Z<P.length;Z++){const he=P[Z];M.format!==Dt?le!==null?Re?n.compressedTexSubImage2D(34069+V,Z,0,0,he.width,he.height,le,he.data):n.compressedTexImage2D(34069+V,Z,pe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?n.texSubImage2D(34069+V,Z,0,0,he.width,he.height,le,me,he.data):n.texImage2D(34069+V,Z,pe,he.width,he.height,0,le,me,he.data)}}}else{P=M.mipmaps,Re&&Pe&&(P.length>0&&He++,n.texStorage2D(34067,He,pe,F[0].width,F[0].height));for(let V=0;V<6;V++)if(A){Re?n.texSubImage2D(34069+V,0,0,0,F[V].width,F[V].height,le,me,F[V].data):n.texImage2D(34069+V,0,pe,F[V].width,F[V].height,0,le,me,F[V].data);for(let Z=0;Z<P.length;Z++){const ge=P[Z].image[V].image;Re?n.texSubImage2D(34069+V,Z+1,0,0,ge.width,ge.height,le,me,ge.data):n.texImage2D(34069+V,Z+1,pe,ge.width,ge.height,0,le,me,ge.data)}}else{Re?n.texSubImage2D(34069+V,0,0,0,le,me,F[V]):n.texImage2D(34069+V,0,pe,le,me,F[V]);for(let Z=0;Z<P.length;Z++){const he=P[Z];Re?n.texSubImage2D(34069+V,Z+1,0,0,le,me,he.image[V]):n.texImage2D(34069+V,Z+1,pe,le,me,he.image[V])}}}L(M,ue)&&D(34067),oe.__version=se.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function de(E,M,k,ee,se){const oe=r.convert(k.format,k.encoding),ye=r.convert(k.type),A=v(k.internalFormat,oe,ye,k.encoding);i.get(M).__hasExternalTextures||(se===32879||se===35866?n.texImage3D(se,0,A,M.width,M.height,M.depth,0,oe,ye,null):n.texImage2D(se,0,A,M.width,M.height,0,oe,ye,null)),n.bindFramebuffer(36160,E),ke(M)?f.framebufferTexture2DMultisampleEXT(36160,ee,se,i.get(k).__webglTexture,0,je(M)):(se===3553||se>=34069&&se<=34074)&&l.framebufferTexture2D(36160,ee,se,i.get(k).__webglTexture,0),n.bindFramebuffer(36160,null)}function Ue(E,M,k){if(l.bindRenderbuffer(36161,E),M.depthBuffer&&!M.stencilBuffer){let ee=33189;if(k||ke(M)){const se=M.depthTexture;se&&se.isDepthTexture&&(se.type===dn?ee=36012:se.type===En&&(ee=33190));const oe=je(M);ke(M)?f.renderbufferStorageMultisampleEXT(36161,oe,ee,M.width,M.height):l.renderbufferStorageMultisample(36161,oe,ee,M.width,M.height)}else l.renderbufferStorage(36161,ee,M.width,M.height);l.framebufferRenderbuffer(36160,36096,36161,E)}else if(M.depthBuffer&&M.stencilBuffer){const ee=je(M);k&&ke(M)===!1?l.renderbufferStorageMultisample(36161,ee,35056,M.width,M.height):ke(M)?f.renderbufferStorageMultisampleEXT(36161,ee,35056,M.width,M.height):l.renderbufferStorage(36161,34041,M.width,M.height),l.framebufferRenderbuffer(36160,33306,36161,E)}else{const ee=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let se=0;se<ee.length;se++){const oe=ee[se],ye=r.convert(oe.format,oe.encoding),A=r.convert(oe.type),F=v(oe.internalFormat,ye,A,oe.encoding),ce=je(M);k&&ke(M)===!1?l.renderbufferStorageMultisample(36161,ce,F,M.width,M.height):ke(M)?f.renderbufferStorageMultisampleEXT(36161,ce,F,M.width,M.height):l.renderbufferStorage(36161,F,M.width,M.height)}}l.bindRenderbuffer(36161,null)}function we(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q(M.depthTexture,0);const ee=i.get(M.depthTexture).__webglTexture,se=je(M);if(M.depthTexture.format===Cn)ke(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,se):l.framebufferTexture2D(36160,36096,3553,ee,0);else if(M.depthTexture.format===ci)ke(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,se):l.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function ve(E){const M=i.get(E),k=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");we(M.__webglFramebuffer,E)}else if(k){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(36160,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=l.createRenderbuffer(),Ue(M.__webglDepthbuffer[ee],E,!1)}else n.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=l.createRenderbuffer(),Ue(M.__webglDepthbuffer,E,!1);n.bindFramebuffer(36160,null)}function nt(E,M,k){const ee=i.get(E);M!==void 0&&de(ee.__webglFramebuffer,E,E.texture,36064,3553),k!==void 0&&ve(E)}function Ze(E){const M=E.texture,k=i.get(E),ee=i.get(M);E.addEventListener("dispose",te),E.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=l.createTexture()),ee.__version=M.version,a.memory.textures++);const se=E.isWebGLCubeRenderTarget===!0,oe=E.isWebGLMultipleRenderTargets===!0,ye=T(E)||o;if(se){k.__webglFramebuffer=[];for(let A=0;A<6;A++)k.__webglFramebuffer[A]=l.createFramebuffer()}else{if(k.__webglFramebuffer=l.createFramebuffer(),oe)if(s.drawBuffers){const A=E.texture;for(let F=0,ce=A.length;F<ce;F++){const ue=i.get(A[F]);ue.__webglTexture===void 0&&(ue.__webglTexture=l.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&ke(E)===!1){const A=oe?M:[M];k.__webglMultisampledFramebuffer=l.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let F=0;F<A.length;F++){const ce=A[F];k.__webglColorRenderbuffer[F]=l.createRenderbuffer(),l.bindRenderbuffer(36161,k.__webglColorRenderbuffer[F]);const ue=r.convert(ce.format,ce.encoding),le=r.convert(ce.type),me=v(ce.internalFormat,ue,le,ce.encoding,E.isXRRenderTarget===!0),pe=je(E);l.renderbufferStorageMultisample(36161,pe,me,E.width,E.height),l.framebufferRenderbuffer(36160,36064+F,36161,k.__webglColorRenderbuffer[F])}l.bindRenderbuffer(36161,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=l.createRenderbuffer(),Ue(k.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(36160,null)}}if(se){n.bindTexture(34067,ee.__webglTexture),X(34067,M,ye);for(let A=0;A<6;A++)de(k.__webglFramebuffer[A],E,M,36064,34069+A);L(M,ye)&&D(34067),n.unbindTexture()}else if(oe){const A=E.texture;for(let F=0,ce=A.length;F<ce;F++){const ue=A[F],le=i.get(ue);n.bindTexture(3553,le.__webglTexture),X(3553,ue,ye),de(k.__webglFramebuffer,E,ue,36064+F,3553),L(ue,ye)&&D(3553)}n.unbindTexture()}else{let A=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?A=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(A,ee.__webglTexture),X(A,M,ye),de(k.__webglFramebuffer,E,M,36064,A),L(M,ye)&&D(A),n.unbindTexture()}E.depthBuffer&&ve(E)}function Je(E){const M=T(E)||o,k=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0,se=k.length;ee<se;ee++){const oe=k[ee];if(L(oe,M)){const ye=E.isWebGLCubeRenderTarget?34067:3553,A=i.get(oe).__webglTexture;n.bindTexture(ye,A),D(ye),n.unbindTexture()}}}function ft(E){if(o&&E.samples>0&&ke(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],k=E.width,ee=E.height;let se=16384;const oe=[],ye=E.stencilBuffer?33306:36096,A=i.get(E),F=E.isWebGLMultipleRenderTargets===!0;if(F)for(let ce=0;ce<M.length;ce++)n.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+ce,36161,null),n.bindFramebuffer(36160,A.__webglFramebuffer),l.framebufferTexture2D(36009,36064+ce,3553,null,0);n.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,A.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){oe.push(36064+ce),E.depthBuffer&&oe.push(ye);const ue=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(ue===!1&&(E.depthBuffer&&(se|=256),E.stencilBuffer&&(se|=1024)),F&&l.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[ce]),ue===!0&&(l.invalidateFramebuffer(36008,[ye]),l.invalidateFramebuffer(36009,[ye])),F){const le=i.get(M[ce]).__webglTexture;l.framebufferTexture2D(36009,36064,3553,le,0)}l.blitFramebuffer(0,0,k,ee,0,0,k,ee,se,9728),g&&l.invalidateFramebuffer(36008,oe)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),F)for(let ce=0;ce<M.length;ce++){n.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+ce,36161,A.__webglColorRenderbuffer[ce]);const ue=i.get(M[ce]).__webglTexture;n.bindFramebuffer(36160,A.__webglFramebuffer),l.framebufferTexture2D(36009,36064+ce,3553,ue,0)}n.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function je(E){return Math.min(d,E.samples)}function ke(E){const M=i.get(E);return o&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function At(E){const M=a.render.frame;x.get(E)!==M&&(x.set(E,M),E.update())}function yt(E,M){const k=E.encoding,ee=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Pr||k!==In&&(k===ze?o===!1?t.has("EXT_sRGB")===!0&&ee===Dt?(E.format=Pr,E.minFilter=bt,E.generateMipmaps=!1):M=ll.sRGBToLinear(M):(ee!==Dt||se!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),M}this.allocateTextureUnit=j,this.resetTextureUnits=K,this.setTexture2D=Q,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=J,this.rebindTextures=nt,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ke}function kp(l,t,n){const i=n.isWebGL2;function s(r,a=null){let o;if(r===Dn)return 5121;if(r===_c)return 32819;if(r===xc)return 32820;if(r===pc)return 5120;if(r===mc)return 5122;if(r===il)return 5123;if(r===gc)return 5124;if(r===En)return 5125;if(r===dn)return 5126;if(r===Oi)return i?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===vc)return 6406;if(r===Dt)return 6408;if(r===bc)return 6409;if(r===Mc)return 6410;if(r===Cn)return 6402;if(r===ci)return 34041;if(r===yc)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Pr)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Sc)return 6403;if(r===wc)return 36244;if(r===Tc)return 33319;if(r===Ec)return 33320;if(r===Ac)return 36249;if(r===Us||r===Bs||r===zs||r===ks)if(a===ze)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Us)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ks)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Us)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ks)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ua||r===da||r===fa||r===pa)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ua)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===da)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ma||r===ga)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ma)return a===ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ga)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_a||r===xa||r===va||r===ya||r===ba||r===Ma||r===Sa||r===wa||r===Ta||r===Ea||r===Aa||r===Ca||r===La||r===Ra)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===_a)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xa)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===va)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ya)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ba)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ma)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sa)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wa)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ta)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ea)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Aa)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ca)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===La)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ra)return a===ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Pa)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Pa)return a===ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===si?i?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):l[r]!==void 0?l[r]:null}return{convert:s}}class Vp extends xt{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class An extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hp={type:"move"};class dr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const m of t.hand.values()){const p=n.getJointPose(m,i),_=this._getHandJoint(h,m);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],f=u.position.distanceTo(d.position),g=.02,x=.005;h.inputState.pinching&&f>g+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=g-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new An;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}class Gp extends lt{constructor(t,n,i,s,r,a,o,c,h,u){if(u=u!==void 0?u:Cn,u!==Cn&&u!==ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Cn&&(i=En),i===void 0&&u===ci&&(i=si),super(null,s,r,a,o,c,u,i,h),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:at,this.minFilter=c!==void 0?c:at,this.flipY=!1,this.generateMipmaps=!1}}class Wp extends Un{constructor(t,n){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=null,h=null,u=null,d=null,f=null,g=null;const x=n.getContextAttributes();let m=null,p=null;const _=[],S=[],y=new Set,T=new Map,b=new xt;b.layers.enable(1),b.viewport=new We;const L=new xt;L.layers.enable(2),L.viewport=new We;const D=[b,L],v=new Vp;v.layers.enable(1),v.layers.enable(2);let C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let W=_[z];return W===void 0&&(W=new dr,_[z]=W),W.getTargetRaySpace()},this.getControllerGrip=function(z){let W=_[z];return W===void 0&&(W=new dr,_[z]=W),W.getGripSpace()},this.getHand=function(z){let W=_[z];return W===void 0&&(W=new dr,_[z]=W),W.getHandSpace()};function q(z){const W=S.indexOf(z.inputSource);if(W===-1)return;const J=_[W];J!==void 0&&J.dispatchEvent({type:z.type,data:z.inputSource})}function te(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",I);for(let z=0;z<_.length;z++){const W=S[z];W!==null&&(S[z]=null,_[z].disconnect(W))}C=null,U=null,t.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,Q.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",te),s.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await n.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const W={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,W),s.updateRenderState({baseLayer:f}),p=new Nn(f.framebufferWidth,f.framebufferHeight,{format:Dt,type:Dn,encoding:t.outputEncoding,stencilBuffer:x.stencil})}else{let W=null,J=null,ne=null;x.depth&&(ne=x.stencil?35056:33190,W=x.stencil?ci:Cn,J=x.stencil?si:En);const ae={colorFormat:32856,depthFormat:ne,scaleFactor:r};u=new XRWebGLBinding(s,n),d=u.createProjectionLayer(ae),s.updateRenderState({layers:[d]}),p=new Nn(d.textureWidth,d.textureHeight,{format:Dt,type:Dn,depthTexture:new Gp(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:x.stencil,encoding:t.outputEncoding,samples:x.antialias?4:0});const X=t.properties.get(p);X.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),c=null,a=await s.requestReferenceSpace(o),Q.setContext(s),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function I(z){for(let W=0;W<z.removed.length;W++){const J=z.removed[W],ne=S.indexOf(J);ne>=0&&(S[ne]=null,_[ne].disconnect(J))}for(let W=0;W<z.added.length;W++){const J=z.added[W];let ne=S.indexOf(J);if(ne===-1){for(let X=0;X<_.length;X++)if(X>=S.length){S.push(J),ne=X;break}else if(S[X]===null){S[X]=J,ne=X;break}if(ne===-1)break}const ae=_[ne];ae&&ae.connect(J)}}const N=new R,H=new R;function Y(z,W,J){N.setFromMatrixPosition(W.matrixWorld),H.setFromMatrixPosition(J.matrixWorld);const ne=N.distanceTo(H),ae=W.projectionMatrix.elements,X=J.projectionMatrix.elements,Le=ae[14]/(ae[10]-1),fe=ae[14]/(ae[10]+1),xe=(ae[9]+1)/ae[5],de=(ae[9]-1)/ae[5],Ue=(ae[8]-1)/ae[0],we=(X[8]+1)/X[0],ve=Le*Ue,nt=Le*we,Ze=ne/(-Ue+we),Je=Ze*-Ue;W.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Je),z.translateZ(Ze),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const ft=Le+Ze,je=fe+Ze,ke=ve-Je,At=nt+(ne-Je),yt=xe*fe/je*ft,E=de*fe/je*ft;z.projectionMatrix.makePerspective(ke,At,yt,E,ft,je)}function K(z,W){W===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(W.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;v.near=L.near=b.near=z.near,v.far=L.far=b.far=z.far,(C!==v.near||U!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,U=v.far);const W=z.parent,J=v.cameras;K(v,W);for(let ae=0;ae<J.length;ae++)K(J[ae],W);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),z.matrix.copy(v.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const ne=z.children;for(let ae=0,X=ne.length;ae<X;ae++)ne[ae].updateMatrixWorld(!0);J.length===2?Y(v,b,L):v.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(z){d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.getPlanes=function(){return y};let j=null;function ie(z,W){if(h=W.getViewerPose(c||a),g=W,h!==null){const J=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let ne=!1;J.length!==v.cameras.length&&(v.cameras.length=0,ne=!0);for(let ae=0;ae<J.length;ae++){const X=J[ae];let Le=null;if(f!==null)Le=f.getViewport(X);else{const xe=u.getViewSubImage(d,X);Le=xe.viewport,ae===0&&(t.setRenderTargetTextures(p,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),t.setRenderTarget(p))}let fe=D[ae];fe===void 0&&(fe=new xt,fe.layers.enable(ae),fe.viewport=new We,D[ae]=fe),fe.matrix.fromArray(X.transform.matrix),fe.projectionMatrix.fromArray(X.projectionMatrix),fe.viewport.set(Le.x,Le.y,Le.width,Le.height),ae===0&&v.matrix.copy(fe.matrix),ne===!0&&v.cameras.push(fe)}}for(let J=0;J<_.length;J++){const ne=S[J],ae=_[J];ne!==null&&ae!==void 0&&ae.update(ne,W,c||a)}if(j&&j(z,W),W.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:W.detectedPlanes});let J=null;for(const ne of y)W.detectedPlanes.has(ne)||(J===null&&(J=[]),J.push(ne));if(J!==null)for(const ne of J)y.delete(ne),T.delete(ne),i.dispatchEvent({type:"planeremoved",data:ne});for(const ne of W.detectedPlanes)if(!y.has(ne))y.add(ne),T.set(ne,W.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ne});else{const ae=T.get(ne);ne.lastChangedTime>ae&&(T.set(ne,ne.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ne}))}}g=null}const Q=new _l;Q.setAnimationLoop(ie),this.setAnimationLoop=function(z){j=z},this.dispose=function(){}}}function Xp(l,t){function n(m,p){p.color.getRGB(m.fogColor.value,pl(l)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?o(m,p,_,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===It&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===It&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const T=l.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*T}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let S;p.map?S=p.map:p.specularMap?S=p.specularMap:p.displacementMap?S=p.displacementMap:p.normalMap?S=p.normalMap:p.bumpMap?S=p.bumpMap:p.roughnessMap?S=p.roughnessMap:p.metalnessMap?S=p.metalnessMap:p.alphaMap?S=p.alphaMap:p.emissiveMap?S=p.emissiveMap:p.clearcoatMap?S=p.clearcoatMap:p.clearcoatNormalMap?S=p.clearcoatNormalMap:p.clearcoatRoughnessMap?S=p.clearcoatRoughnessMap:p.iridescenceMap?S=p.iridescenceMap:p.iridescenceThicknessMap?S=p.iridescenceThicknessMap:p.specularIntensityMap?S=p.specularIntensityMap:p.specularColorMap?S=p.specularColorMap:p.transmissionMap?S=p.transmissionMap:p.thicknessMap?S=p.thicknessMap:p.sheenColorMap?S=p.sheenColorMap:p.sheenRoughnessMap&&(S=p.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),m.uvTransform.value.copy(S.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uv2Transform.value.copy(y.matrix))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,_,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=S*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix))}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===It&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $p(l,t,n,i){let s={},r={},a=[];const o=n.isWebGL2?l.getParameter(35375):0;function c(S,y){const T=y.program;i.uniformBlockBinding(S,T)}function h(S,y){let T=s[S.id];T===void 0&&(x(S),T=u(S),s[S.id]=T,S.addEventListener("dispose",p));const b=y.program;i.updateUBOMapping(S,b);const L=t.render.frame;r[S.id]!==L&&(f(S),r[S.id]=L)}function u(S){const y=d();S.__bindingPointIndex=y;const T=l.createBuffer(),b=S.__size,L=S.usage;return l.bindBuffer(35345,T),l.bufferData(35345,b,L),l.bindBuffer(35345,null),l.bindBufferBase(35345,y,T),T}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=s[S.id],T=S.uniforms,b=S.__cache;l.bindBuffer(35345,y);for(let L=0,D=T.length;L<D;L++){const v=T[L];if(g(v,L,b)===!0){const C=v.__offset,U=Array.isArray(v.value)?v.value:[v.value];let q=0;for(let te=0;te<U.length;te++){const I=U[te],N=m(I);typeof I=="number"?(v.__data[0]=I,l.bufferSubData(35345,C+q,v.__data)):I.isMatrix3?(v.__data[0]=I.elements[0],v.__data[1]=I.elements[1],v.__data[2]=I.elements[2],v.__data[3]=I.elements[0],v.__data[4]=I.elements[3],v.__data[5]=I.elements[4],v.__data[6]=I.elements[5],v.__data[7]=I.elements[0],v.__data[8]=I.elements[6],v.__data[9]=I.elements[7],v.__data[10]=I.elements[8],v.__data[11]=I.elements[0]):(I.toArray(v.__data,q),q+=N.storage/Float32Array.BYTES_PER_ELEMENT)}l.bufferSubData(35345,C,v.__data)}}l.bindBuffer(35345,null)}function g(S,y,T){const b=S.value;if(T[y]===void 0){if(typeof b=="number")T[y]=b;else{const L=Array.isArray(b)?b:[b],D=[];for(let v=0;v<L.length;v++)D.push(L[v].clone());T[y]=D}return!0}else if(typeof b=="number"){if(T[y]!==b)return T[y]=b,!0}else{const L=Array.isArray(T[y])?T[y]:[T[y]],D=Array.isArray(b)?b:[b];for(let v=0;v<L.length;v++){const C=L[v];if(C.equals(D[v])===!1)return C.copy(D[v]),!0}}return!1}function x(S){const y=S.uniforms;let T=0;const b=16;let L=0;for(let D=0,v=y.length;D<v;D++){const C=y[D],U={boundary:0,storage:0},q=Array.isArray(C.value)?C.value:[C.value];for(let te=0,I=q.length;te<I;te++){const N=q[te],H=m(N);U.boundary+=H.boundary,U.storage+=H.storage}if(C.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=T,D>0){L=T%b;const te=b-L;L!==0&&te-U.boundary<0&&(T+=b-L,C.__offset=T)}T+=U.storage}return L=T%b,L>0&&(T+=b-L),S.__size=T,S.__cache={},this}function m(S){const y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),l.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function _(){for(const S in s)l.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:h,dispose:_}}function jp(){const l=ki("canvas");return l.style.display="block",l}function Ml(l={}){this.isWebGLRenderer=!0;const t=l.canvas!==void 0?l.canvas:jp(),n=l.context!==void 0?l.context:null,i=l.depth!==void 0?l.depth:!0,s=l.stencil!==void 0?l.stencil:!0,r=l.antialias!==void 0?l.antialias:!1,a=l.premultipliedAlpha!==void 0?l.premultipliedAlpha:!0,o=l.preserveDrawingBuffer!==void 0?l.preserveDrawingBuffer:!1,c=l.powerPreference!==void 0?l.powerPreference:"default",h=l.failIfMajorPerformanceCaveat!==void 0?l.failIfMajorPerformanceCaveat:!1;let u;n!==null?u=n.getContextAttributes().alpha:u=l.alpha!==void 0?l.alpha:!1;let d=null,f=null;const g=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=In,this.physicallyCorrectLights=!1,this.toneMapping=sn,this.toneMappingExposure=1;const m=this;let p=!1,_=0,S=0,y=null,T=-1,b=null;const L=new We,D=new We;let v=null,C=t.width,U=t.height,q=1,te=null,I=null;const N=new We(0,0,C,U),H=new We(0,0,C,U);let Y=!1;const K=new Wr;let j=!1,ie=!1,Q=null;const z=new Ce,W=new be,J=new R,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return y===null?q:1}let X=n;function Le(w,B){for(let G=0;G<w.length;G++){const O=w[G],$=t.getContext(O,B);if($!==null)return $}return null}try{const w={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vr}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",Re,!1),X===null){const B=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&B.shift(),X=Le(B,w),X===null)throw Le(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let fe,xe,de,Ue,we,ve,nt,Ze,Je,ft,je,ke,At,yt,E,M,k,ee,se,oe,ye,A,F,ce;function ue(){fe=new sf(X),xe=new Zd(X,fe,l),fe.init(xe),A=new kp(X,fe,xe),de=new Bp(X,fe,xe),Ue=new of,we=new wp,ve=new zp(X,fe,de,we,xe,A,Ue),nt=new Qd(m),Ze=new nf(m),Je=new mh(X,xe),F=new Yd(X,fe,Je,xe),ft=new rf(X,Je,Ue,F),je=new uf(X,ft,Je,Ue),se=new hf(X,xe,ve),M=new Jd(we),ke=new Sp(m,nt,Ze,fe,xe,F,M),At=new Xp(m,we),yt=new Ep,E=new Dp(fe,xe),ee=new qd(m,nt,Ze,de,je,u,a),k=new Up(m,je,xe),ce=new $p(X,Ue,xe,de),oe=new Kd(X,fe,Ue,xe),ye=new af(X,fe,Ue,xe),Ue.programs=ke.programs,m.capabilities=xe,m.extensions=fe,m.properties=we,m.renderLists=yt,m.shadowMap=k,m.state=de,m.info=Ue}ue();const le=new Wp(m,X);this.xr=le,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const w=fe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=fe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(C,U,!1))},this.getSize=function(w){return w.set(C,U)},this.setSize=function(w,B,G){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=w,U=B,t.width=Math.floor(w*q),t.height=Math.floor(B*q),G!==!1&&(t.style.width=w+"px",t.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(C*q,U*q).floor()},this.setDrawingBufferSize=function(w,B,G){C=w,U=B,q=G,t.width=Math.floor(w*G),t.height=Math.floor(B*G),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(N)},this.setViewport=function(w,B,G,O){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,B,G,O),de.viewport(L.copy(N).multiplyScalar(q).floor())},this.getScissor=function(w){return w.copy(H)},this.setScissor=function(w,B,G,O){w.isVector4?H.set(w.x,w.y,w.z,w.w):H.set(w,B,G,O),de.scissor(D.copy(H).multiplyScalar(q).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(w){de.setScissorTest(Y=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){I=w},this.getClearColor=function(w){return w.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(w=!0,B=!0,G=!0){let O=0;w&&(O|=16384),B&&(O|=256),G&&(O|=1024),X.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),yt.dispose(),E.dispose(),we.dispose(),nt.dispose(),Ze.dispose(),je.dispose(),F.dispose(),ce.dispose(),ke.dispose(),le.dispose(),le.removeEventListener("sessionstart",he),le.removeEventListener("sessionend",ge),Q&&(Q.dispose(),Q=null),Be.stop()};function me(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const w=Ue.autoReset,B=k.enabled,G=k.autoUpdate,O=k.needsUpdate,$=k.type;ue(),Ue.autoReset=w,k.enabled=B,k.autoUpdate=G,k.needsUpdate=O,k.type=$}function Re(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Pe(w){const B=w.target;B.removeEventListener("dispose",Pe),He(B)}function He(w){P(w),we.remove(w)}function P(w){const B=we.get(w).programs;B!==void 0&&(B.forEach(function(G){ke.releaseProgram(G)}),w.isShaderMaterial&&ke.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,G,O,$,_e){B===null&&(B=ne);const Se=$.isMesh&&$.matrixWorld.determinant()<0,Ee=Fl(w,B,G,O,$);de.setMaterial(O,Se);let Ae=G.index,Oe=1;O.wireframe===!0&&(Ae=ft.getWireframeAttribute(G),Oe=2);const De=G.drawRange,Ie=G.attributes.position;let qe=De.start*Oe,Mt=(De.start+De.count)*Oe;_e!==null&&(qe=Math.max(qe,_e.start*Oe),Mt=Math.min(Mt,(_e.start+_e.count)*Oe)),Ae!==null?(qe=Math.max(qe,0),Mt=Math.min(Mt,Ae.count)):Ie!=null&&(qe=Math.max(qe,0),Mt=Math.min(Mt,Ie.count));const $t=Mt-qe;if($t<0||$t===1/0)return;F.setup($,O,Ee,G,Ae);let _n,Ye=oe;if(Ae!==null&&(_n=Je.get(Ae),Ye=ye,Ye.setIndex(_n)),$.isMesh)O.wireframe===!0?(de.setLineWidth(O.wireframeLinewidth*ae()),Ye.setMode(1)):Ye.setMode(4);else if($.isLine){let Ne=O.linewidth;Ne===void 0&&(Ne=1),de.setLineWidth(Ne*ae()),$.isLineSegments?Ye.setMode(1):$.isLineLoop?Ye.setMode(2):Ye.setMode(3)}else $.isPoints?Ye.setMode(0):$.isSprite&&Ye.setMode(4);if($.isInstancedMesh)Ye.renderInstances(qe,$t,$.count);else if(G.isInstancedBufferGeometry){const Ne=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Is=Math.min(G.instanceCount,Ne);Ye.renderInstances(qe,$t,Is)}else Ye.render(qe,$t)},this.compile=function(w,B){function G(O,$,_e){O.transparent===!0&&O.side===Yi?(O.side=It,O.needsUpdate=!0,Ct(O,$,_e),O.side=mn,O.needsUpdate=!0,Ct(O,$,_e),O.side=Yi):Ct(O,$,_e)}f=E.get(w),f.init(),x.push(f),w.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(m.physicallyCorrectLights),w.traverse(function(O){const $=O.material;if($)if(Array.isArray($))for(let _e=0;_e<$.length;_e++){const Se=$[_e];G(Se,w,O)}else G($,w,O)}),x.pop(),f=null};let V=null;function Z(w){V&&V(w)}function he(){Be.stop()}function ge(){Be.start()}const Be=new _l;Be.setAnimationLoop(Z),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(w){V=w,le.setAnimationLoop(w),w===null?Be.stop():Be.start()},le.addEventListener("sessionstart",he),le.addEventListener("sessionend",ge),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(B),B=le.getCamera()),w.isScene===!0&&w.onBeforeRender(m,w,B,y),f=E.get(w,x.length),f.init(),x.push(f),z.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(z),ie=this.localClippingEnabled,j=M.init(this.clippingPlanes,ie,B),d=yt.get(w,g.length),d.init(),g.push(d),it(w,B,0,m.sortObjects),d.finish(),m.sortObjects===!0&&d.sort(te,I),j===!0&&M.beginShadows();const G=f.state.shadowsArray;if(k.render(G,w,B),j===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(d,w),f.setupLights(m.physicallyCorrectLights),B.isArrayCamera){const O=B.cameras;for(let $=0,_e=O.length;$<_e;$++){const Se=O[$];ct(d,w,Se,Se.viewport)}}else ct(d,w,B);y!==null&&(ve.updateMultisampleRenderTarget(y),ve.updateRenderTargetMipmap(y)),w.isScene===!0&&w.onAfterRender(m,w,B),F.resetDefaultState(),T=-1,b=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function it(w,B,G,O){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){O&&J.setFromMatrixPosition(w.matrixWorld).applyMatrix4(z);const Se=je.update(w),Ee=w.material;Ee.visible&&d.push(w,Se,Ee,G,J.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Ue.render.frame&&(w.skeleton.update(),w.skeleton.frame=Ue.render.frame),!w.frustumCulled||K.intersectsObject(w))){O&&J.setFromMatrixPosition(w.matrixWorld).applyMatrix4(z);const Se=je.update(w),Ee=w.material;if(Array.isArray(Ee)){const Ae=Se.groups;for(let Oe=0,De=Ae.length;Oe<De;Oe++){const Ie=Ae[Oe],qe=Ee[Ie.materialIndex];qe&&qe.visible&&d.push(w,Se,qe,G,J.z,Ie)}}else Ee.visible&&d.push(w,Se,Ee,G,J.z,null)}}const _e=w.children;for(let Se=0,Ee=_e.length;Se<Ee;Se++)it(_e[Se],B,G,O)}function ct(w,B,G,O){const $=w.opaque,_e=w.transmissive,Se=w.transparent;f.setupLightsView(G),_e.length>0&&gn($,B,G),O&&de.viewport(L.copy(O)),$.length>0&&Xe($,B,G),_e.length>0&&Xe(_e,B,G),Se.length>0&&Xe(Se,B,G),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function gn(w,B,G){const O=xe.isWebGL2;Q===null&&(Q=new Nn(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Oi:Dn,minFilter:Pn,samples:O&&r===!0?4:0})),m.getDrawingBufferSize(W),O?Q.setSize(W.x,W.y):Q.setSize(Es(W.x),Es(W.y));const $=m.getRenderTarget();m.setRenderTarget(Q),m.clear();const _e=m.toneMapping;m.toneMapping=sn,Xe(w,B,G),m.toneMapping=_e,ve.updateMultisampleRenderTarget(Q),ve.updateRenderTargetMipmap(Q),m.setRenderTarget($)}function Xe(w,B,G){const O=B.isScene===!0?B.overrideMaterial:null;for(let $=0,_e=w.length;$<_e;$++){const Se=w[$],Ee=Se.object,Ae=Se.geometry,Oe=O===null?Se.material:O,De=Se.group;Ee.layers.test(G.layers)&&Xt(Ee,B,G,Ae,Oe,De)}}function Xt(w,B,G,O,$,_e){w.onBeforeRender(m,B,G,O,$,_e),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(m,B,G,O,w,_e),$.transparent===!0&&$.side===Yi?($.side=It,$.needsUpdate=!0,m.renderBufferDirect(G,B,O,$,w,_e),$.side=mn,$.needsUpdate=!0,m.renderBufferDirect(G,B,O,$,w,_e),$.side=Yi):m.renderBufferDirect(G,B,O,$,w,_e),w.onAfterRender(m,B,G,O,$,_e)}function Ct(w,B,G){B.isScene!==!0&&(B=ne);const O=we.get(w),$=f.state.lights,_e=f.state.shadowsArray,Se=$.state.version,Ee=ke.getParameters(w,$.state,_e,B,G),Ae=ke.getProgramCacheKey(Ee);let Oe=O.programs;O.environment=w.isMeshStandardMaterial?B.environment:null,O.fog=B.fog,O.envMap=(w.isMeshStandardMaterial?Ze:nt).get(w.envMap||O.environment),Oe===void 0&&(w.addEventListener("dispose",Pe),Oe=new Map,O.programs=Oe);let De=Oe.get(Ae);if(De!==void 0){if(O.currentProgram===De&&O.lightsStateVersion===Se)return na(w,Ee),De}else Ee.uniforms=ke.getUniforms(w),w.onBuild(G,Ee,m),w.onBeforeCompile(Ee,m),De=ke.acquireProgram(Ee,Ae),Oe.set(Ae,De),O.uniforms=Ee.uniforms;const Ie=O.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=M.uniform),na(w,Ee),O.needsLights=Ul(w),O.lightsStateVersion=Se,O.needsLights&&(Ie.ambientLightColor.value=$.state.ambient,Ie.lightProbe.value=$.state.probe,Ie.directionalLights.value=$.state.directional,Ie.directionalLightShadows.value=$.state.directionalShadow,Ie.spotLights.value=$.state.spot,Ie.spotLightShadows.value=$.state.spotShadow,Ie.rectAreaLights.value=$.state.rectArea,Ie.ltc_1.value=$.state.rectAreaLTC1,Ie.ltc_2.value=$.state.rectAreaLTC2,Ie.pointLights.value=$.state.point,Ie.pointLightShadows.value=$.state.pointShadow,Ie.hemisphereLights.value=$.state.hemi,Ie.directionalShadowMap.value=$.state.directionalShadowMap,Ie.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ie.spotShadowMap.value=$.state.spotShadowMap,Ie.spotLightMatrix.value=$.state.spotLightMatrix,Ie.spotLightMap.value=$.state.spotLightMap,Ie.pointShadowMap.value=$.state.pointShadowMap,Ie.pointShadowMatrix.value=$.state.pointShadowMatrix);const qe=De.getUniforms(),Mt=ws.seqWithValue(qe.seq,Ie);return O.currentProgram=De,O.uniformsList=Mt,De}function na(w,B){const G=we.get(w);G.outputEncoding=B.outputEncoding,G.instancing=B.instancing,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function Fl(w,B,G,O,$){B.isScene!==!0&&(B=ne),ve.resetTextureUnits();const _e=B.fog,Se=O.isMeshStandardMaterial?B.environment:null,Ee=y===null?m.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:In,Ae=(O.isMeshStandardMaterial?Ze:nt).get(O.envMap||Se),Oe=O.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,De=!!O.normalMap&&!!G.attributes.tangent,Ie=!!G.morphAttributes.position,qe=!!G.morphAttributes.normal,Mt=!!G.morphAttributes.color,$t=O.toneMapped?m.toneMapping:sn,_n=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ye=_n!==void 0?_n.length:0,Ne=we.get(O),Is=f.state.lights;if(j===!0&&(ie===!0||w!==b)){const St=w===b&&O.id===T;M.setState(O,w,St)}let st=!1;O.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Is.state.version||Ne.outputEncoding!==Ee||$.isInstancedMesh&&Ne.instancing===!1||!$.isInstancedMesh&&Ne.instancing===!0||$.isSkinnedMesh&&Ne.skinning===!1||!$.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Ae||O.fog===!0&&Ne.fog!==_e||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==M.numPlanes||Ne.numIntersection!==M.numIntersection)||Ne.vertexAlphas!==Oe||Ne.vertexTangents!==De||Ne.morphTargets!==Ie||Ne.morphNormals!==qe||Ne.morphColors!==Mt||Ne.toneMapping!==$t||xe.isWebGL2===!0&&Ne.morphTargetsCount!==Ye)&&(st=!0):(st=!0,Ne.__version=O.version);let xn=Ne.currentProgram;st===!0&&(xn=Ct(O,B,$));let ia=!1,xi=!1,Ns=!1;const pt=xn.getUniforms(),vn=Ne.uniforms;if(de.useProgram(xn.program)&&(ia=!0,xi=!0,Ns=!0),O.id!==T&&(T=O.id,xi=!0),ia||b!==w){if(pt.setValue(X,"projectionMatrix",w.projectionMatrix),xe.logarithmicDepthBuffer&&pt.setValue(X,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),b!==w&&(b=w,xi=!0,Ns=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const St=pt.map.cameraPosition;St!==void 0&&St.setValue(X,J.setFromMatrixPosition(w.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&pt.setValue(X,"isOrthographic",w.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||$.isSkinnedMesh)&&pt.setValue(X,"viewMatrix",w.matrixWorldInverse)}if($.isSkinnedMesh){pt.setOptional(X,$,"bindMatrix"),pt.setOptional(X,$,"bindMatrixInverse");const St=$.skeleton;St&&(xe.floatVertexTextures?(St.boneTexture===null&&St.computeBoneTexture(),pt.setValue(X,"boneTexture",St.boneTexture,ve),pt.setValue(X,"boneTextureSize",St.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Fs=G.morphAttributes;if((Fs.position!==void 0||Fs.normal!==void 0||Fs.color!==void 0&&xe.isWebGL2===!0)&&se.update($,G,O,xn),(xi||Ne.receiveShadow!==$.receiveShadow)&&(Ne.receiveShadow=$.receiveShadow,pt.setValue(X,"receiveShadow",$.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(vn.envMap.value=Ae,vn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),xi&&(pt.setValue(X,"toneMappingExposure",m.toneMappingExposure),Ne.needsLights&&Ol(vn,Ns),_e&&O.fog===!0&&At.refreshFogUniforms(vn,_e),At.refreshMaterialUniforms(vn,O,q,U,Q),ws.upload(X,Ne.uniformsList,vn,ve)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ws.upload(X,Ne.uniformsList,vn,ve),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&pt.setValue(X,"center",$.center),pt.setValue(X,"modelViewMatrix",$.modelViewMatrix),pt.setValue(X,"normalMatrix",$.normalMatrix),pt.setValue(X,"modelMatrix",$.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const St=O.uniformsGroups;for(let Os=0,Bl=St.length;Os<Bl;Os++)if(xe.isWebGL2){const sa=St[Os];ce.update(sa,xn),ce.bind(sa,xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xn}function Ol(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Ul(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(w,B,G){we.get(w.texture).__webglTexture=B,we.get(w.depthTexture).__webglTexture=G;const O=we.get(w);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=G===void 0,O.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,B){const G=we.get(w);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,G=0){y=w,_=B,S=G;let O=!0,$=null,_e=!1,Se=!1;if(w){const Ae=we.get(w);Ae.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),O=!1):Ae.__webglFramebuffer===void 0?ve.setupRenderTarget(w):Ae.__hasExternalTextures&&ve.rebindTextures(w,we.get(w.texture).__webglTexture,we.get(w.depthTexture).__webglTexture);const Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Se=!0);const De=we.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?($=De[B],_e=!0):xe.isWebGL2&&w.samples>0&&ve.useMultisampledRTT(w)===!1?$=we.get(w).__webglMultisampledFramebuffer:$=De,L.copy(w.viewport),D.copy(w.scissor),v=w.scissorTest}else L.copy(N).multiplyScalar(q).floor(),D.copy(H).multiplyScalar(q).floor(),v=Y;if(de.bindFramebuffer(36160,$)&&xe.drawBuffers&&O&&de.drawBuffers(w,$),de.viewport(L),de.scissor(D),de.setScissorTest(v),_e){const Ae=we.get(w.texture);X.framebufferTexture2D(36160,36064,34069+B,Ae.__webglTexture,G)}else if(Se){const Ae=we.get(w.texture),Oe=B||0;X.framebufferTextureLayer(36160,36064,Ae.__webglTexture,G||0,Oe)}T=-1},this.readRenderTargetPixels=function(w,B,G,O,$,_e,Se){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=we.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){de.bindFramebuffer(36160,Ee);try{const Ae=w.texture,Oe=Ae.format,De=Ae.type;if(Oe!==Dt&&A.convert(Oe)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=De===Oi&&(fe.has("EXT_color_buffer_half_float")||xe.isWebGL2&&fe.has("EXT_color_buffer_float"));if(De!==Dn&&A.convert(De)!==X.getParameter(35738)&&!(De===dn&&(xe.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-O&&G>=0&&G<=w.height-$&&X.readPixels(B,G,O,$,A.convert(Oe),A.convert(De),_e)}finally{const Ae=y!==null?we.get(y).__webglFramebuffer:null;de.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(w,B,G=0){const O=Math.pow(2,-G),$=Math.floor(B.image.width*O),_e=Math.floor(B.image.height*O);ve.setTexture2D(B,0),X.copyTexSubImage2D(3553,G,0,0,w.x,w.y,$,_e),de.unbindTexture()},this.copyTextureToTexture=function(w,B,G,O=0){const $=B.image.width,_e=B.image.height,Se=A.convert(G.format),Ee=A.convert(G.type);ve.setTexture2D(G,0),X.pixelStorei(37440,G.flipY),X.pixelStorei(37441,G.premultiplyAlpha),X.pixelStorei(3317,G.unpackAlignment),B.isDataTexture?X.texSubImage2D(3553,O,w.x,w.y,$,_e,Se,Ee,B.image.data):B.isCompressedTexture?X.compressedTexSubImage2D(3553,O,w.x,w.y,B.mipmaps[0].width,B.mipmaps[0].height,Se,B.mipmaps[0].data):X.texSubImage2D(3553,O,w.x,w.y,Se,Ee,B.image),O===0&&G.generateMipmaps&&X.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(w,B,G,O,$=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=w.max.x-w.min.x+1,Se=w.max.y-w.min.y+1,Ee=w.max.z-w.min.z+1,Ae=A.convert(O.format),Oe=A.convert(O.type);let De;if(O.isData3DTexture)ve.setTexture3D(O,0),De=32879;else if(O.isDataArrayTexture)ve.setTexture2DArray(O,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,O.flipY),X.pixelStorei(37441,O.premultiplyAlpha),X.pixelStorei(3317,O.unpackAlignment);const Ie=X.getParameter(3314),qe=X.getParameter(32878),Mt=X.getParameter(3316),$t=X.getParameter(3315),_n=X.getParameter(32877),Ye=G.isCompressedTexture?G.mipmaps[0]:G.image;X.pixelStorei(3314,Ye.width),X.pixelStorei(32878,Ye.height),X.pixelStorei(3316,w.min.x),X.pixelStorei(3315,w.min.y),X.pixelStorei(32877,w.min.z),G.isDataTexture||G.isData3DTexture?X.texSubImage3D(De,$,B.x,B.y,B.z,_e,Se,Ee,Ae,Oe,Ye.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(De,$,B.x,B.y,B.z,_e,Se,Ee,Ae,Ye.data)):X.texSubImage3D(De,$,B.x,B.y,B.z,_e,Se,Ee,Ae,Oe,Ye),X.pixelStorei(3314,Ie),X.pixelStorei(32878,qe),X.pixelStorei(3316,Mt),X.pixelStorei(3315,$t),X.pixelStorei(32877,_n),$===0&&O.generateMipmaps&&X.generateMipmap(De),de.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?ve.setTextureCube(w,0):w.isData3DTexture?ve.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ve.setTexture2DArray(w,0):ve.setTexture2D(w,0),de.unbindTexture()},this.resetState=function(){_=0,S=0,y=null,de.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class qp extends Ml{}qp.prototype.isWebGL1Renderer=!0;class Yp extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Kp{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Rr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Bt()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bt()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bt()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gt=new R;class qr{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyMatrix4(t),this.setXYZ(n,gt.x,gt.y,gt.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.applyNormalMatrix(t),this.setXYZ(n,gt.x,gt.y,gt.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)gt.fromBufferAttribute(this,n),gt.transformDirection(t),this.setXYZ(n,gt.x,gt.y,gt.z);return this}setX(t,n){return this.normalized&&(n=Ge(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=tn(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=tn(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=tn(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=tn(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ge(n,this.array),i=Ge(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ge(n,this.array),i=Ge(i,this.array),s=Ge(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=Ge(n,this.array),i=Ge(i,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new vt(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new qr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const go=new R,_o=new We,xo=new We,Zp=new R,vo=new Ce;class Jp extends ot{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce}copy(t,n){return super.copy(t,n),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,n){this.skeleton=t,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new We,n=this.geometry.attributes.skinWeight;for(let i=0,s=n.count;i<s;i++){t.fromBufferAttribute(n,i);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),n.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,n){const i=this.skeleton,s=this.geometry;_o.fromBufferAttribute(s.attributes.skinIndex,t),xo.fromBufferAttribute(s.attributes.skinWeight,t),go.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let r=0;r<4;r++){const a=xo.getComponent(r);if(a!==0){const o=_o.getComponent(r);vo.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),n.addScaledVector(Zp.copy(go).applyMatrix4(vo),a)}}return n.applyMatrix4(this.bindMatrixInverse)}}class Sl extends $e{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qp extends lt{constructor(t=null,n=1,i=1,s,r,a,o,c,h=at,u=at,d,f){super(null,a,o,c,h,u,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yo=new Ce,em=new Ce;class Yr{constructor(t=[],n=[]){this.uuid=Bt(),this.bones=t.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const t=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),n.length===0)this.calculateInverses();else if(t.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,n=this.bones.length;t<n;t++){const i=new Ce;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,n=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:em;yo.multiplyMatrices(o,n[r]),yo.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Yr(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=rl(t),t=Math.max(t,4);const n=new Float32Array(t*t*4);n.set(this.boneMatrices);const i=new Qp(n,t,t,Dt,dn);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this.boneTextureSize=t,this}getBoneByName(t){for(let n=0,i=this.bones.length;n<i;n++){const s=this.bones[n];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,n){this.uuid=t.uuid;for(let i=0,s=t.bones.length;i<s;i++){const r=t.bones[i];let a=n[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Sl),this.bones.push(a),this.boneInverses.push(new Ce().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const n=this.bones,i=this.boneInverses;for(let s=0,r=n.length;s<r;s++){const a=n[s];t.bones.push(a.uuid);const o=i[s];t.boneInverses.push(o.toArray())}return t}}class bo extends vt{constructor(t,n,i,s=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Mo=new Ce,So=new Ce,ps=[],tm=new Ce,Ei=new ot;class nm extends ot{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new bo(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let s=0;s<i;s++)this.setMatrixAt(s,tm)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}raycast(t,n){const i=this.matrixWorld,s=this.count;if(Ei.geometry=this.geometry,Ei.material=this.material,Ei.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,Mo),So.multiplyMatrices(i,Mo),Ei.matrixWorld=So,Ei.raycast(t,ps);for(let a=0,o=ps.length;a<o;a++){const c=ps[a];c.instanceId=r,c.object=this,n.push(c)}ps.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new bo(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class wl extends Nt{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wo=new R,To=new R,Eo=new Ce,fr=new Gr,ms=new pi;class Kr extends $e{constructor(t=new zt,n=new wl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)wo.fromBufferAttribute(n,s-1),To.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=wo.distanceTo(To);t.setAttribute("lineDistance",new dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere),ms.applyMatrix4(s),ms.radius+=r,t.ray.intersectsSphere(ms)===!1)return;Eo.copy(s).invert(),fr.copy(t.ray).applyMatrix4(Eo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=new R,u=new R,d=new R,f=new R,g=this.isLineSegments?2:1,x=i.index,p=i.attributes.position;if(x!==null){const _=Math.max(0,a.start),S=Math.min(x.count,a.start+a.count);for(let y=_,T=S-1;y<T;y+=g){const b=x.getX(y),L=x.getX(y+1);if(h.fromBufferAttribute(p,b),u.fromBufferAttribute(p,L),fr.distanceSqToSegment(h,u,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const v=t.ray.origin.distanceTo(f);v<t.near||v>t.far||n.push({distance:v,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),S=Math.min(p.count,a.start+a.count);for(let y=_,T=S-1;y<T;y+=g){if(h.fromBufferAttribute(p,y),u.fromBufferAttribute(p,y+1),fr.distanceSqToSegment(h,u,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(f);L<t.near||L>t.far||n.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Ao=new R,Co=new R;class im extends Kr{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)Ao.fromBufferAttribute(n,s),Co.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ao.distanceTo(Co);t.setAttribute("lineDistance",new dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sm extends Kr{constructor(t,n){super(t,n),this.isLineLoop=!0,this.type="LineLoop"}}class Tl extends Nt{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lo=new Ce,Nr=new Gr,gs=new pi,_s=new R;class rm extends $e{constructor(t=new zt,n=new Tl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere),gs.applyMatrix4(s),gs.radius+=r,t.ray.intersectsSphere(gs)===!1)return;Lo.copy(s).invert(),Nr.copy(t.ray).applyMatrix4(Lo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g;x<m;x++){const p=h.getX(x);_s.fromBufferAttribute(d,p),Ro(_s,p,c,s,t,n,this)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g;x<m;x++)_s.fromBufferAttribute(d,x),Ro(_s,x,c,s,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ro(l,t,n,i,s,r,a){const o=Nr.distanceSqToPoint(l);if(o<n){const c=new R;Nr.closestPointToPoint(l,c),c.applyMatrix4(i);const h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class Zr extends zt{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let h=0;const u=[],d=new R,f=new R,g=[],x=[],m=[],p=[];for(let _=0;_<=i;_++){const S=[],y=_/i;let T=0;_==0&&a==0?T=.5/n:_==i&&c==Math.PI&&(T=-.5/n);for(let b=0;b<=n;b++){const L=b/n;d.x=-t*Math.cos(s+L*r)*Math.sin(a+y*o),d.y=t*Math.cos(a+y*o),d.z=t*Math.sin(s+L*r)*Math.sin(a+y*o),x.push(d.x,d.y,d.z),f.copy(d).normalize(),m.push(f.x,f.y,f.z),p.push(L+T,1-y),S.push(h++)}u.push(S)}for(let _=0;_<i;_++)for(let S=0;S<n;S++){const y=u[_][S+1],T=u[_][S],b=u[_+1][S],L=u[_+1][S+1];(_!==0||a>0)&&g.push(y,T,L),(_!==i-1||c<Math.PI)&&g.push(T,b,L)}this.setIndex(g),this.setAttribute("position",new dt(x,3)),this.setAttribute("normal",new dt(m,3)),this.setAttribute("uv",new dt(p,2))}static fromJSON(t){return new Zr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Vi extends Nt{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rs,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bn extends Vi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Po extends Nt{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Me(16777215),this.specular=new Me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rs,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pr extends Nt{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rs,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function cn(l,t,n){return El(l)?new l.constructor(l.subarray(t,n!==void 0?n:l.length)):l.slice(t,n)}function xs(l,t,n){return!l||!n&&l.constructor===t?l:typeof t.BYTES_PER_ELEMENT=="number"?new t(l):Array.prototype.slice.call(l)}function El(l){return ArrayBuffer.isView(l)&&!(l instanceof DataView)}function am(l){function t(s,r){return l[s]-l[r]}const n=l.length,i=new Array(n);for(let s=0;s!==n;++s)i[s]=s;return i.sort(t),i}function Do(l,t,n){const i=l.length,s=new l.constructor(i);for(let r=0,a=0;a!==i;++r){const o=n[r]*t;for(let c=0;c!==t;++c)s[a++]=l[o+c]}return s}function Al(l,t,n,i){let s=1,r=l[0];for(;r!==void 0&&r[i]===void 0;)r=l[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(t.push(r.time),n.push.apply(n,a)),r=l[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(t.push(r.time),a.toArray(n,n.length)),r=l[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(t.push(r.time),n.push(a)),r=l[s++];while(r!==void 0)}class ji{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const n=this.parameterPositions;let i=this._cachedIndex,s=n[i],r=n[i-1];n:{e:{let a;t:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=n[++i],t<s)break e}a=n.length;break t}if(!(t>=r)){const o=n[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=n[--i-1],t>=r)break e}a=i,i=0;break t}break n}for(;i<a;){const o=i+a>>>1;t<n[o]?a=o:i=o+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)n[a]=i[r+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class om extends ji{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Da,endingEnd:Da}}intervalChanged_(t,n,i){const s=this.parameterPositions;let r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ia:r=t,o=2*n-i;break;case Na:r=s.length-2,o=n+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ia:a=t,c=2*i-n;break;case Na:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=n}const h=(i-n)*.5,u=this.valueSize;this._weightPrev=h/(n-o),this._weightNext=h/(c-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,n,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,g=this._weightNext,x=(i-n)/(s-n),m=x*x,p=m*x,_=-f*p+2*f*m-f*x,S=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*x+1,y=(-1-g)*p+(1.5+g)*m+.5*x,T=g*p-g*m;for(let b=0;b!==o;++b)r[b]=_*a[u+b]+S*a[h+b]+y*a[c+b]+T*a[d+b];return r}}class lm extends ji{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=(i-n)/(s-n),d=1-u;for(let f=0;f!==o;++f)r[f]=a[h+f]*d+a[c+f]*u;return r}}class cm extends ji{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class Wt{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xs(n,this.TimeBufferType),this.values=xs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const n=t.constructor;let i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:xs(t.times,Array),values:xs(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new cm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new lm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new om(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Ui:n=this.InterpolantFactoryMethodDiscrete;break;case hi:n=this.InterpolantFactoryMethodLinear;break;case Vs:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ui;case this.InterpolantFactoryMethodLinear:return hi;case this.InterpolantFactoryMethodSmooth:return Vs}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){const n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){const i=this.times,s=i.length;let r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>n;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=cn(i,r,a),this.values=cn(this.values,r*o,a*o)}return this}validate(){let t=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&El(s))for(let o=0,c=s.length;o!==c;++o){const h=s[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){const t=cn(this.times),n=cn(this.values),i=this.getValueSize(),s=this.getInterpolation()===Vs,r=t.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const h=t[o],u=t[o+1];if(h!==u&&(o!==1||h!==t[0]))if(s)c=!0;else{const d=o*i,f=d-i,g=d+i;for(let x=0;x!==i;++x){const m=n[d+x];if(m!==n[f+x]||m!==n[g+x]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const d=o*i,f=a*i;for(let g=0;g!==i;++g)n[f+g]=n[d+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,h=0;h!==i;++h)n[c+h]=n[o+h];++a}return a!==t.length?(this.times=cn(t,0,a),this.values=cn(n,0,a*i)):(this.times=t,this.values=n),this}clone(){const t=cn(this.times,0),n=cn(this.values,0),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}}Wt.prototype.TimeBufferType=Float32Array;Wt.prototype.ValueBufferType=Float32Array;Wt.prototype.DefaultInterpolation=hi;class gi extends Wt{}gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Ui;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;class Cl extends Wt{}Cl.prototype.ValueTypeName="color";class Hi extends Wt{}Hi.prototype.ValueTypeName="number";class hm extends ji{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-n)/(s-n);let h=t*o;for(let u=h+o;h!==u;h+=4)Gt.slerpFlat(r,0,a,h-o,a,h,c);return r}}class On extends Wt{InterpolantFactoryMethodLinear(t){return new hm(this.times,this.values,this.getValueSize(),t)}}On.prototype.ValueTypeName="quaternion";On.prototype.DefaultInterpolation=hi;On.prototype.InterpolantFactoryMethodSmooth=void 0;class _i extends Wt{}_i.prototype.ValueTypeName="string";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Ui;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;class Gi extends Wt{}Gi.prototype.ValueTypeName="vector";class um{constructor(t,n=-1,i,s=Lc){this.name=t,this.tracks=i,this.duration=n,this.blendMode=s,this.uuid=Bt(),this.duration<0&&this.resetDuration()}static parse(t){const n=[],i=t.tracks,s=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)n.push(fm(i[a]).scale(s));const r=new this(t.name,t.duration,n,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const n=[],i=t.tracks,s={name:t.name,duration:t.duration,tracks:n,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=i.length;r!==a;++r)n.push(Wt.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(t,n,i,s){const r=n.length,a=[];for(let o=0;o<r;o++){let c=[],h=[];c.push((o+r-1)%r,o,(o+1)%r),h.push(0,1,0);const u=am(c);c=Do(c,1,u),h=Do(h,1,u),!s&&c[0]===0&&(c.push(r),h.push(h[0])),a.push(new Hi(".morphTargetInfluences["+n[o].name+"]",c,h).scale(1/i))}return new this(t,-1,a)}static findByName(t,n){let i=t;if(!Array.isArray(t)){const s=t;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===n)return i[s];return null}static CreateClipsFromMorphTargetSequences(t,n,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const h=t[o],u=h.name.match(r);if(u&&u.length>1){const d=u[1];let f=s[d];f||(s[d]=f=[]),f.push(h)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],n,i));return a}static parseAnimation(t,n){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,f,g,x,m){if(g.length!==0){const p=[],_=[];Al(g,p,_,x),p.length!==0&&m.push(new d(f,p,_))}},s=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const h=t.hierarchy||[];for(let d=0;d<h.length;d++){const f=h[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const g={};let x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let m=0;m<f[x].morphTargets.length;m++)g[f[x].morphTargets[m]]=-1;for(const m in g){const p=[],_=[];for(let S=0;S!==f[x].morphTargets.length;++S){const y=f[x];p.push(y.time),_.push(y.morphTarget===m?1:0)}s.push(new Hi(".morphTargetInfluence["+m+"]",p,_))}c=g.length*a}else{const g=".bones["+n[d].name+"]";i(Gi,g+".position",f,"pos",s),i(On,g+".quaternion",f,"rot",s),i(Gi,g+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const t=this.tracks;let n=0;for(let i=0,s=t.length;i!==s;++i){const r=this.tracks[i];n=Math.max(n,r.times[r.times.length-1])}return this.duration=n,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let n=0;n<this.tracks.length;n++)t=t&&this.tracks[n].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function dm(l){switch(l.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hi;case"vector":case"vector2":case"vector3":case"vector4":return Gi;case"color":return Cl;case"quaternion":return On;case"bool":case"boolean":return gi;case"string":return _i}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+l)}function fm(l){if(l.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=dm(l.type);if(l.times===void 0){const n=[],i=[];Al(l.keys,n,i,"value"),l.times=n,l.values=i}return t.parse!==void 0?t.parse(l):new t(l.name,l.times,l.values,l.interpolation)}const di={enabled:!1,files:{},add:function(l,t){this.enabled!==!1&&(this.files[l]=t)},get:function(l){if(this.enabled!==!1)return this.files[l]},remove:function(l){delete this.files[l]},clear:function(){this.files={}}};class pm{constructor(t,n,i){const s=this;let r=!1,a=0,o=0,c;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return h.push(u,d),this},this.removeHandler=function(u){const d=h.indexOf(u);return d!==-1&&h.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=h.length;d<f;d+=2){const g=h[d],x=h[d+1];if(g.global&&(g.lastIndex=0),g.test(u))return x}return null}}}const mm=new pm;class qi{constructor(t){this.manager=t!==void 0?t:mm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const Jt={};class gm extends Error{constructor(t,n){super(t),this.response=n}}class Ll extends qi{constructor(t){super(t)}load(t,n,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=di.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{n&&n(r),this.manager.itemEnd(t)},0),r;if(Jt[t]!==void 0){Jt[t].push({onLoad:n,onProgress:i,onError:s});return}Jt[t]=[],Jt[t].push({onLoad:n,onProgress:i,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=Jt[t],d=h.body.getReader(),f=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),g=f?parseInt(f):0,x=g!==0;let m=0;const p=new ReadableStream({start(_){S();function S(){d.read().then(({done:y,value:T})=>{if(y)_.close();else{m+=T.byteLength;const b=new ProgressEvent("progress",{lengthComputable:x,loaded:m,total:g});for(let L=0,D=u.length;L<D;L++){const v=u[L];v.onProgress&&v.onProgress(b)}_.enqueue(T),S()}})}}});return new Response(p)}else throw new gm(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return h.json();default:if(o===void 0)return h.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,g=new TextDecoder(f);return h.arrayBuffer().then(x=>g.decode(x))}}}).then(h=>{di.add(t,h);const u=Jt[t];delete Jt[t];for(let d=0,f=u.length;d<f;d++){const g=u[d];g.onLoad&&g.onLoad(h)}}).catch(h=>{const u=Jt[t];if(u===void 0)throw this.manager.itemError(t),h;delete Jt[t];for(let d=0,f=u.length;d<f;d++){const g=u[d];g.onError&&g.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class _m extends qi{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=di.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){n&&n(a),r.manager.itemEnd(t)},0),a;const o=ki("img");function c(){u(),di.add(t,this),n&&n(this),r.manager.itemEnd(t)}function h(d){u(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class xm extends qi{constructor(t){super(t)}load(t,n,i,s){const r=new lt,a=new _m(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class Ds extends $e{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const mr=new Ce,Io=new R,No=new R;class Jr{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wr,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;Io.setFromMatrixPosition(t.matrixWorld),n.position.copy(Io),No.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(No),n.updateMatrixWorld(),mr.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vm extends Jr{constructor(){super(new xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const n=this.camera,i=zi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||n.far;(i!==n.fov||s!==n.aspect||r!==n.far)&&(n.fov=i,n.aspect=s,n.far=r,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class ym extends Ds{constructor(t,n,i=0,s=Math.PI/3,r=0,a=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($e.DefaultUp),this.updateMatrix(),this.target=new $e,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new vm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Fo=new Ce,Ai=new R,gr=new R;class bm extends Jr{constructor(){super(new xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,n=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ai.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ai),gr.copy(i.position),gr.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(gr),i.updateMatrixWorld(),s.makeTranslation(-Ai.x,-Ai.y,-Ai.z),Fo.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fo)}}class Mm extends Ds{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new bm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Sm extends Jr{constructor(){super(new $r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Di extends Ds{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DefaultUp),this.updateMatrix(),this.target=new $e,this.shadow=new Sm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class wm extends Ds{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Rn{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let n="";for(let i=0,s=t.length;i<s;i++)n+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(n))}catch{return n}}static extractUrlBase(t){const n=t.lastIndexOf("/");return n===-1?"./":t.slice(0,n+1)}static resolveURL(t,n){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(t)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:n+t)}}class Tm extends qi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,n,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=di.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){n&&n(a),r.manager.itemEnd(t)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){di.add(t,c),n&&n(c),r.manager.itemEnd(t)}).catch(function(c){s&&s(c),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}}const Qr="\\[\\]\\.:\\/",Em=new RegExp("["+Qr+"]","g"),ea="[^"+Qr+"]",Am="[^"+Qr.replace("\\.","")+"]",Cm=/((?:WC+[\/:])*)/.source.replace("WC",ea),Lm=/(WCOD+)?/.source.replace("WCOD",Am),Rm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ea),Pm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ea),Dm=new RegExp("^"+Cm+Lm+Rm+Pm+"$"),Im=["material","materials","bones","map"];class Nm{constructor(t,n,i){const s=i||Ve.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,n)}bind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}}class Ve{constructor(t,n,i){this.path=n,this.parsedPath=i||Ve.parseTrackName(n),this.node=Ve.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new Ve.Composite(t,n,i):new Ve(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Em,"")}static parseTrackName(t){const n=Dm.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Im.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===n||o.uuid===n)return o;const c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node;const n=this.parsedPath,i=n.objectName,s=n.propertyName;let r=n.propertyIndex;if(t||(t=Ve.findNode(this.rootNode,n.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let h=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}const a=t[s];if(a===void 0){const h=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ve.Composite=Nm;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Oo{constructor(t=1,n=0,i=0){return this.radius=t,this.phi=n,this.theta=i,this}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ut(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vr);const Uo={type:"change"},_r={type:"start"},Bo={type:"end"};class Fm extends Un{constructor(t,n){super(),this.object=t,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zn.ROTATE,MIDDLE:zn.DOLLY,RIGHT:zn.PAN},this.touches={ONE:kn.ROTATE,TWO:kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",yt),this._domElementKeyEvents=A},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Uo),i.update(),r=s.NONE},this.update=function(){const A=new R,F=new Gt().setFromUnitVectors(t.up,new R(0,1,0)),ce=F.clone().invert(),ue=new R,le=new Gt,me=2*Math.PI;return function(){const Re=i.object.position;A.copy(Re).sub(i.target),A.applyQuaternion(F),o.setFromVector3(A),i.autoRotate&&r===s.NONE&&C(D()),i.enableDamping?(o.theta+=c.theta*i.dampingFactor,o.phi+=c.phi*i.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Pe=i.minAzimuthAngle,He=i.maxAzimuthAngle;return isFinite(Pe)&&isFinite(He)&&(Pe<-Math.PI?Pe+=me:Pe>Math.PI&&(Pe-=me),He<-Math.PI?He+=me:He>Math.PI&&(He-=me),Pe<=He?o.theta=Math.max(Pe,Math.min(He,o.theta)):o.theta=o.theta>(Pe+He)/2?Math.max(Pe,o.theta):Math.min(He,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=h,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),A.setFromSpherical(o),A.applyQuaternion(ce),Re.copy(i.target).add(A),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),h=1,d||ue.distanceToSquared(i.object.position)>a||8*(1-le.dot(i.object.quaternion))>a?(i.dispatchEvent(Uo),ue.copy(i.object.position),le.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",k),i.domElement.removeEventListener("pointerdown",nt),i.domElement.removeEventListener("pointercancel",ft),i.domElement.removeEventListener("wheel",At),i.domElement.removeEventListener("pointermove",Ze),i.domElement.removeEventListener("pointerup",Je),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",yt)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new Oo,c=new Oo;let h=1;const u=new R;let d=!1;const f=new be,g=new be,x=new be,m=new be,p=new be,_=new be,S=new be,y=new be,T=new be,b=[],L={};function D(){return 2*Math.PI/60/60*i.autoRotateSpeed}function v(){return Math.pow(.95,i.zoomSpeed)}function C(A){c.theta-=A}function U(A){c.phi-=A}const q=function(){const A=new R;return function(ce,ue){A.setFromMatrixColumn(ue,0),A.multiplyScalar(-ce),u.add(A)}}(),te=function(){const A=new R;return function(ce,ue){i.screenSpacePanning===!0?A.setFromMatrixColumn(ue,1):(A.setFromMatrixColumn(ue,0),A.crossVectors(i.object.up,A)),A.multiplyScalar(ce),u.add(A)}}(),I=function(){const A=new R;return function(ce,ue){const le=i.domElement;if(i.object.isPerspectiveCamera){const me=i.object.position;A.copy(me).sub(i.target);let pe=A.length();pe*=Math.tan(i.object.fov/2*Math.PI/180),q(2*ce*pe/le.clientHeight,i.object.matrix),te(2*ue*pe/le.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(q(ce*(i.object.right-i.object.left)/i.object.zoom/le.clientWidth,i.object.matrix),te(ue*(i.object.top-i.object.bottom)/i.object.zoom/le.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function N(A){i.object.isPerspectiveCamera?h/=A:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*A)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(A){i.object.isPerspectiveCamera?h*=A:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/A)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(A){f.set(A.clientX,A.clientY)}function K(A){S.set(A.clientX,A.clientY)}function j(A){m.set(A.clientX,A.clientY)}function ie(A){g.set(A.clientX,A.clientY),x.subVectors(g,f).multiplyScalar(i.rotateSpeed);const F=i.domElement;C(2*Math.PI*x.x/F.clientHeight),U(2*Math.PI*x.y/F.clientHeight),f.copy(g),i.update()}function Q(A){y.set(A.clientX,A.clientY),T.subVectors(y,S),T.y>0?N(v()):T.y<0&&H(v()),S.copy(y),i.update()}function z(A){p.set(A.clientX,A.clientY),_.subVectors(p,m).multiplyScalar(i.panSpeed),I(_.x,_.y),m.copy(p),i.update()}function W(A){A.deltaY<0?H(v()):A.deltaY>0&&N(v()),i.update()}function J(A){let F=!1;switch(A.code){case i.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(0,i.keyPanSpeed),F=!0;break;case i.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(0,-i.keyPanSpeed),F=!0;break;case i.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?C(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(i.keyPanSpeed,0),F=!0;break;case i.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?C(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(-i.keyPanSpeed,0),F=!0;break}F&&(A.preventDefault(),i.update())}function ne(){if(b.length===1)f.set(b[0].pageX,b[0].pageY);else{const A=.5*(b[0].pageX+b[1].pageX),F=.5*(b[0].pageY+b[1].pageY);f.set(A,F)}}function ae(){if(b.length===1)m.set(b[0].pageX,b[0].pageY);else{const A=.5*(b[0].pageX+b[1].pageX),F=.5*(b[0].pageY+b[1].pageY);m.set(A,F)}}function X(){const A=b[0].pageX-b[1].pageX,F=b[0].pageY-b[1].pageY,ce=Math.sqrt(A*A+F*F);S.set(0,ce)}function Le(){i.enableZoom&&X(),i.enablePan&&ae()}function fe(){i.enableZoom&&X(),i.enableRotate&&ne()}function xe(A){if(b.length==1)g.set(A.pageX,A.pageY);else{const ce=ye(A),ue=.5*(A.pageX+ce.x),le=.5*(A.pageY+ce.y);g.set(ue,le)}x.subVectors(g,f).multiplyScalar(i.rotateSpeed);const F=i.domElement;C(2*Math.PI*x.x/F.clientHeight),U(2*Math.PI*x.y/F.clientHeight),f.copy(g)}function de(A){if(b.length===1)p.set(A.pageX,A.pageY);else{const F=ye(A),ce=.5*(A.pageX+F.x),ue=.5*(A.pageY+F.y);p.set(ce,ue)}_.subVectors(p,m).multiplyScalar(i.panSpeed),I(_.x,_.y),m.copy(p)}function Ue(A){const F=ye(A),ce=A.pageX-F.x,ue=A.pageY-F.y,le=Math.sqrt(ce*ce+ue*ue);y.set(0,le),T.set(0,Math.pow(y.y/S.y,i.zoomSpeed)),N(T.y),S.copy(y)}function we(A){i.enableZoom&&Ue(A),i.enablePan&&de(A)}function ve(A){i.enableZoom&&Ue(A),i.enableRotate&&xe(A)}function nt(A){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",Ze),i.domElement.addEventListener("pointerup",Je)),ee(A),A.pointerType==="touch"?E(A):je(A))}function Ze(A){i.enabled!==!1&&(A.pointerType==="touch"?M(A):ke(A))}function Je(A){se(A),b.length===0&&(i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",Ze),i.domElement.removeEventListener("pointerup",Je)),i.dispatchEvent(Bo),r=s.NONE}function ft(A){se(A)}function je(A){let F;switch(A.button){case 0:F=i.mouseButtons.LEFT;break;case 1:F=i.mouseButtons.MIDDLE;break;case 2:F=i.mouseButtons.RIGHT;break;default:F=-1}switch(F){case zn.DOLLY:if(i.enableZoom===!1)return;K(A),r=s.DOLLY;break;case zn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enablePan===!1)return;j(A),r=s.PAN}else{if(i.enableRotate===!1)return;Y(A),r=s.ROTATE}break;case zn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enableRotate===!1)return;Y(A),r=s.ROTATE}else{if(i.enablePan===!1)return;j(A),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(_r)}function ke(A){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;ie(A);break;case s.DOLLY:if(i.enableZoom===!1)return;Q(A);break;case s.PAN:if(i.enablePan===!1)return;z(A);break}}function At(A){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(A.preventDefault(),i.dispatchEvent(_r),W(A),i.dispatchEvent(Bo))}function yt(A){i.enabled===!1||i.enablePan===!1||J(A)}function E(A){switch(oe(A),b.length){case 1:switch(i.touches.ONE){case kn.ROTATE:if(i.enableRotate===!1)return;ne(),r=s.TOUCH_ROTATE;break;case kn.PAN:if(i.enablePan===!1)return;ae(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case kn.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(),r=s.TOUCH_DOLLY_PAN;break;case kn.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;fe(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(_r)}function M(A){switch(oe(A),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;xe(A),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;de(A),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;we(A),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ve(A),i.update();break;default:r=s.NONE}}function k(A){i.enabled!==!1&&A.preventDefault()}function ee(A){b.push(A)}function se(A){delete L[A.pointerId];for(let F=0;F<b.length;F++)if(b[F].pointerId==A.pointerId){b.splice(F,1);return}}function oe(A){let F=L[A.pointerId];F===void 0&&(F=new be,L[A.pointerId]=F),F.set(A.pageX,A.pageY)}function ye(A){const F=A.pointerId===b[0].pointerId?b[1]:b[0];return L[F.pointerId]}i.domElement.addEventListener("contextmenu",k),i.domElement.addEventListener("pointerdown",nt),i.domElement.addEventListener("pointercancel",ft),i.domElement.addEventListener("wheel",At,{passive:!1}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Ht{constructor(t,n,i,s,r="div"){this.parent=t,this.object=n,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ht.nextNameID=Ht.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Ht.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const n=this.parent.add(this.object,this.property,t);return n.name(this._name),this.destroy(),n}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Om extends Ht{constructor(t,n,i){super(t,n,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Fr(l){let t,n;return(t=l.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=l.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=l.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!n&&"#"+n}const Um={isPrimitive:!0,match:l=>typeof l=="string",fromHexString:Fr,toHexString:Fr},Wi={isPrimitive:!0,match:l=>typeof l=="number",fromHexString:l=>parseInt(l.substring(1),16),toHexString:l=>"#"+l.toString(16).padStart(6,0)},Bm={isPrimitive:!1,match:Array.isArray,fromHexString(l,t,n=1){const i=Wi.fromHexString(l);t[0]=(i>>16&255)/255*n,t[1]=(i>>8&255)/255*n,t[2]=(255&i)/255*n},toHexString:([l,t,n],i=1)=>Wi.toHexString(l*(i=255/i)<<16^t*i<<8^n*i<<0)},zm={isPrimitive:!1,match:l=>Object(l)===l,fromHexString(l,t,n=1){const i=Wi.fromHexString(l);t.r=(i>>16&255)/255*n,t.g=(i>>8&255)/255*n,t.b=(255&i)/255*n},toHexString:({r:l,g:t,b:n},i=1)=>Wi.toHexString(l*(i=255/i)<<16^t*i<<8^n*i<<0)},km=[Um,Wi,Bm,zm];class Vm extends Ht{constructor(t,n,i,s){var r;super(t,n,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,km.find(a=>a.match(r))),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=Fr(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const n=this._format.fromHexString(t);this.setValue(n)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class xr extends Ht{constructor(t,n,i){super(t,n,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Hm extends Ht{constructor(t,n,i,s,r,a){super(t,n,i,"number"),this._initInput(),this.min(s),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,n=!0){return this._step=t,this._stepExplicit=n,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let n=(t-this._min)/(this._max-this._min);n=Math.max(0,Math.min(n,1)),this.$fill.style.width=100*n+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=u=>{const d=parseFloat(this.$input.value);isNaN(d)||(this._snapClampSetValue(d+u),this.$input.value=this.getValue())};let n,i,s,r,a,o=!1;const c=u=>{if(o){const d=u.clientX-n,f=u.clientY-i;Math.abs(f)>5?(u.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(d)>5&&h()}if(!o){const d=u.clientY-s;a-=d*this._step*this._arrowKeyMultiplier(u),r+a>this._max?a=this._max-r:r+a<this._min&&(a=this._min-r),this._snapClampSetValue(r+a)}s=u.clientY},h=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",h)};this.$input.addEventListener("input",()=>{let u=parseFloat(this.$input.value);isNaN(u)||(this._stepExplicit&&(u=this._snap(u)),this.setValue(this._clamp(u)))}),this.$input.addEventListener("keydown",u=>{u.code==="Enter"&&this.$input.blur(),u.code==="ArrowUp"&&(u.preventDefault(),t(this._step*this._arrowKeyMultiplier(u))),u.code==="ArrowDown"&&(u.preventDefault(),t(this._step*this._arrowKeyMultiplier(u)*-1))}),this.$input.addEventListener("wheel",u=>{this._inputFocused&&(u.preventDefault(),t(this._step*this._normalizeMouseWheel(u)))},{passive:!1}),this.$input.addEventListener("mousedown",u=>{n=u.clientX,i=s=u.clientY,o=!0,r=this.getValue(),a=0,window.addEventListener("mousemove",c),window.addEventListener("mouseup",h)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=f=>{const g=this.$slider.getBoundingClientRect();let x=(m=f,p=g.left,_=g.right,S=this._min,y=this._max,(m-p)/(_-p)*(y-S)+S);var m,p,_,S,y;this._snapClampSetValue(x)},n=f=>{t(f.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",i)};let s,r,a=!1;const o=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),a=!1},c=f=>{if(a){const g=f.touches[0].clientX-s,x=f.touches[0].clientY-r;Math.abs(g)>Math.abs(x)?o(f):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",h))}else f.preventDefault(),t(f.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",h)},u=this._callOnFinishChange.bind(this);let d;this.$slider.addEventListener("mousedown",f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",i)}),this.$slider.addEventListener("touchstart",f=>{f.touches.length>1||(this._hasScrollBar?(s=f.touches[0].clientX,r=f.touches[0].clientY,a=!0):o(f),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",h))},{passive:!1}),this.$slider.addEventListener("wheel",f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const g=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+g),this.$input.value=this.getValue(),clearTimeout(d),d=setTimeout(u,400)},{passive:!1})}_setDraggingStyle(t,n="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+n,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:n,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(n=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),n+-i}_arrowKeyMultiplier(t){let n=this._stepExplicit?1:10;return t.shiftKey?n*=10:t.altKey&&(n/=10),n}_snap(t){const n=Math.round(t/this._step)*this._step;return parseFloat(n.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Gm extends Ht{constructor(t,n,i,s){super(t,n,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(r=>{const a=document.createElement("option");a.innerHTML=r,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),n=this._values.indexOf(t);return this.$select.selectedIndex=n,this.$display.innerHTML=n===-1?t:this._names[n],this}}class Wm extends Ht{constructor(t,n,i){super(t,n,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let zo=!1;class ta{constructor({parent:t,autoPlace:n=t===void 0,container:i,width:s,title:r="Controls",injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{c.code!=="Enter"&&c.code!=="Space"||(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),o&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!zo&&a&&(function(c){const h=document.createElement("style");h.innerHTML=c;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(h,u):document.head.appendChild(h)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),zo=!0),i?i.appendChild(this.domElement):n&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(t,n,i,s,r){if(Object(i)===i)return new Gm(this,t,n,i);const a=t[n];switch(typeof a){case"number":return new Hm(this,t,n,i,s,r);case"boolean":return new Om(this,t,n);case"string":return new Wm(this,t,n);case"function":return new xr(this,t,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,t,`
	value:`,a)}addColor(t,n,i=1){return new Vm(this,t,n,i)}addFolder(t){return new ta({parent:this,title:t})}load(t,n=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof xr||i._name in t.controllers&&i.load(t.controllers[i._name])}),n&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const n={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof xr)){if(i._name in n.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);n.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in n.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);n.folders[i._title]=i.save()}),n}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(n=>{t=t.concat(n.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(n=>{t=t.concat(n.foldersRecursive())}),t}}class Xm extends qi{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new Km(n)}),this.register(function(n){return new ig(n)}),this.register(function(n){return new sg(n)}),this.register(function(n){return new Jm(n)}),this.register(function(n){return new Qm(n)}),this.register(function(n){return new eg(n)}),this.register(function(n){return new tg(n)}),this.register(function(n){return new Ym(n)}),this.register(function(n){return new ng(n)}),this.register(function(n){return new Zm(n)}),this.register(function(n){return new jm(n)}),this.register(function(n){return new rg(n)}),this.register(function(n){return new ag(n)})}load(t,n,i,s){const r=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Rn.extractUrlBase(t),this.manager.itemStart(t);const o=function(h){s?s(h):console.error(h),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Ll(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(h){try{r.parse(h,a,function(u){n(u),r.manager.itemEnd(t)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,n,i,s){let r;const a={},o={};if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(Rn.decodeText(new Uint8Array(t,0,4))===Rl){try{a[Fe.KHR_BINARY_GLTF]=new og(t)}catch(u){s&&s(u);return}r=JSON.parse(a[Fe.KHR_BINARY_GLTF].content)}else r=JSON.parse(Rn.decodeText(new Uint8Array(t)));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new yg(r,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Fe.KHR_MATERIALS_UNLIT:a[u]=new qm;break;case Fe.KHR_DRACO_MESH_COMPRESSION:a[u]=new lg(r,this.dracoLoader);break;case Fe.KHR_TEXTURE_TRANSFORM:a[u]=new cg;break;case Fe.KHR_MESH_QUANTIZATION:a[u]=new hg;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(t,n){const i=this;return new Promise(function(s,r){i.parse(t,n,s,r)})}}function $m(){let l={};return{get:function(t){return l[t]},add:function(t,n){l[t]=n},remove:function(t){delete l[t]},removeAll:function(){l={}}}}const Fe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class jm{constructor(t){this.parser=t,this.name=Fe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,n=this.parser.json.nodes||[];for(let i=0,s=n.length;i<s;i++){const r=n[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const n=this.parser,i="light:"+t;let s=n.cache.get(i);if(s)return s;const r=n.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let h;const u=new Me(16777215);c.color!==void 0&&u.fromArray(c.color);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":h=new Di(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Mm(u),h.distance=d;break;case"spot":h=new ym(u),h.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,h.angle=c.spot.outerConeAngle,h.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return h.position.set(0,0,0),h.decay=2,un(h,c),c.intensity!==void 0&&(h.intensity=c.intensity),h.name=n.createUniqueName(c.name||"light_"+t),s=Promise.resolve(h),n.cache.add(i,s),s}getDependency(t,n){if(t==="light")return this._loadLight(n)}createNodeAttachment(t){const n=this,i=this.parser,r=i.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return i._getNodeRef(n.cache,o,c)})}}class qm{constructor(){this.name=Fe.KHR_MATERIALS_UNLIT}getMaterialType(){return nn}extendParams(t,n,i){const s=[];t.color=new Me(1,1,1),t.opacity=1;const r=n.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;t.color.fromArray(a),t.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(t,"map",r.baseColorTexture,ze))}return Promise.all(s)}}class Ym{constructor(t){this.parser=t,this.name=Fe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,n){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(n.emissiveIntensity=r),Promise.resolve()}}class Km{constructor(t){this.parser=t,this.name=Fe.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(t,n){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(n.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(n,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(n,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(n,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new be(o,o)}return Promise.all(r)}}class Zm{constructor(t){this.parser=t,this.name=Fe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(t,n){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(n.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(n,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(n.iridescenceIOR=a.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(n,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Jm{constructor(t){this.parser=t,this.name=Fe.KHR_MATERIALS_SHEEN}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(t,n){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];n.sheenColor=new Me(0,0,0),n.sheenRoughness=0,n.sheen=1;const a=s.extensions[this.name];return a.sheenColorFactor!==void 0&&n.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(n,"sheenColorMap",a.sheenColorTexture,ze)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(n,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Qm{constructor(t){this.parser=t,this.name=Fe.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(t,n){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(n.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(n,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class eg{constructor(t){this.parser=t,this.name=Fe.KHR_MATERIALS_VOLUME}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(t,n){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];n.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(n,"thicknessMap",a.thicknessTexture)),n.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return n.attenuationColor=new Me(o[0],o[1],o[2]),Promise.all(r)}}class tg{constructor(t){this.parser=t,this.name=Fe.KHR_MATERIALS_IOR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(t,n){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return n.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ng{constructor(t){this.parser=t,this.name=Fe.KHR_MATERIALS_SPECULAR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(t,n){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];n.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(n,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return n.specularColor=new Me(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&r.push(i.assignTexture(n,"specularColorMap",a.specularColorTexture,ze)),Promise.all(r)}}class ig{constructor(t){this.parser=t,this.name=Fe.KHR_TEXTURE_BASISU}loadTexture(t){const n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=n.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(t,r.source,a)}}class sg{constructor(t){this.parser=t,this.name=Fe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const n=this.name,i=this.parser,s=i.json,r=s.textures[t];if(!r.extensions||!r.extensions[n])return null;const a=r.extensions[n],o=s.images[a.source];let c=i.textureLoader;if(o.uri){const h=i.options.manager.getHandler(o.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(t,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const n=new Image;n.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",n.onload=n.onerror=function(){t(n.height===1)}})),this.isSupported}}class rg{constructor(t){this.name=Fe.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const n=this.parser.json,i=n.bufferViews[t];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,h=s.byteLength||0,u=s.count,d=s.byteStride,f=new Uint8Array(o,c,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,f,s.mode,s.filter).then(function(g){return g.buffer}):a.ready.then(function(){const g=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(g),u,d,f,s.mode,s.filter),g})})}else return null}}class ag{constructor(t){this.name=Fe.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const n=this.parser.json,i=n.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=n.meshes[i.mesh];for(const h of s.primitives)if(h.mode!==Rt.TRIANGLES&&h.mode!==Rt.TRIANGLE_STRIP&&h.mode!==Rt.TRIANGLE_FAN&&h.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],c={};for(const h in a)o.push(this.parser.getDependency("accessor",a[h]).then(u=>(c[h]=u,c[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(h=>{const u=h.pop(),d=u.isGroup?u.children:[u],f=h[0].count,g=[];for(const x of d){const m=new Ce,p=new R,_=new Gt,S=new R(1,1,1),y=new nm(x.geometry,x.material,f);for(let T=0;T<f;T++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,T),c.ROTATION&&_.fromBufferAttribute(c.ROTATION,T),c.SCALE&&S.fromBufferAttribute(c.SCALE,T),y.setMatrixAt(T,m.compose(p,_,S));for(const T in c)T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&x.geometry.setAttribute(T,c[T]);$e.prototype.copy.call(y,x),y.frustumCulled=!1,this.parser.assignFinalMaterial(y),g.push(y)}return u.isGroup?(u.clear(),u.add(...g),u):g[0]}))}}const Rl="glTF",Ci=12,ko={JSON:1313821514,BIN:5130562};class og{constructor(t){this.name=Fe.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(t,0,Ci);if(this.header={magic:Rn.decodeText(new Uint8Array(t.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==Rl)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ci,s=new DataView(t,Ci);let r=0;for(;r<i;){const a=s.getUint32(r,!0);r+=4;const o=s.getUint32(r,!0);if(r+=4,o===ko.JSON){const c=new Uint8Array(t,Ci+r,a);this.content=Rn.decodeText(c)}else if(o===ko.BIN){const c=Ci+r;this.body=t.slice(c,c+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class lg{constructor(t,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Fe.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(t,n){const i=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},h={};for(const u in a){const d=Or[u]||u.toLowerCase();o[d]=a[u]}for(const u in t.attributes){const d=Or[u]||u.toLowerCase();if(a[u]!==void 0){const f=i.accessors[t.attributes[u]],g=ri[f.componentType];h[d]=g.name,c[d]=f.normalized===!0}}return n.getDependency("bufferView",r).then(function(u){return new Promise(function(d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}d(f)},o,h)})})}}class cg{constructor(){this.name=Fe.KHR_TEXTURE_TRANSFORM}extendTexture(t,n){return n.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(t=t.clone(),n.offset!==void 0&&t.offset.fromArray(n.offset),n.rotation!==void 0&&(t.rotation=n.rotation),n.scale!==void 0&&t.repeat.fromArray(n.scale),t.needsUpdate=!0),t}}class hg{constructor(){this.name=Fe.KHR_MESH_QUANTIZATION}}class Pl extends ji{constructor(t,n,i,s){super(t,n,i,s)}copySampleValue_(t){const n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let a=0;a!==s;a++)n[a]=i[r+a];return n}interpolate_(t,n,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,h=o*3,u=s-n,d=(i-n)/u,f=d*d,g=f*d,x=t*h,m=x-h,p=-2*g+3*f,_=g-f,S=1-p,y=_-f+d;for(let T=0;T!==o;T++){const b=a[m+T+o],L=a[m+T+c]*u,D=a[x+T+o],v=a[x+T]*u;r[T]=S*b+y*L+p*D+_*v}return r}}const ug=new Gt;class dg extends Pl{interpolate_(t,n,i,s){const r=super.interpolate_(t,n,i,s);return ug.fromArray(r).normalize().toArray(r),r}}const Rt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ri={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vo={9728:at,9729:bt,9984:Lr,9985:nl,9986:Ms,9987:Pn},Ho={33071:Pt,33648:Ts,10497:li},vr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Or={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fg={CUBICSPLINE:void 0,LINEAR:hi,STEP:Ui},yr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pg(l){return l.DefaultMaterial===void 0&&(l.DefaultMaterial=new Vi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mn})),l.DefaultMaterial}function Li(l,t,n){for(const i in n.extensions)l[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=n.extensions[i])}function un(l,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(l.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function mg(l,t,n){let i=!1,s=!1,r=!1;for(let h=0,u=t.length;h<u;h++){const d=t[h];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(l);const a=[],o=[],c=[];for(let h=0,u=t.length;h<u;h++){const d=t[h];if(i){const f=d.POSITION!==void 0?n.getDependency("accessor",d.POSITION):l.attributes.position;a.push(f)}if(s){const f=d.NORMAL!==void 0?n.getDependency("accessor",d.NORMAL):l.attributes.normal;o.push(f)}if(r){const f=d.COLOR_0!==void 0?n.getDependency("accessor",d.COLOR_0):l.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(h){const u=h[0],d=h[1],f=h[2];return i&&(l.morphAttributes.position=u),s&&(l.morphAttributes.normal=d),r&&(l.morphAttributes.color=f),l.morphTargetsRelative=!0,l})}function gg(l,t){if(l.updateMorphTargets(),t.weights!==void 0)for(let n=0,i=t.weights.length;n<i;n++)l.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){const n=t.extras.targetNames;if(l.morphTargetInfluences.length===n.length){l.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++)l.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _g(l){const t=l.extensions&&l.extensions[Fe.KHR_DRACO_MESH_COMPRESSION];let n;return t?n="draco:"+t.bufferView+":"+t.indices+":"+Go(t.attributes):n=l.indices+":"+Go(l.attributes)+":"+l.mode,n}function Go(l){let t="";const n=Object.keys(l).sort();for(let i=0,s=n.length;i<s;i++)t+=n[i]+":"+l[n[i]]+";";return t}function Ur(l){switch(l){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xg(l){return l.search(/\.jpe?g($|\?)/i)>0||l.search(/^data\:image\/jpeg/)===0?"image/jpeg":l.search(/\.webp($|\?)/i)>0||l.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const vg=new Ce;class yg{constructor(t={},n={}){this.json=t,this.extensions={},this.plugins={},this.options=n,this.cache=new $m,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new xm(this.options.manager):this.textureLoader=new Tm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ll(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,n){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};Li(r,o,s),un(o,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){t(o)})}).catch(n)}_markDefs(){const t=this.json.nodes||[],n=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=n.length;s<r;s++){const a=n[s].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const a=t[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,n){n!==void 0&&(t.refs[n]===void 0&&(t.refs[n]=t.uses[n]=0),t.refs[n]++)}_getNodeRef(t,n,i){if(t.refs[n]<=1)return i;const s=i.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[h,u]of a.children.entries())r(u,o.children[h])};return r(i,s),s.name+="_instance_"+t.uses[n]++,s}_invokeOne(t){const n=Object.values(this.plugins);n.push(this);for(let i=0;i<n.length;i++){const s=t(n[i]);if(s)return s}return null}_invokeAll(t){const n=Object.values(this.plugins);n.unshift(this);const i=[];for(let s=0;s<n.length;s++){const r=t(n[s]);r&&i.push(r)}return i}getDependency(t,n){const i=t+":"+n;let s=this.cache.get(i);if(!s){switch(t){case"scene":s=this.loadScene(n);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(n)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(n)});break;case"accessor":s=this.loadAccessor(n);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(n)});break;case"buffer":s=this.loadBuffer(n);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(n)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(n)});break;case"skin":s=this.loadSkin(n);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(n)});break;case"camera":s=this.loadCamera(n);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,n)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(i,s)}return s}getDependencies(t){let n=this.cache.get(t);if(!n){const i=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];n=Promise.all(s.map(function(r,a){return i.getDependency(t,a)})),this.cache.add(t,n)}return n}loadBuffer(t){const n=this.json.buffers[t],i=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&t===0)return Promise.resolve(this.extensions[Fe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){i.load(Rn.resolveURL(n.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(t){const n=this.json.bufferViews[t];return this.getDependency("buffer",n.buffer).then(function(i){const s=n.byteLength||0,r=n.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(t){const n=this,i=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const a=vr[s.type],o=ri[s.componentType],c=s.normalized===!0,h=new o(s.count*a);return Promise.resolve(new vt(h,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=vr[s.type],h=ri[s.componentType],u=h.BYTES_PER_ELEMENT,d=u*c,f=s.byteOffset||0,g=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0;let m,p;if(g&&g!==d){const _=Math.floor(f/g),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+_+":"+s.count;let y=n.cache.get(S);y||(m=new h(o,_*g,s.count*g/u),y=new Kp(m,g/u),n.cache.add(S,y)),p=new qr(y,c,f%g/u,x)}else o===null?m=new h(s.count*c):m=new h(o,f,s.count*c),p=new vt(m,c,x);if(s.sparse!==void 0){const _=vr.SCALAR,S=ri[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,T=s.sparse.values.byteOffset||0,b=new S(a[1],y,s.sparse.count*_),L=new h(a[2],T,s.sparse.count*c);o!==null&&(p=new vt(p.array.slice(),p.itemSize,p.normalized));for(let D=0,v=b.length;D<v;D++){const C=b[D];if(p.setX(C,L[D*c]),c>=2&&p.setY(C,L[D*c+1]),c>=3&&p.setZ(C,L[D*c+2]),c>=4&&p.setW(C,L[D*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(t){const n=this.json,i=this.options,r=n.textures[t].source,a=n.images[r];let o=this.textureLoader;if(a.uri){const c=i.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,n,i){const s=this,r=this.json,a=r.textures[t],o=r.images[n],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const h=this.loadImageSource(n,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"";const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=Vo[f.magFilter]||bt,u.minFilter=Vo[f.minFilter]||Pn,u.wrapS=Ho[f.wrapS]||li,u.wrapT=Ho[f.wrapT]||li,s.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[c]=h,h}loadImageSource(t,n){const i=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());const a=s.images[t],o=self.URL||self.webkitURL;let c=a.uri||"",h=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(d){h=!0;const f=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(d){return new Promise(function(f,g){let x=f;n.isImageBitmapLoader===!0&&(x=function(m){const p=new lt(m);p.needsUpdate=!0,f(p)}),n.load(Rn.resolveURL(d,r.path),x,void 0,g)})}).then(function(d){return h===!0&&o.revokeObjectURL(c),d.userData.mimeType=a.mimeType||xg(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[t]=u,u}assignTexture(t,n,i,s){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord!=0&&!(n==="aoMap"&&i.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+n+" not yet supported."),r.extensions[Fe.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Fe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Fe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.encoding=s),t[n]=a,a})}assignFinalMaterial(t){const n=t.geometry;let i=t.material;const s=n.attributes.tangent===void 0,r=n.attributes.color!==void 0,a=n.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+i.uuid;let c=this.cache.get(o);c||(c=new Tl,Nt.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(t.isLine){const o="LineBasicMaterial:"+i.uuid;let c=this.cache.get(o);c||(c=new wl,Nt.prototype.copy.call(c,i),c.color.copy(i.color),this.cache.add(o,c)),i=c}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}i.aoMap&&n.attributes.uv2===void 0&&n.attributes.uv!==void 0&&n.setAttribute("uv2",n.attributes.uv),t.material=i}getMaterialType(){return Vi}loadMaterial(t){const n=this,i=this.json,s=this.extensions,r=i.materials[t];let a;const o={},c=r.extensions||{},h=[];if(c[Fe.KHR_MATERIALS_UNLIT]){const d=s[Fe.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),h.push(d.extendParams(o,r,n))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new Me(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}d.baseColorTexture!==void 0&&h.push(n.assignTexture(o,"map",d.baseColorTexture,ze)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(h.push(n.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),h.push(n.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),h.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=Qt);const u=r.alphaMode||yr.OPAQUE;if(u===yr.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===yr.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==nn&&(h.push(n.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new be(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}return r.occlusionTexture!==void 0&&a!==nn&&(h.push(n.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==nn&&(o.emissive=new Me().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&a!==nn&&h.push(n.assignTexture(o,"emissiveMap",r.emissiveTexture,ze)),Promise.all(h).then(function(){const d=new a(o);return r.name&&(d.name=r.name),un(d,r),n.associations.set(d,{materials:t}),r.extensions&&Li(s,d,r),d})}createUniqueName(t){const n=Ve.sanitizeNodeName(t||"");let i=n;for(let s=1;this.nodeNamesUsed[i];++s)i=n+"_"+s;return this.nodeNamesUsed[i]=!0,i}loadGeometries(t){const n=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[Fe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,n).then(function(c){return Wo(c,o,n)})}const a=[];for(let o=0,c=t.length;o<c;o++){const h=t[o],u=_g(h),d=s[u];if(d)a.push(d.promise);else{let f;h.extensions&&h.extensions[Fe.KHR_DRACO_MESH_COMPRESSION]?f=r(h):f=Wo(new zt,h,n),s[u]={primitive:h,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(t){const n=this,i=this.json,s=this.extensions,r=i.meshes[t],a=r.primitives,o=[];for(let c=0,h=a.length;c<h;c++){const u=a[c].material===void 0?pg(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(n.loadGeometries(a)),Promise.all(o).then(function(c){const h=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let g=0,x=u.length;g<x;g++){const m=u[g],p=a[g];let _;const S=h[g];if(p.mode===Rt.TRIANGLES||p.mode===Rt.TRIANGLE_STRIP||p.mode===Rt.TRIANGLE_FAN||p.mode===void 0)_=r.isSkinnedMesh===!0?new Jp(m,S):new ot(m,S),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),p.mode===Rt.TRIANGLE_STRIP?_.geometry=Xo(_.geometry,Rc):p.mode===Rt.TRIANGLE_FAN&&(_.geometry=Xo(_.geometry,sl));else if(p.mode===Rt.LINES)_=new im(m,S);else if(p.mode===Rt.LINE_STRIP)_=new Kr(m,S);else if(p.mode===Rt.LINE_LOOP)_=new sm(m,S);else if(p.mode===Rt.POINTS)_=new rm(m,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(_.geometry.morphAttributes).length>0&&gg(_,r),_.name=n.createUniqueName(r.name||"mesh_"+t),un(_,r),p.extensions&&Li(s,_,p),n.assignFinalMaterial(_),d.push(_)}for(let g=0,x=d.length;g<x;g++)n.associations.set(d[g],{meshes:t,primitives:g});if(d.length===1)return d[0];const f=new An;n.associations.set(f,{meshes:t});for(let g=0,x=d.length;g<x;g++)f.add(d[g]);return f})}loadCamera(t){let n;const i=this.json.cameras[t],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?n=new xt(qc.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(n=new $r(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(n.name=this.createUniqueName(i.name)),un(n,i),Promise.resolve(n)}loadSkin(t){const n=this.json.skins[t],i=[];for(let s=0,r=n.joints.length;s<r;s++)i.push(this.getDependency("node",n.joints[s]));return n.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",n.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let h=0,u=a.length;h<u;h++){const d=a[h];if(d){o.push(d);const f=new Ce;r!==null&&f.fromArray(r.array,h*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[h])}return new Yr(o,c)})}loadAnimation(t){const i=this.json.animations[t],s=[],r=[],a=[],o=[],c=[];for(let h=0,u=i.channels.length;h<u;h++){const d=i.channels[h],f=i.samplers[d.sampler],g=d.target,x=g.node,m=i.parameters!==void 0?i.parameters[f.input]:f.input,p=i.parameters!==void 0?i.parameters[f.output]:f.output;s.push(this.getDependency("node",x)),r.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",p)),o.push(f),c.push(g)}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(h){const u=h[0],d=h[1],f=h[2],g=h[3],x=h[4],m=[];for(let _=0,S=u.length;_<S;_++){const y=u[_],T=d[_],b=f[_],L=g[_],D=x[_];if(y===void 0)continue;y.updateMatrix();let v;switch(hn[D.path]){case hn.weights:v=Hi;break;case hn.rotation:v=On;break;case hn.position:case hn.scale:default:v=Gi;break}const C=y.name?y.name:y.uuid,U=L.interpolation!==void 0?fg[L.interpolation]:hi,q=[];hn[D.path]===hn.weights?y.traverse(function(I){I.morphTargetInfluences&&q.push(I.name?I.name:I.uuid)}):q.push(C);let te=b.array;if(b.normalized){const I=Ur(te.constructor),N=new Float32Array(te.length);for(let H=0,Y=te.length;H<Y;H++)N[H]=te[H]*I;te=N}for(let I=0,N=q.length;I<N;I++){const H=new v(q[I]+"."+hn[D.path],T.array,te,U);L.interpolation==="CUBICSPLINE"&&(H.createInterpolant=function(K){const j=this instanceof On?dg:Pl;return new j(this.times,this.values,this.getValueSize()/3,K)},H.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(H)}}const p=i.name?i.name:"animation_"+t;return new um(p,void 0,m)})}createNodeMesh(t){const n=this.json,i=this,s=n.nodes[t];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,h=s.weights.length;c<h;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(t){const n=this.json,i=this.extensions,s=this,r=n.nodes[t],a=r.name?s.createUniqueName(r.name):"";return function(){const o=[],c=s._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(t)});c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(f){return s._getNodeRef(s.cameraCache,r.camera,f)})),s._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(t)}).forEach(function(f){o.push(f)});const h=[],u=r.children||[];for(let f=0,g=u.length;f<g;f++)h.push(s.getDependency("node",u[f]));const d=r.skin===void 0?Promise.resolve(null):s.getDependency("skin",r.skin);return Promise.all([Promise.all(o),Promise.all(h),d])}().then(function(o){const c=o[0],h=o[1],u=o[2];let d;if(r.isBone===!0?d=new Sl:c.length>1?d=new An:c.length===1?d=c[0]:d=new $e,d!==c[0])for(let f=0,g=c.length;f<g;f++)d.add(c[f]);if(r.name&&(d.userData.name=r.name,d.name=a),un(d,r),r.extensions&&Li(i,d,r),r.matrix!==void 0){const f=new Ce;f.fromArray(r.matrix),d.applyMatrix4(f)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);s.associations.has(d)||s.associations.set(d,{}),s.associations.get(d).nodes=t,u!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(u,vg)});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadScene(t){const n=this.extensions,i=this.json.scenes[t],s=this,r=new An;i.name&&(r.name=s.createUniqueName(i.name)),un(r,i),i.extensions&&Li(n,r,i);const a=i.nodes||[],o=[];for(let c=0,h=a.length;c<h;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,d=c.length;u<d;u++)r.add(c[u]);const h=u=>{const d=new Map;for(const[f,g]of s.associations)(f instanceof Nt||f instanceof lt)&&d.set(f,g);return u.traverse(f=>{const g=s.associations.get(f);g!=null&&d.set(f,g)}),d};return s.associations=h(r),r})}}function bg(l,t,n){const i=t.attributes,s=new fi;if(i.POSITION!==void 0){const o=n.json.accessors[i.POSITION],c=o.min,h=o.max;if(c!==void 0&&h!==void 0){if(s.set(new R(c[0],c[1],c[2]),new R(h[0],h[1],h[2])),o.normalized){const u=Ur(ri[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const o=new R,c=new R;for(let h=0,u=r.length;h<u;h++){const d=r[h];if(d.POSITION!==void 0){const f=n.json.accessors[d.POSITION],g=f.min,x=f.max;if(g!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(g[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(g[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(g[2]),Math.abs(x[2]))),f.normalized){const m=Ur(ri[f.componentType]);c.multiplyScalar(m)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}l.boundingBox=s;const a=new pi;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,l.boundingSphere=a}function Wo(l,t,n){const i=t.attributes,s=[];function r(a,o){return n.getDependency("accessor",a).then(function(c){l.setAttribute(o,c)})}for(const a in i){const o=Or[a]||a.toLowerCase();o in l.attributes||s.push(r(i[a],o))}if(t.indices!==void 0&&!l.index){const a=n.getDependency("accessor",t.indices).then(function(o){l.setIndex(o)});s.push(a)}return un(l,t),bg(l,t,n),Promise.all(s).then(function(){return t.targets!==void 0?mg(l,t.targets,n):l})}function Xo(l,t){let n=l.getIndex();if(n===null){const a=[],o=l.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);l.setIndex(a),n=l.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),l}const i=n.count-2,s=[];if(t===sl)for(let a=1;a<=i;a++)s.push(n.getX(0)),s.push(n.getX(a)),s.push(n.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(n.getX(a)),s.push(n.getX(a+1)),s.push(n.getX(a+2))):(s.push(n.getX(a+2)),s.push(n.getX(a+1)),s.push(n.getX(a)));s.length/3!==i&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=l.clone();return r.setIndex(s),r}class Mg{parse(t,n={}){n=Object.assign({binary:!1},n);const i=n.binary,s=[];let r=0;t.traverse(function(_){if(_.isMesh){const S=_.geometry,y=S.index,T=S.getAttribute("position");r+=y!==null?y.count/3:T.count/3,s.push({object3d:_,geometry:S})}});let a,o=80;if(i===!0){const _=r*2+r*3*4*4+80+4,S=new ArrayBuffer(_);a=new DataView(S),a.setUint32(o,r,!0),o+=4}else a="",a+=`solid exported
`;const c=new R,h=new R,u=new R,d=new R,f=new R,g=new R;for(let _=0,S=s.length;_<S;_++){const y=s[_].object3d,T=s[_].geometry,b=T.index,L=T.getAttribute("position");if(b!==null)for(let D=0;D<b.count;D+=3){const v=b.getX(D+0),C=b.getX(D+1),U=b.getX(D+2);x(v,C,U,L,y)}else for(let D=0;D<L.count;D+=3){const v=D+0,C=D+1,U=D+2;x(v,C,U,L,y)}}return i===!1&&(a+=`endsolid exported
`),a;function x(_,S,y,T,b){c.fromBufferAttribute(T,_),h.fromBufferAttribute(T,S),u.fromBufferAttribute(T,y),b.isSkinnedMesh===!0&&(b.boneTransform(_,c),b.boneTransform(S,h),b.boneTransform(y,u)),c.applyMatrix4(b.matrixWorld),h.applyMatrix4(b.matrixWorld),u.applyMatrix4(b.matrixWorld),m(c,h,u),p(c),p(h),p(u),i===!0?(a.setUint16(o,0,!0),o+=2):(a+=`		endloop
`,a+=`	endfacet
`)}function m(_,S,y){d.subVectors(y,S),f.subVectors(_,S),d.cross(f).normalize(),g.copy(d).normalize(),i===!0?(a.setFloat32(o,g.x,!0),o+=4,a.setFloat32(o,g.y,!0),o+=4,a.setFloat32(o,g.z,!0),o+=4):(a+="	facet normal "+g.x+" "+g.y+" "+g.z+`
`,a+=`		outer loop
`)}function p(_){i===!0?(a.setFloat32(o,_.x,!0),o+=4,a.setFloat32(o,_.y,!0),o+=4,a.setFloat32(o,_.z,!0),o+=4):a+="			vertex "+_.x+" "+_.y+" "+_.z+`
`}}}const br=5e3,Br=100,Mr=2e4,vs=8,$o=-2,jo=2,Sr=1e3,Sg=2e3,ys=512,wg=.35;e;const Tg=40,Eg=180,qo=.3,Yo=70,wr=5,Ag=5,Cg={sphere:"eda",torsion:"rsp",width:null,height:null,depth:null,tess:"hr"},zr={sphere:0,torsion:0,width:1,height:1,depth:1,tess:20},Lg={sphere:[-100,200],torsion:[-100,100],width:[0,2],height:[0,2],depth:[0,2],tess:[1,64]};function kr(l,t,n,i,s){if(n===t)return i;const r=(l-t)/(n-t)*(s-i)+i;return Number.isNaN(r)?i:r}function Dl(l){return l.length-1}function Il(l){return l[l.length-1]}function Rg(l,t=1/0){if(l.length===0)return[];const n=Dl(l[0]),i=new Array(n).fill(0),s=new Array(n).fill(0),r=t===1/0?0:Date.now()-t;for(const a of l)if(!(t!==1/0&&Il(a)<r))for(let o=0;o<n;o++){const c=a[o];c==null||Number.isNaN(c)||(i[o]+=c,s[o]++)}return i.map((a,o)=>s[o]>0?a/s[o]:null)}function Pg(l,t,n=1/0){if(l.length===0)return[];const i=Dl(l[0]),s=new Array(i).fill(0),r=new Array(i).fill(0),a=n===1/0?0:Date.now()-n;for(const o of l)if(!(n!==1/0&&Il(o)<a))for(let c=0;c<i;c++){const h=o[c];if(h==null||Number.isNaN(h)||t[c]===null)continue;const u=h-t[c];s[c]+=u*u,r[c]++}return s.map((o,c)=>r[c]>0?Math.sqrt(o/r[c]):0)}function Dg(l,t){return Math.ceil(l/(1e3/t))}function Xi(l){return l.length===0?0:l.reduce((t,n)=>t+n,0)/l.length}function Nl(l,t=Xi(l)){if(l.length===0)return 0;const n=l.reduce((i,s)=>i+(s-t)**2,0)/l.length;return Math.sqrt(n)}function Tr(l,t=Br){if(!l||l.length<t)return null;const n=Xi(l),i=Nl(l,n),s=n+.35*i,r=Math.max(1,Math.floor(t*wg)),a=[];for(let u=1;u<l.length-1;u++){const d=l[u];if(!(d<s)&&!(d<=l[u-1]||d<=l[u+1])){if(a.length>0&&u-a[a.length-1]<r){const f=a[a.length-1];d>l[f]&&(a[a.length-1]=u);continue}a.push(u)}}if(a.length<2)return null;const o=[];for(let u=1;u<a.length;u++)o.push((a[u]-a[u-1])/t);const c=Xi(o);if(c<=0)return null;const h=60/c;return h<Tg||h>Eg?null:h}function Ig(l,t,n=null){const i={};for(const[s,r]of Object.entries(Cg)){if(!r){i[s]=zr[s];continue}const a=r.toLowerCase(),o=t.indexOf(a);if(o<0||n&&n(a)){i[s]=zr[s];continue}const[c,h]=Lg[s];i[s]=kr(l[o],0,1023,c,h)}return i}const bs=new Set(["hr"]);class Ng{constructor(t,{onMorphUpdate:n,onBaselineChange:i,onLiveMetrics:s}){this.channel=t,this.onMorphUpdate=n,this.onBaselineChange=i,this.onLiveMetrics=s,this.signalNames=["duration"],this.signalBuffers={},this.baselineBucket=[],this.baselineMeans=null,this.baselineStds=null,this.baselineReady=!1,this.inBaseline=!1,this.baselineStartedAt=null,this.baselineClock=null,this.lastMorphEmit=0,this.lastMetricsEmit=0,this.lastHrBpm=Yo,this.lastInstantBpm=null,this.lastSignalAt={},this.latestPacketMean={},this.liveTick=setInterval(()=>this.pruneAndEmitLive(),Sr)}rawSignalNames(){return this.signalNames.filter(t=>t!=="duration"&&!bs.has(t))}toSignalNumber(t){const n=Number(t);return Number.isFinite(n)?n:null}isDisconnectedValue(t){return this.toSignalNumber(t)===0}isSignalDisconnected(t){return t==="hr"?this.isSignalDisconnected("ecg"):!(t in this.lastSignalAt)||Date.now()-this.lastSignalAt[t]>Sg||t in this.latestPacketMean&&this.latestPacketMean[t]===null}clearSignalBuffer(t){this.signalBuffers[t]=[],this.latestPacketMean[t]=null,delete this.lastSignalAt[t]}appendSignalSamples(t,n,i){this.signalBuffers[t]||(this.signalBuffers[t]=[]);for(const s of n){const r=this.toSignalNumber(s[1]);r!==null&&(this.isDisconnectedValue(r)||this.signalBuffers[t].push({v:r,t:i}))}this.trimSignalBuffer(t)}trimSignalBuffer(t){const n=this.signalBuffers[t];if(!n||n.length===0)return;const i=Date.now()-br,s=n.filter(a=>a.t>=i),r=Dg(br,Br);this.signalBuffers[t]=s.length>r?s.slice(s.length-r):s}trimAllSignalBuffers(){for(const t of this.rawSignalNames())this.trimSignalBuffer(t)}signalBufferValues(t){const n=this.signalBuffers[t];if(!n||n.length===0)return[];const i=Date.now()-br;return n.filter(s=>s.t>=i).map(s=>s.v)}getLiveSignalMean(t){if(this.isSignalDisconnected(t))return null;if(t in this.latestPacketMean&&this.latestPacketMean[t]!==void 0)return this.latestPacketMean[t];const n=this.signalBufferValues(t);return n.length>0?Xi(n):null}handlePacketSignals(t,n){for(const i of this.rawSignalNames()){if(!(i in t)){this.clearSignalBuffer(i);continue}const s=t[i].map(a=>this.toSignalNumber(a[1])).filter(a=>a!==null);if(s.length===0||s.every(a=>a===0)){this.clearSignalBuffer(i),(i==="eda"||i==="rsp")&&console.log(`[canal ${this.channel}] ${i.toUpperCase()} déconnecté (paquet: [${s.slice(0,5).join(", ")}${s.length>5?", …":""}])`);continue}this.latestPacketMean[i]=Xi(s),this.lastSignalAt[i]=n,this.inBaseline||this.appendSignalSamples(i,t[i],n)}}buildBaselineRow(t,n,i){var a,o;const s=this.signalNames[1],r=[t[s][n][0]];for(let c=1;c<this.signalNames.length;c++){const h=this.signalNames[c];if(bs.has(h))continue;const u=(o=(a=t[h])==null?void 0:a[n])==null?void 0:o[1];u===void 0||this.isDisconnectedValue(u)?r.push(null):r.push(this.toSignalNumber(u))}return r.push(i),r}pruneAndEmitLive(){if(this.inBaseline){this.maybeEmitLiveMetrics(!0);return}if(!this.baselineReady)return;this.trimAllSignalBuffers();const t=this.computeMorphParams();t&&(this.lastMorphEmit=Date.now(),this.onMorphUpdate(t))}startBaselineClock(){this.clearBaselineClock(),this.baselineClock=setTimeout(()=>{this.inBaseline&&(console.log(`[canal ${this.channel}] Baseline durée atteinte (${Mr} ms)`),this.finishBaseline())},Mr)}clearBaselineClock(){this.baselineClock&&(clearTimeout(this.baselineClock),this.baselineClock=null)}ensureHrSignal(){this.signalNames.includes("ecg")&&!this.signalNames.includes("hr")&&(this.signalNames.push("hr"),console.log(`[canal ${this.channel}] Dérivation HR activée (ECG → BPM)`))}estimateHrStd(t,n){const i=Math.floor(Br*Ag),s=[];for(let r=0;r+i<=t.length;r+=i){const a=t.slice(r,r+i).map(c=>c[n]),o=Tr(a);o!==null&&s.push(o)}return s.length<2?wr:Math.max(Nl(s),wr)}updateHeartRate(){const t=this.signalNames.indexOf("ecg");if(t<0)return;if(this.ensureHrSignal(),this.isSignalDisconnected("ecg")){this.lastInstantBpm=null;return}const n=this.inBaseline?this.baselineBucket.map(s=>s[t]).filter(s=>s!=null&&!Number.isNaN(s)):this.signalBufferValues("ecg"),i=Tr(n);this.lastInstantBpm=i,i!==null&&(this.lastHrBpm=qo*i+(1-qo)*this.lastHrBpm)}buildMeansVector(){const t=new Array(this.signalNames.length).fill(null);for(let i=0;i<this.signalNames.length;i++){const s=this.signalNames[i];s!=="duration"&&(bs.has(s)||(t[i]=this.getLiveSignalMean(s)))}this.updateHeartRate();const n=this.signalNames.indexOf("hr");return n>=0&&(t[n]=this.isSignalDisconnected("ecg")?null:this.lastHrBpm),t}ingest(t){var h,u;let n;try{n=typeof t=="string"?JSON.parse(t):t}catch{console.warn(`[canal ${this.channel}] Message physio JSON invalide`);return}if(!n.data||!Array.isArray(n.data)){console.warn(`[canal ${this.channel}] Message physio sans champ data[]`);return}const i={};for(const d of n.data){if(!d.name)continue;const f=d.name.toLowerCase();i[f]||(i[f]=[]),i[f].push([d.timestamp,d.value])}if(Object.keys(i).length===0){console.warn(`[canal ${this.channel}] Paquet physio vide`);return}const s=Date.now();if(this.signalNames.length===1){const d=Object.keys(i).sort();this.signalNames.push(...d),console.log(`[canal ${this.channel}] Signaux détectés: ${d.join(", ")}`)}this.baselineStartedAt||(this.baselineStartedAt=s,this.inBaseline=!0,(h=this.onBaselineChange)==null||h.call(this,!0),this.startBaselineClock()),this.handlePacketSignals(i,s);const r=this.signalNames[1],a=((u=i[r])==null?void 0:u.length)??0;if(this.inBaseline){for(let d=0;d<a;d++)this.baselineBucket.push(this.buildBaselineRow(i,d,s));s-this.baselineStartedAt>=Mr&&this.finishBaseline(),this.maybeEmitLiveMetrics();return}this.trimAllSignalBuffers();const o=Date.now();if(o-this.lastMorphEmit<Sr)return;this.lastMorphEmit=o;const c=this.computeMorphParams();c&&this.onMorphUpdate(c)}maybeEmitLiveMetrics(t=!1){var o;const n=Date.now();if(!t&&n-this.lastMetricsEmit<Sr)return;this.lastMetricsEmit=n,this.inBaseline||this.trimAllSignalBuffers(),this.updateHeartRate();const i=this.getLiveSignalMean("eda"),s=this.getLiveSignalMean("rsp"),r=this.isSignalDisconnected("ecg")?null:this.lastHrBpm,a=this.isSignalDisconnected("ecg")?null:this.lastInstantBpm;if((o=this.onLiveMetrics)==null||o.call(this,{hrSmooth:r,hrInstant:a,edaMean:i,rspMean:s,morph:null,inBaseline:this.inBaseline}),this.inBaseline){const c=a!==null?a.toFixed(0):"—",h=r!==null?r.toFixed(0):"—";console.log(`[canal ${this.channel}] HR live: ${h} BPM (instant ${c}) | EDA μ=${i!==null?i.toFixed(0):"—"} | RSP μ=${s!==null?s.toFixed(0):"—"} | calibration…`)}}finishBaseline(){var s,r;if(!this.inBaseline)return;if(this.clearBaselineClock(),this.baselineBucket.length===0){console.warn(`[canal ${this.channel}] Baseline vide, nouvel essai au prochain paquet`),this.baselineStartedAt=null,this.inBaseline=!1,(s=this.onBaselineChange)==null||s.call(this,!1);return}this.ensureHrSignal();const t=Rg(this.baselineBucket),n=Pg(this.baselineBucket,t);for(this.baselineMeans=[...t],this.baselineStds=[...n];this.baselineMeans.length<this.signalNames.length;)this.baselineMeans.push(0),this.baselineStds.push(wr);{const a=this.signalNames.indexOf("ecg"),o=this.signalNames.indexOf("hr");if(a>=0&&o>=0){const c=this.baselineBucket.map(u=>u[a]).filter(u=>u!=null&&!Number.isNaN(u)),h=Tr(c)??Yo;this.baselineMeans[o]=h,this.baselineStds[o]=this.estimateHrStd(this.baselineBucket,a),this.lastHrBpm=h,console.log(`[canal ${this.channel}] Baseline HR ≈ ${h.toFixed(0)} BPM`)}}for(let a=0;a<this.baselineStds.length;a++)this.baselineStds[a]===0&&console.warn(`[canal ${this.channel}] std=0 pour colonne ${a} (${this.signalNames[a]??a}), signal ignoré`);const i=this.baselineBucket.length;this.baselineReady=!0,this.inBaseline=!1,this.baselineBucket=[],this.signalBuffers={},this.latestPacketMean={},(r=this.onBaselineChange)==null||r.call(this,!1),console.log(`[canal ${this.channel}] Baseline terminée (${i} points)`)}computeMorphParams(){if(!this.baselineReady)return null;this.trimAllSignalBuffers();const t=this.buildMeansVector();if(!this.rawSignalNames().some(r=>t[this.signalNames.indexOf(r)]!==null)){const r={...zr};return this.emitLiveMorphMetrics(t,r),r}const i=t.map((r,a)=>{const o=this.signalNames[a];if(o==="duration")return 0;if(bs.has(o)){if(r==null)return ys;const u=this.baselineStds[a];if(!u||u===0)return ys;let d=(r-this.baselineMeans[a])/u;return d=Math.max($o,Math.min(jo,d)),Math.round(kr(d,-vs,vs,0,1023))}if(this.isSignalDisconnected(o)||r===null||r===void 0)return ys;const c=this.baselineStds[a];if(!c||c===0)return ys;let h=(r-this.baselineMeans[a])/c;return h=Math.max($o,Math.min(jo,h)),Math.round(kr(h,-vs,vs,0,1023))}),s=Ig(i,this.signalNames,r=>this.isSignalDisconnected(r));return this.emitLiveMorphMetrics(t,s),s}emitLiveMorphMetrics(t,n){var d;const i=this.signalNames.indexOf("eda"),s=this.signalNames.indexOf("rsp"),r=i>=0?this.getLiveSignalMean("eda"):null,a=s>=0?this.getLiveSignalMean("rsp"):null,o=this.isSignalDisconnected("ecg")?null:this.lastHrBpm,c=this.isSignalDisconnected("ecg")?null:this.lastInstantBpm;this.lastMetricsEmit=Date.now(),(d=this.onLiveMetrics)==null||d.call(this,{hrSmooth:o,hrInstant:c,edaMean:r,rspMean:a,morph:n,inBaseline:!1});const h=c!==null?c.toFixed(0):"—",u=o!==null?o.toFixed(0):"—";console.log(`[canal ${this.channel}] HR live: ${u} BPM (instant ${h}) | EDA μ=${r!==null?r.toFixed(0):"—"} | RSP μ=${a!==null?a.toFixed(0):"—"} | sphere=${n.sphere.toFixed(1)} tess=${n.tess.toFixed(1)} torsion=${n.torsion.toFixed(1)}`)}}const Fg="wss://t3l-collector-backend.herokuapp.com/?listen=",Og=1e4,Fi=document.createElement("a");Fi.style.display="none";document.body.appendChild(Fi);function Ug(l,t){Fi.href=URL.createObjectURL(l),Fi.download=t,Fi.click()}function Bg(l,t){Ug(new Blob([l],{type:"application/octet-stream"}),t)}function zg(l,t){if(!l.morphAttributes.position)return l.clone();const n=l.clone();n.morphAttributes={};const i=l.morphAttributes.position;for(let s=0;s<i.length;s++){const r=i[s];for(let a=0;a<r.count;a++){const o=t[s]||0,c=new R().fromBufferAttribute(n.attributes.position,a),h=new R().fromBufferAttribute(r,a);c.lerp(h,o),n.attributes.position.setXYZ(a,c.x,c.y,c.z)}}return n.attributes.position.needsUpdate=!0,n}class Ko{constructor(t,n,i,s,r){this.container=t,this.liveMetrics=r,this.listenChannel=n,this.mat={},this.shape={},this.radianX=0,this.radianY=0,this.radianZ=0,this.morph0=0,this.morph1=0,this.effectController={width:1,height:1,depth:1,torsion:0,sphere:0,spin:!1,newShading:"flat",exportSTL:()=>this.exportSTL(),tess:5,shape:"Box",upload:a=>this.loadGLTFile(a),x:!1,y:!0,z:!1},this.hasMorphGeometry=!1,this.init(),this.setupBaselineIndicator(),this.physioProcessor=new Ng(this.listenChannel,{onMorphUpdate:a=>this.applyMorphUpdate(a),onBaselineChange:a=>this.setBaselineVisible(a),onLiveMetrics:a=>this.updateLiveMetrics(a)}),this.setupGui(i,s),this.connectWebSocket(),this.setupDragDrop(),this.setupResizeObserver(),this.animate()}init(){this.scene=new Yp,this.scene.background=new Me(9419988);const t=this.container.clientWidth,n=this.container.clientHeight;this.camera=new xt(75,t/n,.1,1e3),this.camera.position.set(0,3,5),this.renderer=new Ml,this.renderer.setSize(t,n),this.renderer.setPixelRatio(window.devicePixelRatio),this.container.appendChild(this.renderer.domElement),this.controls=new Fm(this.camera,this.renderer.domElement),this.controls.listenToKeyEvents(window),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.screenSpacePanning=!1,this.controls.minDistance=1,this.controls.maxDistance=1e3,this.controls.maxPolarAngle=Math.PI/2,this.setupLights();const i=new pn(2,2,2),s=new pr({side:Qt});this.mesh=new ot(i,s),this.mesh.material.color.set("grey"),this.mesh.position.set(0,1,0),this.scene.add(this.mesh)}setupLights(){const t=new Di(16777215);t.position.set(6,2,6);const n=new Di(16777215);n.position.set(-6,2,6);const i=new Di(16777215,.5);i.position.set(-6,2,-6);const s=new Di(16777215,.5);s.position.set(6,2,-6);const r=new wm(5065804);this.scene.add(t,n,i,s,r)}connectWebSocket(){const t=this.listenChannel;let n=!1,i=!1;const s=o=>{i||(i=!0,alert(`[error] Impossible de rejoindre Heroku (canal ${t})${o?` — ${o}`:""}`))},r=new WebSocket(`${Fg}${t}`),a=setTimeout(()=>{!n&&r.readyState!==WebSocket.OPEN&&(s("délai dépassé"),r.readyState===WebSocket.CONNECTING&&r.close())},Og);r.onopen=()=>{n=!0,clearTimeout(a),console.log(`[canal ${t}] Connecté à Heroku, en attente du device`),r.send("My name is John")},r.onmessage=o=>{this.handleMessage(o.data)},r.onclose=o=>{if(clearTimeout(a),n)console.log(`[canal ${t}] Déconnecté de Heroku (code=${o.code})`);else{const c=o.wasClean?`code=${o.code} reason=${o.reason}`:"connexion refusée ou interrompue";s(c)}},r.onerror=()=>{console.log(`[error] Canal ${t} — échec connexion Heroku`)},this.socket=r}setupBaselineIndicator(){this.baselineIndicator=document.createElement("div"),this.baselineIndicator.className="baseline-indicator",this.baselineIndicator.textContent="Calibration…",this.container.parentElement.appendChild(this.baselineIndicator)}setBaselineVisible(t){this.baselineIndicator&&this.baselineIndicator.classList.toggle("visible",t)}updateLiveMetrics({hrSmooth:t,hrInstant:n,edaMean:i,rspMean:s,morph:r,inBaseline:a}){if(!this.liveMetrics)return;const o=t!==null?`${t.toFixed(0)} BPM${n!==null?` (${n.toFixed(0)} instant)`:""}`:"—",c=i!==null?i.toFixed(0):"—",h=s!==null?s.toFixed(0):"—",u=a?"calibration 20 s":r?`sphere ${r.sphere.toFixed(1)} · tess ${r.tess.toFixed(1)} · torsion ${r.torsion.toFixed(1)}`:"morph …";this.liveMetrics.textContent=`HR ${o} · EDA ${c} · RSP ${h} · ${u}`}isPhysioMessage(t){return Array.isArray(t.data)}isMorphMessage(t){return t.sphere!==void 0||t.torsion!==void 0||t.width!==void 0||t.height!==void 0||t.depth!==void 0||t.tess!==void 0||t.shape!==void 0||t.newShading!==void 0}handleMessage(t){let n;try{n=JSON.parse(t)}catch{console.warn(`[canal ${this.listenChannel}] Message JSON invalide`);return}{this.isPhysioMessage(n)&&this.physioProcessor.ingest(n);return}}setupGui(t,n){const i=new ta({title:t});n?(i.domElement.style.left="10px",i.domElement.style.right="auto"):(i.domElement.style.right="10px",i.domElement.style.left="auto");const s=i.addFolder("Vue");s.add(this.effectController,"spin").listen().name("Spining"),s.add(this.effectController,"shape",["Box","Sphere"]).name("Shape").listen().onChange(()=>this.render()),s.add(this.effectController,"newShading",["wireframe","flat","smooth","basic"]).name("Shading").listen().onChange(()=>this.render());const r=i.addFolder("Effet");r.add(this.effectController,"sphere").min(-100).max(200).step(.01).listen().onChange(()=>this.render()),r.add(this.effectController,"torsion").min(-100).max(100).step(.01).listen().onChange(()=>this.render()),r.add(this.effectController,"width").min(0).max(2).listen().onChange(()=>this.render()),r.add(this.effectController,"height").min(0).max(2).listen().onChange(()=>this.render()),r.add(this.effectController,"depth").min(0).max(2).listen().onChange(()=>this.render()),r.add(this.effectController,"tess").min(1).max(64).step(1).listen().onChange(()=>this.render());const a=i.addFolder("Sens de torsion ");a.add(this.effectController,"x").listen().name("X"),a.add(this.effectController,"y").listen().name("Y"),a.add(this.effectController,"z").listen().name("Z");const o=i.addFolder("Fichier");o.add(this.effectController,"exportSTL").name("Télécharger "),o.close(),this.gui=i}setupDragDrop(){this.container.addEventListener("dragover",t=>{t.preventDefault(),t.stopPropagation(),t.dataTransfer.dropEffect="copy"}),this.container.addEventListener("drop",t=>{t.preventDefault(),t.stopPropagation(),t.dataTransfer.types[0]!=="text/plain"&&t.dataTransfer.items&&[...t.dataTransfer.items].forEach(n=>{if(n.kind==="file"){const i=n.getAsFile(),s=URL.createObjectURL(i);this.loadGLTFile(s)}})})}setupResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(this.container)}onResize(){const t=this.container.clientWidth,n=this.container.clientHeight;t===0||n===0||(this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n))}animate(){requestAnimationFrame(()=>this.animate()),this.effectController.spin?(this.radianX+=.02,this.radianY+=.01,this.radianZ+=.01,this.mesh.rotation.x=this.radianX,this.mesh.rotation.y=this.radianY,this.mesh.rotation.z=this.radianZ):(this.radianX=0,this.radianY=0,this.radianZ=0,this.mesh.rotation.x=0,this.mesh.rotation.y=0,this.mesh.rotation.z=0),this.controls.update(),this.renderer.render(this.scene,this.camera)}render(){this.effectController.shape==="Box"?this.renderCube():this.effectController.shape==="Sphere"?this.renderSphere():this.effectController.shape==="upload"&&this.renderUploadedShape()}buildMorphGeometry(){this.mat.wireframe=new Vi({wireframe:!0}),this.mat.flat=new Po({specular:0,flatShading:!0,side:Qt}),this.mat.smooth=new pr({side:Qt}),this.mat.basic=new nn,this.shape.Box=new pn(this.effectController.height,this.effectController.width,this.effectController.depth,this.effectController.tess,this.effectController.tess,this.effectController.tess),this.shape.Sphere=new Zr(this.effectController.height,this.effectController.tess,this.effectController.tess),this.shape[this.effectController.shape].morphAttributes.position=[];const t=this.shape[this.effectController.shape].attributes.position,n=[],i=[],s=new R(this.effectController.x,this.effectController.y,this.effectController.z),r=new R;for(let a=0;a<t.count;a++){const o=t.getX(a),c=t.getY(a),h=t.getZ(a);n.push(o*Math.sqrt(1-c*c/2-h*h/2+c*c*h*h/3),c*Math.sqrt(1-h*h/2-o*o/2+h*h*o*o/3),h*Math.sqrt(1-o*o/2-c*c/2+o*o*c*c/3)),r.set(o,c*2,h),r.applyAxisAngle(s,Math.PI*c/2).toArray(i,i.length)}return this.shape[this.effectController.shape].morphAttributes.position[0]=new dt(n,3),this.shape[this.effectController.shape].morphAttributes.position[1]=new dt(i,3),this.shape[this.effectController.shape]}disposeMesh(){this.mesh!==void 0&&(this.mesh.geometry.dispose(),this.scene.remove(this.mesh))}renderCube(){this.disposeMesh();const t=this.buildMorphGeometry();this.mesh=new ot(t,this.mat[this.effectController.newShading]),this.mesh.morphTargetInfluences[0]=this.effectController.sphere,this.mesh.morphTargetInfluences[1]=this.effectController.torsion,this.addMeshToScene()}renderSphere(){this.disposeMesh();const t=this.buildMorphGeometry();this.mesh=new ot(t,this.mat[this.effectController.newShading]),this.mesh.morphTargetInfluences[0]=this.effectController.sphere,this.mesh.morphTargetInfluences[1]=this.effectController.torsion,this.addMeshToScene()}renderUploadedShape(){this.disposeMesh();const t=new pn(this.effectController.height,this.effectController.width,this.effectController.depth,this.effectController.tess,this.effectController.tess,this.effectController.tess);t.morphAttributes.position=[];const n=t.attributes.position,i=[],s=[],r=new R(0,1,0),a=new R;for(let o=0;o<n.count;o++){const c=n.getX(o),h=n.getY(o),u=n.getZ(o);i.push(c*Math.sqrt(1-h*h/2-u*u/2+h*h*u*u/3),h*Math.sqrt(1-u*u/2-c*c/2+u*u*c*c/3),u*Math.sqrt(1-c*c/2-h*h/2+c*c*h*h/3)),a.set(c,h*2,u),a.applyAxisAngle(r,Math.PI*h/2).toArray(s,s.length)}t.morphAttributes.position[0]=new dt(i,3),t.morphAttributes.position[1]=new dt(s,3),this.mat.wireframe=new Vi({wireframe:!0}),this.mat.flat=new Po({specular:0,flatShading:!0,side:Qt}),this.mat.smooth=new pr({side:Qt}),this.mat.basic=new nn,this.mesh=new ot(t,this.mat[this.effectController.newShading]),this.mesh.morphTargetInfluences[0]=this.effectController.sphere+this.morph0,this.mesh.morphTargetInfluences[1]=this.effectController.torsion+this.morph1,this.addMeshToScene()}addMeshToScene(){var t,n;this.scene.add(this.mesh),this.mesh.material.color.set("grey"),this.mesh.position.set(0,1,0),this.mesh.rotation.x=this.radianX,this.mesh.rotation.y=this.radianY,this.mesh.rotation.z=this.radianZ,this.hasMorphGeometry=!!((n=(t=this.mesh.geometry.morphAttributes)==null?void 0:t.position)!=null&&n.length)}needsGeometryRebuild(t){return["shape","tess","width","height","depth","newShading","x","y","z"].some(i=>t[i]!==void 0)}applyMorphUpdate(t){var i;const n=this.needsGeometryRebuild(t)||!this.hasMorphGeometry;if(t.newShading&&(this.effectController.newShading=t.newShading),t.tess!==void 0&&(this.effectController.tess=t.tess),t.sphere!==void 0&&(this.effectController.sphere=t.sphere),t.torsion!==void 0&&(this.effectController.torsion=t.torsion),t.width!==void 0&&(this.effectController.width=t.width),t.depth!==void 0&&(this.effectController.depth=t.depth),t.height!==void 0&&(this.effectController.height=t.height),t.shape&&(this.effectController.shape=t.shape),typeof t.x<"u"&&(this.effectController.x=t.x),typeof t.y<"u"&&(this.effectController.y=t.y),typeof t.z<"u"&&(this.effectController.z=t.z),n){this.render();return}(i=this.mesh)!=null&&i.morphTargetInfluences&&(this.mesh.morphTargetInfluences[0]=this.effectController.sphere,this.mesh.morphTargetInfluences[1]=this.effectController.torsion)}exportSTL(){const t=new Mg,n=zg(this.mesh.geometry,this.mesh.morphTargetInfluences),i=t.parse(new ot(n),{binary:!0});Bg(i,`model-canal-${this.listenChannel}.stl`)}loadGLTFile(t){const n=new Xm;this.effectController.shape="upload",n.load(t,i=>{this.disposeMesh(),this.mesh=i.scene.children[0],this.morph0=this.mesh.morphTargetInfluences[0],this.morph1=this.mesh.morphTargetInfluences[1],this.scene.add(this.mesh)},void 0,i=>{console.error(i)})}setPanelVisible(t){this.gui&&(this.gui.domElement.style.display=t?"":"none")}}const As=[new Ko(document.getElementById("viewer-75"),"75","Canal 75",!0,document.getElementById("metrics-75")),new Ko(document.getElementById("viewer-76"),"76","Canal 76",!1,document.getElementById("metrics-76"))];function Zo(l,t,n,i){const s=n<=0,r=n>=i;l.style.flex=`0 0 ${n}px`,t.style.flex="1 1 auto",l.classList.toggle("collapsed",s),t.classList.toggle("collapsed",r),As[0].setPanelVisible(!s),As[1].setPanelVisible(!r)}function kg(l,t,n){let i=!1;n.addEventListener("mousedown",s=>{i=!0,n.classList.add("active"),document.body.style.cursor="col-resize",document.body.style.userSelect="none",s.preventDefault()}),n.addEventListener("dblclick",()=>{const r=l.parentElement.getBoundingClientRect().width-n.offsetWidth;Zo(l,t,r/2,r),As.forEach(a=>a.onResize())}),document.addEventListener("mousemove",s=>{if(!i)return;const a=l.parentElement.getBoundingClientRect(),o=a.width-n.offsetWidth,c=Math.max(0,Math.min(s.clientX-a.left,o));Zo(l,t,c,o)}),document.addEventListener("mouseup",()=>{i&&(i=!1,n.classList.remove("active"),document.body.style.cursor="",document.body.style.userSelect="",As.forEach(s=>s.onResize()))})}kg(document.getElementById("panel-left"),document.getElementById("panel-right"),document.getElementById("resizer"));
//# sourceMappingURL=index-6b48cfe0.js.map
