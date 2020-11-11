//Sketch - Escopo principal do jogo

//Função de configurar a tela do jogo e os seus elementos
//Possui ordem
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  somDoJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  telaApresentacao = new Apresentacao();
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
  jogo.setup();
  cenas = {
    jogo: jogo,
    telaInicial: telaInicial,
    telaApresentacao: telaApresentacao
    
  };
}

function keyPressed() {
  jogo.keyPressed(key);
  telaApresentacao.keyPressed(key);
}



//Função que repete os elementos do jogo
function draw() {
  cenas[cenaAtual].draw();
}