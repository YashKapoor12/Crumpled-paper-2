class Ground{
    constructor(){
        this.body=Bodies.rectangle(0,520,500,40,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        rect(this.body.position.x,this.body.position.y,2000,40);
    }
}