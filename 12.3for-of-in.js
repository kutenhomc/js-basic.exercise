/**
 * Sử dụng vòng lặp for...in để lấy về tất cả các key của object sau, 
 * in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
    var array=true;
  function getObjectKey(obj, keys) {
    // Write code here...
  
    if (array){
        var temp=[];
        keys=temp;
        array=false;
        //nếu không ghi array=false thì vòng lặp điều kiện vẫn chưa kết thúc.
    }
    for (var key in obj){
      keys.push(key);
    }
  
        if (typeof obj[key]==='object'){
              getObjectKey(obj[key],keys);
        }
      return keys;
  }
  