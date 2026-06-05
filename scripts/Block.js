class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.image= loadImage("block.png")
      this.visible=255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
       image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
       }
       else{
           push() 
          World.remove(world,this.body)
          tint(255,this.visible)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        this.visible-=5
        pop()
       }
    
     
    }   
}