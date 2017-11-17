// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let newN = '';
  const nStr = n.toString();
  // for (var i = nStr.length; i > 0; i-- ) {
  //   newN += nStr[i - 1];
  // }

  newN = nStr.split('').reverse().join('');

  // nStr.split('').forEach(elm => {
  //   newN = elm + newN;
  // })


  // nStr.map((val, index) => {
  //   newN +=
  // })

  newN = parseInt(newN, 10) * Math.sign(n);
  // if (n < 0) {
  //   newN *= -1;
  // }
  return newN;
}

module.exports = reverseInt;
