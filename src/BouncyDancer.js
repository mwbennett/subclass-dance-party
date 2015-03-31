var BouncyDancer = function (top , left ,timeBetweenSteps){
  Dancer.apply(this,arguments);
  this.bounceDirection = 1;
  this.bounceHeight = 100;
  this.bounceCounter = 0;
}

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.bounce = function(){
  this.top = this.top + this.bounceHeight * this.bounceDirection;
  this.$node.animate({top:this.top});
  this.bounceDirection*=-1;
}

BouncyDancer.prototype.oldStep = Dancer.prototype.step;


BouncyDancer.prototype.step = function(){
  this.oldStep();
  if (!this.pause){
    this.bounce();
  }
};


