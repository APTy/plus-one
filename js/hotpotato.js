// hotpotato.js

// run code after the document loads
$(function() {
  // get the current value
  var num = $('#main').text();

  // parse and increment the current value
  num = +num + 1;

  // print the current value to the DOM
  $('#main').text(num);
});
