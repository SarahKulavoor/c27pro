class Rope {
    constructor (body1, body2, offsetX, offsetY) 
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options= {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX, y:this.offsetY}
        }
        this.rope= Constraint.create (options);
        World.add(world, this.rope)
    }
    display(){
        var pointA= this.rope.bodyA.position;
        var pointB= this.rope.bodyB.position;

        strokeWeight(4);

        var Anxhor1X=pointA.x
        var Anxhor1Y=pointA.y

        var Anxhor2X=pointB.x+this.offsetX
        var Anxhor2Y=pointB.y+this.offsetY

        line (Anxhor1X,Anxhor1Y,Anxhor2X,Anxhor2Y);
    }
}
   