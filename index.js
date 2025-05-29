const { isConstructorDeclaration } = require("typescript");

const nome = "kaion";
const endereço = "Rua viriato correia";

let idade = 20;
let engenharia = false;
let formatura = null;
let mestrado;

console.log(idade);

const cubo = {
    arestas: 4,
    lados: 4,
    angulos: 360,
};

/* Exercicio 2: */
const pessoa = {
    nome: "Joao",
    endereço,
    idade,
    formatura,
    falar: function () { 
        console.log("Oi");
    },
};

console.log(pessoa);
console.log("Novo nome: ", pessoa.nome);

pessoa.falar();

/* Array: */
const cores = ["Vermelho", "verde", "azul"];
const array = [1, true, "Qualquer coisa", 1.1];

const array1 = ["Fala", "Esse", "Nome"];
const array2 = [1, true, Math.PI.toString(), Math.E, 30, pessoa, {}];
console.log(array2);

const comidas = ["Yakisoba de frango", "Lasanha", "Pizza"];

const pessoa1 = {
    nome: "Campelo",
    endereço: "Samambaia",
    idade: 16,
    formatura,
    falar: function () { 
        console.log("Oi");
    }
};

const pessoa2 = {
    nome: "Kaion",
    endereço,
    idade,
    formatura,
    falar: function () { 
        console.log("Aoba");
    }
};

const listapessoa = [pessoa1, pessoa2];

console.log("kaionbrandaolima@gmail.com", JSON.stringify(listapessoa[0]));

// Laço de verificação de idade
for (let i = 0; i < listapessoa.length; i++) {
    if (listapessoa[i].idade >= 18) {
        console.log(listapessoa[i].nome, "tem 18 anos ou mais");
    } else {
        console.log(listapessoa[i].nome, "é menor de idade");
    }
}

let imc = 23;

switch (true) {
    case (imc < 18.5):
        classificar = "Abaixo do peso";
        break;
    case (imc < 18.5 && imc < 25):
        classificar = "Peso normal";
        break;
     case (imc < 25 && imc < 30):
        classificar = "Sobrepeso";
        break;
     case (imc < 30 && imc < 35):
        classificar = "Obesidade grau 1"
        break;
     case (imc < 35 && imc < 40):
        classificar = "Obesidade grau 2"
        break;
    default:
        console.log("Numero invalido")
}


console.log(add(true, false))

function calc(peso, altura) {
    return peso / (altura * altura);
}

const pesok = 66.0;
const alturak = 1.75;

calc(pesok, alturak);

console.log(calc());


