# Quadtree Visualization

This project provides an interactive visualization of a Quadtree data structure using p5.js. The Quadtree is a tree data structure that is particularly useful for partitioning a two-dimensional space by recursively subdividing it into four quadrants or regions. This implementation showcases how a Quadtree can significantly improve the performance (FPS) of a simple particle collision detection application.

# Quadtree Visualization

This project provides an interactive visualization of a Quadtree data structure using p5.js. The Quadtree is a tree data structure that is particularly useful for partitioning a two-dimensional space by recursively subdividing it into four quadrants or regions. This implementation showcases how a Quadtree can significantly improve the performance (FPS) of a simple particle collision detection application.

## Features

- Demonstration of particle collision detection before and after implementing the Quadtree.
- Real-time performance metrics showing frames per second (FPS) improvements.

## How It Works

1. **Initialization**: A set of particles is generated randomly within a defined space.
2. **Quadtree Construction**: The space is divided into quadrants using a Quadtree, optimizing the spatial partitioning of particles.
3. **Collision Detection**: The Quadtree is used to efficiently check for collisions among particles, significantly reducing the number of comparisons needed.
4. **Visualization**: The Quadtree structure and particle interactions are visualized using p5.js, allowing users to see the improvements in performance and efficiency.

## Source

This project is a tutorial from [The Coding Train](https://www.youtube.com/@TheCodingTrain) by Daniel Shiffman.
