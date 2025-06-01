// * what is a promise ?
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully, resulting in a value.
// 3. Rejected: The operation failed, resulting in a reason for the failure (usually an error).

// * what is the need of a promise ?
// Promises are used to handle asynchronous operations in JavaScript, allowing developers to write cleaner and more manageable code.
// They help avoid callback hell and make it easier to work with asynchronous code by providing a way to chain operations and handle errors.

// * what is callback hell ? with example
// example of callback hell:
// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Data fetched");
//         callback();
//     }, 1000);
// }
// function processData(callback) {
//     setTimeout(() => {
//         console.log("Data processed");
//         callback();
//     }, 1000);
// }
// function displayData() {
//     setTimeout(() => {
//         console.log("Data displayed");
//     }, 1000);
// }
// fetchData(() => {
//     processData(() => {
//         displayData();
//     });
// });


// how to create a promise ?
// now go to file 08_async_await.js
