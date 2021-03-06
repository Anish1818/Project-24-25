class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            denstity:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Matter.Bodies.Circle(this.x,this.y,(this.r-20)/2,options);
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER)
        strokeWeight(3);
        fill(255,0,255);
        image(this.image,this.x,this.y,this.r);
        pop();
    }
}