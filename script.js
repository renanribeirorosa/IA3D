const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "Voce Acha a Ia Util nos dias de hoje?",
        alternativas: [
            {texto: "Sim",
            afirmação:"A Ia ajuda a facilitar nosso dia a dia"}, 

            {texto: "Não",
            afirmação:"A IA facilita nossos dias mas tbm tem que saber usa-la"}]
    },
    { 
        enunciado: "A IA te ajuda nos dias de hoje?",
        alternativas: [
            {texto: "Sim",
            afirmação:"A IA ajuda facitar as coisas como nas tarefas e outras coisas"}, 
                
            {texto: "Não",
            afirmação:"A IA nao te ajuda nos seus trabalhos hoje"}]
    },
    { 
        enunciado: "A IA está pronta para todos?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Sim, a IA será útil e está pronta para todos"}, 
                
            {texto: "Não",
            afirmação:"Não, a IA não é para o uso de todos"}]
    },
]

let posicao = 0;
let perguntaAtual;
let respostas = "";

function mostraPergunta() {
    if (posicao >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Em 25 anos...";
    textoResultado.textContent = respostas;
    caixaAlternativa.textContent = "";
}
mostraPergunta();