const obj = {
    name:"Rohan",
    age:21,
    gender:"Male"
}

// to send this over network , we have to convert this to string;

console.log(obj.toString());
console.log(JSON.stringify(obj));
const stringObj = JSON.stringify(obj);
const againObj = JSON.parse(stringObj);
console.log(againObj);