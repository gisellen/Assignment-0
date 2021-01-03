function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  count = 0;
  for(i = 0; i<nums.length; i++){
    if(i == nums[i]){
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;