// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (char in str) {
    if (char > 0 ) {
      if (str[char - 1] == ' ') {
        result+=str[char].toUpperCase();
      } else {
        result+=str[char];
      }
    }
  }

  return result;

  // arr = str.split(' ').map(val => {
  //   //const chars = val.split('')
  //   //return chars.shift().toUpperCase() + chars.join('');
  //   return val[0].toUpperCase() + val.slice(1);
  // });
  // return arr.join(' ');
}

module.exports = capitalize;
