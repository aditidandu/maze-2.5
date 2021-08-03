var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w15, w16, w17, w18, w19, w20, w21, w22, w23, w24, w25, w26, w27, w28, w29, w30, w31, w32, w33
var player, playerImage, playerImage2
var wallGroup
var coinGroup, c1, c2, c3, c4, c5
var coinImage
var score, live
var gameState = "play"
var  ghostImage, ghostGroup, g1, g2, g3, g4, g5
var  mn, se, timer, se2
var  winSound
function preload(){
playerImage = loadAnimation("boy-1.png","boy-2.png", "boy-3.png", "boy-4.png", "boy-5.png" )
playerImage2 = loadAnimation("boy-1-flip.png", "boy-2-flip.png","boy-3-flip.png", "boy-4-flip.png", "boy-5-flip.png")
coinImage = loadImage("coin.png")
ghostImage = loadImage("ghost.png")
winSound=loadSound("win-sound.mp3")
}
function setup() {
  mn = minute();
  se = second()/1000
    score = 0;
  live = 3;
  timer=60
  createCanvas(800,800);
  player = createSprite(25,25, 40, 40)
  player.addAnimation("running", playerImage)
  player.addAnimation("run", playerImage2)

wallGroup = new Group()
coinGroup = new Group()
ghostGroup = new Group()
//coinGroup.setAnimationEach(coinImage)
player.scale = 0.15
  
  w1 = createSprite(100, 50, 200, 3);
  w2 = createSprite(250, 50, 3, 100);
  w3 = createSprite(150, 100, 200, 3);
  w4 = createSprite(100, 150, 500, 3);
  w5 = createSprite(300, 75, 3, 50);
  w6 = createSprite(425, 100, 250, 3);
  w7 = createSprite(400, 50, 200, 3);
  w8 = createSprite(550, 50, 3, 100);
  w9 = createSprite(450, 150, 100, 3);
  w10 = createSprite(350, 200, 3, 100);
  w11 = createSprite(400, 225, 3, 150);
  w12= createSprite(250, 300, 400, 3);
  w13= createSprite(225, 250, 250, 3);
  w14 = createSprite(100, 225, 3, 50);
  w15 = createSprite(200, 200, 200, 3);
  w16 = createSprite(50, 250, 3, 100);
  w17 = createSprite(500, 225, 3, 150);
  w18 = createSprite(550, 225, 3, 250);
  w19 = createSprite(450, 250, 3, 100);
  w20= createSprite(300, 350, 500, 3);
  w21 = createSprite(100, 400, 200, 3);
  w22 = createSprite(200, 500, 3, 100);
  w23= createSprite(300, 400, 400, 3);
  w24 = createSprite(550, 475, 3, 250);
  w25= createSprite(300, 600, 500, 3);
  w26 = createSprite(500, 475, 3, 150);
  w27= createSprite(325, 550, 250, 3);
  w28= createSprite(375, 500, 250, 3);
  w29= createSprite(350, 450, 300, 3);
  w30 = createSprite(150, 475, 3, 150);
  w31 = createSprite(100, 500, 3, 100);
  w32 = createSprite(75, 450, 50, 3);
  w33 = createSprite(50, 525, 3, 150);

  c1 = createSprite(400,75,20, 20)
  c2 = createSprite(250, 225,20, 20)
  c3 = createSprite(75,575,20, 20)
  c4 = createSprite(250,475,20, 20)
  c5 = createSprite(425, 225,20, 20)

 
  g1 = createSprite(400,75,20, 20)
  g2 = createSprite(75,575,20, 20)
  g3 = createSprite(250, 225,20, 20)
  g4 = createSprite(425, 225,20, 20)
  g5 = createSprite(250,475,20, 20)

 
 
  wallGroup.add(w1)
  wallGroup.add(w2)
  wallGroup.add(w3)
  wallGroup.add(w4)
  wallGroup.add(w5)
  wallGroup.add(w6)
  wallGroup.add(w7)
  wallGroup.add(w8)
  wallGroup.add(w9)
  wallGroup.add(w10)
  wallGroup.add(w11)
  wallGroup.add(w12)
  wallGroup.add(w13)
  wallGroup.add(w14)
  wallGroup.add(w15)
  wallGroup.add(w16)
  wallGroup.add(w17)
  wallGroup.add(w18)
  wallGroup.add(w19)
  wallGroup.add(w20)
  wallGroup.add(w21)
  wallGroup.add(w22)
  wallGroup.add(w23)
  wallGroup.add(w24)
  wallGroup.add(w25)
  wallGroup.add(w26)
  wallGroup.add(w27)
  wallGroup.add(w28)
  wallGroup.add(w29)
  wallGroup.add(w30)
  wallGroup.add(w31)
  wallGroup.add(w32)
  wallGroup.add(w33)

  coinGroup.add(c1)
  coinGroup.add(c2)
  coinGroup.add(c3)
  coinGroup.add(c4)
  coinGroup.add(c5)

  ghostGroup.add(g1)
  ghostGroup.add(g2)
  ghostGroup.add(g3)
  ghostGroup.add(g4)
  ghostGroup.add(g5)

  for(var i = 0; i<coinGroup.length;i++){
      coinGroup.get(i).addImage(coinImage)
      coinGroup.get(i).scale = 0.2
      ghostGroup.get(i).addImage(ghostImage)
      ghostGroup.get(i).scale = 0.2
      if(i%2===0){
        ghostGroup.get(i).velocityX=2
      }
      else{
ghostGroup.get(i).velocityY=2

      }
      }

      
}

function draw() {
  background("#F3F3CF"); 
  textSize(30)
fill("black")
  mn2 = minute();
  se2 = second()/1000
  if(mn2-mn>=1){
text("TimeUp", 600,200)
gameState = "end"
  }

  text("Score:"+score, 600, 50)
  text("Lives:"+live, 600, 150)
  text("timer:"+Math.round(timer), 600, 250)
  timer=timer-(se2-se)
  for(var i = 0; i<wallGroup.length;i++){
    ghostGroup.bounceOff(wallGroup.get(i))
    
          }
  player.collide(wallGroup)
  if(keyIsDown(RIGHT_ARROW)){
    player.x +=3
    player.changeAnimation("running", playerImage)

      }
      
  if(keyIsDown(LEFT_ARROW)){
    player.x +=-3
    player.changeAnimation("run", playerImage2)
      }
      
  if(keyIsDown(DOWN_ARROW)){
    player.y +=3
      }

    if(keyIsDown(UP_ARROW)){
       player.y +=-3
          }
  for(var i = 0; i<coinGroup.length;i++){
    if(coinGroup.get(i).isTouching(player)){
      score+=10
 coinGroup.get(i).destroy()
    }

  }
if(ghostGroup.isTouching(player)){
  live-=1
  player.x = 25
  player.y = 25
}
  if(live===0){
    gameState = "end"
  }
  if(gameState==="end"){
    text("GameOver", 400, 400)
    ghostGroup.setVelocityEach(0)

  }
  

    
  drawSprites();

}