class Launcher {
	constructor(body,dot)
	{
		var options={
			bodyA:body,	
            pointB:dot,
            stiffness:0.004,
            lenght:1
			}
            this.bodyA=body
            this.pointB=dot
            this.body=Constraint.create(options)
             World.add(world, this.body);
    
        }
    display(){
       
       // line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
    }
        

