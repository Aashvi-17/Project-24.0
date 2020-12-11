class Ground{
    constructor(x,y,w,h){
        var ground_options={
            isStatic:true
        }
    this.body=Bodies.rectangle(x,y,w,h,ground_options);
    this.width=w;
    this.height=h;
    World.add(world,this.body);
    }
    display(){
      var position=this.body.position 
      rectMode(CENTER);
      fill("pink");
      rect(position.x,position.y,this.width,this.height)
    }
}