// *Data types in JS
// *#Premitive 
// number, string, boolean, undefined, null, NaN, symbol
// *#Non-Premitive
// Object, Array, Function, Date


// let name = "Rohan"
// let age = 30
// let isApprove = false
// let firstName = undefined
// let selectColor = null;
// console.log(typeof name)// string 
// console.log(typeof age); // number 
// console.log(typeof isApprove) // bool
// console.log(typeof firstName); // undefiend
// console.log(typeof selectColor);// object

// *************
// * Output
// console.log(100/0);
// console.log(100/'0');
// console.log(100/'2');
// console.log(100+'2');
// console.log(typeof Infinity)
// let var1 = 40/0
// console.log(var1);


// * which one appear in which color:
// console.log("Hello") // white
// console.error("Error Occur") // red
// console.warn("Waring massage") // yellow

// * different type of writing a string:
// stringVariable="this is double couted string"
// stringVariable2='this is single couted string'
// stringVariable3=`this is back tiked string`



// let sum="five";
// let string="sum of 2+3 is "+sum;
// what will be the output?
// console.log(string); 
// console.log("sum of 2 +3 is ${2 + 3}")
// console.log("sum of 2 +3 is "+sum)
// console.log(`sum of 2 +3 is ${sum}`)
// console.log(`sum of 2 +3 is `+sum)
// console.log(`this is 2 + 3 `)
// console.log(`this is ${sum}`)
// console.log(2+3);
// console.log(2+"3")
// console.log("2"+"3")



// * NOTE :  every opration with NaN result in NaN except string
// * To check wheather a expression is NaN or not we have a function -> isNaN()
// console.log(isNaN("10F")); 
// console.log(2+NaN);
// console.log(true+NaN);
// console.log(undefined+NaN);
// console.log("2" + NaN);
// NOTE : null is treated as zero while oprating with number
// console.log(2+null)
// NOTE : everything adding with string become string
// console.log("2"+null);
// console.log("2"+NaN);
// console.log("2"+undefined);
// console.log("2"+true);
// console.log(null + null)


// console.log(8 + undefined);  
// console.log(null + undefined);
// console.log(undefined + undefined);
// console.log(NaN + undefined);
// console.log(" ")
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof NaN);
// console.log(" ")
// console.log(NaN + undefined);
// console.log(NaN + NaN);
// console.log(NaN + null);
// console.log(NaN + 8);
// console.log(" ");
// console.log(null + 8);
// console.log(null + null);
// console.log(null + undefined);
// console.log(null + NaN);
// console.log(" ")


// * How parseInt work --> it converts the string number expression to number format | is check wheather the number is NaN or not ...
// * if NaN then return NaN else it checkes wheather the string start with number or not if start with number then 
// * untill there is number it converts the string to number 
// console.log(parseInt("10")); 
// console.log(parseInt("10.4")); 
// console.log(parseInt(10.2));
// console.log(parseInt("10+2")); 
// console.log(parseInt("10+2F")); 
// console.log(parseInt("M10+2F")); 
// console.log(parseInt(true));
// console.log(parseInt(undefined));
// console.log((true));

// *same for parseFloat
// console.log(parseFloat("10.3"));
// console.log(parseFloat("20+2"));
// console.log(parseFloat(parseInt(parseFloat(20/3))));


// * some math
// let a = 20/10;
// console.log(a);
// let b = 20/3;
// console.log(b);
// console.log(typeof b);
// to find the vaule till decimal 
// let c = parseInt(20/3);
// console.log(c);




// *************
// * use of 'use strict'
// 'use strict'
// var var1 = 10;
// console.log(var1);
// if(true){
//   var var1 = 20; // || let kore dekhbe
//     console.log(var1); // 20
// }
// console.log(var1); // 


// * find out how this internally working ?
// console.log(a);
// a = 10;
// console.log(a);
// var a;

// * find out why this gives error ?
// console.log(a);
// let a = 10;

