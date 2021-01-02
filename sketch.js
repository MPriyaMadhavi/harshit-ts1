const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var ground,slage;
var box1,box2,box3;
var box4,box5,box6;
var box7,box8,box9;
var polygon,slingshot;
var polygonObj;
function preload() {
  polygonimg = loadImage('img/polygon.gif');
}

function setup() {
  createCanvas();
  createCanvas(1000,500)
  engine = Engine.create();
  world = engine.world;

  //polygonObj=createSprite(width/2, 80, 10,10);
//	polygonObj.addImage(polygonimg);
 // polygonObj.scale=0.1
  
  //createSprite(400, 200, 50, 50);
  ground = new Ground(400,500,1200,30);


  box5 = new Box(330,235,30,40);
  box6 = new Box(360,235,30,40);
  box7 = new Box(390,235,30,40);
  box8 = new Box(420,235,30,40);
  box9 = new Box(450,235,30,40);
  //levle three
  box1 = new Box(360,195,30,40);
  box2 = new Box(390,195,30,40);
  box3 = new Box(420,195,30,40);
  //top
  box4 = new Box(390,155,30,40);
  //for ground
  slage = new Ground(390,260,150,10);
 polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);


  slingshot = new SlingShot(this.polygon,{x:100,y:200});

}

function draw() {
  background(56,44,44);  
  Engine.update(engine);

 // polygon.x= polygon.position.x 
  //polygon.y= polygon.position.y 

  //rect(polygon.position.x,polygon.position.y,100,200);
  ground.display();
  slage.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  imageMode(CENTER)
  image(polygonimg ,polygon.position.x,polygon.position.y,40,40);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition( this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}

//function keyPressed(){

 // if(keyCode === 32){
    //  Matter.Body.setPosition(this.polygon, {x:50 , y: 200});
    // slingshot.attach(this.polygon);
  //}
//}