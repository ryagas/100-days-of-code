

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

function factorialize(num) {
  var result = 1;
  for (i = num; i > 0; i--) {
    result *= i;
  }

  return result;
}


function palindrome(str) {
  // Good luck!

  var aStr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
  var halfway = 0;

  // empty string?
  if (aStr === "") {
    return false;
  }

  // even or odd length? set the pivot
  if ((aStr.length) % 2 === 0) {
    halfway = (aStr.length) / 2;
  }
  else {
    // length = 1 => palindrome
    if (aStr.length === 1) {
      return true;
    }
    else {
      // odd length? ignore middle
      halfway = (aStr.length - 1) / 2;
    }
  }

  // compare first with last then the next
  for (var x = 0; x < halfway; x++) {
    // compare chars and if they don't match, we're done
    if (aStr[x] != aStr.slice(-1 - x)[0]) {
      return false;
    }
  }
  // if we're here, we have a palindrome!
  return true;
}

function findLongestWord(str) {
  var longest = 0;

  // split into array of strings
  var words = str.split(" ");

  // loop through each string and set longest value of length
  words.forEach(function (element) {
    if (longest < element.length) {
      longest = element.length;
    }
  });
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

function titleCase(str) {
  //split into words
  return str.split(' ')
    //uppercase first letter, lowercase rest of words
    .map(function (val) {
      return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
    })
    // join back into string
    .join(' ');
}

titleCase("I'm a little tea pot");

function largestOfFour(arr) {
  // You can do this!
  result = [];

  // for each sub-array
  for (var n = 0; n < arr.length; n++) {
    var largest = 0;
    for (var i = 0; i < arr[n].length; i++) {
      if (arr[n][i] > largest) {// find the largest
        largest = arr[n][i];
      }
      // set item in result
      result[n] = largest;
    }
  }
  
  return result;
}

