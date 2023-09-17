let random =(Math.floor(Math.random()*100 + 1));
const submit =document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const gueslot = document.querySelector('.guesses')
const guessremaining = document.querySelector('.lastResult')
const loworhigh = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')
const p = document.createElement('p')

let prevguess =[]
let numguess = 1

let playgame = true

if(playgame){
submit.addEventListener('click',function(e){
    e.preventDefault()
 const guess = parseInt( userinput.value)
 vlalidateguess(guess)
})
}

function vlalidateguess(guess){
if(isNaN(guess) ){
alert("please enter valid number")
}else if(guess<1){
    alert("please enter valid number")
}else if(guess>100){
    alert("please enter valid number")  
}else {
    prevguess.push(guess)
    if(numguess===11){
displayguess(guess)
displaymessage(`Game over . Random no was ${random}`)
endgame()
    }else{
        displayguess(guess)
        checkguess(guess)
    }
}
}


function checkguess(guess){
if(guess==random){
    displaymessage(`you guessed it right`)
    endgame()
}else if(guess<random){
    displaymessage(`Number is too low`)
}else{
    displaymessage(`Number is too high`)
}
}

function displayguess(guess){
userinput.value=''
gueslot.innerHTML+=`${guess}  `
numguess++; 
guessremaining.innerHTML=`${11-numguess}`
}

function displaymessage(message){
   loworhigh.innerHTML=`<h2>${message}</h2>` 
}

function endgame(){
userinput.value=''
userinput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h2 id="newgame">Start new game</h2>`
startover.appendChild(p)
playgame=false;
newgame()
}

function newgame(){
const newgamebutton =document.getElementById('newgame')
newgamebutton.addEventListener('click',function(e){
random = parseInt(Math.random()*100 +1)
prevguess=[]
numguess=1
gueslot.innerHTML=''
guessremaining.innerHTML=`${11-numguess}`
userinput.removeAttribute('disabled')
startover.removeChild(p)
    playgame=true;
})
}

