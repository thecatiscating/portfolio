
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
var controls
controls = new OrbitControls( camera, render.domElement );
controls.addEventListener('change', render)
//controls.minDistance = 6;
controls.maxDistance = 10;

let materialArray = [];
let textureimgbk = new THREE.TextureLoader().load("mars3d/arid_bk.jpg");
let textureimgdn = new THREE.TextureLoader().load("mars3d/arid_dn.jpg");
let textureimgft = new THREE.TextureLoader().load("mars3d/arid_ft.jpg");
let textureimglf= new THREE.TextureLoader().load("mars3d/arid_lf.jpg");
let textureimgrt= new THREE.TextureLoader().load("mars3d/arid_rt.jpg");
let textureimgup = new THREE.TextureLoader().load("mars3d/arid_up.jpg");

materialArray.push(new THREE.MeshBasicMaterial({map: textureimgft }));
materialArray.push(new THREE.MeshBasicMaterial({map: textureimgbk }));
materialArray.push(new THREE.MeshBasicMaterial({map: textureimgup }));
materialArray.push(new THREE.MeshBasicMaterial({map: textureimgdn }));
materialArray.push(new THREE.MeshBasicMaterial({map: textureimgrt }));
materialArray.push(new THREE.MeshBasicMaterial({map: textureimglf }));


let skyboxGeo = new THREE.BoxGeometry(200,200,200);
let skybox = new THREE.Mesh(skyboxGeo, materialArray)
scene.add(skybox);





for(let i=0; i<6; i++ ){
  materialArray[i].side = THREE.BackSide;
}


let text1 = `Technology 
           1. Craftsperson Award - 3D Tronics Competition 2020 senior category (secondary 2)
           2. Participation Award - POSB I.CODE Challenge 2019 (secondary 2) 
           3. Participation Award - Chips@School Competition 2021 (secondary 3) 
           4. Participation award - capture the flag events CSA-Cisco Youth Cyber Challenge 2021( secondary 3)
           5. NullSec’s Hack’N’Flag Capture-The-Flag event (secondary 2)
           6. COMPUTATIONAL AND ALGORITHMIC THINKING -  (secondary 4)`
let text = `Mathematics
           1. 2 Distinction Award - Australian Math Competition 2020 and 2021 (secondary 2 and 3) Junior and Intermediate Division respectively 
           2. Participation Award - Singapore Mathematical Society Essay Competition 2021 (secondary 3)
           3. Winner of Third Prize Award - NUS 2021 statistic essay competition (secondary 3)
           4. Silver Award - Singapore Kangaroo Math Competition (secondary 4)
           5. Participation Award - Teddy Rocks Math Competition (secondary 4)`
let text2 = `Science and Engineering
           1. Finalist Merit Award - Singapore Engineering Innovation Challenge 2021 (secondary 3)
           2. Finalist Top 6 participation- SUTD hackathon 2022 (secondary 4)
           3. Chemistry Olympiad (JUNE)
           4. Physics Olympiad (JUNE)` 
let text3 = `Humanities and Language
           Model United Nations (MUN)
           1. Participation Award - Dunman High Model ASEAN Plus Summit
           2. Participation Award - OnePeople.sg MUN 2020 & 2021
           3. Verbal Commendation - Singapore MUN
           4. Participation Award - National Youth Environment Conference
           5. Participation Award - Sustainable Development Youth Convention 2021
           6. Participation Award - Geography Challenge 2022
           7. Participation Award - Live On Festival 2021 Essay Competition
           8. Participation Award - Lien Shih Sheng literacy review
`
let text4 = `
           Through many competitions, i am exposed to more knowledge and skills that are taught 
           beyond classrooms settings, for example, model united nations have deepen my understanding 
           in current affairs and strengthen my communication skill ,allowing me to express my ideas 
           clearly. STEM competitions have greatly improved my critical thinking and creavtivity.
           
`
const mmi = new MouseMeshInteraction(scene, camera);
const loader = new FontLoader();

