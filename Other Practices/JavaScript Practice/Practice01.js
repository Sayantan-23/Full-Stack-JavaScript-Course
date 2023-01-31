function vowelsAndConsonants(s) {
  const vowels = "aeiou";
  let consonants = "";

  for (let i in s) {
    if (vowels.includes(s[i])) {
      console.log(s[i]);
    } else {
      consonants += s[i] + "\n";
    }
  }

  console.log(consonants.trim());
}

vowelsAndConsonants("javascriptloops");
