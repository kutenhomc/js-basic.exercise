/** 
 * Viết hàm circumferenceOfCircle() tính chu vi và hàm acreageOfCircle() tính diện tích hình tròn 
 * khi biết bán kính
 * Với PI = 3.14  
*/

function circumferenceOfCircle(r) {
    // your code here!
    return r*2*(Math.PI).toFixed(2);
  }
  function acreageOfCircle(r) {
    //your code here!
    return r*r*(Math.PI).toFixed(2);
  }

  //toFixed (number) lấy sau dấu phẩy thứ number;