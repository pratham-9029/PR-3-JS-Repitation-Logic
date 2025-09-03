//         1
//       1 2 1
//     1 2 3 2 1
//   1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1


let i = 1;
while (i <= 5) {
    let space = '';
    let k = 5 - i;
    while (k >= 1) {
        space += '  ';
        k--;
    }
    let str = '';
    let j = 1;
    while (j <= i) {
        str += `${j} `;
        j++;
    }
    let l = i - 1;
    while (l >= 1) {
        str += `${l} `;
        l--;
    }
    console.log(`${space}${str}`);
    i++;
}