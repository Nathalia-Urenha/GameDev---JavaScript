class Apresentacao{
constructor(){
  this.cont = 0;
  }
  draw(){
    this._imagemApresentacao();
  }
  
  _imagemApresentacao(){
    image(imagemApresentacao, 0, 0, width, height);
  }
  
  keyPressed(key){
    if (key === 'Enter'){
      cenaAtual = 'jogo';
    }
    
  }

  
}