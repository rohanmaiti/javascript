// let arr = ["pandas 1.0.4 pypy","numpy 1.0.4 pypy","cherry red"]
// let result = [];

// finding the lines containing pypy
// arr.forEach(str=>{
//     let a = [];
//     a = str.split(" ");
//     if(a.find(e=>e == "pypy")){
//     //    console.log(a);
//        a = a.filter(e=>e != "pypy");
//     //    console.log(a);
//        let str2 = a[0]+"=="+a[1];
//        result.push(str2);
//     }
// })

// console.log(result);



// ** Tell the outputs of these codes; || topic function Hoisting
// 1.
// function abc(){
//    console.log("Hii Rohan");
// }
// abc();

// 2.
// abc();
// function abc(){  // function hosting
//    console.log("Hii Rohan");
// }


// 3.
// const abc = function (){
//    console.log("Hii Rohan");
// }
// abc();

// *4.                          // referance error
// abc();  
// const abc = function (){
//    console.log("Hii Rohan");
// }

// 5.
// let a = 20;
// function abc(){
//    console.log(a);
// }
// abc();

// 6.
// function abc(){
//    console.log(a);
// }
// abc();
// let a = 20;


// 7.
// function abc(){
//    console.log(a);
// }
// abc();
// let a = 20;

// * Tell the output of the code
// function abc(){
//    console.log(abc.a);
// }
// abc();
// abc.a = 10;
// abc.a = 20;
// abc();

// * Tell the output of the code 
// function abc(){
//    console.log(abc.a);
// }
// abc();
// abc.a = 10;
// console.log(abc);

// * Tell the output of the code 
// let x = {}
// x.a = 10;
// x.b = 20;
// console.log(x);

// let x;
// x.a = 10;
// x.b = 20;
// console.log(x);

// * Tell the output of the code 
// let arr = [1,2,3,4];
// arr[100] = 400;
// console.log(arr);

// * Tell the output of the code 
// console.log(typeof typeof 100);
                   

// * Tell the outputs of the codes
// let arr = [..."Rohan"];
// console.log(arr);

// let arr2 = [..."Rohan","Rahul"];
// console.log(arr2);

// let arr3 = [...arr,"Rohan","Rahul"];
// console.log(arr3); 

// *Tell the output 
// console.log(isNaN(100));     // f
// console.log(isNaN("100"));   // f
// console.log(isNaN("100+2")); // t
// console.log(isNaN("10F"));   // t

// *Tell the output
// console.log(parseInt("10"));
// console.log(parseInt("10+2"));
// console.log(parseInt("10FM")); // if the first value is not converted into number it will give NaN
// console.log(parseInt("M10F"));


// *Tell the outputs
// console.log([1,2,3,4,5,6,7,8,9,10].map(num=>{
//    if(num % 2 != 0) return num * 2;
// }))

// console.log([1,2].map(num=>{
//    if(num > 0) return ;
//    return num * 2;
// }))


// *Tell the output
// 'use strict'
// {
//    function abc(){
//       console.log("abc");
//    }
// }
// abc();

// *Tell the output;
// xyz();

// *Tell the output 
// function abc(a,a){ 
//    console.log(a,a);
// }
// abc(1,2,3,4);

// Tell the output 
// console.log([]+[]);
// console.log([1]+[2]);
// console.log([1]+["ww"]);
// console.log(typeof ([1,2,3]+["ww",2]));
// const r = [1,2,3]+[2,"ww", 2];
// console.log(r);

// let arr = [1,2,3];
// console.log(arr);