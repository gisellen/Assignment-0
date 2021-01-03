class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    return this.recursionSearch(nums, target, 0, nums.length-1); //this starts a recursion function
  }
  recursionSearch(nums, target, start, end){
    if(start > end){
      return this.flag;
    }
    let mid = Math.floor((start+end)/2);
    if(nums[mid] === target || nums[start] === target || nums[end] === target) this.flag = true;
    else if(nums[mid] > target) return this.recursionSearch(nums, target, start, mid-1);
    else return this.recursionSearch(nums, target, mid+1, end);
    return this.flag;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;