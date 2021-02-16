/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers, 
 * sử dụng map method và hàm tripple để trả về 1 mảng 
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */

function tripple(num) {
    // Write code here...
    return num*3;
    
  }
  
  function multiply(numbers) {
    // Write code here...
   var newarr= numbers.map(function callback(number){ //function này bắt buộc phải nhận một giá trị và giá trị này chính là number[];
        return tripple(number);
    })
    return newarr;
  }