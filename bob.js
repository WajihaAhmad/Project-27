class Bob{

    constructor (x,y,r) 
    {
    var options = {
        isStatic:false,
        restitution:1.25,
        friction:0.5,
        density:1.2,
    
    }
    this.x=x
    this.y=y
    this.r=r
    this.body= Bodies.circle(this.x,this.y,this.r,options)
    World.add(world,this.body);
    }
    display()
    {
    fill(0,255,255)
    var paperposition=this.body.position
    push()
    translate(paperposition.x,paperposition.y)
    ellipse(0,0,this.r,this.r)
    pop()
    }
    }