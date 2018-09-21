const readline = require('readline');

const reader = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?`, function(response){
    if (response === "y") {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan){
      if (isGreaterThan) {
        x = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = x;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  if (i === (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback){
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } 
    sortCompletionCallback(arr);
  }
  innerBubbleSortLoop(arr, 0, true, outerBubbleSortLoop);
}

absurdBubbleSort([4, 2, 6, 3], function(arr){console.log(arr);});

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });