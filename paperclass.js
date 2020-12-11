class Paper {
    constructor(x,y){
        var options={
            isStatic:false,
//restitution:0.3,
            //friction:4.5,
            density:1.2
        }
    
    this.body=Bodies.circle(x,y,20,options)
  
    this.image=loadImage("paper.png");
    World.add(world,this.body);
  
   
    }
    display(){
        var pos=this.body.position;
       
        var angle=this.body.angle;
        //push()
        translate(pos.x,pos.y);
        rotate(angle);
      
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        //fill("red");
        ellipseMode(RADIUS);
        //ellipse(0,0,10,10);
        pop();
    }}
    function keyPressed() {
        if(keyCode===UP_ARROW){
          Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55});
        }
       }