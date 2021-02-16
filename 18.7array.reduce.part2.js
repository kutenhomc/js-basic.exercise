/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

function countOccurrences(arr) {
  // viết code ở đây.
  return arr.reduce(function(giatri1,giatri2){
      if(giatri2 in giatri1){
          giatri1[giatri2]++;
      }
      else {
          giatri1[giatri2]=1;
      }
      return giatri1;
  },{});
}

//ở đây giá trị 1 được lặp lần lượt từ giá trị 2, 
// nếu giá trị 2 đã có ở trong giá trị 1. thì  value của giá trị 1 tăng.
//object ={a:1,b:2,c:3); cách viết khác của object
//object['a']=1;/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

function countOccurrences(arr) {
  // viết code ở đây.
  return arr.reduce(function(giatri1,giatri2){
      if(giatri2 in giatri1){
          giatri1[giatri2]++;
      }
      else {
          giatri1[giatri2]=1;
      }
      return giatri1;
  },{});
}

//ở đây giá trị 1 được lặp lần lượt từ giá trị 2, 
// nếu giá trị 2 đã có ở trong giá trị 1. thì  value của giá trị 1 tăng.
//object ={a:1,b:2,c:3); cách viết khác của object
//object['a']=1;