loader.load("./Kanit Medium_Regular.json", function(font){
  
const geometry = new TextGeometry(text, {
    font: font,
		size: 0.25,
		height: 0.01,
		
		
  }

  );
const textobj = new THREE.Mesh(geometry, [
    new THREE.MeshPhongMaterial({ colour: 0xf9d71c }),
    new THREE.MeshPhongMaterial({ colour: 0xffffff })
  ])
  textobj.position.set(-8.5, 3, -10);
  scene.add(textobj);
  
});
loader.load("./Kanit Medium_Regular.json", function(font){
  
  const geometry = new TextGeometry('Experience and Learning points', {
      font: font,
      size: 1,
      height: 0.01,
      
      
    }
  
    );
  const textobj = new THREE.Mesh(geometry, [
      new THREE.MeshPhongMaterial({ colour: 0xf9d71c }),
      new THREE.MeshPhongMaterial({ colour: 0xffffff })
    ])
    textobj.position.set(-8.5, 12, -10);
    scene.add(textobj);
    
  });
loader.load("./Kanit Medium_Regular.json", function(font){
  
  const geometry = new TextGeometry(text4, {
      font: font,
      size: 0.4,
      height: 0.01,
      
      
    }
  
    );
  const textobj = new THREE.Mesh(geometry, [
      new THREE.MeshPhongMaterial({ colour: 0xf9d71c }),
      new THREE.MeshPhongMaterial({ colour: 0xffffff })
    ])
    textobj.position.set(-11.5, 10, -10);
    scene.add(textobj);
    
  });
 
      
  
