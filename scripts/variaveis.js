//Variáveis
let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let imagemTelaInicial;
let imagemAbelha;
let imagemCoracao;
let imagemApresentacao;
let fonteTelaInicial;

let cenario;
let personagem;
let abelha;
let pontuacao;
let botaoGerenciador;

let somDoPulo;
let somGameOver;

let jogo;
let telaInicial;
let telaApresentacao;

let cenaAtual = 'telaInicial';
let cenas;

let vida;
let fita;

const inimigos = [];
const matrizInimigoVoador = [
  [0, 0],
  [440, 0],
  [0, 440],
  [440, 440],
];
 
const matrizAbelha = [
  [0, 0],
  [100, 0],
  [0,100],
  [100, 200],
];


const matrizInimigoGrande = [
  [0,0],
  [400,0],
  [800,0],
  [0, 200],
  [400,200],
  [800,200],
  
];


const matrizPersonagem = [
  [0, 0],
  [440, 0],
  [0, 440],
  [440, 440],
];


const matrizInimigo = [
  [0,0],
  [400,0],
  [800,0],
  [0, 280],
  [400,280],
  [800,280],
];