function palind(texto) {
    const textoLimpo = texto.replace(/\s+/g, '').toLowerCase();
    const textoInvertido = textoLimpo.split('').reverse().join('');
    return textoLimpo === textoInvertido;
}
console.log(palind("arara")); // true
console.log(palind("halo")); // false
