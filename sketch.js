
var cacto,imagenCacto1,imagenCacto2,imagenCacto3,imagenCacto4,imagenCacto5,imagenCacto6;
var nuven,imagenNuven;
var chãoAtraente;
var chão;
var chãoInvisivel;
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  chãoAtraente = loadImage("ground2.png");

  imagenNuven = loadImage("cloud.png");

  imagenCacto1 = loadImage("obstacle1.png");
  imagenCacto2 = loadImage("obstacle2.png");
  imagenCacto3 = loadImage("obstacle3.png");
  imagenCacto4 = loadImage("obstacle4.png");
  imagenCacto5 = loadImage("obstacle5.png");
  imagenCacto6 = loadImage("obstacle6.png");

}


function setup(){
  createCanvas(600,200)
  chão = createSprite(200,170,400,20);
  chão.addImage("fundo",chãoAtraente);
  chão.x = chão.width/2

  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
 trex.scale = 0.5;
 trex.addAnimation("running", trex_running);

 chãoInvisivel = createSprite(300,190,600,10);
 chãoInvisivel.visible = false;


}

function draw(){
  background("white")
 

if(keyDown("space") && trex.y>160){
trex.velocityY = -10
}
if(chão.x<0){
  chão.x = chão.width/2
}
trex.collide(chãoInvisivel);

chão.velocityX = -2;
trex.velocityY += 0.5

cactos();
nuvens();
//console.log(trex.y)
text("X:"+mouseX+"/Y:"+mouseY,mouseX,mouseY);



drawSprites();
}
 
function nuvens(){
  if(frameCount%80==0){
     nuven = createSprite(600,random(35,100),20,20);
     nuven.velocityX = -3
     nuven.addImage(imagenNuven)
     nuven.scale = random(0.5,1)
    nuven.depth = trex.depth -1
    nuven.lifetime=210;
  }
}

function cactos(){
  if(frameCount%80==0){
    cacto = createSprite(600,170,20,20);
    cacto.velocityX = -3
    cacto.scale = 0.5;
    cacto.lifetime=210;
 
    var cactoSorteio=Math.round(random(1,6));
      switch (cactoSorteio) {
        case 1: cacto.addImage(imagenCacto1)
          break;
      
        case 2: cacto.addImage(imagenCacto2)
        break;

        case 3: cacto.addImage(imagenCacto3)
        break;

        case 4: cacto.addImage(imagenCacto4)
        break;

        case 5: cacto.addImage(imagenCacto5)
        break;

        case 6: cacto.addImage(imagenCacto6)
        break;
      }
  }
}

 



