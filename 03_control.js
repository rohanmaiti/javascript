// * if elseif else
// * switch
// * ternary operator
// * for loop
// * for of
// * for in


// * 1. if elseif else
// let condition  = true;
// let anotherCondition = true;
// if(condition){
//     console.log("condition is true");
// }
// else if(anotherCondition){
//     console.log("another condition is true");
// }
// else{
//     console.log("condition is false");
// }

// * 2. switch
// function getOutput(value){
//     switch(value){
//         case 'rohan':
//             console.log("rohan");
//             break;
//         case 'rahul':
//             console.log("rahul");
//             break;
//         case 'ravi':
//             console.log("ravi");
//             break;
//         default:
//             console.log("default");
//     }
// }
// getOutput("rohan");

// * 3. ternary operator
// syntax : condition ? true : false
// to write if else in one line
// const value = (true) ? "value1" : "value2";
// console.log(value);

// * 4. nested ternary operator
// const value = (true) ? ((false) ? "value1" : "value2" ) : ("value");

// * 5. for in and for of loop
// ✅ Use for...in → when you want keys from an object.
// ✅ Use for...of → Use for...of → when you want values from an array, string, or iterable.

// * for in
// const arr = [10, 20, 30];
// for (let index in arr) {
//   console.log(index);       // 0, 1, 2 (index)
//   console.log(arr[index]);  // 10, 20, 30 (value)
// }
// but should not 🚫 do this: as for in loop is for iteating objkeys

// ✅ real use case
// const obj = {
//   name: "rohan",
//   age: 20,
//   city: "delhi",
// };
// for (let key in obj) {
//   console.log(key);       
//   console.log(obj[key]);
// }

// * for of
// let arr = [10, 20, 30];
// for (let value of arr) {
//   console.log(value); // 10, 20, 30
// }
// let str = "rohan";
// for (let char of str) {
//   console.log(char); // r, o, h, a, n
// }