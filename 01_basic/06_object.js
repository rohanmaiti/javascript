//* Referance type variable :
/*
1 Object 
2 Array
3 Function
*/

// function changeValue(a){
//     console.log(a);
//     a = 10;
//     console.log(a);
// }
// let a = 19;
// console.log(a);
// changeValue(a);
// console.log(a);


//we can write this in object like:
// let Person = {
//     name : "Rohan Maiti",
//     age : 19
// }
// console.log(Person);
// Person.name = "Rahul"
// *Change the value using Bracket Notation
// Person['age']=20;
// Person[age]=30; // error while writing using [] bracket inside bracket expression must be in string , here it is taking it as a variable and try to extract value from it
// console.log(Person);
// * we can write like this 
// let x = "age";
// Person[x] = 40;
// console.log(Person)

// * Object.keys() | Object.values();
// const obj = {
//     name1:"Rohan",
//     name2:"Rahul",
//     name3:"Tamanna",
// }
// const keys = Object.keys(obj);
// console.log(keys);

// const values = Object.values(obj);
// console.log(values);

// const entries = Object.entries(obj);
// console.log(entries);

// * hasOwnProperty
// console.log(obj.hasOwnProperty("name1"));
// console.log(obj.hasOwnProperty("name"));

// * how to delete keys of any obj?
// delete(obj.name1);
// console.log(obj);

// * DESTRUCTUREING
// const user = {
//     name:"Rohan",
//     age:21,
//     role:"SDE"
// }
// const {name , role , x} = user;
// console.log(name , role , x);
// * NAME should be exactly same

// * what if KEY Names are not same ?
// const {a, b, c} = user;
// console.log(a, b, c); // undfine, undefine, undefine


// * Destructure or something like that
// const obj = {name : "Rohan", age:21};
// const {name:userName} = obj; // here we are giving name to username
// console.log(userName);


// ***** MCQ *****
// function output(object){
//     let var1 = object ? object.place : 'italy';
//     return 'clean:'+var1;
// }
// console.log(output({place:'india'}));

// * Object shares reference:
// const obj1 = {
//     name: "Rohan",
//     age:21
// }

// const obj2 = obj1;
// obj2.name = "Rahul";
// console.log(obj1);
// console.log(obj2);
 
// *  Example-2  ( nested objects also share referance)
// const obj = {
//     fullname:{
//         firstName : "Rohan",
//         lastName : "Maiti"
//     },
//     age : 21
// }
// const obj2 = obj.fullname;
// obj2.firstName = "Rahul";
// console.log(obj2);
// console.log(obj);

// * Iterating a obj using for in loop
// const obj = {
//   name: "rohan",
//   age: 20,
//   city: "delhi",
// };
// for (let key in obj) {
//   console.log(key);       
//   console.log(obj[key]);
// }

