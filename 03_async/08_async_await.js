const myPromise = new Promise((resolve, reject) => {
  // // we do time consuming task here
  setTimeout(() => {
    if (true) resolve("promise resolve data");
    else reject("Promise rejected data");
  }, 5000);
});
console.log(myPromise);

// how to handle a promise ? type-1 : using then and catch; type-2 : using async await
myPromise
  .then((res) => {
    console.log(myPromise);
    console.log(res);
  })
  .catch((rej) => {
    console.log(myPromise);
    console.log(rej);
  });

// type-2 : usinf async await
// async function doTask(){
    // const res = await myPromise;
    // console.log(res);
    // return res;
// }
// console.log(doTask());


// fucntion er moddhe r ekta indipendent vabe
// fetch("https://dummyjson.com/users") // returns promise ---> 3 state | 1. fullfilled 2.pending 3. rejected
// .then((res)=>{
// if promise state is fullfilled then control will come here
// })
// .catch((rej)=>{
// if promise state is rejected then control will come here
// })

//
// setTimeout(()=>{
//     console.log("Time out of 2 sec")
// },2000)

// console.log("hello rohan");
// console.log("hello rahul");
// console.log("hello kanu");
// // task that will take long time to complete

// console.log("hello taniya");
// console.log("hello kavya");
// for(let i=0;i<1000000000;i++)
// {

// }
// setTimeout(()=>{
//     console.log("Time out of 1 sec")
// },1000)

// let a = 10 + 20;
// console.log(a);
// console.log(100000+1893846);

// setInterval
// let intervalId = setInterval(()=>{
//     console.log("hello");
// },2000)
// // clearInterval(intervalId)

// let timeoutId = setTimeout(()=>{
//     clearInterval(intervalId);
// },15000)

// setTimeout(()=>{
// clearTimeout(timeoutId);
// },2000)

// let timeoutId = setTimeout(()=>{
//     console.log("hello tamanna");
// },5000)
// clearTimeout(timeoutId);

// let intervalId = setInterval(()=>{
//     console.log("hello ram");
// },1000)

// let id = setTimeout(()=>{
//     clearInterval(intervalId);
// },10000)

// setTimeout(()=>{
// clearTimeout(id);
// },15000)
