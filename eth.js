
import  MouseMeshInteraction from './three_mmi';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import * as THREE from 'three';

import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js"




const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const render = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});


render.setPixelRatio (window.devicePixelRatio);
render.setSize( window.innerWidth, window.innerHeight);


camera.position.setZ(20);

render.render(scene, camera);

const lighter = new THREE.PointLight(0xffffff);
lighter.position.set(10, 10, 10);

const surligther = new THREE.AmbientLight(0xffffff);
surligther.position.set(10,10,10)
scene.add(lighter, surligther);


const help = new THREE.PointLightHelper(lighter)
const gridhelp = new THREE.GridHelper(200, 50);
//scene.add(help, gridhelp)





// function addstars(){
//     const geometry = new THREE.SphereGeometry(0.24, 24, 24);
//     const material = new THREE.MeshStandardMaterial ({color: 0xffffff});
//     const star = new THREE.Mesh(geometry, material);
//     const [x, y, z] = Array(3)
//         .fill()
//         .map(() => THREE.MathUtils.randFloatSpread(15000));
    
//       star.position.set(x, y, z);
//       scene.add(star);
//     }
//     Array(200).fill().forEach(addstars)

let controls = new OrbitControls( camera, render.domElement );
controls.addEventListener('change', render)
//controls.minDistance = 6;
//controls.maxDistance = 14;
controls.enableZoom = true;
let materialArray = [];
let textureimgbk = new THREE.TextureLoader().load("eth3d/rainbow_bk1.png");
let textureimgdn = new THREE.TextureLoader().load("eth3d/rainbow_dn2.png");
let textureimgft = new THREE.TextureLoader().load("eth3d/rainbow_ft3.png");
let textureimglf= new THREE.TextureLoader().load("eth3d/rainbow_lf4.png");
let textureimgrt= new THREE.TextureLoader().load("eth3d/rainbow_rt5.png");
let textureimgup = new THREE.TextureLoader().load("eth3d/rainbow_up6.png");

materialArray.push(new THREE.MeshBasicMaterial({map: textureimgft }));
materialArray.push(new THREE.MeshBasicMaterial({map: textureimgbk }));
materialArray.push(new THREE.MeshBasicMaterial({map: textureimgup }));
materialArray.push(new THREE.MeshBasicMaterial({map: textureimgdn }));
materialArray.push(new THREE.MeshBasicMaterial({map: textureimgrt }));
materialArray.push(new THREE.MeshBasicMaterial({map: textureimglf }));


let skyboxGeo = new THREE.BoxGeometry(1000,1000,1000);
let skybox = new THREE.Mesh(skyboxGeo, materialArray)
scene.add(skybox);





for(let i=0; i<6; i++ ){
  materialArray[i].side = THREE.BackSide;
}
var texture3= new THREE.TextureLoader().load( 'sc.jpg' );


var geometry3 = new THREE.BoxBufferGeometry( 90, 70, 2 );
var material3 = new THREE.MeshBasicMaterial( { map: texture3 } );


let mesh2 = new THREE.Mesh( geometry3, material3 );
scene.add( mesh2 );
mesh2.position.set(-14, -25, 90);
var texture4= new THREE.TextureLoader().load( 'linxihandsome.jpeg' );


var geometry4 = new THREE.BoxBufferGeometry( 30, 45, 2 );
var material4 = new THREE.MeshBasicMaterial( { map: texture4 } );


let mesh = new THREE.Mesh( geometry4, material4 );
scene.add( mesh );
mesh.position.set(-32, -3, -80);
var texture5= new THREE.TextureLoader().load( 'facer.jpg' );


var geometry5 = new THREE.BoxBufferGeometry( 30, 45, 2 );
var material5 = new THREE.MeshBasicMaterial( { map: texture5 } );


let mesh1 = new THREE.Mesh( geometry5, material5 );
scene.add( mesh1 );
mesh1.position.set(65, -30, -30);
mesh1.applyMatrix (new THREE.Matrix4 ().makeScale (1, 1, 1));
mesh1.rotateX(0);
mesh1.rotateY(4.8);
mesh1.rotateZ(0);

var texture3= new THREE.TextureLoader().load( 'ard.jpg' );


var geometry3 = new THREE.BoxBufferGeometry( 50, 80, 2 );
var material3 = new THREE.MeshBasicMaterial( { map: texture3 } );


