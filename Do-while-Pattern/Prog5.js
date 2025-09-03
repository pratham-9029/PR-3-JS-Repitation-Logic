// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

let i = 1;
do {
    let str = '';
    let j = 6 - i;
    do {
        str += `${j} `;
        j--;
    } while (j >= 1);
    console.log(str);
    i++;
} while (i <= 5);