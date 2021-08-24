class Zombie1{
    constructor(){
        this.body = createSprite(width,100);
        this.body.addAnimation("zombie1",zombieImage1);
        this.body.scale=1.4
        this.body.y = random(80,windowHeight - 80);
        this.body.velocityX = -5;
        this.body.lifetime = windowWidth/2;
        //this.body.debug = true;
        this.body.setCollider("rectangle",0,0,30,this.body.height);
    }

    addToGroup(){
        zombiesGrp.add(this.body);
    }
}