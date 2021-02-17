/**
 * 1. Require module math
 * 2. Sử dụng method `add` để tính tổng 2 số bất kì
 * 3. Log ra kết quả phép tính tổng ở trên
 */
var math = require('./math');

var sum = math.add(3,4);
console.log(sum);

//tạo một file riêng ra math.js
var math = {
    add: function(a, b) {
      return a + b;
    }
  };
  
  module.exports = math;