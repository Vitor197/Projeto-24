const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, rubber,hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

   
    ferro = new Ferro(300,350);
    pedra = new Pedra(700,320,100,100);
  
    rubber=new Rubber(900,450,70);
    hammer = new Hammer(10,100);
    plane = new Chao(600,height,1200,20)

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    pedra.display();
    
   
    rubber.display();
    ferro.display()  
    hammer.display();
    plane.display();
}