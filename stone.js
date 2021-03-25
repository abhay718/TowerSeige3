class Stone{

 constructor(x,y,sides,radius){

var op = {
//isStatic:true,
    restiution:0,
friction:2,
  //  mass:1000,
    
   // frictionAir:0.1
}


this.body = Bodies.polygon(x,y,sides,radius,op);
this.sides = sides;
this.radius = radius;
this.image = loadImage("polygon.png");



World.add(world,this.body);


 }


 display(){

  var angle = this.body.angle;
   // var bodyp = this.body.position;


   

   push();

     translate(this.body.position.x,this.body.position.y)
 
     rotate(angle);
     
     imageMode(CENTER);
     image(this.image,0,0,this.radius*2,this.radius*2)
     

   pop();


 }


}