/**
 * Sử dụng vòng lặp for để tính tổng các số có trong mảng:
 */

function sum(array) {
    // viết code ở đây.
      var number =0;
      var sum=0;
      for (number; number<array.length;number++)
      {
        sum+=array[number];
      }
      return sum;
  }