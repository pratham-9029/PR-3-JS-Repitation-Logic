//         1
//       1 2
//     1 2 3
//   1 2 3 4
// 1 2 3 4 5

let i = 1;
do {
    let space = '';
    let k = 6 - i;
    do {
        space += '  ';
        k--;
    } while (k >= 1);
    let str = '';
    let j = 1;
    do {
        str += `${j} `;
        j++;
    } while (j <= i);
    console.log(`${space}${str}`);
    i++;
} while (i <= 5);