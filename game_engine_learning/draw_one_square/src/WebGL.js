"use strict";
var gGL = null; // All global variable names begin with a lowercase g

function initializeGL() {
  var canvas = document.getElementById("GLCanvas");

  gGL = canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");

  if (gGL !== null) {
    gGL.clearColor(0.0, 0.8, 0.0, 1.0); // set the color to be cleared.
  } else {
    // Writes a string of text to a document stream.
    document.write("<br><b>WebGL is not supported.</b>")
  }
}

function clearCanvas() {
  // COLOR_BUFFER_BIT is a constant for the type of buffer.
  gGL.clear(gGL.COLOR_BUFFER_BIT); // clear to the previously set.
}

function doGLDraw() {
  initializeGL();
  clearCanvas();
}
