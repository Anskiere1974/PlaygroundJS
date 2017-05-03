window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;
  
  // start the loop
  main();
  // main() ist the heart of our engine. Basically it holds update(), render() and calls itself with
  // requestAnimationFrame(main) over and over.
  function main() {
    update();
    render();
   
   // the main() will be called again and again, forming the loop 
    requestAnimationFrame(main);
  }
  
  function update() {
    // cool update stuff will live here
  }
  
  // render() will do all the drawing for us
  function render() {
    // erase canvas every frame
    ctx.clearRect(0, 0, width, height);
    
  }
}