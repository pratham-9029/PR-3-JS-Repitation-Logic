// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

for (i = 1; i <= 5; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += `${6 - j} `;
    }
    console.log(str);
}