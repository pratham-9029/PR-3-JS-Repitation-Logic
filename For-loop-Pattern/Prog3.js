// 5
// 4 5
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5

for (i = 1; i <= 5; i++) {
    let str = '';
    for (let j = i; j >= 1; j--) {
        str += `${6 - j} `;
    }
    console.log(str);
}