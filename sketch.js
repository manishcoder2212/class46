const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var engine,world
var stage1


function setup() {
  createCanvas(1200,600);

engine=Engine.create()
world=engine.world



ground=new Ground(600,580,1200,30)

box=new Box(1350,140,300,100)

stone1=new Stone(1300,60)
stone2=new Stone(1300,180)


arrow1= new Arrow(1000,300,50);


enemy=new Enemy(200,500)
enemy1=new Enemy(220,500)
enemy2=new Enemy(240,500)
enemy3=new Enemy(330,500)
enemy4=new Enemy(260,500)
enemy5=new Enemy(350,500)
enemy6=new Enemy(280,500)
enemy7=new Enemy(380,500)
enemy8=new Enemy(300,500)
enemy9=new Enemy(400,500)
enemy10=new Enemy(420,500)
enemy11=new Enemy(70,500)
enemy12=new Enemy(90,500)
enemy13=new Enemy(130,500)
enemy14=new Enemy(110,500)
enemy15=new Enemy(150,500)
enemy16=new Enemy(10,500)
enemy17=new Enemy(170,500)
enemy18=new Enemy(180,500)
enemy19=new Enemy(0,500)
enemy20=new Enemy(40,500)
enemy21=new Enemy(50,500)

stage1=createSprite(1000,500,50,50);


chain1=new Chain(stone1.body,box.body)
chain2=new Chain(stone2.body,box.body)

ground1=new Ground(0,550,30,200)



}



function draw() {
  background(255,255,255);  
Engine.update(engine)

drawSprites();

box.display();
chain1.display();
chain2.display();
stone1.display();
stone2.display();
ground.display();
enemy.display();
enemy1.display();
enemy2.display();
enemy3.display();
enemy4.display();
enemy5.display();
enemy6.display();
enemy7.display();
enemy8.display();
enemy9.display();
enemy10.display();
enemy11.display();
enemy12.display();
enemy13.display();
enemy14.display();
enemy15.display();
enemy16.display();
enemy17.display();
enemy18.display();
enemy19.display();
enemy20.display();
enemy21.display();
arrow1.display();

if (mousePressedOver(stage1)){
   (keyCode === UP_ARROW) 
    Matter.Body.setStatic(stone1.body,false) 
    Matter.Body.applyForce(stone1.body,stone1.body.position,{x:-1,y:0.3});

    Matter.Body.setStatic(stone2.body,false) 
    Matter.Body.applyForce(stone2.body,stone2.body.position,{x:-1,y:0.3});

    Matter.Body.applyForce(box.body,box.body.position,{x:-1,y:0.3});


   
}
}



  function keyPressed() { 
   

     if (keyCode === LEFT_ARROW) { 
      Matter.Body.setStatic(arrow1.body,false) 
      Matter.Body.applyForce(arrow1.body,arrow1.body.position,{x:-0.5,y:1});


    }



    
     
    }


   