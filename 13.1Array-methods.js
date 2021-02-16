/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
function removeEnd(arr, n) {
    // your code here!
    for (var number=0; number<n;number++){
        arr.pop();
    }
    return arr;
  }