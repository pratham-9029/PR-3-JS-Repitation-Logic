//         1
//       1 2 1
//     1 2 3 2 1
//   1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1

for (let i = 1; i <= 5; i++) {
    let space = '';
    for (let k = 5 - i; k >= 1; k--) {
        space += '  ';
    }
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += `${j} `;
    }
    for (let l = i - 1; l >= 1; l--) {
        str += `${l} `;
    }
    console.log(`${space}${str}`);
}