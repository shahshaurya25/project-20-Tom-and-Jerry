var cat;
var mouse,mouseImage;
var backGroundimg;
var catImage1;
var catImage2;
var catImage3;
var mouseImage1;
var mouseImage2;
var mouseImage3;

function preload() {
    //load the images here
backGroundimg = loadImage("Images/garden.png");
catImage1 = loadAnimation("Images/cat1.png");
catImage2 = loadAnimation("Images/cat2.png","Images/cat3.png");
catImage3 = loadAnimation("Images/cat4.png");

mouseImage1 = loadAnimation("Images/mouse1.png");
mouseImage2 = loadAnimation("Images/mouse2.png","Images/mouse3.png");
mouseImage3 = loadAnimation("Images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addAnimation("tom1",catImage1);
    cat.addAnimation("tom2",catImage2);
    cat.addAnimation("tom3",catImage3);
    cat.scale = 0.2;
    mouse=createSprite(200,600);
    mouse.addAnimation("jerry1",mouseImage1);
    mouse.addAnimation("jerry2",mouseImage2);
    mouse.addAnimation("jerry3",mouseImage3);
    mouse.scale = 0.15;
}

function draw() {
    
    background(backGroundimg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX = 0
        cat.x = 300;
        cat.changeAnimation("tom3",catImage3);
        mouse.changeAnimation("jerry3",mouseImage3);
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    mouse.changeAnimation("jerry2",mouseImage2);
    mouse.frameDelay = 25;
    cat.changeAnimation("tom2",catImage2);
    cat.velocityX = -5;

}

}
