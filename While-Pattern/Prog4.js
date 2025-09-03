// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

let i = 1;

while (i <= 5) {
    let str = '';
    let j = 1;
    while (j <= i) {
        str += `${6 - j} `
        j++;
    }
    console.log(str);
    i++;
}