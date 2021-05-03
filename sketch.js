var wall, thickness , bullet , speed, weight

function setup(){
	createCanvas(1600,400)
	thickness = random(22,83)
	speed = random(22,55)
	weight = random(30,52)

	bullet = createSprite(50,200,50,10)
	bullet.velocityX = speed;
	bullet.shapeColor = "white"

	wall = createSprite(1000,200,thickness,height/2);
	wall.shapeColor = "green"
}

	function draw(){
		background("black")
		if(hascollided(bullet,wall)){
			bullet.velocityX = 0
			var damage = 0.5 * weight*speed*speed/(thickness*thickness*thickness)
			if(damage>10){
				wall.shapeColor = "red"
			}
			if(damage<10){
				wall.shapeColor = "green"
			}
		}
		drawSprites()
	}
	function hascollided(Lbullet , Lwall){
	var	bulletRightEdge = Lbullet.x + Lbullet.width
	var	wallLeftEdge = Lwall.x
		if(bulletRightEdge>= wallLeftEdge){
			return true
		}
		else{return false}
	}



