// tính tổng của tích của các phần tử của array a với các phần tử của array b.
/**
 * var a = [1, 2, 3];
 * var b = [10, 20];
 * Kết quả mong muốn: 180 // (10 + 20 + 30) + (20 + 40 + 60)
 */

function sumMultiplyArray(a, b) {
    // viết code ở đây.
    var sum=0;
    for (var number1=0;number1<a.length;number1++){
        for(var number2 =0;number2< b.length;number2++){
                sum+=a[number1]*b[number2]
        }
    }
    return sum;
    
  }