class Constraints {

  constructor(bodyA,pointB){

    var options = {

          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.1,
          length:4
       }

this.pointB = pointB;
this.constraint = Constraint.create(options);

World.add(world,this.constraint);


}

fly(){

this.constraint.bodyA = null;
}


attach(body){

this.constraint.bodyA = body;

}


display(){

var pointB = this.pointB;
var bodyA = this.constraint.bodyA.position

fill("white")
line(pointB.x,pointB.y,bodyA.x,bodyA.y);



}





}