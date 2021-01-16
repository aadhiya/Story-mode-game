var canvas, backgroundImage;

var gameState = 0;
var playerCount=0;
var allPlayers;
var distance = 0;
var database;
var car1,car2,car3,car4,track,cars
var trackImage,car1Image,car2Image,car3Image,car4Image;
var form, player, game;
var gameBackground
var mainCharacter;
var image1,image2;
var player1;
var mainBackground;
var house;
function preload(){
 
  
  gameBackground=loadImage("../242332.jpg");
  mainCharacter=loadImage("../main character.png");
  mainBackground=loadImage("../main bg.png");
  image1=loadImage("../2.png");
  image2=loadImage("../3.png");
  house=loadImage("../house.png");
  
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(gameBackground);
  if(playerCount == 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState== 2){
    clear();
    game.play2();
    
   // game.end();
  }
}
