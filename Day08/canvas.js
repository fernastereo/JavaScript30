const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
	if (!isDrawing) return; //this stop the function from running when they are not moused down
	console.log(e);
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.beginPath();
	//start from:
	ctx.moveTo(lastX, lastY);
	//go to:
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	//lastX = e.offsetX;
	//lastY = e.offsetY;
	[lastX, lastY] = [e.offsetX, e.offsetY]; //this assign to each variable

	hue++; //increments hue for change the color 
	if (hue >= 360) {
		hue = 0;
	}

	if (ctx.lineWidth >= 80 || ctx.lineWidth <= 1) {
		direction = !direction; //a way for flip the value of a boolean variable
	}
	if (direction) {
		ctx.lineWidth++;
	}else{
		ctx.lineWidth--;
	}


}

canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
});

//We are going to listen the mousemove event from the canvas
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
//this event is fired when the mouse leaves the canvas area 
canvas.addEventListener('mouseup', () => isDrawing = false);