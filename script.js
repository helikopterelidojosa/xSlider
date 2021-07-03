let canvas = document.getElementById('canvas1');
let canvasW = 300;
let canvasH = 500;
canvas.width = canvasW;
canvas.height = canvasH;
let c = canvas.getContext('2d');



let xrange = canvasW / 2;


function xSlider() {
  xrange = document.getElementById("myRange").value;
}


//ball conditions
let x = xrange;
let y = canvasH / 2;
let radius = 3;
let dx = 0.2;// movenment
let dy = 0.2;//movenment



function bouncingBall(){
 requestAnimationFrame(bouncingBall);
 c.clearRect(0,0,canvasW,canvasH);

 

//background rectangle color black
c.beginPath();
c.fillStyle = "black";
c.fillRect(0, 0, canvasW, canvasH);

//moving ball yellow
c.beginPath()
c.arc(xrange, y, radius, 0, Math.PI*2);
c.fillStyle = "yellow";
c.fill();

//line vertikal
c.beginPath();
c.strokeStyle = "blue"; 
c.lineWidth = 1;
c.moveTo(xrange, 0);
c.lineTo(xrange, canvasH);
c.stroke();

//line horizontal
c.beginPath();
c.strokeStyle = "red"; 
c.lineWidth = 1;
c.moveTo(0, y);
c.lineTo(canvasW, y);
c.stroke();






//SCORE FEEDBACK IN TEXT AND NUMBERS FOR LOCATION OF THE BALL
//vertikal blue line x value feedback text
c.fillStyle = "blue";
c.font = "15px Arial ";
xScore = "x ="  + Math.round(xrange);
c.fillText(xScore,50, 50);

//horizontal red line y value feedback text
c.beginPath();
c.fillStyle = "red";
c.font = "15px Arial ";

//yScore = "y =" + (canvasH - Math.round(y));/// for reverse value
yScore = "y =" + Math.round(y);
c.fillText(yScore, 50, 65);


//CONDITIONS FOR BALL TO CHANGE LOCATION
x = xrange;
y += dy;


//bouncing verticaly form sides
if (y <= 0 || y >=canvasH){
    dy = -dy;
};

};

bouncingBall();