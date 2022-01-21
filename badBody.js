function setup() {
  createCanvas( 400, 1000);

  line(200, 300, 200, 400);
  line(230, 300, 230, 400);

  // body
  fill(200, 100, 30);
  circle(215, 270, 80);

  noStroke();
  // this muse be the head
  fill(0, 10, 255);
  circle(215, 200, 40);

  stroke(0, 100, 20);
  line(200, 200, 250, 200);
}
