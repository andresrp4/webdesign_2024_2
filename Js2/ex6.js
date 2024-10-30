let aluno = {
    nome: "João",
    idade: 20,
    curso: "Engenharia",
    matricula: 12345,
    mostrarInformacoes: function() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}, Matrícula: ${this.matricula}`);
    }
};

aluno.mostrarInformacoes();
