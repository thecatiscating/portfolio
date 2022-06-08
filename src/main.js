import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import  MouseMeshInteraction from './three_mmi';

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

//import { Geometry } from "three/examples/jsm/deprecated/Geometry.js"

import { TWEEN } from 'three/examples/jsm/libs/tween.module.min'

import { gsap } from "gsap";
import { VANTA } from 'vanta';


import FOG from "vanta/dist/vanta.fog.min"



const splash = document.querySelector(".splash");

document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
    splash.classList.add('display-none');
  }, 2000);
})



const loader = new GLTFLoader()

loader.load("untitled.glb", function(glb){
  console.log(glb)
  var model = glb.scene
  model.position.set(4,-2,-7);
  model.scale.set(2,2,2);
  scene.add(model)
  model.rotateX(0);
  model.rotateY(5.1);
  model.rotateZ(0);
  
  
  
  function animate(){
    requestAnimationFrame( animate );
    model.rotation.x += 0.05;
    model.position.y += 0.075;
    model.rotation.z += 0.05;
    model.position.y -= 0.075;
    
    controls.update
    mmi.update();
    render.render( scene, camera);
  }
  
  animate()
  
})









const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const render = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
}, { alpha: true });

render.setPixelRatio (window.devicePixelRatio);
render.setSize( window.innerWidth, window.innerHeight);

render.setClearColor( 0x000000, 0 )

camera.position.set(1800,0,0)
camera.rotateX(0);
camera.rotateY(5.1);
  camera.rotateZ(0);
var explorer = false
  gsap.to(camera.position, {
    duration: 6,
    x: explorer ? -5:15,
    //x: explorer ? -6:-6,
    //y: explorer ? 12:-12,
  })

const mmi = new MouseMeshInteraction(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347});
const torus = new THREE.Mesh(geometry, material);
//scene.add(torus);


const lighter = new THREE.PointLight(0xffffff);
//lighter.position.set(0, 0, 0);

const surligther = new THREE.AmbientLight(0xffffff);
surligther.position.set(1000,1000,1000)
scene.add(lighter, surligther);


const help = new THREE.PointLightHelper(lighter)
const gridhelp = new THREE.GridHelper(200, 50);
//scene.add(help, gridhelp)

const controls = new OrbitControls(camera, render.domElement);



 
  
const linxit = new THREE.TextureLoader().load('linx.png')

const linxi = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial({map: linxit})
);
scene.add(linxi);

linxi.position.set(1,1,-8)




function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  mars.rotation.x += 0.05;
  mars.rotation.y += 0.075;
  mars.rotation.z += 0.05;

  linxi.rotation.y += 0.01;
  linxi.rotation.z += 0.01;

  camera.position.z = t * -0.02;
  camera.position.x = t * -0.0003;
  camera.rotation.y = t * -0.0005;


}


document.body.onscroll = moveCamera


function addstars(){
const geometry = new THREE.SphereGeometry(1, 24, 24);
const material = new THREE.MeshStandardMaterial ({color: 0xffffff});
const star = new THREE.Mesh(geometry, material);
const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(2000));

  star.position.set(x, y, z);
  scene.add(star);
  linxi.add(star);
  function animate(){
    star.rotateY(0.003);
    render.render(scene, camera);
  }
  animate()
}
Array(200).fill().forEach(addstars)




const marst = new THREE.TextureLoader().load('mars.jpg');
const marse = new THREE.TextureLoader().load('normal.jpg');
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial(
    {map: marst,
      normalMap: marse
  }
  )
);
scene.add(mars)
mars.position.z = 13;
mars.position.setX(-14); //same thing
mars.name = "mare"





loader.load("text.glb", function(glb){
  console.log(glb)
  const model1 = glb.scene
  model1.position.z = 13;
  model1.position.setX(-10);
  model1.position.setY(5); //same thing
  model1.rotateX(2);
  model1.rotateY(6);
  model1.rotateZ(5.5);
scene.add(model1)

})







const spotLight = new THREE.SpotLight( 0xffffff );

