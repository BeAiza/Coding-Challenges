function detectWord(letters) {
  let word = "";
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (letter >= "a" && letter <= "z") {
      word += letter;
    }
  }
  return word;
}