class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset=createButton('reset');
    this.onePlayer=createButton('one player');
    this.twoPlayer=createButton('two player');
  }
  hide(){
  this.greeting.hide();
  this.button.hide();
  this.input.hide();
  this.title.hide();
  this.onePlayer.hide();
  this.twoPlayer.hide();
}

  display(){
    fill("white");
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-50, 0);

    this.input.position(displayWidth/2-40, displayHeight/2-80);
    this.button.position(displayWidth/2+30, displayHeight/2);
    this.reset.position(displayWidth-100,20);
    this.onePlayer.position(displayWidth/2-50,displayHeight/2+100);
    this.twoPlayer.position(displayWidth/2+50,displayHeight/2+100);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount=playerCount+1;
      player.index = playerCount;
      //console.log(playerCount);
      player.update();
      player.updateCount(playerCount);
      fill("white");
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-70, displayHeight/4);
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    })
  this.onePlayer.mousePressed(()=>{
    //background("white");
    //player1=new Player(mainCharacter);
     this.input.hide()
      this.button.hide()
      this.twoPlayer.hide();
      this.onePlayer.hide();
      game.play();
   // player1.display();
  })
  }
}
