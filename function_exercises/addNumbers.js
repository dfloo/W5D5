const readline = require('readline');

const reader = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Enter a number", function(userNum) {
      let inputNum = parseInt(userNum);
      sum += inputNum;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
  if (numsLeft === 0) {
    completionCallback(sum);    
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));