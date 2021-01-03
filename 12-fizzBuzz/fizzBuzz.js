function fizzBuzz(start, end) {
  // Insert code here;
  var array = [];
  while(start <= end){
      if((start % 5 === 0) && (start % 3 === 0)){
          array.push("FizzBuzz");
      }
      else if(start % 5 === 0){
            array.push("Buzz");
      }
      else if((start % 3 === 0)){
          array.push("Fizz");
      }
      else{
          array.push(start);
      }
      start++;
  }
  return array;
}

// Do not edit this line;
module.exports = fizzBuzz;