
class Block{
  constructor(x,y,color){
      var options={
          restitution:0.8,
          friction:0.2,
          density:1.0
      }
      this.body=Bodies.rectangle(x,y,30,25,options,color);
      this.color = color;
      World.add(world,this.body);
      this.visibility=255;
      
  }
  display(){
      if(this.body.speed<6){
           this.pos=this.body.position;
          push();
          translate(this.pos.x,this.pos.y)
          rectMode(CENTER);
          fill(this.color)
          rect(0,0,30,25);
          pop();
      }
      else{
          World.remove(world,this.body);
          push();
          tint(255,this.visibility);
          this.visibility=this.visibility-5;
          pop();
      }
  
  }
  score(){
      if(this.visibility<0&&this.visibility>=-50){
          score=score+1
      }
  }
}
