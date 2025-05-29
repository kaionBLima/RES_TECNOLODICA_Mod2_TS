interface pessoaProps {
    nome: string;
    endereco: string;
    idade: number;
    mestrado: boolean | undefined;
    formatura: boolean | null;
    falar: () => void;
    somar: (a: number, b: number) => number;
}


const pessoa: pessoaProps = {
    nome: "Kaion",
    endereco: "Samambaia",
    idade: 20,
    mestrado: undefined,
    formatura: null,
    falar: () => {
        console.log("Oi");
    },
    somar: (a, b) => {
        return a + b;
    }
};

console.log(pessoa.somar(10, 20))
console.log(pessoa.falar())

const pessoaArray: pessoaProps[] = [
    {
        nome: "",
        endereco: "",
        idade: 10,
        falar: () => {
            console.log("Falar");
        },
        formatura: null,
        mestrado: undefined,
        somar: (a, b) => a + b
    }
];

console.log(pessoaArray);
