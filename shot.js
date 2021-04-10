class Shot{
    constructor(bodyA, pointB){ 
        var option={ 
            bodyA: bodyA,
            pointB: pointB, 
            stiffness: 0.01, 
            length: 50 } 


            this.pointB = pointB; 
            this.body = Constraint.create(option);
             World.add(world, this.body);
    
    };
  attach(body){
		this.body.bodyA=body;
	}
    
    fly(){
        this.body.bodyA = null;}
        
    display(){
        
        if(this.body.bodyA){
  
  strokeWeight(4);
  
var pintA=this.body.bodyA.position;
    var pointB=this.pointB;
    line(pintA.x,pintA.y,pointB.x,pointB.y);
    }}
}




 