let mesh3 = new THREE.Mesh( geometry3, material3 );
scene.add( mesh3 );
mesh3.position.set(65, 25, 40);
mesh3.applyMatrix (new THREE.Matrix4 ().makeScale (1, 1, 1));
mesh3.rotateX(4.70);
mesh3.rotateY(4.83);
mesh3.rotateZ(0);

var texture6= new THREE.TextureLoader().load( 'fd.jpg' );


var geometry6 = new THREE.BoxBufferGeometry( 40, 40, 2 );
var material6 = new THREE.MeshBasicMaterial( { map: texture6 } );


let mesh6 = new THREE.Mesh( geometry6, material6 );
scene.add( mesh6 );
mesh6.position.set(-72, 20, 70)
mesh6.applyMatrix (new THREE.Matrix4 ().makeScale (1, 1, 1));
mesh6.rotateX(0);
mesh6.rotateY(1.57);
mesh6.rotateZ(0);
var texture7= new THREE.TextureLoader().load( 'st.jpg' );


var geometry7 = new THREE.BoxBufferGeometry( 30, 40, 2 );
var material7 = new THREE.MeshBasicMaterial( { map: texture7 } );


let mesh7 = new THREE.Mesh( geometry7, material7 );
scene.add( mesh7 );
mesh7.position.set(-63, 20, -40)
mesh7.applyMatrix (new THREE.Matrix4 ().makeScale (1, 1, 1));
mesh7.rotateX(0);
mesh7.rotateY(1.57);
mesh7.rotateZ(0);


var texture8= new THREE.TextureLoader().load( 'speakerc.jpg' );


var geometry8 = new THREE.BoxBufferGeometry( 60, 40, 2 );
var material8 = new THREE.MeshBasicMaterial( { map: texture8 } );


let mesh8 = new THREE.Mesh( geometry8, material8 );
scene.add( mesh8 );
mesh8.position.set(-63, 20, 10)
mesh8.applyMatrix (new THREE.Matrix4 ().makeScale (1, 1, 1));
mesh8.rotateX(0);
mesh8.rotateY(1.57);
mesh8.rotateZ(0);
let text1 = `Workshops
             School Enrichment Activities
             1. Youth Cyber Exploration Programme (YCEP) 2020
             2. YCEP 2021
             3. Temasek polytechnic YCEP 2020
             4. Intel(R) Skills for Innovation Workshop on 
                python cv object detection 2020
             5. MBOT robotics Workshop ALP programme 2021
             6. Arduino CTC workshop 2020
             7. BrainHack TLAI robotics workshop by DSTA 2022 (2 JUNE)
             8. SenseTime AI Bootcamp 2022. (23-27 JUNE)

             Self Learning Platforms
             1. Cisco Academy Python 
             2. Simplilearn Python/JavaScript`
let text = `Academics
            Examinable subjects: Additional Mathematics
            Elementary Mathematics, Physics, Chemistry, 
            Combined Humanities 
            (Geography & Social Studies), 
            Chinese Language
            Edusave scholarship top 10% 2020 & 2021
            CCA and Clubs
            1. Member of Infocomm Technology CCA 
            2. Applied Learning Program 
            3. Math Talents program. `
let text2 = `            These learning oppotunities outside of 
             school curriculum has offered me a  
             introduction to coding and more. 
             Till now, i am still constantly 
             upskilling myself via
             self learning platforms
             `
let text3 = `             Organising this workshop with Singapore Academy of Young Engineers 
              & Scientists (SAYES) gives me the oppotunity to empower the community and
              SAYES memebers. Collaborations between people are the driving force to 
              push me further. Similarly, orgainising other talks and initiatives in school
              provides me a way to give back to my community and educate the youths about
              STEM or Current affairs.
`
let text5 = `The Singapore Academy of Young Engineers & 
             Scientists has enabled me
             to meet like minded students to colaborate 
             to work on initiatives or projects
              
             Joined: January 2022
             Role: Member Representative for SAYES `
const mmi = new MouseMeshInteraction(scene, camera);
const loader = new FontLoader();

