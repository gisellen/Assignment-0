function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let array = args;
  let result = new Set;
  for (set of array){
    for(e of set){
      result.add(e);
    }
  }
  return result;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;