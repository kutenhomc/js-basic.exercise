/**
 * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần. 
 * Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */
 
var students = [
    { name: 'A', score: 100 },
    { name: 'B', score: 10 },
    { name: 'C', score: 101 },
    { name: 'D', score: 50 },
    { name: 'E', score: 75 }
  ];
  
  function getTopStudents(students) {
    // Write code here...
    var sapxep = students.sort (function(a,b){
        return b.score-a.score;
    }).slice(0,3);
    //sau khi sắp xếp xong thì sturdents[ ] là một mảng 3 số hạng đầu với score từ lớn đến nhỏ.
    var newarray =sapxep.reduce(function (c,d){
        return c.concat(d.name);
    },[]);
    //cộng tất cả các mảng chạy từ mảng c tới mảng d.name tạo thành 1 mảng.
    
    
    return newarray;
  }