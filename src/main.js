import './style.css'

import * as THREE from 'three';


import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene;

const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 50, 500); 

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('bg'),
});

renderer.LinearEncoding = THREE.SRGBColorSpace;

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);







renderer.render(scene, camera);







const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(ambientLight);






//Add Star
function addStar(){
  const geometry = new THREE.SphereGeometry(0.5, 24, 24);
  const material = new THREE.MeshStandardMaterial({color:0xffff00});
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(150, 300));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(100).fill().forEach(addStar);

//Add Triangle
function addTri(){
  // const x = 0, y = 0;

  

  // const heartShape = new THREE.Shape();

  // heartShape.moveTo( x + 5, y + 5 );
  // heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
  // heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
  // heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
  // heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
  // heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
  // heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

  var triangle = new THREE.CylinderGeometry( 0.01, 1 / Math.sqrt( 2 ), 1, 4, 1 ); // size of top can be changed
  
  const material = new THREE.MeshStandardMaterial({color:0xff0000});
  const star = new THREE.Mesh(triangle, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(150, 500));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(100).fill().forEach(addTri);

//Background
const spaceTexture = new THREE.TextureLoader().load('images/space.jpg');

scene.background = spaceTexture;






function animateCam(){
  requestAnimationFrame(animateCam);

  camera.rotation.x +=0; 
  camera.rotation.y +=0.0002;
  camera.rotation.z +=0.001;



  renderer.render(scene, camera);
}

animateCam()



function animate(){
  requestAnimationFrame(animate);





  renderer.render(scene, camera);
}

animate()

//from my other javascript file
