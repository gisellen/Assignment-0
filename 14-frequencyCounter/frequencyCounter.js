function frequencyCounter(word) {
  // Insert code here;
  split = [];
  split = word.split("");
  var frequencyArray = new Object();
  //start with the first letter
  for(i=0; i < split.length; i++){
    count = 0;
    //loop the word to find count of letter
    for(j=0; j < split.length; j++){
      if(split[i] === split[j]){
        count++;
      }
    }
    frequencyArray[split[i]] = count;
  }
  return frequencyArray;
}
// Do not edit this line;
module.exports = frequencyCounter;