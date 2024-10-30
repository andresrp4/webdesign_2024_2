let numerosImpares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function retornaImpares(arr) {
    return arr.filter(num => num % 2 !== 0);
}

console.log(retornaImpares(numerosImpares));
