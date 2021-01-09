const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground1,ground2,ground;
var polygon,backgroundImg;
var block1,block2,block3,block4,block5,block6,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var score=0,gameState = "onSling";;
function preload(){
  getBackground();
}
function setup(){
createCanvas(800,400);

engine = Engine.create();
world = engine.world;
ground=new Ground(50,390,1600,10);
//the bodies
ground1=new Ground(385,300,122,20);
ground2=new Ground(650,148,122,15);
//block of ground1 level 4
block1=new Block(340,288,rgb(128, 128, 128));
block2= new Block(370,288,rgb(128, 128, 128));
block3=new Block(400,288,rgb(128, 128, 128));
block4= new Block(430,288,rgb(128, 128, 128));
// level3
block5=new Block(355,263,rgb(255, 192, 203))
block6=new Block(385,263,rgb(255, 192, 203))
block7=new Block(415,263,rgb(255, 192, 203))
//level 2
block8=new Block(370,238,rgb(85, 229, 13))
block9=new Block(400,238,rgb(85, 229, 13))
//level1
block10=new Block(385,213,rgb(36, 61, 204))
//block of ground2 level 4
block11=new Block(605,128,rgb(36, 61, 204));
block12= new Block(635,128,rgb(36, 61, 204));
block13=new Block(665,128,rgb(36, 61, 204));
block14= new Block(695,128,rgb(36, 61, 204));
// level3
block15=new Block(620,103,rgb(237, 18, 18))
block16=new Block(650,103,rgb(237, 18, 18))
block17=new Block(680,103,rgb(237, 18, 18))
//level 2
block18=new Block(635,78,rgb(18, 237, 178))
block19=new Block(665,78,rgb(18, 237, 178))
//level1
block20=new Block(650,53,rgb(231, 21, 234))
polygon=new Polygon(150,205,20)
launcher = new Launcher(polygon.body,{x:150, y:205});
Engine.run(engine);
  
}
function draw(){
  if(backgroundImg)
      background(backgroundImg);

  textSize(20);
  fill("white");
  text("Drag the Polygon to the launch and press 'SPACE' to return the polygon",10,40)
  text("score "+score,width-150,30);


ground.display();
ground1.display();
ground2.display();
block1.display();
block1.score();
block2.display();
block2.score();
block3.display();
block3.score();
block4.display();
block4.score();
block5.display();
block5.score();
block6.display();
block6.score();
block7.display();
block7.score();
block8.display();
block8.score();
block9.display();
block9.score();
block10.display();
block10.score();
block11.display();
block11.score();
block12.display();
block12.score();
block13.display();
block13.score();
block14.display();
block14.score();
block15.display();
block15.score();
block16.display();
block16.score();
block17.display();
block17.score();
block18.display();
block18.score();
block19.display();
block19.score();
block20.display();
block20.score();
polygon.display();
launcher.display();

}

   function mouseDragged(){
    if (gameState!=="launched"){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
  }
  function mouseReleased(){
    launcher.fly();
    gameState = "launched";
  }
  function keyPressed(){
  if(touches.length>0 || keyCode === 32&&gameState==="launched"){
  Matter.Body.setPosition(polygon.body,{x:150,y:205})
  gameState="onSling"
  launcher.attach(polygon.body);
  }
  }
  async function getBackground(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responsejson=await response.json();
    var dateTime=responsejson.datetime;
    var hour=dateTime.slice(11,13);
    console.log(hour);
    if (hour>=08&&hour<=20){
        bg="bg.jpg";
    }
    else {
        bg="b2.jpg";
    }
    backgroundImg=loadImage(bg);
}