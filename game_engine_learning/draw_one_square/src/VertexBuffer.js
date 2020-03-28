// Defines that JS code should be executed in "strict mode"
// i.e. cannot use undeclared variables.
"use strict";

var gSquareVertexBuffer = null;

function initSquareBuffer() {
  // First: define the vertices for a square.
  // Structure: x, y, z coordinates. Since game is 2D z = 0
  var verticesOfSquare = [
    0.5, 0.5, 0.0
    -0.5, 0.5, 0.0,
    0.5, -0.5, 0.0,
    -0.5, -0.5, 0.0
  ];

  // Step A: Create a buffer on the gGL context for our vertex positions
  gSquareVertexBuffer = gGL.createBuffer();

  // Step B: Activate gSquareVertexBuffer
  gGL.bindBuffer(gGL.ARRAY_BUFFER, gSquareVertexBuffer);

  // Step C: Loads verticesOfSquare into the vertexBuffer
  // A Float32Array represents an array of 32-bit floating point numbers.
  // STATIC_DRAW informs the drawing hardware that this buffer will not be changed.
  gGL.bufferData(gGL.ARRAY_BUFFER, new Float32Array(verticesOfSquare),
  gGL.STATIC_DRAW);
}
