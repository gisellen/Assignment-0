function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let array = args;
  product = 1;
  for(i = 0; i < array.length; i++){
    product *= array[i];
  }
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;