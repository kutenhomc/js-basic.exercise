/** 
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round 
*/

function average(arr) {
    // your code here!
    var average=arr.reduce (function (start,end){
       return Math.round(start+end);
    },0);
    return Math.round(average/arr.length);
  }
