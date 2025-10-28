let score=0
let round=0
let colors=["red","blue"]
let lastColor=""
let playing=false

document.addEventListener("keydown",function(e){
if(!playing && e.code=="Space"){
 round=0
 score=0
 nextRound()
}

if(playing && (e.key=="r" || e.key=="b")){
 let answer
 if(e.key=="r"){
  answer="red"
 }else{
  answer="blue"
 }
 if(answer==lastColor){
  score++
 }else{
  score--
 }
 playing=false
 setTimeout(function(){
  if(round<3){
   nextRound()
  }else{
   endGame()
  }
 },500)
}
})

function nextRound(){
 round++
 document.getElementById("start").innerText="기억해봐!"
 let colorChange=0
 let play=setInterval(function(){
  lastColor=colors[Math.floor(Math.random()*2)]
  document.body.style.background=lastColor
  colorChange=colorChange+1

  if(colorChange>6){
   clearInterval(play)
   document.body.style.background='white'
   document.getElementById("start").innerText="마지막 색은?(R/B)"
   playing = true
  }
 },300)
}

function endGame(){
 document.getElementById("start").innerText=`게임 끝! 점수:${score}/3`
}
