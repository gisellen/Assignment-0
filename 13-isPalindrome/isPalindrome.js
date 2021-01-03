function isPalindrome(word) {
  // Insert code here;
  var splitArray = [];
  splitArray = word.split("");
  var startCount = 0;
  var endCount = splitArray.length - 1;
  
  while(startCount < splitArray.length && endCount > 0){
      if (splitArray[startCount] != splitArray[endCount]){
          return false;
      }
      startCount++;
      endCount--;
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;