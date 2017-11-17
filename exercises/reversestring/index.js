// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reverseStr = '';

  // for (let character of str) {
  //   //console.log(character);
  //   reverseStr = (character + reverseStr);
  // }


  return str.split('').reduce((prev, curr) => {
    return curr + prev;
  })

  //console.log(reverseStr);

  // for(var i = str.length - 1; i >= 0 ; i--) {
  //   reverseStr += str.charAt(i);
  // }
  // let newArray = [];
  // str.split('').forEach((x) => {
  //   newArray.unshift(x);
  // });
  // reverseStr = newArray.join('');
  //reverseStr = str.split('').reverse().join('');
  //return reverseStr;
}

reverse('hello')

module.exports = reverse;
