class Cannon{
constructor(x,y,width,height){
    this.x=x
    this.y=y
    this.width=width
    this.height=height

}

display(){
    fill("green")
    push();
    translate(this.x,this.y)
    rotate(angle)
    rect(-10,-20,this.width,this.height);
    pop();
    arc(this.x-30,this.y+90,140,260,PI,TWO_PI)
    noFill();
}
}