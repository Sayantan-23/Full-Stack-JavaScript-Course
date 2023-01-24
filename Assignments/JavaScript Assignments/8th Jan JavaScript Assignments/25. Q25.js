// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

const prompt = require("prompt-sync")({ sigint: true });

const BMICalculator = () => {
  const weight = prompt("Enter your weight in kgs: ");
  const height = prompt("Enter your height in m: ");

  const BMI = weight / (height * height);

  if (BMI < 18.5) {
    console.log(`Underweight`);
  } else if (BMI <= 24.9) {
    console.log(`Normal Weight`);
  } else if (BMI <= 29.9) {
    console.log(`Overweight`);
  } else if (BMI >= 30) {
    console.log(`Obese`);
  }
};

BMICalculator()