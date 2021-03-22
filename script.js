/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//



//Random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = 333; //how long to pause in between clues
var nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [getRandomInt(1, 6),getRandomInt(1, 6),getRandomInt(1, 6),getRandomInt(1, 6),getRandomInt(1, 6),getRandomInt(1, 6),getRandomInt(1, 6),getRandomInt(1, 6)];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //Has to be between 0.0 and 1.0
var guessCounter = 0;
var tries = 3;
//


document.getElementById("insert").innerHTML = tries;

function startGame(){
  pattern = [getRandomInt(1, 6),getRandomInt(1, 6),getRandomInt(1, 6),getRandomInt(1, 6),getRandomInt(1, 6),getRandomInt(1, 6),getRandomInt(1, 6),getRandomInt(1, 6)];
  progress = 0;
  gamePlaying = true;
  var resumee = context.resume();
  
  tries = 3;
  document.getElementById("insert").innerHTML = tries;
  
  document.getElementById("startButton").classList.add("hidden");
  document.getElementById("endButton").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  
  tries = 3;
  document.getElementById("insert").innerHTML = tries;
  gamePlaying = false;
  
  document.getElementById("startButton").classList.remove("hidden");
  document.getElementById("endButton").classList.add("hidden");
  
}

// Sound Synthesis Functions
const freqMap = {
  1: 200.6,
  2: 260.6,
  3: 300,
  4: 350.2,
  5: 375.6,
  6: 400.5
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
  console.log("playTone")
  
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
  var resumee = context.resume();
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

//Sequence auto light
function lightButton(btn){
  document.getElementById("square"+btn).classList.add("lit")
}


function clearButton(btn){
  document.getElementById("square"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}


//User's Response

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
  resetSpeed()
  tries = 3;
  document.getElementById("insert").innerHTML = tries;
}

function winGame(){
  stopGame();
  alert("Game Over. You Won!");
  resetSpeed()
  tries = 3;
  document.getElementById("insert").innerHTML = tries;
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  // add game logic here
  if (btn == pattern[guessCounter] && tries > 0){
    //correct answer
    if(guessCounter == progress){
      
      if(progress == pattern.length-1){
        winGame();
      }else{
        progress++;
        playClueSequence();
        
        
        //speed increases as you get further ahead
        clueHoldTime = clueHoldTime - 25;
        cluePauseTime = cluePauseTime - 25;
        nextClueWaitTime = nextClueWaitTime - 25;
        
      }
    }else{
      guessCounter++;
    }
  }else{
    playClueSequence();
    tries--;
    document.getElementById("insert").innerHTML = tries;
  }
  if (tries == 0){
    loseGame()
  }
}

function resetSpeed(){
  var clueHoldTime = 1000; //how long to hold each clue's light/sound
  var cluePauseTime = 333; //how long to pause in between clues
  var nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequenc
  
}