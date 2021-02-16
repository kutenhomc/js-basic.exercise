var a = 10;

var x = --a + a++;
console.log(x);

// Nhấn Run để chạy code.
// Giải thích vì sao kết quả là 18.

bước 1 : --a thì a là 9 
bước 2 : a++ thì a tại thời điểm đó vẫn là 9
//nếu là ++a thì a mới là 10
// hoặc thêm 1 bước nữa là var x =--a + a++ + a thì a vị trí thứ 3 mới là 10.
