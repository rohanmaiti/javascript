// console.log(typeof Number);
// console.log(typeof Array);

//premitive datatypes
// 1 string 
// 2 Number
// 3 Bollean
// 4 Undefine
// 5 null
// 6 symbol
// console.log("A "+typeof 'rohan');
// console.log("B "+typeof 10);
// console.log("C "+typeof true);
// console.log("D "+typeof undefined); 
// console.log("E "+typeof null);  // object
// console.log("F "+typeof NaN); 

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

//Referance type variable :
/*
1 Object 
2 Array
3 Function
*/
//we can write this in object like:
let Person = {
    name : "Rohan Maiti",
    age : 19
}
// console.log(Person);
// Person.name = "Rahul"
//Change the value uding Bracket Notation
// Person['age']=20;
// Person[age]=30; // error while writing using [] bracket inside bracket expression must be in string
// console.log(Person);


//Now araay:
// let selectedColors = [];
// console.log(selectedColors);
// selectedColors = ["red","blue",1,2.35];
// console.log(selectedColors);
// console.log(selectedColors[1]);
// console.log(typeof selectedColors) // type of array = object
// console.log("the size of the array is :"+selectedColors.length)