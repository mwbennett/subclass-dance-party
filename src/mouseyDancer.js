var MouseyDancer = function(top, left, timeBetweenSteps){
  BouncyDancer.apply(this, arguments);
  this.$node.addClass('mousey-dancer');
}

MouseyDancer.prototype = Object.create(BouncyDancer.prototype);
MouseyDancer.prototype.constructor = MouseyDancer;

MouseyDancer.prototype.react = function(){
  this.$node.on('mouseover', function(){
    $(this).css('border','20px solid limegreen');
  });
}

MouseyDancer.prototype.step = function(){
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
    this.react();
  }
};
