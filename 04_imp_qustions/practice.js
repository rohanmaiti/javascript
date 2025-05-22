let arr = [1,[[2,[3]]]];
let result = []
let str = arr.toString();
for(let i=0;i<str.length;i++)
{
    if(str[i] != '[' && str[i] != ']' &&  str[i] != ',' )
    result.push(str[i]);
}

console.log(result);