class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness: 0.02,
            length: 0.4       
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    attach(body){
		this.chain.bodyA = body;
	}
	
    display(){
        if(this.chain.bodyA ){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        fill("Blue")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.chain.bodyA = null;
    }

};