//Array in Java Script is Heterogenious:
//Define an array:
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

// arr1.push(10);
// arr1.push("string2")
// arr1.pop()
// arr1.shift()
// console.log(arr1);
// arr1.unshift(10);
// console.log(arr1);
// arr1.splice(-3,2,"last item",100);
// console.log(arr1);


// const array1 = [1,2,3,4,5,6,7];
// console.log(array1);
// array1.unshift(0);
// console.log(array1);
// array1.shift();
// console.log(array1);
// console.log(array1.includes(9));//false  // include checks either the value exisits or not
// console.log(array1.includes(5));//true
// console.log(array1.indexOf(100));//return the index of that value if exists else return -1
// console.log(array1.indexOf(3)); //if does not exists then reutrn -1

// **IMPORTANT CONCEPT
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


// *concept of splice and slice:
const array3 = [0,1,2,3,4,5,];
// console.log('A',array3);
// let sliceVariable = array3.slice(-3,6);//first parameter is the index from start and till (2nd paramenter - 1) will return the value
// console.log(sliceVariable);
// console.log('B',array3);
// let spliceVariable  = array3.splice(1,3,100);//will return the value of index 1 to 3; ** do change the original array :
// console.log(spliceVariable);
// console.log(array3);
// array3.splice(-1,3,100,200);
// console.log(array3);
// *TRIM
// let string = "            hii i am rohan   "
// string.toUpperCase(); // will not change in original string
// console.log(string);
// console.log(string.toUpperCase());
// console.log(string.toLowerCase());

// string.trim();
// console.log(string.trim());
// console.log(string.trimStart());
// console.log(string.trimEnd());

// *SUB STRING 
// var a = "THIS IS A STRING";
// var b = a.slice(-5,-1); //slice can take nagative number;
// console.log(b);
// var c = a.substr(2,10);// from 2nd inted to 10 eleemnt ; //can not take negative number:
// var d = a.replace("is","in")// replace 1st occurnance;
// var e = a.replaceAll("is","in"); //replace all occuance;


// *Now araay:
// let selectedColors = [];
// console.log(selectedColors);
// selectedColors = ["red","blue",1,2.35];
// console.log(selectedColors);
// console.log(selectedColors[1]);
// console.log(typeof selectedColors) // type of array = object
// console.log("the size of the array is :"+selectedColors.length)

// *DESTRUCTURE
// let arr = ["Rohan", "SDE", 3, "Maiti"];
// let [name,role,x] = arr;

// console.log(name)
// console.log(role);
// console.log(x);

// *QUESTION 1
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
// 1. forEach 2. map 3. filter 4. reduce 5.find 6.sort 7.reverse
// *forEach
// important things about foreach
// 1. it does not return anything
// 2. it takes a callback function as a parameter
// 3. it does not break the loop
// 4. it does not change the original array
// 5. it can take 3 parameters (value, index, array)
// 6. it can be used with arrow function    

// let array = [1,2,3,4,5,6,7,8,9,10];
// array.forEach((value,index,array) => {
//     array[index] = value*2;
// });
// console.log(array);

// *map
// important things about foreach
// 1. it returns a new array
// 2. it takes a callback function as a parameter
// 3. it does not break the loop
// 4. it does not change the original array
// 5. it can take 3 parameters (value, index, array)    
// 6. it can be used with arrow function
// 7. it can be used to change the value of the array
// 9. it can be used to change the length of the array
// 10. it can be used to change the order of the array
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

// *filter
// important things about foreach
// 1. it returns a new array
// 2. it takes a callback function as a parameter
// 3. it does not break the loop
// 4. it does not change the original array 
// 5. it can take 3 parameters (value, index, array)
// let array = [1,2,3,4,5,6,7,8,9,10];
// let newArray = array.filter((value,index,array) => {
//     array[index] = value*2; // can changes in original array
//     return value%2 == 0;
// });
// console.log(newArray);
// console.log(array);

// *reduce
// returns a single value
// let array = [1,2,3,4,5,6,7,8,9,10];
// let newArray = array.reduce((accumulator,value,index,array) => {
//     return accumulator + value;
// },0);
// console.log(newArray);
// console.log(array);

// *QUESTION 2 : remove deblicate form array and return a new array
// let array = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
// let newArray = array.filter((value, index, array)=> array.indexOf(value) == index);
// console.log(newArray);
// console.log(array);

