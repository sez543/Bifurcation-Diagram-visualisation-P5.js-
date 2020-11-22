var start = 0.4;
var c = 200;
var error = 0.001;

function RenderDiagram() {
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var r = map(x, 0, width, 2.4, 4);
      var s = map(y, 0, height, 1, 0);
      var current = start;
      for (var i = 0; i < c * 2; i++) {
        current = r * current * (1 - current);
      }
      for (var i = 0; i < c; i++) {
        current = r * current * (1 - current);
        if (Math.abs(current - s) <= error) {
          point(x, y);
          break;
        }
      }
    }
  }
}

function setup() {
  createCanvas(800, 500);
  pixelDensity(1);
  background(255);
  strokeWeight(1);
  stroke(0);
  RenderDiagram();
}

function draw() {}
