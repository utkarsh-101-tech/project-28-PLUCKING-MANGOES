class Stone{
    constructor(x,y,r){
        var options1={
            isStatic:false,
            restitution: 0,
            density: 1.2,
            friction: 1
        }
        
        this.x=x;
        this.y=y;
        this.r=r;
        this.image = loadImage("PluckingMangoes/stone.png");
        this.body= Bodies.circle(this.x,this.y,this.r,options1);
        World.add(world,this.body);
    };

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle)
        ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.image,0,0,70,70);
        pop();

    }


}
