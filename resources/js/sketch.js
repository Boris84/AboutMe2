let bubbles = []; 

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(50, 89, 100);

for (let i = 0; i < 15; i++) {
	bubbles.push(new bubble());
  }
}

function draw() {
	background(190, 191, 130);
	for (let i = 0; i < bubbles.length; i++) {
	bubbles[i].move();
  bubbles[i].display();
  stroke('black');
  strokeWeight(3);
  text("My name is Simon, and live in North London. I have been studying Web devoloping now for coming on 3+ years.", 20, 90); 
  text("I love testing, researching, designing, creating and developing.", 20, 120);
  text("My end goal is to be a full stack developer, and to be able to work on my own as well as collaborately on huge projects.", 20, 150);
  textSize(20);
  textFont('Consolas')
  fill(255, 165, 0);
  }
}

// bubble Class 
class bubble {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.diameter = random(5, 50);
		this.speed = 1;
    this.color = "lightblue";
	}
    move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    }
    display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill(this.color);
    }  
  }

