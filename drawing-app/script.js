const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

var ctx = canvas.getContext("2d");
let size = 10;
let isPressed = false;
colorEl.value = "red";
let x;
let y;
// Set line properties
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;

// Initialize start coordinates
let startX = 0;
let startY = 0;

// Function to draw the line
function drawLine(endX, endY) {
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(endX, endY);
	ctx.stroke();
}
canvas.addEventListener("mousedown", (e) => {
	isPressed = true;
	x = e.offsetX;
	y = e.offsetY;
});
canvas.addEventListener("mouseup", (e) => {
	isPressed = false;
	x = undefined;
	y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
	const rect = canvas.getBoundingClientRect();
	const mouseX = e.clientX - rect.left;
	const mouseY = e.clientY - rect.top;

	// Call drawLine with the updated end coordinates
	drawLine(mouseX, mouseY);
	// if (isPressed) {
	// 	const x2 = e.offsetX;
	// 	const y2 = e.offsetY;
	// 	// ctx.drawCircle(x2, y2);
	// 	// ctx.drawLine(x, y, x2, y2);
	// 	ctx.strokeStyle = "blue"; // Line color
	// 	ctx.lineWidth = 2; // Line width
	// 	ctx.beginPath(); // Start a new path
	// 	ctx.moveTo(x2, y2); // Move to the starting point (x=50, y=50)
	// 	ctx.lineTo(x2, y2); // Draw a line to the ending point (x=350, y=50)
	// 	ctx.stroke();
	// 	console.log(x2);
	// 	// x = x2;
	// 	// y = y2;
	// }
});
