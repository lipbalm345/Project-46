var blueGem, cloudOfDespair, deadSoul, greenGem, happySoul, pinkGem, purpleGem, yellowGem;
var player;
var edges;
var score;

function preload()
{
	blueGem = loadImage('images/blue.png');
	cloudOfDespair = loadImage('images/cloud_of_despair.png');
	deadSoul = loadImage('images/deadsoul.png');
	greenGem = loadImage('images/green.png');
	happySoul = loadImage('images/happysoul.png');
	pinkGem = loadImage('images/pink.png');
	purpleGem = loadImage('images/purple.png');
	yellowGem = loadImage('images/yellow.png');

}

function setup() {
	createCanvas(800, 700);

	player = createSprite(200,400,20,20);

	cloudsOfDespair = createGroup();
	gemsGroup = createGroup();
	
  
}


function draw() {
  background(0);

  if(keyDown(UP_ARROW)){
		player.velocity.x = 0;
		player.velocity.y = -3;
  }
  if(keyDown(DOWN_ARROW)){
	player.velocity.x = 0;
	player.velocity.y = 3;
}
if(keyDown(LEFT_ARROW)){
	player.velocity.x = -3;
	player.velocity.y = 0;
}
if(keyDown(RIGHT_ARROW)){
	player.velocity.x = 3;
	player.velocity.y = 0;
}
	edges = createEdgeSprites();
	
	player.collide(edges[1]);
	player.collide(edges[2]);
	player.collide(edges[3]);
	player.collide(edges[4]);

	if(player.velocity.x < 0.5){
		player.addImage(deadSoul);
	}else{
		player.addImage(happySoul);
	}

if(score > 10){
	background(225);
}else{
	background(0);
}

  drawSprites();
 
}

function spawnObstacles(){
	if(worldFrameCount % 50 === 0){
		CloudOfDespair = createSprite(200,400,50,60);
		CloudOfDespair.velocity.y = -3;
		//i want to make this faster as the 'distance' goes higher
		CloudOfDespair.x = randomNumber(50,750);
		CloudOfDespair.scale = 0.5;
		CloudOfDespair.lifetime = 60;
	
		cloudsOfDespair.add(CloudOfDespair);

		if(player.collide(cloudsOfDespair)){
			score = score - 10
			player.addImage(deadSoul);
		}
		
	}
}

function spawnGems(){
	if(worldFrameCount % 550 === 0){
		gems = createSprite(200,400,50,60);
		gems.velocity.y = -3;
		//i want to make this faster as the 'distance' goes higher
		gems.x = randomNumber(50,750);

		var rand = randomNumber(1,5);
		if(rand === 1){
			gems.addImage(greenGem);
		}if(rand === 2){
			gems.addImage(yellowGem);
		}if(rand === 3){
			gems.addImage(pinkGem);
		}if(rand === 4){
			gems.addImage(purpleGem);
		}if(rand === 5){
			gems.addImage(blueGem);
		}

		gemsGroup.add(gems);
		
		if(player.collide(gems)){
			score = score + 10
			player.addImage(happySoul);
		}

	}
}
