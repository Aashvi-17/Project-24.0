class Dustbin {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image=loadImage("sprites/Dustbin.png");
        World.add(world, this.body);
      }
      display(){
        var position=this.body.position 
      rectMode(CENTER);
      fill("cyan");
      strokeWeight("cyan")
      stroke("cyan")
      rect(position.x,position.y,this.width,this.height)
        
      }
    };