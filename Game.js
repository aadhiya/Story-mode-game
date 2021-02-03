class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  
  player1=createSprite(600,700);
  player1.addImage(mainCharacter);
  player1.scale=0.5;
  }

  play(){
    form.hide();
    //textSize(30);
    //text("Game Start", 120, 100)
    Player.getPlayerInfo();
   // player.getCarsatend();
    if(allPlayers !== undefined){
      //var display_position = 130;
      background(mainBackground);
      //image(mainBackground,0,-displayHeight*4,displayWidth,displayHeight);
      var index=0;
      var x=175;
      var y;
      if(keyDown(UP_ARROW) ||keyDown("w")){
        player1.addImage(mainCharacter);
        player1.y=player1.y-1;
      }
      if(keyDown(DOWN_ARROW)|| keyDown("s")){
        player1.y=player1.y+1;
      }
      if (keyDown(LEFT_ARROW)|| keyDown("a")){
        player1.addImage(image1);
        image1.scale=5;
        player1.x=player1.x-1;
      }
      if (keyDown(RIGHT_ARROW)|| keyDown("d")){
        player1.addImage(image2);
        image2.scale=5;
        player1.x=player1.x+1;
      }
      console.log("x"+player1.x);
      console.log("y"+player1.y);
      if(player1.y>320 && player1.y<350 && player1.x<600 && player1.x>550){
        player1.visible=false;
        //background(house);
         gameState=2;
         game.update(2);
      console.log(gameState)
    }
      
      for(var plr in allPlayers){
        index=index+1;
        x=x+200;
        y=displayHeight-allPlayers[plr].distance
       // cars[index-1].x=x;
        //cars[index-1].y=y;
        if (index==player.index){
          stroke(10)
          fill("red")
         ellipse(x,y,60,60);
       // cars[index-1].shapeColor="red";
        camera.position.x=displayWidth/2;
        //camera.position.y=cars[index-1].y
        //display_position+=20;
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }
  }
    
  
    drawSprites();

  }
  end(){
    console.log("game over");
   // console.log(player.rank);
  }
  play2(){ if(allPlayers !== undefined){
    //var display_position = 130;
    background(house);
    player1.visible=true;
    var x=550;
    var y=600;
    if(keyDown(UP_ARROW) ||keyDown("w")){
      player1.addImage(mainCharacter);
      player1.y=player1.y-1;
    }
    if(keyDown(DOWN_ARROW)|| keyDown("s")){
      player1.y=player1.y+1;
    }
    if (keyDown(LEFT_ARROW)|| keyDown("a")){
      player1.addImage(image1);
      image1.scale=5;
      player1.x=player1.x-1;
    }
    if (keyDown(RIGHT_ARROW)|| keyDown("d")){
      player1.addImage(image2);
      image2.scale=5;
      player1.x=player1.x+1;
    }
    console.log("x"+player1.x);
    console.log("y"+player1.y);
   

  }
}
   drawSprites();
}
