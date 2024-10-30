let numeros = [10, 20, 30, 40, 50];

function somaArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

console.log(somaArray(numeros));
