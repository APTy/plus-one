$(function() {
  // get the current value
  var num = +$('#main').text();
  var goal = num + 1;

  while ( num < goal ){
    num++;
  }

  // print the current value to the DOM
  $('#main').text(num);
});
