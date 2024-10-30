function invert(texto) {
    
    return texto.split("").reverse().join("");
}

let stringOrig = "Programação para Web";
let stringInv = inver(stringOrig);

console.log(stringInv);