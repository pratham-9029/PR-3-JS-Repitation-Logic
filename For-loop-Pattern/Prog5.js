// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

for (i = 1; i <= 5; i++) {
    let str = '';
    for (let j = 6 - i; j >= 1; j--) {
        str += `${j} `;
    }
    console.log(str);
}