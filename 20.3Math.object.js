/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
  Yêu cầu sử dụng Math Object
*/

function positiveNumber(arr) {
    // your code here
    return arr.map(function (number){
        return Math.abs(number);
    });
  }
  