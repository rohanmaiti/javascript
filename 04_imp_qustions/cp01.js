function gcd(m,n){
    let s;
    for(let i=1;i<=n;i++)
    {
        if(m%i==0 && n%i==0)
          s = i;
    }
    return s;
}
console.log(gcd(6,9));



function lcm(m,n){
   
    for(let i=1; ;i++)
    {
        if(i%m==0 && i%n==0)
        return i;
    }
}
console.log(lcm(2,67));



//reverse a number
function reverse(num){
   let rev = 0; 
   while(num>0){
    let a = num%10;
     rev = rev*10 + a;
     num = parseInt(num/10);
   }
   return rev;
}
console.log(reverse(1234567))



//amstrong 
// function amstrong(num){
//     let numCount = 0;
//     let num1 = num;
//     let num2 = num;
//     while(num1>0){
//         num1 = parseInt(num1/10);
//         numCount++;
//     }
//     let sum = 0;
//     while(num2>0){
//         let a = num2%10;
//         sum += Math.pow(a,numCount);
//         num2 = parseInt(num2/10);
//     }

//     if(sum == num)
//     return true;
//     else
//     return false;
// }
// console.log(amstrong(78));


// function perfect(num){
//     let sum = 0;
//     for(let i=1;i<num;i++)
//     {
//        if(num%i==0)
//        sum+=i;
//     }
//     if(sum==num)
//     return "yes";
//     else
//     return "no";
// }
// console.log(perfect(8128));



// function fibonaki(n){
//     let arr = [];
// let n1=0,n2=1,n3;
// if(n==1)
// return n1;
// else if(n==2)
// return ([n1,n2]);
// else{
//     arr.push(n1);
//     arr.push(n2);
//     for(let i=2;i<=n-1;i++)
//     {
//         n3 = n1 + n2;
//         arr.push(n3);   
//         n1 = n2;
//         n2 = n3;
//     }
//     return arr;
// }
// }
// console.log(fibonaki(5));

function fibo(n){
    let arr=[];
    let n1=0,n2=1,n3;
    if(n==1)
    return n1;
if(n==2)
return ([n1,n2]);
else{
    arr.push(n1)
    arr.push(n2)
    for(let i=2;i<=n-1;i++)
    {
        n3 = n1+n2;
        arr.push(n3);
        n1=n2;
        n2=n3;
    }
    return arr;
}
}


// function prime(n){
//     for(let i=2;i<n;i++){
//     if(n%i==0)
//     return "No";
//     }

//     return "Yes";
// }
// console.log(prime(9392))


function primeFactor(num){
    let arr = [];
     for(let i=2;num>1;i++)
     {
        while(num%i==0){
            arr.push(i);
            num = parseInt(num/i);
        }
     }
     return arr;
}
console.log(primeFactor(24));
// function fact(n)
// {
// let arr=[];
// for(let i=2;n>1;i++)
// {
//     while(n%i==0)
//     {
//         arr.push(i);
//         n=parseInt(n/i);
//     }
// }
// return arr;
// }
// console.log(fact(24));

// let arr = [10,2,3,23,5,1,3,46,7]
// function kth(arr,k){
//     arr.sort((a,b)=>b-a)
//     console.log(arr);
//     return arr[k]; 
// }
// console.log(kth(arr,2));



// let arr = [1,2,3,"e","1","e",2,3,4]
// let charCount = 0;
// arr.map((ele)=>{
//     if(ele>=65 && ele<=92 || ele>=97 && ele<=123)
//     charCount ++ ;
// })
// console.log(charCount)


// removal duplicate from a Array;
// let arr = [1,2,4,3,4,5,6,7,5,4,3,3,5,7,8,9]
// function removeDuplicate(arr){
//     let x = arr.filter((ele,index,array)=>{
//         if(array.indexOf(ele)==index)
//         return ele;
//     })
//     arr = [...x];
//     console.log(arr);
    
// }
// removeDuplicate(arr);
