class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image=loadImage("square.png")
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed<3){

      
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0,0,30,40)
      //image(this.image,0, 0, this.width, this.height);
      pop();
      }
      else{
        World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, this.width,this.height);
     pop();
      }
      
    }
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }
  }