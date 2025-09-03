// * * * * * * * * *
//   * * * * * * * 
//     * * * * * 
//       * * * 
//         *

for (let i = 1; i <= 5; i++) {
    let space = '';
    for (let k = i-1; k > 0; k--) {
        space += '  ';
    }
    let str = '';
    for (let j = i; j <= 5 * 2 - i; j++) {
        str += '* ';
    }
    console.log(`${space}${str}`);
}