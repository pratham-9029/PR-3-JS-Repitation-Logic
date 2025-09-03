// * * * * * * * * *
//   * * * * * * * 
//     * * * * * 
//       * * * 
//         * 


let i = 1;
while (i <= 5) {
    let space = '';
    let k = 1;
    while (k < i) {
        space += '  ';
        k++;
    }
    let str = '';
    let j = i;
    while (j <= 5 * 2 - i) {
        str += `* `;
        j++;
    }
    console.log(`${space}${str}`);
    i++;
}