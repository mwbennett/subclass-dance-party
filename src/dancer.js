// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){


  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
  this.pause = false;
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.animateToPosition = function(top, left){
  this.$node.stop(true, true);
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.animate(styleSettings);
};
Dancer.prototype.setPause = function(){
  this.pause = !this.pause;
  this.$node.stop(true, true);
};

Dancer.prototype.lineUp = function(top, left){
  this.setPause();
  this.animateToPosition(top, left);
};
