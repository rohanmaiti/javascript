//* 3 type Syntax of wring a function
// function abc(a,b){
// console.log(a,b);
// }
// abc(10,20);

// *anonimus function
// let a = function (num){
// return num * 2;
// }
// let store = a(10);
// console.log(store);
// console.log(a(10));

// *arrow function
// let b = ()=>{
// console.log(b)
// }
// b();

// *extends the arrow function
// let b = (a)=> a*2;
// &
// let b = a=> a*2;
// console.log(typeof abc, typeof a, typeof b)



// *# purpose of use strict to prevent 1. undeclared variables and for function same parameter not accepted 
// 'use strict'
// function abc(a , a ){
//     console.log(a , a);
// }
// abc(10,20);

// x = 100;
// console.log(x)

// two way use 1.globally 2. inside function
// * In a Function: Apply it only to a specific function scope.
// function myFunction() {
//     "use strict";
//     y = 20; // ReferenceError
// }
// myFunction();

// //* Imidiately Invoked Function Expression :
// (
//     function one(num){
//         console.log("Hello user ");
//         console.log(`the number is ${num}`);
//     }
// )(2);
// (
//  (name)=>{
//         console.log(`hello user ${name}`)
//     }
// )("Tamanna");

// *# function arguments
// function abc(a,b){
//    console.log(a,b);
//    console.log(arguments);
//    console.log(typeof arguments);
//    console.log(typeof [1,2,3])
// }   
// abc(1,2,3,4);

// let arrow = (...num1) =>{
//     console.log("this is "+num1);
// }
// arrow(5,6,7,8);

// *callback function
//  A function passed into another function, which is then invoked by that outer function.
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }

// function calc(a,b,operation){
//     return operation(a,b)
// }

// Using an anonymous function as a callback
// calc(5, 10, function(a, b) {
//     return a + b;
// });

// Or using an arrow function
// calc(5, 10, (a, b) => a * b);


// *# difference b/w these three syntax || Hositing 
// Hoisting in JavaScript is a mechanism where variables, functions, or classes are moved to the top of their scope during the compilation phase, before the code is executed. This means you can use these entities in your code even before they are declared, although their behavior depends on how they are defined (using var, let, const, or function).

// // Variable Declarations (var):

//// Only the declaration is hoisted, not the initialization.
//// The variable is initialized to undefined until the code reaches the assignment.


// console.log(x); // Output: undefined
// var x = 10;
// console.log(x); // Output: 10
// // Internally, this is treated as:
// var x;
// console.log(x); // undefined
// x = 10;
// console.log(x); // 10


// 
// abc();
// function abc(){
//     console.log("abc called")
// }


// b();
// let b = ()=>{
// console.log(b)
// }


// console.log(a(10));
// let a = function (num){
// return num * 2;
// }

// * try and analise this 
// function abc(){
//     console.log(x);
// }
// abc();
// var x = 10; // onece take var and onece let
// let x = 10;

//  *can i have same name but diff function ?
// function showMessage() {
//     console.log("First function");
// }

// function showMessage() {
//     console.log("Second function");
// }
// showMessage(); // Output: Second function

// *conceptual example
// function process(arg) {
//     if (typeof arg === "string") {
//         console.log("Processing a string: " + arg);
//     } else if (typeof arg === "number") {
//         console.log("Processing a number: " + arg);
//     }
// }

// process("Hello"); // Output: Processing a string: Hello
// process(42); 


// work();
// function work(){
//     console.log("work");
// }


// var work = function(){
//     console.log("work");
// }
// work();


// work();
// var work = ()=>{
//     console.log("work");
// }



// function work(){
//     console.log("work");
//     return "rohan";
// }
// console.log(work());


// let work = (num)=> num*2;
// console.log(work(10));
// let t = work(30);


// function work(a,b){
// console.log("the parameter is ",a,b);
// }
// work(10);
// work(10*2);
// work();
// work(100,200);

// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(...arr)

// function work(a,...b){
//     console.log("the parameter is ",a,b);
// }
// work(10,30,40,50);








