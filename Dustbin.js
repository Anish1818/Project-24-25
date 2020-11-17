class Dustbin{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=200;
        this.height=213;
        this.wallthickness=15;
        var options={
            isStatic:true
        }
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.width,this.wallthickness,options);
        this.leftBody=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.wallthickness,this.height,options);
        rightBody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.wallthickness,this.height,options);
       this.image=loadImage("dustbingreen.png"); 
        World.add(world.this.bottomBody)
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
    }
    display(){
        var posB=this.bottomBody.position;
        var posL=this.leftBody.position;
        var posR=this.rightBody.position;
        push();
        translate(posL.x,posL.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("red")
        rotate(this.angle);
        pop();
        push();
        translate(posB.x,posB.y+10);
        imageMode(CENTER);
        angleMode(RADIANS);
        fill("red")
        image(this.image,this.x,this.y);
        pop();
        push();
        translate(posR.x,posR.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("red")
        rotate(-1*this.angle);
        pop();

        
    }
}