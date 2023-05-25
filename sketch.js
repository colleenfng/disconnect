let input;
let inp = [];
let xspeedd = [0.5];
let yspeedd = [0.8];
const diameter = 50;
let newFont;
let bg;



let x = 40; // x-coordinate of the circle
let y = 40; // y-coordinate of the circle
let speedX = 0.5; // horizontal speed of the circle
let speedY = 1; // vertical speed of the circle
let radius = 20; // radius of the circle

let x2 = 600; // x-coordinate of the circle
let y2 = 400; // y-coordinate of the circle
let speedX2 = 0.25; // horizontal speed of the circle
let speedY2 = 0.4; // vertical speed of the circle
let radius2 = 10; // radius of the circle

let x3 = 600; // x-coordinate of the circle
let y3 = 10; // y-coordinate of the circle
let speedX3 = 0.95; // horizontal speed of the circle
let speedY3 = 0.6; // vertical speed of the circle
let radius3 = 10; // radius of the circle
 
let myFont;
function preload() {
  myFont = loadFont('Proto-Mono-Regular.otf');
}

function setup() {
  createCanvas(1200, 650);
  
  input = createInput();
  input.position(500, 85);
    
   button = createButton('submit');
  button.position(input.x + input.width, 85);
    button.style('font-family','OverpassMono-Semibold')
    button.style('color','green')
   greeting = createElement('h2', 'Whats something you want to confess<br> about your relationship with social media?');
  greeting.position(350, 5);
  bg = loadImage('sa.png');
greeting.style('color', 'white'); 
    greeting.style('font-family', 'OverpassMono-Semibold')
    greeting.style('font-size', '20')
    greeting.style('text-align', 'center')
  
}

function createText(x, y, value) {
  let inp = createP(value);
  inp.position(x, y);
    inp.style('color', 'white',); 
    inp.style('font-family', 'Proto-Mono-Regular'); 
    inp.style('font-size', '25');
    
  return inp;
   
}

function draw() {
  background(bg);
   
 
  
  // Update and display each text object
  for (let i = 0; i < inp.length; i++) {
    let textObj = inp[i];
    let x = textObj.x;
    let y = textObj.y;
    let xSpeed = xspeedd[i];
    let ySpeed = yspeedd[i];
    
    x += xSpeed;
    y += ySpeed;
    
    if (x > width - diameter / 2 || x < diameter / 2) {
      xSpeed *= -1; 
    }
    if (y > height - diameter / 2 || y < diameter / 2) {
      ySpeed *= -1; 
    }
    
    textObj.position(x, y);
    
    xspeedd[i] = xSpeed;
    yspeedd[i] = ySpeed;
  }
    x += speedX;
  y += speedY;
  
  // Check if the circle hits the canvas boundaries
  if (x + radius > width || x - radius < 0) {
    speedX *= -1; // reverse the horizontal direction
  }
  if (y + radius > height || y - radius < 0) {
    speedY *= -1; // reverse the vertical direction
  }
  
  // Draw the blurred circle
  for (let i = 0; i < 10; i++) {
    let blurRadius = radius + i * 40;
    let alpha = map(i, 0, 10, 100, 10);
    fill(255, 102, 107 , alpha);
    heart(x, y, blurRadius, blurRadius);
  }
        x2 += speedX2;
  y2 += speedY2;
  
  // Check if the circle hits the canvas boundaries
  if (x2 + radius2 > width || x2 - radius2 < 0) {
    speedX2 *= -1; // reverse the horizontal direction
  }
  if (y2 + radius2 > height || y2 - radius2 < 0) {
    speedY2 *= -1; // reverse the vertical direction
  }2
  
  // Draw the blurred circle
  for (let i = 0; i < 10; i++) {
    let blurRadius = radius2 + i * 40;
    let alpha = map(i, 0, 20, 40, 20);
    fill(150, 250, 120, alpha);
    heart(x2, y2, blurRadius, blurRadius);
       noStroke();
  }
     x3 += speedX3;
  y3 += speedY3;
  
  // Check if the circle hits the canvas boundaries
  if (x3 + radius3 > width || x2 - radius3 < 0) {
    speedX3 *= -1; // reverse the horizontal direction
  }
  if (y3 + radius3 > height || y3 - radius3 < 0) {
    speedY3 *= -1; // reverse the vertical direction
  }2
  
  // Draw the blurred circle
  for (let i = 0; i < 10; i++) {
    let blurRadius = radius3 + i * 40;
    let alpha = map(i, 0, 20, 40, 20);
    fill(255, 0, 10, alpha);
    heart(x3, y3, blurRadius, blurRadius);
       noStroke();
  }
}

function mousePressed() {
  if ( mouseX >= button.position().x &&
    mouseX <= button.position().x + button.width &&
    mouseY >= button.position().y &&
    mouseY <= button.position().y + button.height) {

    
    let x = random(width);
    let y = random(height);
    let value = input.value();
    let textObj = createText(x, y, value);
    inp.push(textObj);
    xspeedd.push(random(-2, 2));
    yspeedd.push(random(-2, 2));
    
    // Clear the input field
    input.value('');
  }
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}
