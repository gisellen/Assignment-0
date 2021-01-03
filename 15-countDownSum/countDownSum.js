class MySolution {
  countDownSum(num) {
    // Insert code here;
    this.sum = num;
    if(num >= 2){
      this.sum += this.countDownSum(num-1);
    }
    return this.sum
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;