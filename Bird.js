class Bird extends BaseClass
{
    constructor(x, y)
    {
        super(x, y, 50, 50); //calling the BaseClass (parent) constructor function
        this.image = loadImage("sprites/bird.png");
        this.smokeImage = loadImage("sprites/smoke.png");
        this.trajectory = []; 
    }

    display()
    {
        super.display() //display() function of the parent class is going to be called or invoked
        if(this.body.velocity.x > 1 && this.body.position.x > 200)
        {
        this.trajectory.push([this.body.position.x, this.body.position.y]);
        }

        for(var i=0; i<this.trajectory.length; i++)
        {
            image(this.smokeImage, this.trajectory[i][0],this.trajectory[i][1]);
       }
    }
};
