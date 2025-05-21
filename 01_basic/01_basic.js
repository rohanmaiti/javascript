// *# How to print in terminal / console
//   console.log("Hii Rohan!");

// *# How we can write a variable in js  ||  JavaScript variables are heterogeneous,
// >> 3 ways | let, var, const
// *declareing a variable
// let a;
// console.log(a); // by default value = undefined

// *defining a variable
// a = 20;        // *Dynamic typing || automatic type will be assigned ||  type of operator ||
// console.log(a);
// console.log(typeof a);
// a = "20";
// console.log(typeof a);
// a = { key: "value" };
// console.log(typeof a); // Object

// similarly for var and const we can declare and define but
// for const we can have to define while declaring as value can't be updated
// const c = "Rohan";

// * let and const vs var
// 1. var allows : redeclare and scope (let and const do not allow re-declaration of a variable in the same scope.)

// var v = 10;
// var v = 10;

// x = 100; // by default var
// console.log(x);
// var x;

// console.log(x);
// x = 100; // by default var
// var x;
// console.log(x);

// 1)
// let x = 10;
// let x = 20;
// var x = 10;

// 2)
// var x = 10;
// var x = 20;

// *MCQ
// let a;
// console.log(a);
// console.log(typeof a);

// * what is variabel hoisting ?
// 1. the process of moving the declaration of a variable to the top of the scope.
// 2. var and function declarations are hoisted to the top of their scope.
//    but initializations are not hoisted.
// 3. let and const declarations are not hoisted to the top of their scope.

// * example:
// console.log(a); // undefined
// var a = 10;
// console.log(a); // 10

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 20;
// console.log(b); // 20

// c = 10;
// console.log(c);
// let c; // as let is not hoisted so it will give error

// c = 10;
// console.log(c);
// var c; //

// * scope of let, var and const
// 1. let and const are block scoped.
// 2. var is function scoped.
// * what does it mean by block scoped ?
// {
//     let a = 10;
//     console.log(a); // 10
// }
// console.log(a);
// * what does it mean by function scoped ?
// # var is scoped to the function in which it is declared.
// # if var is declared outside of any function, it is scoped to the global object.
// # let and const are scoped to the block in which they are declared.

// *MCQ
// function outer() {
//   var x = 10;
//   function inner() {
//     console.log(x);
//     var x = 5;
//   }
//   inner();
// }
// outer();

