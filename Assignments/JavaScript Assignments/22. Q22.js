// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort();
console.log(ages);
console.log(`Minimum age is ${ages[0]}`);
console.log(`Maximum age is ${ages[ages.length - 1]}`);

// Find the median age(one middle item or two middle items divided by two)
if (ages.length % 2 == 0) {
  console.log(
    `Two median ages are ${ages[ages.length / 2 - 1]} and ${
      ages[ages.length / 2]
    }`
  );
} else {
  console.log(`Median age is ${ages[Math.floor(ages.length / 2)]}`);
}

// Find the average age(all items divided by number of items)
let sum = 0;
for (let age of ages) {
  sum = sum + age;
}
console.log(`Average of all ages is ${sum / ages.length}`);

// Find the range of the ages(max minus min)
console.log(`Range of the ages is ${ages[ages.length - 1] - ages[0]}`);

// Compare the value of (min - average) and (max - average), use abs() method
const minAverage = Math.abs(ages[0] - sum / ages.length);
const maxAverage = Math.abs(sum / ages.length - ages[ages.length - 1]);

if (maxAverage > minAverage) {
  console.log(`(max - average) is greater`);
} else if (maxAverage < minAverage) {
  console.log(`(min - average) is greater`);
} else {
  console.log(`(max - average) and (min - average) are equal`);
}
