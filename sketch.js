const lightPurple = "rgb(222,170,255)";
const darkPurple = "rgb(157,78,221)";

function setup() {
  createCanvas(500, 350);
  background(192, 253, 255);
}

function draw() {
  fill(0); // 黒文字
  textSize(20);
  text("I,m BatMan!", 185, 50);

  //耳
  fill(darkPurple);
  triangle(240, 110, 220, 90, 210, 140);
  triangle(260, 110, 280, 90, 290, 140);

  //足
  rectMode(CENTER);
  rect(220, 270, 20, 30);
  rect(290, 270, 20, 30);

  //羽
  fill(darkPurple);
  triangle(170, 190, 13, 150, 140, 150);
  triangle(300, 190, 487, 150, 350, 150);

  //体
  fill(lightPurple);
  ellipse(250, 200, 200, 150);

  //目
  fill(000000);
  ellipse(230, 180, 5, 5);
  ellipse(265, 180, 5, 5);

  //鼻
  fill(darkPurple);
  ellipse(250, 200, 30, 20);
  fill(lightPurple);
  ellipse(255, 200, 7, 10);
  ellipse(245, 200, 7, 10);
}

function mouseClicked() {
  //code to run.
  text("☆", mouseX, mouseY);
}
