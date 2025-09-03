//         1
//       1 2
//     1 2 3
//   1 2 3 4
// 1 2 3 4 5

let i = 1;
while (i <= 5) {
    let k = 5 - i;
    let space = '';
    while (k >= 1) {
        space += '  ';
        k--;
    }
    let j = 1;
    let str = '';
    while (j <= i) {
        str += `${j} `;
        j++;
    }
    console.log(`${space}${str}`);
    i++;
}