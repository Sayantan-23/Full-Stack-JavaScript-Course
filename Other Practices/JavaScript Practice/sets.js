let nums = new Set("me");

nums.add(7);
nums.add(4);
nums.add(7);
nums.add("Sayantan");
nums.add("Ghosh");
console.log(nums);

// for (let data of nums){
//     console.log(data);
// }
nums.forEach(data => {
    console.log(data);
})

// nums.forEach((value1,value2,nums) => {       //FOR SET WE DON'T NEED THREE ARGUMENTS IN THE FOR EACH FUNCTION, IT WILL BE LOGICALLY INCORRECT
//     console.log(value1,value2,nums);         
// })

console.log(nums.has(4));
let result = nums.has("Sayantan");
console.log(result);