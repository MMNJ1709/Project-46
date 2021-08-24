class Survivor{
    constructor(){
        this.body = createSprite(100,100);
        this.body.addImage(survivorImg);
        this.body.scale=0.2
       
    }
    
    move(){
        this.body.y = mouseY;
        
       /* if(mousePressedOver(this.body)){
            bullet = createSprite(this.body.x-50,this.body.y+30);
            bullet.addImage(bulletImg);  
            bullet.scale = 0.05;
            bullet.velocityX = -5;
            bulletsGrp.add(bullet);  
            //bullet.debug = true;  
            bullet.lifetime = windowWidth / 3;       
        }*/
    }

    createBullet(){
        bullet = createSprite(survivor.body.x+100,survivor.body.y-100);
        bullet.addImage(bulletImg);  
        bullet.rotation=180
        bullet.scale = 0.05;
        bullet.velocityX = 5;
        bulletsGrp.add(bullet);  
        //bullet.debug = true;  
        bullet.lifetime = windowWidth / 3;
        gunSound.play()
    }

    addToGrp(){
        survivorGrp.add(this.body);
    }
}