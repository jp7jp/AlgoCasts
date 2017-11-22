// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (stair.length == n) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  steps(n, row, stair);
}


// function steps(n) {
//   let str = '';
//   for (let row = 0; row < n; row++) {
//     str = '';
//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         str+='#';
//       } else {
//         str+=' ';
//       }
//     }
//     //str = ''.padStart(i, "#").padEnd(n)
//     console.log(str);
//   }
// }

//steps(10);

module.exports = steps;
