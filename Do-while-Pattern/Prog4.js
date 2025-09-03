// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

let i = 1;
do {
    let str = '';
    let j = 1;
    do {
        str += `${6 - j} `;
        j++;
    } while (j <= i);
    console.log(str);
    i++;
} while (i <= 5);