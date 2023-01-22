// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
let addMeat = () => {
  if (shoppingCart.includes("Meat")) {
    console.log("Meat is already added");
    return;
  } else {
    shoppingCart.unshift("Meat");
    console.log(shoppingCart);
  }
};
addMeat();

// add Sugar at the end of your shopping cart if it has not been already added
let addSugar = () => {
  if (shoppingCart.includes("Sugar")) {
    console.log("Sugar is already added");
    return;
  } else {
    shoppingCart.push("Sugar");
    console.log(shoppingCart);
  }
};
addSugar();

// remove 'Honey'
let removeHoney = () => {
  let index = shoppingCart.indexOf("Honey");
  shoppingCart.splice(index, 1);
  console.log(shoppingCart);
};
removeHoney();

// modify Tea to 'Green Tea'
let modifyTea = () => {
  let index = shoppingCart.indexOf("Tea");
  shoppingCart.splice(index, 1, "Green Tea");
  console.log(shoppingCart);
};
modifyTea();
