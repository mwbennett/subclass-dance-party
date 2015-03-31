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

// BouncyDancer.prototype.bounceDown = function(){
//   this.$node.animate({top: '+=100px'});
//   //this.styleSettings[top]
// };

// BouncyDancer.prototype.bounceUp = function(){
//   this.$node.animate({top: '-=100px'});
// };

BouncyDancer.prototype.oldStep = Dancer.prototype.step;


BouncyDancer.prototype.step = function(){
  this.oldStep();
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.bounceUp();
  // setTimeout(null,1000);
  // this.bounceDown();
  if (!this.pause){
    this.bounce();
  }
};


