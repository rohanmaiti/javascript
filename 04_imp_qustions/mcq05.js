// function output(object){
//     let var1 = object ? object.place : 'italy';
//     return 'clean:'+var1;
// }
// console.log(output({place:'india'}));//


// function a(obj){
// console.log(obj);
// console.log(obj.n);
// }

// let obj = {name:"rohan"};
// a(obj)

// let obj = {
//     name: 'rohan',
//     roll : 13
// }
// console.log(Object.getOwnPropertyNames(obj));

// let a = 20;
// let obj = {
//     name:"Rohan",
//     roll:1314
// }
// obj.prototype.phone = 1234;
// console.log(obj.phone);
// console.log(__proto__);

// var a = "THIS IS A STRING";
// var b = a.slice(-5,-1); //slice can take nagative number;
// console.log(b);
// var c = a.substr(2,10);// from 2nd inted to 10 eleemnt ; //can not take negative number:
var d = a.replace("is","in")// replace 1st occurnance;
var e = a.replaceAll("is","in"); //replace all occuance;


// var www = "    this is a string ";
// var trim01 = www.trim(); // remove extraspace from both start and end
// console.log(www);
// console.log(trim01);
//trimStart() || trimEnd();
// console.log("rohan" + NaN);


// let arrOfObj = [{name:"x",price:100},{name:"y",price:500},{name:"x",price:200}]
// arrOfObj.sort((a,b)=> b.price - a.price)
// console.log(arrOfObj);

// what if in data.json file we do not initialise with empty array , what will happen ??
// if we readThat file and insert any obj in it ?