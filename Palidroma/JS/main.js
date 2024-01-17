const wordUser = document.getElementById('wordInput');
const btnControl = document.getElementById('controlInput');
let wordOriginal = [];
let wordPalindroma = [];

// Creo un input per chiedere la parola all'utente
btnControl.addEventListener('click', function(){
    let wordControlled = wordUser.value;
    console.log(wordControlled);
    //console.log(wordControlled.length);

    let b = 0;
    // 1 crea un array con le lettere della parola
    for (let i = 0; i < wordControlled.length; i++) {
        b++; 
        wordOriginal.push(wordControlled[i]);
    }
    console.log(wordOriginal);
    console.log(b);

    
});

    

//function isPalindroma(word){}

//for (let i = 0; i < array.length; i++) {
//    const element = array[i];
//}

// 2 in un secondo array mettici le lettere al crotrario
//for (let i = 0; i < array.length; i++) {
//    const element = array[i];
// 3 unisci il secondo array