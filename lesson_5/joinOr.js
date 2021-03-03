function joinOr(inputArr, delimeter = ",", finalDelimeter = "or") {
  delimeter = delimeter.trim() + " ";
  finalDelimeter = finalDelimeter.trim() + " ";
  
  if (inputArr.length <= 2) {
    finalDelimeter = " " + finalDelimeter;
    return inputArr.join(finalDelimeter);
  } else {
    let firstPart = inputArr.slice(0, inputArr.length - 1).join(delimeter) + delimeter;
    return firstPart + finalDelimeter + inputArr[inputArr.length - 1];
  }
}

let obj = {
  'joinOr': joinOr
}

// obj is the context for `joinOr`; replace it with the correct context.
console.log(obj.joinOr([1, 2]) )                 //# => "1 or 2"
console.log(obj.joinOr([1, 2, 3]) )              // # => "1, 2, or 3"
console.log(obj.joinOr([1, 2, 3], '; ') )        // # => "1; 2; or 3"
console.log(obj.joinOr([1, 2, 3], ', ', 'and'))  // # => "1, 2, and 3"