// * Array in Java Script is Heterogenious:
// * Define an array:
// let arr = []; //empty array
// let arr1 = [1,2,3,"string",true,undefined,null,]
// console.log(arr1.length);
// console.log(arr1[2]);
// console.log(arr1);
// arr1[3] = 'A'; // replace the 3rd index with 'A'
// console.log(arr1);

// ***important
// arr1[30] = 40;
// console.log(arr1);

// * push, pop, shift, unshift
// let arr1 = [1,2,3,4,5];
// arr1.push(10);
// arr1.push("string2")
// arr1.pop()
// arr1.shift()
// console.log(arr1);
// arr1.unshift(10);
// console.log(arr1);

// * advance splice question
// let arr1 = [1,2,3,4,5];
// arr1.splice(-3,2,"last item",100);
// console.log(arr1);


// const array1 = [1,2,3,4,5,6,3,7];
// console.log(array1);
// array1.unshift(0);
// console.log(array1);
// array1.shift();
// console.log(array1);
// console.log(array1.includes(9));//false  // include checks either the value exisits or not
// console.log(array1.includes(5));//true
// console.log(array1.indexOf(3));//return the first index of that value if exists else return -1
// console.log(array1.indexOf(100)); //if does not exists then reutrn -1
// console.log(array1.lastIndexOf(3));
// * also work in string
// console.log("hii my name is hii".indexOf("my"));

// **IMPORTANT CONCEPT ARRAY & STRING CONCAT
// let marvelHeros = ["thor","IronMan","SpiderMan"]
// let dcHeros = ["superMan","flash","batman"];
// marvelHeros.push(dcHeros);
// console.log("A",marvelHeros);
// console.log("B",marvelHeros[3])
// console.log("C",marvelHeros[3][1]);//flash

// marvelHeros = ["thor","IronMan","SpiderMan"]
// dcHeros = ["superMan","flash","batman"];
// const newArray = marvelHeros.concat(dcHeros);
// console.log("D",newArray);
// another method of concate: spread method ... || it create individual elements;
// const allHeros = [...marvelHeros,...dcHeros];
// console.log("E",allHeros);
// console.log("Rohan".concat("Maiti"));

// const newArray = [1,2,3,[4,5],6,[7,8,[9,10]],11]
// console.log(newArray);
// let easylyConcatVariable = newArray.flat(Infinity);
// console.log(easylyConcatVariable);

// console.log(Array.isArray("Rohan"));
// console.log(Array.isArray([1,2,3]));
// console.log(Array.from("Rohan"));

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1,score2,score3));

// *convert the array1 to a string ;
// array1 = [1,2,3,4,5,6,7];
// let newArray = array1.join();
// console.log(newArray); // 
// newArray = array1.join('');
// console.log(newArray);
// newArray = array1.join(' ');
// console.log(newArray);
// newArray = array1.join('+');
// console.log(newArray);

// *convert string into a array :
// let str = "hello i    am rohan";
// let arr = str.split();
// console.log(arr);
//  arr = str.split('');
// console.log(arr);
// arr = str.split(" ");
// console.log(arr);
// console.log(Array.from("Rohan")); // makes a array from a string


// *concept of splice and slice / also work on string:
// const array3 = [0,1,2,3,4,5,];
// let sliceVariable = array3.slice(-3,6);// * first parameter is the index from start and till (2nd paramenter - 1) will return the value, (do not change in original array)
// console.log(sliceVariable);

const array3 = [100, 200, 300, 12, 13, 34, 54, 6, 99];
let spliceVariable  = array3.splice(2,3);// * first parameter: idex from where to cut , 2nd parameter: number of element to cut(do change the original array). then all parameters are to add them to array
// console.log(spliceVariable);
// console.log(array3);
// array3.splice(-1,3,100,200);
// console.log(array3);
// const str = "0123456";
// console.log(str.slice(0,4));

// *TRIM
// let string = "            hii i am rohan   "
// string.trim(); // do not change in original string
// console.log(string.trim());
// console.log(string.trimStart());
// console.log(string.trimEnd());

// * toUpperCase and toLowerCase
// string.toUpperCase(); // will not change in original string
// console.log(string);
// console.log(string.toUpperCase());
// console.log(string.toLowerCase());

// *SUB STRING 
// var a = "THIS IS A STRING";
// var b = a.slice(-5,-1); //slice can take nagative number;
// console.log(b);
// var c = a.substr(2,10);// from 2nd inted to 10 eleemnt ; //can not take negative number:

// * Replace and ReplaceAll
// var d = a.replace("is","in")// replace 1st occurnance;
// var e = a.replaceAll("is","in"); //replace all occuance;

