//Array in Java Script is Heterogenious:
//Define an array:
// let arr = []; //empty array
let arr1 = [1,2,3,"string",true,undefined,null,]
// console.log(arr1[2]);
// console.log(arr1);
// arr1[3] = 'A'; // replace the 3rd index with 'A'
// console.log(arr1);
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


// convert the array1 to a string ;
// array1 = [1,2,3,4,5,6,7];
// let newArray = array1.join();
// console.log(newArray); // 
// newArray = array1.join('');
// console.log(newArray);
// newArray = array1.join(' ');
// console.log(newArray);
// newArray = array1.join('+');
// console.log(newArray);

// convert string into a array :
// let str = "hello i    am rohan";
// let arr = str.split();
// console.log(arr);
//  arr = str.split('');
// console.log(arr);
// arr = str.split(" ");
// console.log(arr);


//concept of splice and slice:
// const array3 = [0,1,2,3,4,5,];
// console.log('A',array3);
// let sliceVariable = array3.slice(2,4);//first parameter is the index from start and till (2nd paramenter - 1) will return the value
// console.log(sliceVariable);
// console.log('B',array3);
// let spliceVariable  = array3.splice(1,3,100);//will return the value of index 1 to 3; ** do change the original array :
// console.log(spliceVariable);
// console.log(array3);


let string = "            hii i am rohan   "
// string.toUpperCase(); // will not change in original string
// console.log(string);
// console.log(string.toUpperCase());
// console.log(string.toLowerCase());

// string.trim();
// console.log(string.trim());
// console.log(string.trimStart());
// console.log(string.trimEnd());

