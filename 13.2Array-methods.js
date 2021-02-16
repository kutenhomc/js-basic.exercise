/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */

/*Phần 1: dịch
Tạo 1 Array
ví dụ
let onthedesk=["pen","a lamp","cup tea","パソコン"]
console.log (onthedesk.length);
độ dài của 1 array có bao nhiêu tham số

part2: truy cập vào phần tử array sử dụng giá trị index

let onthedesk=["pen","a lamp","cup tea","パソコン"]
let first =onthedesk[1];
let last =onthedesk[onthedesk.length -1];

part 3: sử dụng vòng lặp trên 1 array
onthedesk.forEach(funtion (value,index,array){
  console.log(value,index);
})

part4: thêm một phần tử vào cuối của array
let newdesk1 =onthedesk.push ("gohan");

part 5: loại bỏ 1 phần tử cuối của 1 array

let newdesk2 =onthedesk.pop();

part 6 loại bỏ 1 phần tử ở đầu Array
let newdesk3 = onthedesk.shift();

part7 thêm 1 phần tử vào đầu array

let newdesk4 =onthedesk.unshift(" hanko");

part 8 tìm giá trị index của 1 phần tử có trong array

let indexofitem = onthedesk.indexOf("a lamp")

part 9  xoá 1 phần tử dựa theo giá trị index của nó trong array
cái này rất hay thêm hoặc bớt vào từ vị trí nào
mảng.spice(star từ ,delete mấy phần tử, "thêm phần tử" vào ngay sau vị trí đó)
let removeItem =onthedesk.splice(2,1," pet bottle");

part 10 sao chép 1 mảng
 
let newonthedesk= onthedesk.slice();
*/

/*
Object.keys()
Trả về một mảng các tên thuộc tính đếm được của một object đã cho.

Cú pháp

Object.keys(obj)

var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // ['0', '1', '2']

var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // ['0', '1', '2']
*/