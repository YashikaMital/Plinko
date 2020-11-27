class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("pink");
        ellipseMode(RADIUS);
        //if we use a circle in the below command with just a this.r, 
        //the circle command uses it as the diameter and the output has
        //the plinkos very small.
        ellipse(0,0,this.r,this.r);
        pop();
    }

};