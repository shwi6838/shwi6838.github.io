const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//Makes canvas the size of the whole screen
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//Ball Class to create balls
class Ball {
    constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        ctx.fill();
    }
    update() {
        //conditions
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }
        
        if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }
        
        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }
        
        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }

        //basic move update
        this.x = this.x + this.velX;
        this.y = this.y + this.velY;
    }
    collisionDetect() {
        for (const ball of balls) {
          if (this !== ball) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < this.size + ball.size) {
              ball.color = this.color = randomRGB();
            }
          }
        }
    }
}

//const testBall = new Ball(100, 100, 2, 2, "red", 10);
//const testBall1 = new Ball(400, 238, 4, 4, "blue", 80);

//testBall.draw();
//testBall1.draw();

const balls = [];

//Number of balls
while (balls.length < 3) {
    const size = random(100,300) //size of balls
    const ball = new Ball(
        random(0+size, width-size), //random position
        random(0+size, height - size),
        //Lets ball always be on screen
        random(-5,5), //speed x
        random(-5,5), //speed y
        randomRGB(),
        size
    );

    balls.push(ball);
    //adds to array
}

function loop()
{
    //To draw balls and update them
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0,0,width,height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }

    //constant updating the balls location
    requestAnimationFrame(loop);
}

loop();



