let data = [22, 45, 68, 75, 36, 54];

data.forEach((n) => {
  console.log(n);
});

data.forEach((value, index) => {
  console.log(`${index} : ${value}`);
});

data.forEach((value, index, data) => {
  console.log(value, index, data);
});

let array = [54, 36, 47, 68, 59, 71];
array.forEach(myfunction);
function myfunction(currentValue, index, arr) {
  console.log(`${index} : ${currentValue} : ${arr}`);
}
