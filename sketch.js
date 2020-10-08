var pos;
var scAngle;
var mnAngle;

var sc,mn,hr;


function setup() {
  createCanvas(800,400);
  
  createSprite(400, 200, 50, 50);
  hr=hour();
  mn=minute();
  sc= second();
  


  angleMode(DEGREES);
}

function draw() {
  background(255,255,255); 
  
  scAngle= map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(sc,0,60%12,0,360);

   pos= this.body.position;
   scAngle=this.body.angle;
  mnAngle= this.body.angle;

 //drawing second's hand
  push();
  translate(pos.x,pos.y);
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
   pop();

   //drawing minute/hour hand.
   push();
  translate(pos.x,pos.y);
  rotate(mnAngle);
  stroke(255,255,0);
  strokeWeight(5);
  line(0,0,100,0);
   pop();





  drawSprites();
}