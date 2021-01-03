function countOfAllBooleans(arr) {
  // Insert code here;
  count = 0;
  for(i = 0; i < arr.length; i++){
    if(arr[i] === true || arr[i] === false){
      console.log(arr[i]);
      count++;
    }
  }
  return count;
}
// Do not edit this line;
module.exports = countOfAllBooleans;