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
    
    b = b -1;
    // 2 in un secondo array mettici le lettere al contrario
    while (b >= 0) {
        wordPalindroma.push(wordOriginal[b]);
        b--;
    }
    console.log(wordPalindroma);

    // 3 unisci il secondo array
    i = 0;

    let wordReverse = '';
    while (i < wordPalindroma.length){
        wordReverse =  wordReverse + wordPalindroma[i];
        i++;
    }
    console.log(wordReverse);

    if (wordControlled === wordReverse) {
        alert('La parola da te inserita è un palidromo')
    } else {
        alert('La parola da te inserita non è un palidromo')
    }

});
