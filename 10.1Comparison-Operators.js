var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.
so sánh === là so sánh giá trị tuyệt đối
biến a và biến b đều được lưu trữ trên RAM nhưng  ví dụ địa chỉ của a là 1 thì địa chỉ của b là 2
mặc dù giá trị của array đều bằng nhau nhưng không chỉ cùng tới 1 địa chỉ trên nên false 