var CircleDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('circle-dancer');
  this.t = 0;
  this.r = 50;
  this.timeBetweenSteps = 1;
  this.closestBouncy = null;
}

CircleDancer.prototype = Object.create(Dancer.prototype);
CircleDancer.prototype.constructor = CircleDancer;

CircleDancer.prototype.oldStep = Dancer.prototype.step;

CircleDancer.prototype.step = function(){
  this.oldStep();
  this.moveIt();
};

CircleDancer.prototype.moveIt = function() {
  if(!this.pause){
    this.t += 0.05;
    var newTop = Math.floor(this.left + (this.r * Math.cos(this.t)));
    var newLeft = Math.floor(this.top + (this.r * Math.sin(this.t)));
    this.$node.animate({
      top: newTop,
      left: newLeft,
    }, 1);
    if(this.closestBouncy !== null){
      this.mirrorBounce();
    }
  }
};

CircleDancer.prototype.setClosestBounce = function(bouncyDancer){
  this.closestBouncy = bouncyDancer;
}

CircleDancer.prototype.mirrorBounce = function(){
  this.left = this.closestBouncy.left;
  this.top = this.closestBouncy.top;
}
