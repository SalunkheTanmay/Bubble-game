let timmer=60;
let score=0;
let hit=0;
function makeBubble(){
var bubbles="";
for(var i=1;i<=170;i++){
    let randomnumber=Math.floor(Math.random()*10);
    bubbles+=`<div class="bubble">${randomnumber}</div>`
}

document.getElementById("bottom").innerHTML=bubbles;
}
function timeset(){
   let cleartime= setInterval(function(){
    if(timmer>0){
     timmer--
     document.getElementById("time").innerHTML=timmer;
    }
     else{
         clearInterval(cleartime)
         document.getElementById("bottom").innerHTML=`<h1>GAME OVER</h1>`
     }

    },1000)
}
function hitmarker(){
     hit=Math.floor(Math.random()*10);
    document.getElementById('hit').innerHTML=hit;
}
function updatescore(){
    score+=10;
    document.getElementById("scoreupdated").innerHTML=score;
}
document.getElementById("bottom").addEventListener("click", function(details){
  var clickednumber=Number(details.target.outerText);
  if(clickednumber==hit){
    updatescore();
    makeBubble();
    hitmarker();
  }
})
hitmarker();
makeBubble();
timeset();
