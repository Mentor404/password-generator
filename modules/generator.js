function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


const symbols = ",.;~`^-_#@$%*()[]=+'!";

const generateUpper = () => String.fromCharCode(rand(65,91));
const generateLower = () => String.fromCharCode(rand(97,123));
const generateNumber = () => String.fromCharCode(rand(48,58));
const generateSymbol = ()  => symbols[rand(0, symbols.length)];

export default function passwordGenerator(qtd, upper, lower, numbers, symbols) {
    const password = [];
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++) {
        upper && password.push(generateUpper());
        lower && password.push(generateLower());
        numbers && password.push(generateNumber());
        symbols && password.push(generateSymbol());
    }

    return password.slice(0, qtd).sort(()=> Math.random() - 0.5).join('');
    //corta o array conforme a quantidade de tipos
    //embaralha os tipos para não terem uma ordem fixa
    //concatena o array em uma string
}