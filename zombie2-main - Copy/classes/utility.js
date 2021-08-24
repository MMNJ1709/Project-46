//Creating the lives
function createLives(){
    life1 = createSprite(width-300,(height/2)-420);
    life1.addImage(lifeImage);
    life1.scale = 0.2;
    life1.visible = false;

    life2 = createSprite(width-360,(height/2)-420);
    life2.addImage(lifeImage);
    life2.scale = 0.2;
    life2.visible = false;

    life3 = createSprite(width-420,(height/2)-420);
    life3.addImage(lifeImage);
    life3.scale = 0.2;
    life3.visible = false;
    lives = [life1,life2,life3];
}

//Creating the function to restart the game
function reset(){
    gameState = 0;
    createLives();
    score = 0;
    survivor = new Survivor();
}

//Creating function for destroying zombie if touching bullet
function destroyZombie(){
    for(var i = 0; i < zombiesGrp.size(); i++){        
        var zomb = zombiesGrp.get(i);               
        for(var j = 0; j < bulletsGrp.size(); j++){   
            var bull = bulletsGrp.get(j);
            if(zomb.isTouching(bull)){
                zomb.destroy();
                zombieSound.play()
                bull.destroy(); 
                score+=10; 
                
            }
        }              
    }    
}

//Function for spawning the zombies
function spawnZombie(){
    var select=Math.round(random(1,2))
    if(frameCount % speed == 0){
        if(select==1){
            zombie = new Zombie();
        }
      else if(select==2){
        zombie = new Zombie1();
      }
        zombie.addToGroup();
    }
}
