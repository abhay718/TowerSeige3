class Block{

    constructor(x,y){

        var options = {

           // restitution:1,
            // Visibility:255,
            //  mass:100,
            //  isStatic:true,
            friction:1.5,
            //frictionAir: 0.1,
        }


        this.body = Bodies.rectangle(x,y,30,40,options);
        this.width = 30;
        this.height = 40;
        this.Visibility = 255;
        this.image = loadImage("download.png");

        World.add(world,this.body);

    }

    
    
    display(){

         var pos = this.body.position;
    
         console.log(this.body.speed);
 



       

     
     
   
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,this.width+10,this.height);

 
 

if(this.body.speed >= 5){
            
    World.remove(world,this.body);


   
// push()   
    this.Visibility = this.Visibility-5;
 //   translate(pos.x,pos.y)
    tint(255,this.Visibility-5);
    image(this.image,0,0,this.width+10,40);
 // pop();
}
}//
 
    

 
    
   

  

   



score(){

    if(this.Visibility < 0 && this.Visibility > -105){

        score = score+1;
    
    }

}


































}