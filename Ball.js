class Ball{
    constructor(x,y,r){
     var options = {
         isStatic : false,
         restitution:0.3,
         //friction:15,
         density:1.2
     }
     this.x=x;
     this.y=y;
     this.r=r
    this.body = Bodies.circle(this.x,this.y,r/5,options)
    this.image = loadImage("paper.png")
    World.add(world,this.body);
    }
    display(){
     var pos = this.body.position;
     push();
     translate(pos.x,pos.y);
     rectMode(CENTER)
     strokeWeight(5)
     stroke("blue")
     fill("pink")
     imageMode(CENTER)
     image(this.image,0,0,this.radius)
     pop();
    }
}