loader.load("./Kanit Medium_Regular.json", function(font){
  
const geometry = new TextGeometry(text, {
    font: font,
		size: 2,
		height: 0.01,
		
		
  }

  );
const textobj = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({ colour: 0xf9d71c }),
    new THREE.MeshPhongMaterial({ colour: 0xffffff })
  ])
  textobj.position.set(-5, 14, -80);
  scene.add(textobj);
  
});
loader.load("./Kanit Medium_Regular.json", function(font){
  
  const geometry = new TextGeometry(text1, {
      font: font,
      size: 2.0,
      height: 0.01,
      
      
    }
  
    );
  const textobj1 = new THREE.Mesh(geometry, [
      new THREE.MeshPhongMaterial({ colour: 0xf9d71c }),
      new THREE.MeshPhongMaterial({ colour: 0xffffff })
    ])
    textobj1.applyMatrix (new THREE.Matrix4 ().makeScale (-1, 1, 1));
    textobj1.rotateX(0);
    textobj1.rotateY(1.7);
    textobj1.rotateZ(0);
    //textobj1.position.set(-8.5, 9, -10);
    textobj1.position.set(65, -10, -8);
    scene.add(textobj1);
    
  });

  loader.load("./Kanit Medium_Regular.json", function(font){
  
    const geometry = new TextGeometry(text5, {
        font: font,
        size: 2.0,
        height: 0.01,
        
        
      }
    
      );
    const textobj5 = new THREE.Mesh(geometry, [
        new THREE.MeshPhongMaterial({ colour: 0xf9d71c }),
        new THREE.MeshPhongMaterial({ colour: 0xffffff })
      ])
      textobj5.applyMatrix (new THREE.Matrix4 ().makeScale (-1, 1, 1));
      textobj5.rotateX(0);
      textobj5.rotateY(0);
      textobj5.rotateZ(0);
      //textobj1.position.set(-8.5, 9, -10);
      textobj5.position.set(25, 44, 90);
      scene.add(textobj5);
      
    });
  

  loader.load("./Kanit Medium_Regular.json", function(font){
  
    const geometry = new TextGeometry(text2, {
        font: font,
        size: 1.8,
        height: 0.01,
        
        
      }
    
      );
    const textobj2 = new THREE.Mesh(geometry, [
        new THREE.MeshPhongMaterial({ colour: 0xf9d71c }),
        new THREE.MeshPhongMaterial({ colour: 0xffffff })
      ])
      textobj2.applyMatrix (new THREE.Matrix4 ().makeScale (1, 1, -1));
      textobj2.rotateX(0);
      textobj2.rotateY(-1.5);
      textobj2.rotateZ(0);
      textobj2.position.set(65, 33, -55);
      //textobj2.position.set(-7, 8, 11);
      scene.add(textobj2);
      
    });

