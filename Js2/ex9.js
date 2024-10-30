let endereco = {
    rua: "Rua das Flores",
    numero: 123,
    bairro: "Centro",
    cidade: "São Paulo"
};

for (let prop in endereco) {
    console.log(`${prop}: ${endereco[prop]}`);
}
