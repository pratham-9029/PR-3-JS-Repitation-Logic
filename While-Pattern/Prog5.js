// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

let i = 1;
while (i <= 5) {
    let str = '';
    let j = 6 - i;
    while (j >= 1) {
        str += `${j} `;
        j--;
    }
    console.log(str);
    i++;
}



