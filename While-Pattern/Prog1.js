// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


let i = 1;

while (i <= 5) {
    let str = '';
    let j = 1;
    while (j <= i) {
        str += `${j} `;
        j++;
    }
    console.log(str);
    i++;
}


