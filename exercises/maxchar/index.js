// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  chars = {};

  let max = 0;
  let maxChar = null;

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }

  return maxChar;

  // sortable = [];
  // for (char in countArray) {
  //   sortable.push([char, countArray[char]])
  // }
  // sortable.sort((a, b) => {
  //   return b[1] - a[1];
  // });
  // return sortable[0][0];
}

module.exports = maxChar;
