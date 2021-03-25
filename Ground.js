class Ground{

    constructor(x,y,width,height){
   
   var op = {
      
       isStatic:true,
      restiution:1,
       friction:1.5,
      // mass:10000,
     //  frictionAir:0.1
   }
   
   
   this.body = Bodies.rectangle(x,y,width,height,op);
   this.width = width;
   this.height = height;
   //this.image = loadImage("polygon.png");
   
   World.add(world,this.body);
   
   
    }
   
   
    display(){
   
       var bodyp = this.body.position;
   
      push();
        
      fill(mouseX,mouseY,mouseX)
     rectMode(CENTER)
     rect(bodyp.x,bodyp.y,this.width,this.height);
   
   
   
   
      pop();
   
   
    }
   
   
   }