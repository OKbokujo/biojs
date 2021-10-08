import { data } from "jquery";
import Animate from "./Animate.js";
// Start *******************************************************************
$(window).ready(function(){
    initApp();  
});

const onScrollAppearList = ['date3','left1','left2','left3','left4','left5','left6'
,'right1','right2', 'right3', 'right4', 'right5', 'right6','megaman1','megaman2'];
window.addEventListener("scroll", (e)=>{scrollFunction()});

const scrollFunction = () =>{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       
        displayElement("myBtnBox",'block')
        document.getElementById("myBtnBox").addEventListener('click', (e)=>{
            topFunction();
        })
    } else {
        hideElement('myBtnBox');
    }
    onScrollAppearList.forEach((x)=> {
        let element = document.getElementById(x);
        let position = element.getBoundingClientRect();
        console.log(element.style.opacity.toString());
        if(x === 'megaman1'){
            if((element.style.display != "none" &&  element.style.opacity >.9)  &&  position.bottom <0 ){
                elementAnimation(x,'0px', '0px', '0px','0px', '1','1',0,'none');
                fadeOut(element);
                startBeam3();
            }
        }
        else if(x === "megaman2"){
            if((element.style.display != "none" &&  element.style.opacity >.9)  &&  position.bottom <0 ){
                elementAnimation(x,'0px', '0px', '0px','0px', '1','1',0,'none');
                fadeOut(element);
                startBeam5();
            }
        }
        else{
            if (element.style.opacity <.01  && position.bottom <= window.innerHeight  ) {
            
                if(x.includes('left')){
                    elementAnimation(x,'-50%', '0px', '0px','0px', '1','1',0,'in');
                }
                
                else{
                    elementAnimation(x,'50%', '0px', '0px','0px', '1','1',0,'in');
                }
            // fadeIn(element);
            }
            if(element.style.opacity == 1 &&  position.bottom > window.innerHeight  ){
                if(x.includes('left')){
                    elementAnimation(x,'0px', '0px', '-100%','0px', '1','1',0,'out');
                }
                else if(x.includes('megaman')){

                }
                else{
                    elementAnimation(x,'0px', '0px', '100%','0px', '1','1',0,'out');
                }
            }
        }
    

    })
 }

 const topFunction= ()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const  initApp =  () => {
  getElements();
  startNextSection();
}
// FirstSection *******************************************************************
const getElements = ()=>{
    const meow =document.getElementById('meow');
    addListenerSpinner(meow);
}

const  addListenerSpinner = (element) =>{
    element.addEventListener('loadeddata', (e) => {
        if(element.readyState >= 3){ 
        hideElement('spinner');
          startAnimations(); 
         //element.removeEventListener("loadeddata");
       
        }
      });
      
}

const  startAnimations=()=>{
    //firstItem();
   // secondItem();
    startFirstTextGroupFadeIn();
}


const startFirstTextGroupFadeIn = () =>{
    let timeInterval = 1000;
    
    elementAnimation("hello","0px", "0px", "0px", "0px", "2", "1",0, "in");
    elementAnimation("thanks","-50%", "-40%", "0px", "0px", "2", "1", timeInterval *.7, "in");
    elementAnimation("forE","-20%", "-40%", "0px", "0px","2","1", timeInterval *2 *.7, "in");
    elementAnimation("stopping","0%", "-40%", "0px", "0px","2","1",timeInterval * 3 *.7, "in");
    elementAnimation("by","40%", "-40%", "0px", "0px","2","1",timeInterval *4 *.7, "in");
    setTimeout(() => {
        removeFirstTextGroup();
    }, 5000);

}
const removeFirstTextGroup =() =>{
    elementAnimation("thanks","0px", "0px", "-300%", "0px", "1", "3", 0, "out");
    elementAnimation("forE","0px", "0px", "-400%", "0px", "1", "3",0, "out");
    elementAnimation("stopping","0px", "0px", "20%", "0px", "1", "3",0, "out");
    elementAnimation("by","0px", "0px", "500%", "0px", "1", "3",0, "out");
    elementAnimation("hello","0px", "0px", "0px", "0px", "1", "2",0, "out");
    setTimeout(() => {
        startSecondTextGroup();
    }, 1300);
}

const startSecondTextGroup= () =>{
    let timeInterval = 2200;
    let scale = "1"
    elementAnimation("firstS","300px", "-220px", "0px", "0px", "0.2", scale,0, "in");
    elementAnimation("secondS","250px", "-320px", "0px", "0px","0.2", scale,timeInterval *.7, "in");
    elementAnimation("thirdS","250px", "-420px", "0px", "0px", "0.2",scale,timeInterval*2  *.7, "in");
    elementAnimation("fourthS","250px", "-520px", "0px", "0px", "0.2",scale,timeInterval*3  *.7, "in");
    elementAnimation("fifthS","250px", "-620px", "0px", "0px", "0.2",scale,timeInterval *4 *.7, "in");
    elementAnimation("sixthS","250px", "-720px", "0px", "0px", "0.2",scale,timeInterval *5*.7, "in");
    elementAnimation("seventhS","250px", "-820px", "0px", "0px", "0.2",scale,timeInterval *6 *.7, "in");
    setTimeout(() => {
        startNextSection();
    }, timeInterval * 6);
}
const startNextSection =() =>{
    displayElement('nextSection', 'unset');
    addListenerScrollTo(nextSection, 'beam' , 'transformbeam',"cylon_eye", 'transformeye'  );
    
}

