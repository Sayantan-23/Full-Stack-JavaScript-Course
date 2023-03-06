// Write a JavaScript function to count the occurrence of a substring in a string.

// Test Data:
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output:
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output:
// 1

const count_substr = (str, searchValue) => {
    let count = 0,
      i = 0;
    while (true) {
      const r = str.indexOf(searchValue, i);
      if (r !== -1) [count, i] = [count + 1, r + 1];
      else return count;
    }
  }; 
  console.log(count_substr("The quick brown fox jumps over the lazy dog", 'the'));
  console.log(count_substr("The quick brown fox jumps over the lazy dog", 'fox'));