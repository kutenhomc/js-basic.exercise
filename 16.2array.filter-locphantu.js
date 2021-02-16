// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    // your code here!
    return arr.filter(function(number){
        return number%2===0;
    });
  }
  