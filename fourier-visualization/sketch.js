// Fourier Series
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/125-fourier-series.html
// https://youtu.be/Mm2eYfj0SgA

let time = 0;
let wave = [];
let path = [];

let slider;
let span;

function setup() {
  createCanvas(600, 400);

  slider = createSlider(1, 50, 5);
  slider.position(200, 0);
  slider.size(200, 25);
  slider.style("background-color", "gray");

  span = createSpan("number of circles : " + slider.value());
  span.id("text");
  span.style("color", "white");
  span.position(5, 5);
  span.size(150, 25);
}

function draw() {
  background(0);
  translate(150, 200);

  span = document.querySelector("#text");
  span.textContent = "number of circles : " + slider.value();

  let x = 0;
  let y = 0;

  for (let i = 0; i < slider.value(); i++) {
    let prevx = x;
    let prevy = y;

    let n = i * 2 + 1;
    let radius = 75 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    //fill(255);
    stroke(255);
    line(prevx, prevy, x, y);
    //ellipse(x, y, 8);
  }
  wave.unshift(y);

  translate(200, 0);
  line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += 0.05;

  if (wave.length > 250) {
    wave.pop();
  }
}
