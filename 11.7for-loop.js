function factorials(number) {
    var mul=1;
     for (number; number>1 ;number--){
        mul*=number;
    }
    return mul;
  }