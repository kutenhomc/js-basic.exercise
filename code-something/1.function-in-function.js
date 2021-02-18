function createAdder(num) {
	return function(x) {
			return x + num; } }
var plus3 = createAdder(3);
đầu tiên đở đây plus3 giá trị là 3

/* sau đó plus3(number)
với number ở đây bất kì là x;
số 2 đưa vào chỉ là đánh lừa vì sau x không có già trị nào khác */
console.log(plus3(0)); //ra 3
console.log(plus3(10, 2)); //ra 13

/* console.log(createAdder(3),2); */

