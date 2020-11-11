class Jogo {
  constructor() {
    this.mapa = fita.mapa;
    this.indice = 0;
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);

    pontuacao = new Pontuacao();

    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 50, 110, 135, 440, 440);

    abelha = new Coisas(matrizAbelha, imagemAbelha, width, 250, 50, 50, 100, 100, 5, 100);

    const inimigoAzul = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 50, 200, 150, 400, 280, 10, 100);

    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 150, 70, 55, 440, 440, 8, 100);

    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 30, 250, 200, 400, 200, 15, 100);



    inimigos.push(inimigoAzul);
    inimigos.push(inimigoVoador);
    inimigos.push(inimigoGrande);

  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      if (personagem.pula()) {
        somDoPulo.play();
      }
    }
  }
  draw() {
    cenario.exibe();
    cenario.move();

    vida.draw();

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    abelha.exibe();
    abelha.move();

    personagem.exibe();
    personagem.aplicaGravidade();


    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

     
    inimigo.exibe();
    inimigo.move();
    inimigo.aumentaVelocidade(pontuacao.qtdPontos());
    
    let pontos = pontuacao.qtdPontos();


    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }

    }
    if (personagem.estaColidindo(inimigo)) {

      vida.perdeVida();
      personagem.tornarInvencivel();
      if (vida.vidas === 0) {
        image(imagemGameOver, width / 2 - 200, height / 3 - 130);
        somDoJogo.pause();
        somGameOver.play();
        noLoop();
      }


    }
  }
}