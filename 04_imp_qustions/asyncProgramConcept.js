function f1(){
    console.log('f1 called')
}

function f2(){
    console.log('f2 called')
    for(let i=0;i<=5;i++){
        console.log(i);
    }
}
function f3(){
    console.log('f3 called');
}
// f1();
// f2();
// f3();

f1();
setTimeout(f2,0);   //  f2  f3
setTimeout(f3,0);
// setInterval(f3,5000);
f3();


//******************************************************************


// is a function whitch return promise
// fetch('https://dummyjson.com/users')
// .then(res=>console.log(res));
// .then(res=>console.log(res.json));
// .then(res=>{ return res.json()}) //  ||  then(res=>res.text())
// .then(data=>console.log(data));

// async function getData(){
//    var responce = await fetch('https://dummyjson.com/users');
//    //200-300 we will get the data|| 400
   //console.log(responce)
//    var data = await responce.json();
//    console.log(data);
// }
// getData();






// let myPromise = new Promise(function(resolve , reject){ // if resole called then fullfilled , if reject rejected otherwise pending
//     var input = prompt('Enter  a number');
//     if(input>19)
//     resolve('successfull');
//     else
//     reject('reject');
//     });
    
//     myPromise.then(forResolve,forReject)
//     function forResolve(value){
//     console.log(value);
//     }
//     function forReject(reject){
//     console.log(reject);
//     }
    // console.log(myPromise);
//     myPromise.then(forResolve).catch(forReject) // to handel the reject
