

function reverseString(str) {
    return str.split("").reverse().join("");
}

reverseString("hello");

function factorialize(num) {
    var result = 1;
    for (i=num; i>0; i--) {
        result *= i;
    }

    return result;
}


function palindrome(str) {
  // Good luck!

  var regEx = '(?! [a-zA-Z0-9])';

  // Step 1: remove non-alphanumeric characters 
  var originalStr = str.replace(regEx, '');
  console.log (originalStr);
  
  // Step 2: lowercase all
  originalStr.toLowerCase();

  // Step 3: turn the string into an array
  var origArray = originalStr.split('');

  // Step 4: copy to temp array
  var reverseArray = origArray;

  // Step 5: reverse array
  reverseArray.reverse();

  // Step 6: compare, returning the result
  for (var index = 0; index < reverseArray.length; index++) {
      result = true;
      if (reverseArray[index] != origArray[index]) {
          result = false;
          return result;
      }
  }

  return result;

}


palindrome("eye");
