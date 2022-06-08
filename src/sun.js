
import  MouseMeshInteraction from './three_mmi';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import * as THREE from 'three';

import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js"


import { VANTA } from 'vanta';




const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const render = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
}, { alpha: true });


render.setPixelRatio (window.devicePixelRatio);
render.setSize( window.innerWidth, window.innerHeight);


render.setClearColor( 0x000000, 0 )

camera.position.setZ(6);
render.render(scene, camera);

const lighter = new THREE.PointLight(0xffffff);
lighter.position.set(10, 10, 10);

const surligther = new THREE.AmbientLight(0xffffff);
surligther.position.set(10,10,10)
scene.add(lighter, surligther);


const help = new THREE.PointLightHelper(lighter)
const gridhelp = new THREE.GridHelper(200, 50);
//scene.add(help, gridhelp)



const sunp = new THREE.TextureLoader().load('sunp.jpg');

const sun = new THREE.Mesh(
  new THREE.SphereGeometry(18, 200, 200),
  new THREE.MeshStandardMaterial(
    {map: sunp
      
  }
  )
  
);
sun.emissive3
scene.add(sun)
sun.position.set(0, -23, -1);
sun.name = "sun"

 function addstars(){
     const geometry = new THREE.SphereGeometry(0.24, 12, 12);
     const material = new THREE.MeshStandardMaterial ({color: 0xffffff});
     const star = new THREE.Mesh(geometry, material);
     const [x, y, z] = Array(3)
        .fill()
         .map(() => THREE.MathUtils.randFloatSpread(500));
    
      star.position.set(x, y, z);
       scene.add(star);
       sun.add(star);
  function animate(){
    star.rotateY(0.003);
    render.render(scene, camera);
  }
  animate()
     }
     Array(200).fill().forEach(addstars)
var controls
controls = new OrbitControls( camera, render.domElement );

controls.addEventListener('change', render)
//controls.minDistance = 13;
//controls.maxDistance = 6;










const mmi = new MouseMeshInteraction(scene, camera);
const loader = new FontLoader();


            loader.load("./Kanit Medium_Regular.json", function(font){
  
              const geometry = new TextGeometry("Press for more information", {
                  font: font,
                  size: 1,
                  height: 0.09,
                  
                  
                }
              
                );
              const textobj4 = new THREE.Mesh(geometry, [
                  new THREE.MeshPhongMaterial({ colour: 0xff0000 }),
                  new THREE.MeshPhongMaterial({ colour: 0xffffff })
                ])
               
                textobj4.applyMatrix (new THREE.Matrix4 ().makeScale (1, 1, 1));
                textobj4.rotateX(0);
                textobj4.rotateY(0);
                textobj4.rotateZ(0);
                textobj4.position.set(-28.5, 16, -18);
                //textobj3.position.set(-7, 6, 11);
                scene.add(textobj4);
                textobj4.name = "btn"
                
              
        mmi.addHandler('btn', "click", function(marq){
                   
      
          window.open('https://drive.google.com/drive/folders/18t2TUr4SnysbALrEYy_JmGssqqMDUpHb?usp=sharing')
          
          }); 
         
              });

  let hi = `McDonald’s member employee
            
            Worked as a part timer in Jurong point McDonald. 
            Job scopes include hygienic wipe downs and physical customer service.
            One hurdle I faced when working was juggling work between my studies. 
            Time management and perseverance were imperative during that time because 
            it is what allowed me to continue working and putting in the same amount 
            of commitment towards my studies`
              loader.load("./Kanit Medium_Regular.json", function(font){
  
                const geometry = new TextGeometry(hi, {
                    font: font,
                    size: 0.5,
                    height: 0.03,
                    
                  }
                
                  );
                const textobj4 = new THREE.Mesh(geometry, [
                    new THREE.MeshPhongMaterial({ colour: 0xff0000 }),
                    new THREE.MeshPhongMaterial({ colour: 0xffffff })
                  ])
                 
                  textobj4.applyMatrix (new THREE.Matrix4 ().makeScale (1, 1, 1));
                  textobj4.rotateX(0);
                  textobj4.rotateY(0);
                  textobj4.rotateZ(0);
                  textobj4.position.set(4, 13, -15);
                  //textobj3.position.set(-7, 6, 11);
                  scene.add(textobj4);
                  
                  
              
           
                });

                let hi1 = `
                Science Centre Work attachment (digital fabrication space)
                
                November - December 2021

                Mentor: Mr Jon, Employee of Digital Fabrication Space (DFS) in Science Centre
                
                Content of Work attachment
                Education Resources (PowerPoint slides): 
                1.  Flight Gear software tutorial 
                2. Brief introduction to Research Paper
                3. Node.js backend programming 
                4. Amazon Web Hosting Services 
                5. JavaScript Phaser Game
                Onsite Work
                1. Drone testing for DFS
                2. Heatpress and sublimation Printing of Metal and Wood Coasters for DFS`
                  
                loader.load("./Kanit Medium_Regular.json", function(font){
      
                    const geometry = new TextGeometry(hi1, {
                        font: font,
                        size: 1,
                        height: 0.0,
                        
                        
                      }
                    
                      );
                    const textobj4 = new THREE.Mesh(geometry, [
                        new THREE.MeshPhongMaterial({ colour: 0xff0000 }),
                        new THREE.MeshPhongMaterial({ colour: 0xffffff })
                      ])
                     
                      textobj4.applyMatrix (new THREE.Matrix4 ().makeScale (1, 1, 1));
                      textobj4.rotateX(0);
                      textobj4.rotateY(0);
                      textobj4.rotateZ(0);
                      textobj4.position.set(-52, 20, -30);
                      //textobj3.position.set(-7, 6, 11);
                      scene.add(textobj4);
                      
                      
                  
               
                    });
                    alert("YOU CANT GET TOO CLOSE TO THE SUN")

                    var texture4= new THREE.TextureLoader().load( 'dr.jpeg' );


                    var geometry4 = new THREE.BoxBufferGeometry( 30, 45, 2 );
                    var material4 = new THREE.MeshBasicMaterial( { map: texture4 } );
                    
                    
                    let mesh = new THREE.Mesh( geometry4, material4 );
                    scene.add( mesh );
                    mesh.position.set(46, -3, -80);
                    var texture5= new THREE.TextureLoader().load( 'cs.jpg' );


                    var geometry5 = new THREE.BoxBufferGeometry( 45, 45, 2 );
                    var material5 = new THREE.MeshBasicMaterial( { map: texture5 } );
                    
                    
                    let mesh5 = new THREE.Mesh( geometry5, material5 );
                    scene.add( mesh5 );
                    mesh5.position.set(86, -3, -80);
           
function animate(){
  requestAnimationFrame( animate );
  sun.rotation.z += 0.01
  sun.rotation.y += 0.005;
  sun.rotation.z += 0.004;
render.render( scene, camera);
mmi.update();
}

animate()
VANTA.FOG({
  el: "#section1",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 2000.00,
  minWidth: 2000.00,
  highlightColor: 0x8162d,
  midtoneColor: 0x101446,
  lowlightColor: 0x2828a2,
  baseColor: 0x201d1d,
  blurFactor: 0.30,
  speed: 7.00,
  zoom: 0.50
})