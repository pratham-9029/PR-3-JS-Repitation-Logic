// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let i = 1;
do {
    let str = '';
    let j = 1;
    do {
        str += `${j} `;
        j++;
    } while (j <= i);
    console.log(str);
    i++;
} while (i <= 5);
