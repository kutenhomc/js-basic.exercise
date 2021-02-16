/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu: 
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */
 
function sum(numbers) {
    // Write code here...
    var sum=0;
    if (numbers.length ===0){
        return sum;
    }
    for (var number of numbers){
        sum+=number;
    }
    return sum;
 }
 