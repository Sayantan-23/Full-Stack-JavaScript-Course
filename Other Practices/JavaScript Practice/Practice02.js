function loveCalculator() {
  while (true) {
    var temp = Math.random();
    if (temp > 0.7) {
      temp = Math.floor(temp * 100) + 1;
      return temp;
    } else {
      continue;
    }
  }
}

var love = loveCalculator();
console.log("Sayantan ♥ Dipshikha ", love + "%");
