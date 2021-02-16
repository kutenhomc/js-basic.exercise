/**
*  Sử dụng vòng lặp for viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
*  Tham số:
*- array: mảng cần kiểm tra
*- value: giá trị cần kiểm tra xem có tồn tại trong array không
* Return:
*- true nếu có tồn tại
*- false nếu không tồn tại
for in cho object, for of cho array
*/
function has(array, value) {
    // viết code ở đây
  for (var number=0; number <array.length;number++){
      if (array[number]==value){
          return true;
      }
      
  }
  return false;
  }