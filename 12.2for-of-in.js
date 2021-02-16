/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */
 
function multiply(arr) {
    // Write code here...
     var mul =1;
    for (var number of arr){
       
        mul*=number;
    }
    return mul;
  }