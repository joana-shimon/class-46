var ironMan,thanos,blackhole,battery,bullet,tesseract,spaceStone,coins
var bg

function preload(){
    ironManImg=loadImage("IMAGES/iron man flying2.png")
    thanosImg=loadImage("IMAGES/thanos.png")
    batteryImg=loadImage("IMAGES/battery.png")
    blackholeImg=loadImage("IMAGES/BLACKHOLE.png")
    bulletImg=loadImage("IMAGES/bullet.jpg")
}

function setup(){
   createCanvas(windowWidth,windowHeight)

 ironMan= createSprite(200,100,50,50)
ironMan.addImage(ironManImg)
ironMan.scale=0.2

thanos=createSprite(500,200,50,50)
thanos.addImage(thanosImg)
thanos.scale=0.2

battery=createSprite(500,400,50,50)
battery.addImage(batteryImg)
battery.scale=0.2


blackhole=createSprite(700,200,50,50)
blackhole.addImage(blackholeImg)
blackhole.scale=0.2



bullet=createSprite(800,200,50,50)
bullet.addImage(bulletImg)
bullet.scale=0.2

}


function draw(){
    drawSprites()
}