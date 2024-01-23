//pari e dispari
const btnGame = document.getElementById('button-control');
const typeGame = document.getElementById('even-or-odd');
const numberUser = document.getElementById('user-number');

function computerNumber() {
    let numberMachine = Math.floor(Math.random() * 5) + 1;
    return numberMachine;
}

let numberComputer = computerNumber();
console.log(numberComputer)

function resultGame(numUser, numComp){
    let resultNumber = numUser + numComp;
    return resultNumber;
}


btnGame.addEventListener('click', function(){
    let decisionType = typeGame.value;
    let gameUser = parseInt(numberUser.value);
    console.log(decisionType)
    console.log(gameUser)
    if (isNaN(gameUser)){
        alert('non hai inserito un numero');
        location.reload();
    } else if (gameUser == ''){
        alert('non hai inserito un valore');
        location.reload();
    } else if (gameUser > 5){
        alert('inserisci un numero compreso tra 1 e 5!');
        location.reload();    
    }
    
    winnerIs = resultGame(gameUser, numberComputer);
    if (winnerIs % 2 == 0){
        alert('ha vinto il pari!')
        location.reload();    
    } else {
        alert('ha vinto il dispari')
        location.reload();    
    }
    console.log(winnerIs)
    
})