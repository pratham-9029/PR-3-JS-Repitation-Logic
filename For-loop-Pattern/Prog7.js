//         1
//       1 2
//     1 2 3
//   1 2 3 4
// 1 2 3 4 5

for(let i=1;i<=5;i++)
{
    let space='';
    for(let k=5-i;k>=1;k--)
    {
        space+='  ';
    }
    let str='';
    for(let j=1;j<=i;j++)
    {
        str+=`${j} `;
    }
    console.log(`${space}${str}`);
}