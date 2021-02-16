var a = 10;
var b = 18;

var x = a-- + b++ - ++b - ++a;
console.log(x);
// Nhấn Run để chạy code
// Thêm các dấu cách vào dòng 4 để code dễ đọc hơn
// Giải thích tại sao kết quả lại như vậy. Gợi ý: Viết ra từng dòng để giải thích 

b1:a-- thì a vẫn là 10
b2: b++ thì b vẫn là 18
10+18 =28;
b3:++b =trước đó b++ nên khi b được gọi tiếp theo là 19 sau đó ++b là 20
28-20=8;
b4:++a = trước đó a-- nên khi a được gọi tiếp theo là 9 sau đó ++a lại bằng 10
8+10=18
kết quả bằng 18.
