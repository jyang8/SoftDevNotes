var canvas = document.getElementById("drawing");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#B7410E";

var rid = 0;

var animateDot = function() {
    var x = 25;
    window.cancelAnimationFrame( rid );
    
    var circle = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	//console.log("circle");
	console.log(rid);
	ctx.beginPath();
	ctx.arc(x,canvas.height/2,25,0,2*Math.PI);
	ctx.fill();
	x++;
	rid = window.requestAnimationFrame( circle );
    };
    circle();
};

var stopIt = function() {
    window.cancelAnimationFrame( rid );
};

var stopBtn = document.getElementById("stop_btn");
stopBtn.addEventListener("click", stopIt);

//window.requestAnimationFrame( circle )
//circle();
canvas.addEventListener("click", animateDot );
