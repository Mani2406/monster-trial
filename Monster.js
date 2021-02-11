class Monster {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,width,height);
      
      this.image = loadImage("sprites/monster.jpg");
      World.add(world, this.body);
    }
   
    display(){
      var pos = this.body.position;
      imageMode(CENTER);
     
      image(this.image, this.body.position.x, this.body.position.y,40,40);
    }
  };