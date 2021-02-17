/**
 * 1. Thêm method multiply vào module `math` nhận vào 2 số bất kì, trả về tích 2 số
 * 2. Require module math và tính tích 2 số bất kì dùng method multiply đã tạo ở trên
 * 3. Log ra kết quả
 */
var math = require('./math');

math.multiply = function(c,d){
  return c*d;
}
var mul =math.multiply(5,7);
console.log(mul);

// Tạo một file math.js riêng
var math = {
    add: function(a, b) {
      return a + b;
    }
  };
  
  module.exports = math;