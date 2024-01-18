const userNumber = parseInt(document.getElementById('user-number'));
let computerNumber = crateNumberPc();
const goPlay = document.getElementById('play-game');

function crateNumberPc(){
    let numerRandom = Math.floor(Math.random() * 5) + 1;
    return numerRandom;
}

goPlay.addEventListener('click', function(){
    
} )

console.log(userNumber)
//console.log()
