// 5 4 3 2 1
// 5 4 3 2 
// 5 4 3 
// 5 4 
// 5 

let i = 1;
while (i <= 5) {
    let str = '';
    let j = 5;
    while (j >= i) {
        str += `${j} `;
        j--;
    }
    console.log(str);
    i++;
}