class BaseClass
{
    constructor(x, y, width, height, angle)
    {
        var options = {'restitution': 1, 'friction': 1};

        this.bodyX = x;
        this.bodyY = y;
        this.bodyW = width;
        this.bodyH = height;
        this.bodyA = angle;

        this.body = Bodies.rectangle(this.bodyX, this.bodyY, this.bodyW, this.bodyH, options);
        this.image = loadImage("sprites/base.png");
        World.add(myWorld, this.body);
    }

    display()
    {     
        push(); //saving the original settings of the canvas in an array

        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);

        imageMode(CENTER);
        image(this.image, 0, 0, this.bodyW, this.bodyH);

        pop(); // applying the original settings to the canvas 
    }
};