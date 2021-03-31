var Scores=0;
var cross=true;
isOn=false;
let man=document.querySelector('.man');
var gameOver=document.querySelector('.gameOver');
var dianasore=document.querySelector('.dianasore');
var paly=document.querySelector('.play');
var fa=document.querySelector('.fa-play-circle');

document.onkeydown=function(e){
if (isOn==true){

 // console.log(e.keyCode)
  if(e.keyCode==38){
    var man= document.querySelector('.man')
    man.classList.add('AnimateMan');
    setTimeout(()=>{
      man.classList.remove('AnimateMan');
    },700)
  }
   else if(e.keyCode==39){
    var man= document.querySelector('.man')
     manRight=parseInt(window.getComputedStyle(man).getPropertyValue('left'));
     man.style.left=(112+manRight) +'px'
   }
   else if(e.keyCode==37){
    var man= document.querySelector('.man')
     manLeft=parseInt(window.getComputedStyle(man).getPropertyValue('left'));
     man.style.left=(manLeft-112) +'px'
   }
 


setInterval(()=>{

 
  mx=parseInt(window.getComputedStyle(man).getPropertyValue('left'));
  my=parseInt(window.getComputedStyle(man).getPropertyValue('bottom'));
  dx=parseInt(window.getComputedStyle(dianasore).getPropertyValue('left'));
  dy=parseInt(window.getComputedStyle(dianasore).getPropertyValue('bottom'));
 // console.log(mx,dx);
  offsetX=Math.abs(mx-dx);
  offsetY=Math.abs(my-dy);
  //console.log (offsetX,offsetY);
  if(offsetX<=90 && offsetY<=50){
    dianasore.classList.remove('dinoAnimate');
    gameOver.style.display='block';
    isGameOn=false;
    fa.style.display='block';
  }
  else if (cross && (offsetX<140 && offsetY>90)){
    Scores+=1
    cross=false
    updateScore(Scores)
    setTimeout(()=>{ cross=true
    },1000)
    }

},100)

}
function updateScore(Scores){
  Score.innerHTML=' Score:'+ Scores
}
}

function startGame(){
  // var play=document.querySelector('.play');
  // isGameOn=true;
  
  isOn=true;
  gameOver.style.display='none';
  dianasore.classList.add('dinoAnimate');
  fa.style.display='none';
  Scores=0
  Score.innerHTML=' Score:'+ Scores
  
}
