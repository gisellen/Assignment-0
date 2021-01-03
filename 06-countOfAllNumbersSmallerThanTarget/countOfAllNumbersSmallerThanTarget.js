function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  count = 0;
  for(i = 0; i < nums.length; i++){
    if(nums[i] < target){
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;