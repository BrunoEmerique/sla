var imagemDeFundo
var pernalongaANI , pernalonga
var tsunamiANI , tsunami 
var plataforma
var pontuacaoICN,pontuacaoICNImg
var pontuacaoOBS 
var raposo, raposoANI

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
imagemDeFundo = loadImage("./assets/city.png");

pernalongaANI =  loadAnimation("1coelho.png","2coelho.png", "3coelho.png");

pontuacaoOBS = loadImage("cenoura-pontuação.png");

pontuacaoICNImg = loadImage("caixa de cenoura.png");

raposo = loadImage("raposo1.png","raposo2.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
    pernalonga = createSprite(160,600);
	pernalonga.addAnimation('animacao',pernalongaANI);
    pernalonga.scale = 0.3;


    pontuacaoICN = createSprite(700,100);
	  pontuacaoICN.addImage('caixaDeCenoura',pontuacaoICNImg);
    pontuacaoICN.scale = 0.2; 

	


	plataforma = createSprite(160, 650, 100000, 10);
    plataforma.visible = false;
	plataforma.x = plataforma.width / 2;

	Engine.run(engine);
}


function draw() {
	
  rectMode(CENTER);
  background(imagemDeFundo);
    
    textSize(20);
    fill("orange");
    text("PONTUAÇÃO: " , 650, 50);


  if (keyDown("espace") && pernalonga.y >= 600) {
	pernalonga.velocityY = -100;
	pernalonga.velocityY = pernalonga.velocityY + 0.5;

  }
  pernalonga.velocityY = pernalonga.velocityY + 0.5;
  
 
  pernalonga.collide(plataforma);

  if (keyIsDown(LEFT_ARROW)){
  pernalonga.positionX += 10;


  }
  if (keyIsDown(RIGHT_ARROW)){
    pernalonga.positionX -= 10;
  
  
    }

  drawSprites();
 
}

/*function criarCenorasVoadoras(){
  if(World.frameCount % 60 == 0){
  var cenouras_group = createGroup();
  var cenouraM = createSprite(randomNumber(2,400),randomNumber(2,10) );
   cenouraM.setImage(pontuacaoOBS);
   cenouraM.scale = 0.2;
   cenouraM.velocityY = 3;
   cenouras_group.add(cenouraM);
  }
  
}
*/

