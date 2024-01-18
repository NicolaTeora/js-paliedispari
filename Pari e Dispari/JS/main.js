const inputNumber = document.getElementById('user-number');
let computerNumber = crateNumberPc();
const decisionType = document.getElementById('decision-type').value;
const goPlay = document.getElementById('play-game');
let resultType = getADecision();

// Chiedo all'utente se scommette pari o dispari
function getADecision(){
    let selectType 
    if (decisionType == 'even'){
        selectType = true;
    } else {
        selectType = false;
    }
    return selectType;
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

    if (isNaN(numberSelect)){
        alert('inserisci un numero')
    }

    let numberEven = numberSelect + computerNumber;    
    console.log(numberEven)
})

//console.log()