// * Now araay:
// let selectedColors = [];
// console.log(selectedColors);
// selectedColors = ["red","blue",1,2.35];
// console.log(selectedColors);
// console.log(selectedColors[1]);
// console.log(typeof selectedColors) //* type of array = object
// console.log("the size of the array is :"+selectedColors.length)

// *DESTRUCTURE
// let arr = ["Rohan", "SDE", 3, "Maiti"];
// let [name,role,x] = arr;

// console.log(name)
// console.log(role);
// console.log(x);

// * QUESTION 1 : flat the array and give out put a new array
// let arr = [1,[[2,[3]]]];
// let result = []
// let str = arr.toString();
// for(let i=0;i<str.length;i++)
// {
//     if(str[i] != '[' && str[i] != ']' &&  str[i] != ',' )
//     result.push(str[i]);
// }

// console.log(result);

// * ARRAY ITERATORS
// 1. forEach 2. map 3. filter 4. reduce 5.find 
// * forEach
// * important things about foreach
// 1. it does not return anything
// 2. it takes a callback function as a parameter
// 3. it can take 3 parameters (value, index, array)  

// let array = [1,2,3,4,5,6,7,8,9,10];
// array.forEach((value,index,array) => {
//     array[index] = value*2;
// });
// console.log(array);


// * map
// * 1. it returns a new array

// let array = [1,2,3,4,5,6,7,8,9,10];
// let newArray = array.map((value,index,array) => {
//     return value*2;
// });
// console.log(newArray);

// let newArray = array.map((value,index,array) => {
    // array[index] = value*2; // changes in original array
    // deffercence between these two line
    // return array[index] = value*2;

// });
// console.log(newArray);
// console.log(array);

// * filter
// * important things about filter
// * 1. it returns a new array (but still there is diff between map and filter)
// let array = [1,2,3,4,5,6,7,8,9,10];
// let newArray = array.filter((value,index,array) => {
//     array[index] = value*2; // can changes in original array
//     return value%2 == 0;
// });
// console.log(newArray);
// console.log(array);

// * find
// * important things about find 
// * unlike filter it does not return all matches, it returns the first matches
// 📌 .find() is an Array method that returns the first element in the array that satisfies a given condition.
// 📌 If no element matches, it returns undefined.
// let array = [1,2,5,4,6,7,8,9];
// const ans = array.find((ele)=> ele >= 4)
// console.log(ans);

// * example 2
// const users = [
//   { id: 1, name: "Rohan" },
//   { id: 2, name: "Anjali" },
//   { id: 3, name: "Rahul" }
// ];
// const user = users.find(u => u.id === 2);
// console.log(user); // { id: 2, name: "Anjali" }


// *reduce
// *returns a single value
// let array = [1,2,3,4,5,6,7,8,9,10];
// let value = array.reduce((accumulator,value,index,array) => {
//     return accumulator + value;
// },0);
// console.log(value);

// *QUESTION 2 : remove deblicate form array and return a new array
// let array = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
// let newArray = array.filter((value, index, array)=> array.indexOf(value) == index);
// console.log(newArray);
// console.log(array);

// * task make your own forEach, map and filter function


// * sort
// * 🔢 What is sort()?
// * sort() is a method used to sort the elements of an array in place.
// * It modifies the original array.
// *By default, it sorts as strings in lexicographic (dictionary) order.

// const nums = [4, 2, 100, 23];
// nums.sort();
// console.log(nums); // [100, 2, 23, 4] ❌ | ❗ This happens because it converts numbers to strings and compares '100' < '2' alphabetically.
// // * ✅ Correct Way: Use a compareFunction
// nums.sort((a, b) => a - b); // Ascending order
// console.log(nums); // [2, 4, 23, 100]
// nums.sort((a, b) => b - a); // Desending order
// console.log(nums);


// * 🧠 Sorting Objects by Property
// const users = [
//   { name: "Rohan", age: 25 },
//   { name: "Anjali", age: 21 },
//   { name: "Rahul", age: 30 }
// ];

// Sort by age (ascending)
// users.sort((a, b) => a.age - b.age);
// console.log(users);

//*  🧠 if i do not use comparator function then waht will happen ?
const users = [
  { name: "Rohan", age: 25 },
  { name: "Anjali", age: 21 },
  { name: "Rahul", age: 30 }
];

users.sort();
console.log(users);

// * what happed internally 
// When you don’t provide a compare function, JavaScript will:
// Convert the array elements (i.e., the objects) to strings using toString().
// { name: "Rohan", age: 25 }.toString() // returns "[object Object]"
// So all elements are treated as the same string: "[object Object]".
// The array may remain unsorted or sorted incorrectly