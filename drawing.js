var brushWidth = 10;
var color = "#000000";

//primer predict ------------------------------------------------------------------------------------
var drawingcanvas;

(function() {
  var $ = function(id){return document.getElementById(id)};

  drawingcanvas = this.__canvas = new fabric.Canvas('bigcanvas', {
    isDrawingMode: true
  });

  fabric.Object.prototype.transparentCorners = false;

  if (drawingcanvas.freeDrawingBrush) {
    drawingcanvas.freeDrawingBrush.color = color;
    drawingcanvas.freeDrawingBrush.width = brushWidth;
  }
})();

//segundo predict -----------------------------------------------------------------------------------

var drawingcanvas2;

(function() {
  var $ = function(id){return document.getElementById(id)};

  drawingcanvas2 = this.__canvas = new fabric.Canvas('bigcanvas2', {
    isDrawingMode: true
  });

  fabric.Object.prototype.transparentCorners = false;

  if (drawingcanvas2.freeDrawingBrush) {
    drawingcanvas2.freeDrawingBrush.color = color;
    drawingcanvas2.freeDrawingBrush.width = brushWidth;
  }
})();