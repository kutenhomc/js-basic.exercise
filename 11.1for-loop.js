/**
 * Dùng vòng lặp for kiểm tra số nguyên tố.
 * @param {number} x Số cần kiểm tra
 * @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false.
 */
function isPrimeNumber(x) {
    // viết code ở đây.
    if (x < 2) {
      return false;
    }
    for (var i = 2; i < (x - 1); i++) {
      if (x % i === 0) {
        return false;
      }
      // không phải số nguyên tố nếu x chia lần lượt từng số từ i đến x  
      //nếu  có  1 số nào chia hết thì sẽ không phải số nguyên tố 
    }
    return true;
    //vòng lặp kết thúc vẫn không tìm thấy số nào thì số x đó là số nguyên tố
  }