/* Contains the common functionality shared by the entire system.
   This can include one-time initialization of the WebGL (or GPU),
   shared resources, utility functions, etc.
*/

"use strict"; // Operate in Strict Mode

var gEngine = gEngine || { };
  // initialize the variable while ensuring it is not redefined.
  // keep gEngine or make an empty object.

// this is kinda like a python __init__ function
gEngine.Core = (function() {
  // instance variable: the graphical context for drawing
  // well not enforced by JS, this is to be treated as private.
  // m prefix = instance variable.
  var mGL = null;

  // accessor of the webgl context
  // all functions with () are activated immediately.
  var getGL = function() { return mGL; };

  // initialize the WebGL, the vertex buffer and compile the shaders.
  var initializeWebGL = function(htmlCanvasID) {
    var canvas = document.getElementById(htmlCanvasID);
    // Get the standard or experimental webgl and binds to the Canvas area
    // store the resuls to the instance variable mGL
    mGL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    // === returns true if both operands are the same type and contain the same value.
    if (mGL === null) {
      document.write("<br><b>WebGL is not supported!</br>");
      return;
    }

    // now initialize the VertexBuffer
    gEngine.VertexBuffer.initialize();

    // Clears the draw area and draws one square
    var clearCanvas = function(color) {
      mGL.clearColor(color[0], color[1], color[2], color[3]); // set the color to be cleared.
      mGL.clear(mGL.COLOR_BUFFER_BIT); // clear to the color previously set.
    };
  };

  // contains the functions and variables that will be accessible.
  var mPublic = {
    getGL: getGL,
    initializeWebGL: initializeWebGL,
    clearCanvas: clearCanvas
  };

  return mPublic;
}());
