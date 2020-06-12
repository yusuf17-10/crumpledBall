class Ground{
    Consructor(x,y,weight,height){
     var options={
      isStatic : true
     }

     this.body=Bodies.rectangle(x,y,weight,height,options);
     this.width=width;
     this.height=height;

     World.add(world,this.body);

    }
display(){
    var pos=this.body.position;
    rectMode(CENTER);
    fill("white");
    rect(pos.x,pos.y,this.width,this.height);
  }
}