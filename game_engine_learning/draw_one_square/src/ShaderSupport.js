// This book went from 0-100 real quick lmao.

"use strict";

var gSimpleShader = null;
var gShaderVertexPositionAttribute = null;

function initSimpleShader(vertexShaderID, fragmentShaderID) {
  // Step A: load and compile the vertex and fragment shaders
  var vertexShader = loadAndCompileShader(vertexShaderID, gGL.VERTEX_SHADER);
  var fragmentShader = loadAndCompileShader(fragmentShaderID, gGL.FragmentShader);

  // Step B: Create and link the shaders into a program.
  gSimpleShader = gGL.createProgram();
  gGL.attachShader(gSimpleShader, vertexShader);
  gGL.attachShader(gSimpleShader, fragmentShader);
  gGL.linkProgram(gSimpleShader);

  // Step C: check for error.
  if (!gGL.getProgramParameter(gSimpleShader, gGL.LINK_STATUS)) {
    alert("Error linking shader");
  }

  // Step D: Gets a reference to the aSquareVertexPosition attribute.
  gShaderVertexPositionAttribute = gGL.getAttribLocation(gSimpleShader, "aSquareVertexPosition");

  // Step E: Activates the vertex buffer loaded in VertexBuffer.js.
  gGL.bindBuffer(gGL.ARRAY_BUFFER, gSquareVertexBuffer);

  // Step F: Describe the characteristic of the vertex position attribute.
  gGL.vertexAttribPointer(gShaderVertexPositionAttribute,
    3,          // each vertex is a 3-float (x, y, z)
    gGL.FLOAT,  // data type is FLOAT
    false,      // if the content is normalized vectors.
    0,          // number of bytes to skip in between elements
    0);         // offsets to the first element.
}

function loadAndCompileShader(id, shaderType) {
  var shaderText, shaderSource, compiledShader;

  // Step A: Get the shader source from index.html
  shaderText = document.getElementById(id);
  shaderSource = shaderText.firstChild.textContent;

  // Step B: Create the shader based on the source type: vertex or fragment.
  compiledShader = gGL.createShader(shaderType);

  // Step C: Compile the created shader.
  gGL.shaderSource(compiledShader, shaderSource);
  gGL.compileShader(compiledShader);

  // Step D: Check for error and return result.
  if (!gGL.getShaderParameter(compiledShader, gGL.COMPILE_STATUS)) {
    alert("A shader compiling error occurred: " + gGL.getShaderInfoLog(compiledShader));
  }

  return compiledShader;
}