loader.load("./Kanit Medium_Regular.json", function(font){
  
      const geometry = new TextGeometry(text3, {
          font: font,
          size: 2,
          height: 0.01,
          
          
        }
      
        );
      const textobj3 = new THREE.Mesh(geometry, [
          new THREE.MeshPhongMaterial({ colour: 0xf9d71c }),
          new THREE.MeshPhongMaterial({ colour: 0xffffff })
        ])
        textobj3.applyMatrix (new THREE.Matrix4 ().makeScale (1, 1, 1));
        textobj3.rotateX(0);
        textobj3.rotateY(1.57);
        textobj3.rotateZ(0);
        textobj3.position.set(-63, -10, 60);
        //textobj3.position.set(-7, 6, 11);
        scene.add(textobj3);
        
      });
      
  
        loader.load("./Kanit Medium_Regular.json", function(font){
  
          const geometry = new TextGeometry("Arduino CTC", {
              font: font,
              size: 2,
              height: 0.01,
              
              
            }
          
            );
          const textobj3 = new THREE.Mesh(geometry, [
              new THREE.MeshPhongMaterial({ colour: 0xf9d71c }),
              new THREE.MeshPhongMaterial({ colour: 0xffffff })
            ])
            textobj3.applyMatrix (new THREE.Matrix4 ().makeScale (-1,1, 1));
            textobj3.rotateX(0);
            textobj3.rotateY(1.7);
            textobj3.rotateZ(0);
            textobj3.position.set(65, 40 , -48);
            //textobj3.position.set(-7, 6, 11);
            scene.add(textobj3);
            
          });
    
          loader.load("./Kanit Medium_Regular.json", function(font){
  
            const geometry = new TextGeometry("Intell workshop Python CV", {
                font: font,
                size: 2,
                height: 0.01,
                
                
              }
            
              );
            const textobj3 = new THREE.Mesh(geometry, [
                new THREE.MeshPhongMaterial({ colour: 0xf9d71c }),
                new THREE.MeshPhongMaterial({ colour: 0xffffff })
              ])
              textobj3.applyMatrix (new THREE.Matrix4 ().makeScale (-1,1, 1));
              textobj3.rotateX(0);
              textobj3.rotateY(1.7);
              textobj3.rotateZ(0);
              textobj3.position.set(65, -4 , -48);
              //textobj3.position.set(-7, 6, 11);
              scene.add(textobj3);
              
            });
        
  
        loader.load("./Kanit Medium_Regular.json", function(font){
  
          const geometry = new TextGeometry("Press for more information", {
              font: font,
              size: 5,
              height: 0.09,
              
              
            }
          
            );
          const textobj4 = new THREE.Mesh(geometry, [
              new THREE.MeshPhongMaterial({ colour: 0xff0000 }),
              new THREE.MeshPhongMaterial({ colour: 0xffffff })
            ])
           
            textobj4.applyMatrix (new THREE.Matrix4 ().makeScale (-1, 1, 1));
            textobj4.rotateX(0);
            textobj4.rotateY(1.7);
            textobj4.rotateZ(0);
            textobj4.position.set(60, 55, -8);
            //textobj3.position.set(-7, 6, 11);
            scene.add(textobj4);
            textobj4.name = "btn"
            
          
    mmi.addHandler('btn', "click", function(marq){
               
  
      window.open('https://drive.google.com/drive/folders/1vjxmFfqI33FDk3ohYrxuMGeAAkajF0Sp')
  
      }); 
     
          });
          loader.load("./Kanit Medium_Regular.json", function(font){
  
            const geometry = new TextGeometry("Press for more information", {
                font: font,
                size: 5,
                height: 0.09,
                
                
              }
            
              );
            const textobj5 = new THREE.Mesh(geometry, [
                new THREE.MeshPhongMaterial({ colour: 0xff0000 }),
                new THREE.MeshPhongMaterial({ colour: 0xffffff })
              ])
             
              textobj5.applyMatrix (new THREE.Matrix4 ().makeScale (1, 1, 1));
              textobj5.rotateX(0);
              textobj5.rotateY(0);
              textobj5.rotateZ(0);
              textobj5.position.set(-12, 30, -80);
              //textobj3.position.set(-7, 6, 11);
              scene.add(textobj5);
              textobj5.name = "btn5"
              
            
      mmi.addHandler('btn5', "click", function(marq){
                 
    
        window.open('https://drive.google.com/drive/folders/1_yiFb7a4IopVhCMQgqPqltpvkRUUb5qw?usp=sharing')
    
        }); 
       
            });
            
            loader.load("./Kanit Medium_Regular.json", function(font){
  
              const geometry = new TextGeometry("Press for more information", {
                  font: font,
                  size: 5,
                  height: 0.09,
                  
                  
                }
              
                );
              const textobj5 = new THREE.Mesh(geometry, [
                  new THREE.MeshPhongMaterial({ colour: 0xff0000 }),
                  new THREE.MeshPhongMaterial({ colour: 0xffffff })
                ])
               
                textobj5.applyMatrix (new THREE.Matrix4 ().makeScale (-1, 1, 1));
                textobj5.rotateX(0);
                textobj5.rotateY(0);
                textobj5.rotateZ(0);
                textobj5.position.set(32, 55, 90);
                //textobj3.position.set(-7, 6, 11);
                scene.add(textobj5);
                textobj5.name = "btn15"
                
              
        mmi.addHandler('btn15', "click", function(marq){
                   
      
          window.open('https://drive.google.com/drive/folders/1iax9Dtj3zz4DO00SSjLnBg5IPkxs8pJv?usp=sharing')
      
          }); 
         
              });
              
            loader.load("./Kanit Medium_Regular.json", function(font){
  
              const geometry = new TextGeometry("Press for more information", {
                  font: font,
                  size: 5,
                  height: 0.09,
                  
                  
                }
              
                );
              const textobj4 = new THREE.Mesh(geometry, [
                  new THREE.MeshPhongMaterial({ colour: 0xff0000 }),
                  new THREE.MeshPhongMaterial({ colour: 0xffffff })
                ])
               
                textobj4.applyMatrix (new THREE.Matrix4 ().makeScale (1, 1, 1));
                textobj4.rotateX(0);
                textobj4.rotateY(1.57);
                textobj4.rotateZ(0);
                textobj4.position.set(-63, 53, 60);
                //textobj3.position.set(-7, 6, 11);
                scene.add(textobj4);
                textobj4.name = "btn6"
                
              
        mmi.addHandler('btn6', "click", function(marq){
                   
      
          window.open('https://drive.google.com/drive/folders/1_w9ZXEAcpqXj_xtC07OPNCj0GeB8XLFZ?usp=sharing')
      
          }); 
         
              });









function animate(){
  requestAnimationFrame( animate );
render.render( scene, camera);
mmi.update();
}

animate()