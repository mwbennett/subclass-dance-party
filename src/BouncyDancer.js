var BouncyDancer = function (top , left ,timeBetweenSteps){
  Dancer.apply(this,arguments);

}

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.bounceDown = function(){
  this.$node.animate({top: '+=100px'});
  //this.styleSettings[top]
};

BouncyDancer.prototype.bounceUp = function(){
  this.$node.animate({top: '-=100px'});
};

BouncyDancer.prototype.oldStep = Dancer.prototype.step;


BouncyDancer.prototype.step = function(){
  this.oldStep();
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.bounceDown();
  setTimeout(null, 2000);
  this.bounceUp();
};


