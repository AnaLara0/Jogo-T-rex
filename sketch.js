
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation ("trex1.png" , "trex3.png" , "trex4.png")
  groundImage = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running" , trex_running);

  ground = createSprite (200,100,400,20);
  ground.addImage(groundImage);
  ground.velocityX = -2;
  console.log(ground.x);


  trex.scale = 0.5;
}

function draw(){
  background("white")
  
if (ground.x <= 0){
    ground.x = ground.x/2;
}

  drawSprites ();
}
