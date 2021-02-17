/**
 * 1. Thêm method `sum` cho module `math`, nhận vào 1 array các số, trả về tổng các số
 * 2. Require module math và sử dụng method sum để tính tổng 1 array các số bất kì
 * 3. Log kết quả
 */
var math =require('./math');

math.sum=function (arr){
  var sum =0;
  for (var number of arr){
   sum+=number;
  }
  return sum;
}

var sum1=math.sum([1,3,4,5,6,7]);
console.log(sum1);

// Tạo một file math.js riêng
var math = {
    add: function(a, b) {
      return a + b;
    }
  };
  
  module.exports = math;