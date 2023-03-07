// Write a JavaScript function to repeat a string a specified times.

// Test Data:
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));
// Output:
// "aaaa"
// "Error in string or count."

function repeat_string(string, count) 
  {
    if ((string == null) || (count < 0) || (count === Infinity) || (count == null))
      {
        return('Error in string or count.');
      }
        count = count | 0; // Floor count.
    return new Array(count + 1).join(string);
  }

console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
console.log(repeat_string('a', -2));
console.log(repeat_string('a', Infinity));