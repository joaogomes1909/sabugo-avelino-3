let cor;
let circuloX; // horizontal
let circuloY; // vertical

function setup() {//função
  createCanvas(400, 400);//criando a tela
  background(color(100, 0 , 0));//muda cor
  cor = color(random(0, 255), random(0, 255), random(0, 255));//aleatorio
  
  circuloX = [0, 0, 0];//thorizontal
  circuloY = [random(height), random(height), random(height)];//vertical

  
function draw() {//empate
  
fill(cor);//prencher
  for(let contador in circuloX) {
    circle(circuloX[contador], circuloY[contador], 50);//circulo    
    circuloX[contador]+= random(0,3);//horizontal
    circuloY[contador]+= random(-3,3);//vertical 
    
    if(circuloX[contador] >= width){//horizontal
      circuloX[contador] = 0;//horizontal
      circuloY[contador] = random(height);//vertical
    }
  }
  
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));//cor aleatoria
  }
}

