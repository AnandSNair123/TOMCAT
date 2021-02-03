var backgrounds,backgroundAnimation;
var tom,tomAnimation,tomChanged,tommyAniamtion;
var jerry,jerryAnimation,jerryChanged,jerrysAnimation;

function preload(){
backgroundAnimation = loadAnimation("garden.png");
jerryAnimation = loadAnimation("jerryOne.png");
tomAnimation = loadAnimation("tomOne.png");
jerryChanged = loadAnimation("jerryTwo.png","jerryThree.png");
tomChanged = loadAnimation("tomTwo.png","tomThree.png");
jerrysAnimation = loadAnimation("jerryFour.png");
tommyAniamtion = loadAnimation("tomFour.png");
}
function setup(){
    createCanvas(800,400);

    backgrounds = createSprite(400,200);
    backgrounds.addAnimation("background",backgroundAnimation);
    backgrounds.scale = 0.85;

    jerry = createSprite(150,300);
    jerry.addAnimation("jerry",jerryAnimation);
    jerry.addAnimation("jerrys",jerryChanged);
    jerry.addAnimation("jerr",jerrysAnimation);
    jerry.debug = true;
    jerry.setCollider("rectangle",0,0,jerry.width-1000,jerry.height-1000);
    jerry.scale = 0.1;
   
    tom = createSprite(650,300);
    tom.addAnimation("tom",tomAnimation);
    tom.addAnimation("tommy",tomChanged);
    tom.addAnimation("to",tommyAniamtion);
    tom.setCollider("rectangle",0,0,tom.width-1000,tom.height-1000);
    tom.debug = true;
    tom.scale = 0.15;
    
}
function draw(){
    background("black");
    if(tom.isTouching(jerry)){
        tom.velocityX = 0;
        tom.changeAnimation("to",tommyAniamtion);
        jerry.changeAnimation("jerr",jerrysAnimation);
    }
    drawSprites();
}
function mouseClicked(){
    tom.velocityX = -3;
    tom.changeAnimation("tommy",tomChanged);
    jerry.changeAnimation("jerrys",jerryChanged);

}





























