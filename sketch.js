const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//const Render = Matter.Render;

var engine,world;
var gameState = "onSling"

var render;
var stone;
var gr;
var sling;
var p1,p2;

var score = 0;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;

function setup(){

    createCanvas(1200,600)
    engine = Engine.create();
    world = engine.world

stone = new Stone(200,200,6,35);
gr = new Ground(width/2,height-10,width,20);
//Engine.run(engine);

sling = new Constraints(stone.body,{x:150,y:300});

p1 = new Ground(700,230,250,10)
p2= new Ground(780,500,250,10)

b1 = new Block(680,205);
b2 = new Block(640,205);
b3 = new Block(720,205);
b4 = new Block(760,205);
b5 = new Block(660,165);
b6 = new Block(700,165);
b7 = new Block(740,165);
b8 = new Block(720,125);
b9 = new Block(680,125);
b10 = new Block(700,85);




b11 = new Block(840,475);
b12 = new Block(800,475);
b13 = new Block(760,475);
b14 = new Block(720,475);
b15 = new Block(820,435);
b16 = new Block(780,435);
b17 = new Block(740,435);
b18 = new Block(800,395);
b19 = new Block(760,395);
b20 = new Block(780,355);

/*/
var render = Render.create({         //curly brackets are options                // drawing bodies without ther rect real world 
  element: document.body,   // this document.body is so that everything is to be done in the respective document of the corresponding body...
  engine: engine,          //to include the engine in this render
  options: {
    width: 800,
    height: 700,
    wireframes: false
  }
  });

 // Render.run(render)
*/
}



function draw(){

//background("black");

getTheTime();

if(hour <= 18 && hour >= 06){

  background("black");


}
else{

  background("lightblue");


}




Engine.update(engine);

fill("white");
textSize(25)
text("Press SpaceBar to get another chance...",100,50);
text("Score: " + score,width-500,50);








p1.display();
p2.display();
stone.display();
gr.display();

b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();

b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();
b19.display();
b20.display();


b1.score();
b2.score();
b3.score();
b4.score();
b5.score();
b6.score();
b7.score();
b8.score();
b9.score();
b10.score();
b11.score();
b12.score();
b13.score();
b14.score();
b15.score();
b16.score();
b17.score();
b18.score();
b19.score();
b20.score();





























}


/*/

function mouseDragged(){


    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})


}

function mouseReleased(){

constraint.fly();

}
*/



function mouseDragged(){
  if (gameState==="onSling"){
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  sling.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(stone.body);
      gameState = "onSling";
      Matter.Body.setPosition(stone.body,{x: 150, y: 300});
      Matter.Body.setVelocity(stone.body,{x:0,y:0})
  }
}








/*/

function keyPressed(){

  if(keyCode===32){
  
  constraint.attach(stone.body);
  
  }
  
  }
  */











  async function getTheTime(){

    var respond = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var respondJSON = await respond.json(); 

    var dateTime = respondJSON.datetime;

    var hour = dateTime.slice(11,13);

  

   



}