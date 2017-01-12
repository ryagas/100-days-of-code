

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
