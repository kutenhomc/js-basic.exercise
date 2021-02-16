// Given an array of all your wishlist items, returns an array of titles

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
  ];
  
  function arrayTitle(wishlist) {
    // Write code here...
    return wishlist.reduce(function(accumulator,name){
        return accumulator.concat(name.title);
    },[]);
  }
  // giá trị khởi tạo là 1 array rỗng, muốn nối mảng tiếp theo thì dùng concat