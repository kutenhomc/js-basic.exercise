// Turn an array of voter objects into a count of how many people voted

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
  ];
  
  function totalVotes(arr) {
    // write code here...
  //  return (voters.filter(function(person){
  //       return person.voted;
  //  })).length; 
   
  //  cách viết khác: của dùng filter
  //  voters.filter(person => person.voted).length
  
  // cách dùng reduce:
  return arr.reduce(function(count,voter){
      return count + voter.voted;
  },0);
  }
  //count ở đây là giá trị giá trị lưu trữ đầu tiên với số 0 ở trên
  //voter là giá trị lần lượt của voter ví dụ: {name:'Bob' , age: 30, voted: true},
  //
  