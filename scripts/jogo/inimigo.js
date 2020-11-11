class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    this.velocidade = velocidade;
    this.x = width;
    this.variacaoY = variacaoY;
  }

  move() {
    this.x = this.x - this.velocidade;
  }

  aparece() {
    this.x = width;
  }  

  aumentaVelocidade(pontos){
    //console.log(pontos);
    if(pontos < 10)
    {
      this.velocidade = 5;
    }
    else if(pontos > 10 && pontos < 20 )
    {
      this.velocidade = 10;
    }
    else if(pontos > 20 && pontos < 40)
    {
      this.velocidade = 15;
    }
    else if(pontos > 50 && pontos < 70)
    {
      this.velocidade = 20;
    }
    else if(pontos > 50)
    {
      this.velocidade = 30;
    }
    else if(pontos > 100 && pontos < 200)
    {
      this.velocidade = 50;
    }
    else if(pontos > 200)
    {
      this.velocidade = 60;
    }
    
  }
}