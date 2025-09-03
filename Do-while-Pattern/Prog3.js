// 5
// 4 5
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5

let i = 1;
do {
    let str = '';
    let j = 6 - i;
    do {
        str += `${j} `;
        j++;
    } while (j <= 5);
    console.log(str);
    i++;
} while (i <= 5);