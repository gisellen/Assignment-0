function pairSum(nums, target) {
  // Insert code here;
  try{
    if(nums.length <= 1) throw "need more than 1 args";
      for(i=0; i<nums.length; i++){
        for(j=0; j<nums.length; j++){
          if(nums[i] + nums[j] === target){
            return true;
          }
        }
      }
      return false;
  }
  catch(e){
    throw e;
  }
}
console.log([], 9000);

// Do not edit this line;
module.exports = pairSum;