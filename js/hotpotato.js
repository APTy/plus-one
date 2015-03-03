// hotpotato.js

// run code after the document loads
$(function() {
  // get and parse the current value
  var num = +$('#main').text();

  // increment the current value
  var numbers = [];
  var numberCheck = true;
  var prevNumber = 0;

  // create an array of all numbers 1-100
  for (var i = 1; i <= 100; i++) {
    numbers.push(i);
  }

  // check to make sure every number is greater than the previous number
  numbers.forEach(function(number) {
    numberCheck = (number > prevNumber);
    prevNumber = number;
  });

  // increment the index value if all goes well
  num += +numberCheck;

  // print the current value to the DOM
  $('#main').text(num);
});
