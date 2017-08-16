var canvas = document.querySelector('canvas');

var ww = window.innerWidth - 20,
    wh = window.innerHeight - 20;

canvas.width = ww;
canvas.height = wh;

var c = canvas.getContext('2d');

c.fillStyle = "rgba(255, 255, 255, 0.2)";

function RandomCircle(){
    this.radius = (Math.random() * 20) + 30;
    this.x = Math.random() * (ww - this.radius*2) + this.radius;
    this.y = Math.random() * (wh - this.radius*2) + this.radius;
    this.dx = Math.random() * -0.5 * 8;
    this.dy = Math.random() * -0.5 * 8;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fill();
    }

    this.update = function(){
        
        if(this.x + this.radius > ww || this.x - this.radius < 0){
            this.dx = -this.dx;
        }

        if(this.y + this.radius > wh || this.y - this.radius < 0){
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
    
}

var circleArray = [];

for (var i = 0; i < 50; i++) {
    circleArray.push(new RandomCircle());
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, ww, wh);
    for(i=0; i<circleArray.length; i++){
        circleArray[i].update();
    }
}
animate();