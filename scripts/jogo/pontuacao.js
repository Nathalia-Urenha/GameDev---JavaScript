class Pontuacao{
  constructor(){
    this.pontos = 0;
  }
  
  exibe(){
    textAlign(RIGHT);
    fill('#000080');
    textSize(50);
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  qtdPontos(){
    return this.pontos;
  //  console.log(this.pontos);
  }
  
  adicionarPonto(){
    this.pontos += 0.2
  }
}