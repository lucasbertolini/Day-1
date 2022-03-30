let nome = prompt('Qual o seu nome?');
let idade = prompt('Qual a sua idade?');
let linguagem = prompt('Qual a linguagem de programação você está estudando?')
let resposta = document.querySelector('#resposta01');
let resposta02 = document.querySelector('#resposta02');

resposta.innerHTML = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

let pergunta01 = prompt(`Você gosta de estudar ${linguagem}?`) ;


if(pergunta01 == 'sim'){
    resposta02.innerHTML = 'Muito bom, continue estudando e você tera muito sucesso!';
}else{
    resposta02.innerHTML = 'Ahh que pena... Já tentou aprender outras linguagens?';
}