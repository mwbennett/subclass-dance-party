$(document).ready(function(){
  window.dancers = [];
  window.linedUp = false;
  window.partneredUp = false;

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];


    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    dancer.step();
  });

  $(".lineup").on("click", function(){
    var width = $(window).width();
    var currentPlace = 0;
    for(var i = 0;i < window.dancers.length; i++){
      window.dancers[i].lineUp(100, currentPlace);
      currentPlace+=width / window.dancers.length;
    }
    window.linedUp = !window.linedUp;
    if(window.linedUp){
      $(this).text('back to it');
    }else{
      $(this).text('line up!');
    }
  });

  $(".partnerup").on("click", function(){
    for(var i = 0; i < window.dancers.length;i+=2){
      var x = window.dancers[i].left;
      var y = window.dancers[i].top;
      var x2 = window.dancers[i + 1].left;
      var y2 = window.dancers[i + 1].top;
      var newX = (x + x2)/2;
      var newY = (y + y2)/2;
      window.dancers[i + 1].animateToPosition(newX , newY);
      window.dancers[i].animateToPosition(newX + 10 , newY + 10);
    }
    window.partneredUp = !window.partneredUp;
    if(window.partneredUp){
      $(this).text('back to it');
    }else{
      $(this).text('partner up!');
    }
  });
});

