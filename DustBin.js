class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body=Bodies.rectangle(x, y, width, height,options);
     this.weight=weight;
     this.height=height;
     World.add(world,this.body);
    };

    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      
    };
}
