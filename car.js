class Car{
    constructor(x,y,width,height){
        // var options ={
        //     isStatic: true
        // }
        this.image = loadImage("images/car.png");
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}