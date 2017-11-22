// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3) midpoint = 1
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, str = '') {

  if (n === row) {
    return;
  }

  if (str.length === n * 2 - 1) {
    console.log(str);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((n * 2 - 1) / 2)

  if (str.length >= midpoint - row && str.length <= midpoint + row) {
    str += '#';
  } else {
    str += ' ';
  }

  pyramid(n, row, str);
}

//pyramid(5);

module.exports = pyramid;

// function pyramid(n) {
//   let str = ''

//   for (let row = 1; row <= n; row++) {
//     str = '';
//     str = ''.padStart(2 * row - 1, '#');
//     pad = ''.padStart(n - row, ' ');
//     console.log(pad + str + pad);
//   }
// }

// function pyramid(n) {
//   const midpoint = Math.floor((n * 2 - 1) / 2)
//   let str = ''

//   for (let row = 0; row < n; row++) {
//     str = '';
//     for (let col = 0; col < n * 2 - 1; col++) {
//       if (col >= midpoint - row && col <= midpoint + row) {
//         str += '#';
//       } else {
//         str += ' ';
//       }
//     }
//     console.log(str);
//   }
// }

