class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    this.body=Bodies.rectangle(x,y,width,height);
    this.width=width;
    this.height=height;

    World.add(world,this.body);
  }

  display() {
    var pos=this.body.position;
    if (keyIsDown(UP_ARROW)) {  
      Matter.Body.setvelocity(tanker.body,5);
  }
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);

  }
}
