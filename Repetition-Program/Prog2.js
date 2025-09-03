// Fibonacci Series

let n = 10;
let a, b = 0, c = 1;
let str = 'Fibonacci Series is : ';

for (let i = 1; i <= n; i++) {
    a = b;
    b += c;
    c = a;
    str += `${a} `;
}
console.log(str);