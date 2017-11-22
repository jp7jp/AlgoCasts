// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  //let vowels = 0;

  // for (char of str.toLowerCase()) {
  //   if ('aeiou'.includes(char)) {
  //     vowels++;
  //   }
  // }

  // str.split('').map((char) => {
  //   if (char.match(/[aeiou]/i)) {
  //     vowels++;
  //   }
  // });

  const search = str.match(/[aeiou]/gi);

  return search ? search.length : 0;
}

module.exports = vowels;
