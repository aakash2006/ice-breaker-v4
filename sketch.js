const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var world,engine;
var divisions = [];
var ices = [];

var divisionHeight=300;
function preload(){

}
function setup() {
  createCanvas(350,570);
 engine = Engine.create();
 world = engine.world;

 for (var k = 0; k <=width; k = k + 100) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}


 for (var j = 22; j <=width; j=j+34) 
 {
 
    ices.push(new Ice(j,24));
 }

 for (var j = 22; j <=width-10; j=j+34) 
 {
    ices.push(new Ice(j,55));
 }

  for (var j = 22; j <=width; j=j+34) 
 {
 
    ices.push(new Ice(j,85));
 }

  for (var j = 22; j <=width-10; j=j+34) 
 {
 
    ices.push(new Ice(j,116));
 }

 
 ball = new Ball(175,150,20,20);
 
 pad = new Pad(180,540,90,20);

 
 
 lEdges = new Pad(0,220,5,900);

 tEdges = new Pad(75,0,600,5);

 rEdges = new Pad(350,220,5,900);

}

function draw() {
  background(0); 

  Engine.update(engine);

  
 bounceOff(pad.body,ball.body);

 
  
 //console.log(ball.body.position.x);
 for (var i = 0; i < ices.length; i++) {
     
  ices[i].display();
  
 }
 
 bounceOff(tEdges,ball.body);
 bounceOff(rEdges,ball.body);
 bounceOff(lEdges,ball.body);



  rEdges.display();
  tEdges.display();
  lEdges.display();
  ball.display();
  pad.display();
  
  
  drawSprites();
}



function keyPressed()
{
 if(keyCode === 32)
 {
  
   console.log(ball.body);
 }
 if(keyCode === 39)
 {
   Matter.Body.translate(pad.body,{x:40,y:0});
 }
 if(keyCode === 37)
 {
   Matter.Body.translate(pad.body,{x:-40,y:0});
 }
 
}