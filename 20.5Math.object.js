/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/

function rightTriangle(a, b, c) {
    // your code here
     if (a,b,c<=0){
         return false;
     }
    if( Math.pow(a,2)+Math.pow(b,2) === Math.pow(c,2))
    {
        return true;
    }
    if( Math.pow(a,2)+Math.pow(c,2) === Math.pow(b,2))
    {
        return true;
    }
    if( Math.pow(c,2)+Math.pow(b,2) === Math.pow(a,2))
    {
        return true;
    }
    return false;
  }