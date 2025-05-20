//Referance type variable :
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
let Person = {
    name : "Rohan Maiti",
    age : 19
}
// console.log(Person);
// Person.name = "Rahul"
// *Change the value using Bracket Notation
// Person['age']=20;
// Person[age]=30; // error while writing using [] bracket inside bracket expression must be in string , here it is taking it as a variable and try to extract value from it
// console.log(Person);
// we can write like this 
// let x = "age";
// Person[x] = 40;
// console.log(Person)

// *DESTRUCTUREING
// const user = {
//     name:"Rohan",
//     age:21,
//     role:"SDE"
// }
// const {name , role , x} = user;
// console.log(name , role , x);
// ** NAME should be exactly same




// *Destructure or something like that
// const obj = {name : "Rohan", age:21};
// const {name:userName} = obj;
// console.log(userName);



// *********
// function output(object){
//     let var1 = object ? object.place : 'italy';
//     return 'clean:'+var1;
// }
// console.log(output({place:'india'}));//