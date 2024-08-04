// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// QuadTree
// https://www.youtube.com/watch?v=z0YFFg_nBjw

// For more:
// https://github.com/CodingTrain/QuadTree

// improve performance by reducing the number of collision checks with a QuadTree (from about 10-30 fps to 50-70 fps)

// quadtree summary:
// 1. divide space into 4 regions
// 2. each region can be divided into 4 more regions
// 3. each region has a capacity (max number of points it can hold)
// 4. if a region exceeds capacity, it splits into 4 subregions
// 5. each point exists in only one region
// 6. each point has a region property to keep track of where it is
// 7. to query, start at the top level and look at all points in that region
// 8. if a region is a leaf, look at all points in that region
// 9. if a region is not a leaf, look at all points in its subregions
// 10. to insert, start at the top level and try to insert each point recursively

let particles = [];
let quadTreeSelect, quadTreeSpan, fpsSpan, fps;

function setup() {
  createCanvas(600, 400);
  quadTreeSpan = createSpan("With quadTree");
  quadTreeSelect = createCheckbox();
  // get fps
  fps = frameRate();
  fpsSpan = createSpan("FPS: " + fps);
  fpsSpan.id("fps");

  for (let i = 0; i < 1000; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  background(0);
  // update fps
  fps = frameRate();
  document.querySelector("#fps").textContent = "FPS: " + fps;

  let boundary = new Rectangle(300, 200, 600, 400);
  let qtree = new QuadTree(boundary, 4);

  for (let p of particles) {
    let point = new Point(p.x, p.y, p);
    qtree.insert(point);

    p.move();
    p.render();
    p.setHighlight(false);
  }

  for (let p of particles) {
    let range = new Circle(p.x, p.y, p.r * 2);
    let points = qtree.query(range);

    if (quadTreeSelect.checked()) {
      // prettier-ignore
      for (let point of points) {//................... with QuadTree
              let other = point.userData; 
              if (p !== other && p.intersects(other)) {
                  p.setHighlight(true);
              }
          }
    } else {
      // prettier-ignore
      for (let other of particles) {//............... without QuadTree
                if (p !== other && p.intersects(other)) {
                    p.setHighlight(true);
                }
            }
    }
  }
}
