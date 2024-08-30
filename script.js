const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Voce Gosta de Usar inteligencia Artificial",
        alternativas:["Nao","Sim "]
    },
    {
        enunciado: "Voce ja usou uma Inteligencia Artificial",
        alternativas:["Nao","Sim"]
    },
    {
        enunciado: "Voce acha que a Inteligencia Artificial e boa para a Populacao",
        alternativas:["Nao","Sim"]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas()
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        
    }
}
