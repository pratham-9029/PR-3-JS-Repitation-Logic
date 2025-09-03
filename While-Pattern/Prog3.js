// 5
// 4 5
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5

let i = 1;

while (i <= 5) {
    let str = '';
    let j = 5 - i + 1;
    while (j <= 5) {
        str += `${j} `;
        j++;
    }
    console.log(str);
    i++;
}