loader.load("./Kanit Medium_Regular.json", function(font){
  
  const geometry = new TextGeometry(text1, {
      font: font,
      size: 0.25,
      height: 0.01,
      
      
    }
  
    );
  const textobj1 = new THREE.Mesh(geometry, [
      new THREE.MeshPhongMaterial({ colour: 0xf9d71c }),
      new THREE.MeshPhongMaterial({ colour: 0xffffff })
    ])
    textobj1.applyMatrix (new THREE.Matrix4 ().makeScale (1, 1, -1));
    textobj1.rotateX(0);
    textobj1.rotateY(1.7);
    textobj1.rotateZ(0);
    //textobj1.position.set(-8.5, 9, -10);
    textobj1.position.set(-7, 3, 11);
    scene.add(textobj1);
    
  });



  loader.load("./Kanit Medium_Regular.json", function(font){
  
    const geometry = new TextGeometry(text2, {
        font: font,
        size: 0.25,
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
      textobj2.position.set(12, 3, -4);
      //textobj2.position.set(-7, 8, 11);
      scene.add(textobj2);
      
    });

loader.load("./Kanit Medium_Regular.json", function(font){
  
      const geometry = new TextGeometry(text3, {
          font: font,
          size: 0.25,
          height: 0.01,
          
          
        }
      
        );
      const textobj3 = new THREE.Mesh(geometry, [
          new THREE.MeshPhongMaterial({ colour: 0xf9d71c }),
          new THREE.MeshPhongMaterial({ colour: 0xffffff })
        ])
        textobj3.applyMatrix (new THREE.Matrix4 ().makeScale (-1, 1, -1));
        textobj3.rotateX(0);
        textobj3.rotateY(0);
        textobj3.rotateZ(0);
        textobj3.position.set(9, 4, 13);
        //textobj3.position.set(-7, 6, 11);
        scene.add(textobj3);
        
      });


loader.load("./Kanit Medium_Regular.json", function(font){
  
        const geometry = new TextGeometry("Press for supporting certificates", {
            font: font,
            size: 0.75,
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
          textobj4.position.set(-8.0, -1, -10);
          //textobj3.position.set(-7, 6, 11);
          scene.add(textobj4);
          textobj4.name = "btn1"
          
        
  mmi.addHandler('btn1', "click", function(marq){
             

    window.open('https://drive.google.com/file/d/1mC7of4_NRrSkZGHUWbDzr6WZ9MSCMuAR/view?usp=sharing')

    }); 
   
        });
        loader.load("./Kanit Medium_Regular.json", function(font){
  
          const geometry = new TextGeometry("Press for competition projects and writeups", {
              font: font,
              size: 0.75,
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
            textobj4.position.set(-8.0, -5, -10);
            //textobj3.position.set(-7, 6, 11);
            scene.add(textobj4);
            textobj4.name = "btn5"
            
          
    mmi.addHandler('btn5', "click", function(marq){
               
  
      window.open('https://drive.google.com/drive/folders/1Yj20JdB-TUUzQv4xfuT_3fiHdl8iRiqO?usp=sharing')
  
      }); 
     
          });
        loader.load("./Kanit Medium_Regular.json", function(font){
  
          const geometry = new TextGeometry("Press for supporting certificates", {
              font: font,
              size: 0.75,
              height: 0.09,
              
              
            }
          
            );
          const textobj4 = new THREE.Mesh(geometry, [
              new THREE.MeshPhongMaterial({ colour: 0xff0000 }),
              new THREE.MeshPhongMaterial({ colour: 0xffffff })
            ])
           
            textobj4.applyMatrix (new THREE.Matrix4 ().makeScale (1, 1, -1));
            textobj4.rotateX(0);
            textobj4.rotateY(1.7);
            textobj4.rotateZ(0);
            textobj4.position.set(-7, -1, 11);
            //textobj3.position.set(-7, 6, 11);
            scene.add(textobj4);
            textobj4.name = "btn2"
            
          
    mmi.addHandler('btn2', "click", function(marq){
               
  
      window.open('https://drive.google.com/file/d/1LRAX0bmq62-cqkl0n6Cep-XRlTnzFfQg/view?usp=sharing')
  
      }); 
     
          });
          loader.load("./Kanit Medium_Regular.json", function(font){
  
            const geometry = new TextGeometry("Press for supporting certificates", {
                font: font,
                size: 0.75,
                height: 0.09,
                
                
              }
            
              );
            const textobj4 = new THREE.Mesh(geometry, [
                new THREE.MeshPhongMaterial({ colour: 0xff0000 }),
                new THREE.MeshPhongMaterial({ colour: 0xffffff })
              ])
             
              textobj4.applyMatrix (new THREE.Matrix4 ().makeScale (1, 1, -1));
              textobj4.rotateX(0);
              textobj4.rotateY(-1.5);
              textobj4.rotateZ(0);
              textobj4.position.set(12, -1, -4);
              //textobj3.position.set(-7, 6, 11);
              scene.add(textobj4);
              textobj4.name = "btn3"
              
            
      mmi.addHandler('btn3', "click", function(marq){
                 
    
        window.open('https://drive.google.com/file/d/1sfsSjV6n00hTRA5a3McbfZ6Bs3fil4en/view?usp=sharing')
    
        }); 
       
            });
            loader.load("./Kanit Medium_Regular.json", function(font){
  
              const geometry = new TextGeometry("Press for supporting certificates", {
                  font: font,
                  size: 0.75,
                  height: 0.09,
                  
                  
                }
              
                );
              const textobj4 = new THREE.Mesh(geometry, [
                  new THREE.MeshPhongMaterial({ colour: 0xff0000 }),
                  new THREE.MeshPhongMaterial({ colour: 0xffffff })
                ])
               
                textobj4.applyMatrix (new THREE.Matrix4 ().makeScale (-1, 1, -1));
                textobj4.rotateX(0);
                textobj4.rotateY(0);
                textobj4.rotateZ(0);
                textobj4.position.set(9, -2, 13);
                //textobj3.position.set(-7, 6, 11);
                scene.add(textobj4);
                textobj4.name = "btn4"
                
              
        mmi.addHandler('btn4', "click", function(marq){
                   
      
          window.open('https://drive.google.com/file/d/1CAD8h5Lgsfk8b4JkjLNlgK61stXaDaoJ/view?usp=sharing')
      
          }); 
         
              });

  












function animate(){
  requestAnimationFrame( animate );
render.render( scene, camera);
mmi.update();
}

animate()