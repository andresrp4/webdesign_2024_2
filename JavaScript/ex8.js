
function contarVogais(texto) {
    
    const vogais = "aeiou";
    let contador = 0;
    
    
    for (let i = 0; i < texto.length; i++) {
        
        if (vogais.includes(texto[i])) {
            contador++;
        }
    }
    
    return contador;
}


let stringExemplo = "programacao para web";
let numeroVogais = contarVogais(stringExemplo);

console.log("Número de vogais: " + numeroVogais);