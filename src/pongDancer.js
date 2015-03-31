var PongDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.t = 0;
  console.log(this.t);
}

PongDancer.prototype = Object.create(Dancer.prototype);
PongDancer.prototype.constructor = PongDancer;

PongDancer.prototype.oldStep = Dancer.prototype.step;

PongDancer.prototype.step = function(){
  this.oldStep();
  this.moveIt();

}

PongDancer.prototype.moveIt = function() {
  this.t += 0.05;
  var r = 100;         // radius

  this.left = Math.floor(this.left + (r * Math.cos(this.t)));
  this.top = Math.floor(this.top + (r * Math.sin(this.t)));
  // this.$node.animate({
  //   top: newTop,
  //   left: newLeft,
  // }, 4000);

}
