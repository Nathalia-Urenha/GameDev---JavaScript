class TelaInicial{
  constructor(){
  
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(50);
    text('As aventuras de', width/2, height - 310);
    textSize(70);
    text('Dinossaurinho', width/2, height - 250 );
  }
  
  _botao(){
    botaoGerenciador.y = height - 250;
    botaoGerenciador.draw();
  }
  
}