function gerarEmail(nomeCompleto) {

    nomeCompleto = nomeCompleto.toLowerCase();
    
    let partesDoNome = nomeCompleto.split(" ");
    
    let primeiroNome = partesDoNome[0];
    let ultimoNome = partesDoNome[partesDoNome.length - 1];
    
    let email = primeiroNome + "." + ultimoNome + "@facens.br";
    
    console.log(email);
}

let nome = "Andre Siq";
gerarEmail(nome);