const displaySections = () =>{
    document.getElementById('section1').style.display = 'block';
    document.getElementById('section2').style.display = 'block';
    document.getElementById('section3').style.display = 'block';
}
//Second section **********************************************************************

const startBeam2 = () =>{
   
   startBeam('beam2','transformbeam2','cylon_eye2','transformeye2','megaman1',800);
   setTimeout(()=>{
       document.getElementById('megaman1').style.opacity = 1;
       document.getElementById('date1').style.display= 'block';
     scrollToTarget();
      // doScrolling();
     //  Scroll_To();
   },800);
}

const startBeam3 = () =>{
    startBeam( 'beam3', 'transformbeam2','cylon_eye3','transformeye3',"", 600);
    setTimeout(()=>{
        startBeam4();
    },800);
}
const startBeam4 = () =>{
    startBeam( 'beam4', 'transformbeam2','cylon_eye4','transformeye2','megaman2', 1000);
    //document.getElementById('mm2box').scrollIntoView({ behavior: 'smooth', block: 'end' });
    setTimeout(()=>{
       document.getElementById('megaman2').style.opacity = 1;
        document.getElementById('date2').style.display = "block";
    },1000);
    
}

const startBeam5 =()=>{
    startBeam( 'beam5', 'transformbeam2','cylon_eye5','transformeye3','', 600);
    setTimeout(()=>{
        startBeam6();
    },800);
}

const startBeam6 = ()=>{
    document.getElementById('megaman3').style.opacity =1;
    startBeam( 'beam6', 'transformbeam2','cylon_eye6','transformeye2','megaman3', 1000);
    //document.getElementById('mm3box').scrollIntoView({ behavior: 'smooth', block: 'end' });
    morphToStudyMan();
}

const morphToStudyMan = () => {
    setTimeout(()=>{
    let mega =  document.getElementById('megaman3');
      mega.style.display = "none";
        setTimeout(()=>{
         let studyman = document.getElementById('studyman');
         studyman.style.display = "block";
         fadeIn(studyman);
        },200);
    },4000)
    
}

//useful methods *******************************************************************

const addListenerScrollTo =(element, lineID, className, eyeId, eyeClassName) =>{
    element.addEventListener('click', ()=>{
        //TODO: make next section visible "section2"
       
        
        displaySections();
        startLineAnimation( lineID, className, eyeId,eyeClassName);
        document.getElementById('mm1box').scrollIntoView({ behavior: 'smooth', block: 'end' });
       
      //handle(document.getElementById('section3'));
       setTimeout(() => {
        startBeam2();
        
     }, 550);
    });
}


const startBeam = (beamID, beamtransform, cylonID, eyetransform, showElement,time)=>{
    startLineAnimation(beamID,beamtransform, cylonID, eyetransform);
    setTimeout(() => {
        hideElement(cylonID);
       if(showElement != ""){
            displayElement(showElement,'block') ;
        }
     }, time);
}

const displayElement = (id, displaytype) =>{
    let element = document.getElementById(id);
    element.style.display = displaytype;
}
const hideElement = (id) =>{
    let element = document.getElementById(id);
    element.style.display = 'none';
}
const startLineAnimation = ( lineID, className, eyeId, eyeClassName) =>{
    let beam = document.getElementById(lineID);

     beam.style.display = "block";
    beam.className =className;
    startEyeAnimation(eyeId,eyeClassName)
}

const startEyeAnimation = (eyeId, eyeClassName) =>{
    
    let cylon_eye= document.getElementById(eyeId);
    cylon_eye.style.display = "block";
    cylon_eye.className = eyeClassName;
}
const elementAnimation = (id,xNum, yNum, xNumEnd, yNumEnd,scaleS,scaleE, pause, fade)=>{
    let element = document.getElementById(id);
    setTimeout(function(){  
        fade === "in" ? fadeIn(element) : fade === "out" ? fadeOut(element) : "";
        animateObjects(element,xNum, yNum, xNumEnd, yNumEnd, scaleS, scaleE);
       
    },pause);
}
const animateObjects=  (element,xNumS, yNumS, xNumE, yNumE, scaleS, scaleE) =>{
    element.animate([
        { transform: `translate(${xNumS}, ${yNumS}) scale(${scaleS})`},
        {transform: `translate(${xNumE}, ${yNumE}) scale(${scaleE})`}
      ], {

        duration: 1200,
        iterations: 1
      }, );
     
}

const fadeIn =(element) =>{
    
    let opacity = 0;
    let intervalID = setInterval(function() {

        if (opacity < 1) {
            opacity = opacity + 0.01
            element.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 10);

}

const fadeOut = (element) =>{
    let opacity = 1;
    let intervalID = setInterval(function() {

        if (opacity > 0) {
            opacity = opacity - 0.2
            element.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 200);
}



const scrollToTarget = function () {
    const top = 10000;
    const startPos = window.pageYOffset;
    const diff = top;
    const duration = 20000;

    let startTime = null;
    let requestId;

    const loop = function (currentTime) {
        if (!startTime) {
            startTime = currentTime;
        }

        const time = currentTime - startTime;

        const percent = Math.min(time / duration, 1);
        window.scrollTo(0, startPos + diff * percent);

        if (time < duration) {
            
            requestId = window.requestAnimationFrame(loop);
        } else {
            window.cancelAnimationFrame(requestId);
        }
    };
    requestId = window.requestAnimationFrame(loop);
};
