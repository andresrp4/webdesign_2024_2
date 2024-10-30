let alunos = [
    { nome: "Maria", idade: 17 },
    { nome: "Pedro", idade: 19 },
    { nome: "Ana", idade: 22 }
];

function alunosMaior(arr) {
    return arr.filter(aluno => aluno.idade > 18);
}

console.log(alunosMaior(alunos));
