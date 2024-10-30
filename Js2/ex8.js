let produto = {
    nome: "Camiseta",
    preco: 50,
    quantidade: 3,
    calcularTotal: function() {
        return this.preco * this.quantidade;
    }
};

console.log(produto.calcularTotal());
