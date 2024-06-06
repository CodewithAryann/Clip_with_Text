let cnv;

function setup() {
  cnv = createCanvas(400, 400);
}

function draw() {
  background('#1A1A1A'); // Dark background
  
  // Draw a square
  let squareSize = 200;
  let squareX = width / 2;
  let squareY = height / 2;
  noStroke();
  // Gradient for the square
  let squareColorTop = color('#FFD700');
  let squareColorBottom = color('#B8860B');
  fill(squareColorTop);
  rectMode(CENTER);
  rect(squareX, squareY, squareSize, squareSize);

  // Clip to circle
  let clipSize = 180;
  let clipX = width / 2;
  let clipY = height / 2;
  fill('#1A1A1A'); // Dark circle
  ellipse(clipX, clipY, clipSize, clipSize);

  // Gradient for the text
  let textColorTop = color('#FFFFFF');
  let textColorBottom = color('#CCCCCC');
  fill(textColorTop);
  textSize(24);
  textAlign(CENTER, CENTER);
  text('Stay focused.', width / 2, height / 2);
}
