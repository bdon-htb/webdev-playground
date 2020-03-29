"use strict";
var gGL = null; // All global variable names begin with a lowercase g

function initializeGL() {
  var canvas = document.getElementById("GLCanvas");

  gGL = canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");

  if (gGL !== null) {
    gGL.clearColor(0.0, 0.8, 0.0, 1.0); // set the color to be cleared.

    // A. initialize the vertex buffer.
    initSquareBuffer(); // Defined in VertexBuffer.js

    // B. now load and compile the vertex and fragment shaders
    initSimpleShader("VertexShader", "FragmentShader");
      // The two shaders are defined in the index.html file.
      // initSimpleShader() function is defined in ShaderSupport.js

  } else {
    // Writes a string of text to a document stream.
    document.write("<br><b>WebGL is not supported.</b>")
  }
}

/* function clearCanvas() {
  // COLOR_BUFFER_BIT is a constant for the type of buffer.
  gGL.clear(gGL.COLOR_BUFFER_BIT); // clear to the previously set.
}
*/

function drawSquare() {
  gGL.clear(gGL.COLOR_BUFFER_BIT);

  // Step A: Activate the shader to use.
  gGL.useProgram(gSimpleShader);

  // Step B: Enable the vertex position attribute.
  gGL.enableVertexAttribArray(gShaderVertexPositionAttribute);

  // Step C: Draw with the above settings.
  gGL.drawArrays(gGL.TRIANGLE_STRIP, 0, 4);
}

function doGLDraw() {
  initializeGL();
  drawSquare();
}
