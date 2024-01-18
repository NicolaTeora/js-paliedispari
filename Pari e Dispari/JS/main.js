const inputNumber = document.getElementById('user-number');
let computerNumber = crateNumberPc();
let decisionType = getADecision();
const goPlay = document.getElementById('play-game');

// Chiedo all'utente se scommette pari o dispari
function getADecision(){
    const typeNumber = document.getElementById('decision-type').value;
    return typeNumber;
}
console.log(decisionType)

//tramite una funzione produco un numero random per il computer
function crateNumberPc(){
    let numerRandom = Math.floor(Math.random() * 5) + 1;
    return numerRandom;
}
console.log(computerNumber)

// Chiedo all'utente tramite un input di inserire un numero
goPlay.addEventListener('click', function (){
    let numberSelect = parseInt(inputNumber.value);
    console.log(numberSelect)

    let numberEven = numberSelect + computerNumber;    
    console.log(numberEven)
})

//console.log()
