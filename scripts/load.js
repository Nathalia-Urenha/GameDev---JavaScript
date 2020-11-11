//Função de carregar as imagens e o som do jogo
function preload() {
  

  imagemGameOver = loadImage('imagens/assets/game-over.png');

  imagemPersonagem = loadImage('imagens/personagem/Dinossaurinho_verde.png');

  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  
  somGameOver = loadSound('sons/musica_over.mp3');

  imagemInimigo = loadImage('imagens/inimigos/dino_azul.png');

  somDoPulo = loadSound('sons/poing.ogg');

  imagemInimigoGrande = loadImage('imagens/inimigos/Dinossauro_grande_mal.png');

  imagemInimigoVoador = loadImage('imagens/inimigos/meteoro_voador.png');
  
  
  imagemTelaInicial = loadImage ('imagens/cenas/cenario_um.jpg');
  
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');

  imagemAbelha = loadImage('imagens/personagem/abelhinha_certa.png');
  
  imagemCoracao = loadImage('imagens/assets/coracao.png');
  
  
  
  imagemCenario = loadImage('imagens/cenas/cenario_dino.png');
 
  imagemApresentacao = loadImage('imagens/cenas/imagem_apresentacao_certa.jpg');
  
  fita = loadJSON('fita/fita.json');
  
}