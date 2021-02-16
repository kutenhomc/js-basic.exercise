/** 
 * Viết function trả về n phần tử đầu tiên có trong mảng.
*/

function first(arr, n) {
    // your code here...
    var newarr=[];
    for (var number=0;number<n;number++){
        newarr.push(arr[number]);
    }
    return newarr;
  }
  
  // console.log(first([1, 2, 3], 2)); // expect [1, 2]

// dùng slice để coppy mảng
// cú pháp Array.slice(start,end);