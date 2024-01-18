const userNumber = document.getElementById('user-number');
let computerNumber = crateNumberPc();
const goPlay = document.getElementById('play-game');

//tramite una funzione produco un numero random per il computer
function crateNumberPc(){
    let numerRandom = Math.floor(Math.random() * 5) + 1;
    return numerRandom;
}

// Chiedo all'utente tramite un input di inserire un numero
goPlay.addEventListener('click', function(){
    let numberSelect = parseInt(userNumber.value);
    console.log(numberSelect)
    
})

//console.log()
