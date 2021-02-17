/**
 * 1. Require module `path` (built-in sẵn trong node)
 * 2. Sử dụng method extname để tìm extension (đuôi) của một đường dẫn (path) tới file nào đó.
 * Tra cứu: https://nodejs.org/dist/latest-v8.x/docs/api/path.html#path_path_extname_path
 */

// require module here!
var fs = require('fs');

function getExtension(fileName) {
  // your code here!
 return  path.extname(fileName);
}










var fs = require('fs');

var text =fs.readFileSync('./text.txt',{encoding:'utf-8'});
console.log(text);

fs.writeFileSync('./text1.txt','I am Cuong peo');
//tạo ra một file text1.txt mới có nội dung trên.

// tạo một file text.txt riêng ra bên ngoài
//hello.world!!!!;