mmi.addHandler("mare", "mouseenter", function(marq){




  





spotLight.position.set( 100, 1,30 );

spotLight.castShadow = true;

spotLight.shadow.mapSize.width += 1024;
spotLight.shadow.mapSize.height += 1024;

spotLight.shadow.camera.near += 5000;
spotLight.shadow.camera.far += 40000;
spotLight.shadow.camera.fov += 300;

scene.add( spotLight );




});


mmi.addHandler("mare", "mouseleave", function(marq){
  scene.remove( spotLight);
  

});


mmi.addHandler("mare", "click", function(marq){
  
  var explorer = false
  gsap.to(camera.position, {
    duration: 6,
    //z: explorer ? 10:10,
    x: explorer ? -6:-6,
    //y: explorer ? 12:12,
  })
  
  setTimeout(4000)
  


  window.location.href = "mars.html";

});






const earthp = new THREE.TextureLoader().load('earth.jpg');

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial(
    {map: earthp
      
  }
  )
);
scene.add(earth)
earth.position.z = 30;
earth.position.setX(-10); //same thing
earth.name = "eth"




mmi.addHandler("eth", "mouseenter", function(marq){

  spotLight.position.set( 100, 1,30 );
  
  spotLight.castShadow = true;
  
  spotLight.shadow.mapSize.width += 1024;
  spotLight.shadow.mapSize.height += 1024;
  
  spotLight.shadow.camera.near += 5000;
  spotLight.shadow.camera.far += 40000;
  spotLight.shadow.camera.fov += 300;
  
  scene.add( spotLight );
  
  
  
  
  });










mmi.addHandler("eth", "mouseleave", function(marq){
  scene.remove( spotLight);
  

});


mmi.addHandler("eth", "click", function(marq){
  
  var explorer = false
  gsap.to(camera.position, {
    duration: 6,
    //z: explorer ? 10:10,
    x: explorer ? -6:-6,
    //y: explorer ? 12:12,
  })
  
  setTimeout(4000)
  


  window.location.href = "eth.html";

});






const sunp = new THREE.TextureLoader().load('sunp.jpg');

const sun = new THREE.Mesh(
  new THREE.SphereGeometry(10, 20, 20),
  new THREE.MeshStandardMaterial(
    {map: sunp
      
  }
  )
  
);
sun.emissive3
scene.add(sun)
sun.position.z = 70;
sun.position.setX(-20); //same thing
sun.name = "sun"




mmi.addHandler("sun", "mouseenter", function(marq){

  spotLight.position.set( 100, 1,30 );
  
  spotLight.castShadow = true;
  
  spotLight.shadow.mapSize.width += 1024;
  spotLight.shadow.mapSize.height += 1024;
  
  spotLight.shadow.camera.near += 5000;
  spotLight.shadow.camera.far += 40000;
  spotLight.shadow.camera.fov += 300;
  
  scene.add( spotLight );
  
  
  
  
  });










mmi.addHandler("sun", "mouseleave", function(marq){
  scene.remove( spotLight);
  

});


mmi.addHandler("sun", "click", function(marq){
  
  var explorer = false
  gsap.to(camera.position, {
    duration: 7,
    //z: explorer ? 10:10,
    x: explorer ? -7:-7,
    //y: explorer ? 12:12,
  })
  
  //setTimeout(4000)
  


  window.location.href = "sun.html";

});











function animate(){
  requestAnimationFrame( animate );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.004;
  linxi.rotation.z += 0.01
  linxi.rotation.y += 0.005;
  linxi.rotation.z += 0.004;
  mars.rotation.z += 0.01
  mars.rotation.y += 0.005;
  mars.rotation.z += 0.004;
  earth.rotation.z += 0.01
  earth.rotation.y += 0.005;
  earth.rotation.z += 0.004;
  sun.rotation.z += 0.01
  sun.rotation.y += 0.005;
  sun.rotation.z += 0.004;

  controls.update
  mmi.update();
  render.render( scene, camera);
}

animate()




VANTA.FOG({
  el: "#section1",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0x8162d,
  midtoneColor: 0x101446,
  lowlightColor: 0x2828a2,
  baseColor: 0x201d1d,
  blurFactor: 0.30,
  speed: 7.00,
  zoom: 0.50
})

