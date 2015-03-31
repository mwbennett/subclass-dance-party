var MouseyDancer = function(top, left, timeBetweenSteps){
  BouncyDancer.apply(this, arguments);
}

MouseyDancer.prototype = Object.create(BouncyDancer.prototype);
MouseyDancer.prototype.constructor = MouseyDancer;

MouseyDancer.prototype.react = function(){
  $('.dancer').on('mouseover', function(){
    this.css('background-color', 'blue');
  });
}
