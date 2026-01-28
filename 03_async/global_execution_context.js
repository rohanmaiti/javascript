console.log("start");

setTimeout(() => {
  console.log("Inside setTimeout with 2000ms delay");
}, 2000);

setTimeout(() => {
  console.log("Inside setTimeout with 1000ms delay");
}, 1000);

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  console.log("data", data);
  return data; // you will get actual data if caller function is also async and await is used else you will get a pending promise
}

const res = fetchData();
console.log(res);

console.log("middle");
console.log("end");

/**
 * * What is Global Execution Context (GEC)?
 *   When a JS program starts, the engine always creates the Global Execution Context.
 * 
 *   It has two phases:
 * 
* * Global Execution Context
    │
    ├── Memory Creation Phase
    └── Code Execution Phase


 * * Memory Creation Phase (Hoisting Phase) --> JS scans the entire file before executing anything.
    - In this phase, memory is allocated for all variables and functions.
    - Variables declared with var are initialized with undefined.
    - Functions are stored in memory with their complete definition.
    - Variables declared with let and const are not initialized and remain in the Temporal Dead Zone (TDZ) until their declaration is encountered during code execution.

 * * Code Execution Phase --> In this phase, the code is executed line by line.
     There are mainly 5 parts
     |
     |-> Call stack
     |-> Web APIs
     |-> Callback Queue (Task Queue)
     |-> Microtask Queue
     |-> Event Loop

     when program starts execution, then everything goes to call stack one by one.
     If any asynchronous operation is encountered (like setTimeout, fetch, etc.), it is offloaded to Web APIs.
     Once the asynchronous operation is completed, its callback is moved to the Callback Queue or Microtask Queue based on its type.
     The Event Loop continuously checks if the Call Stack is empty. If it is, it moves the first callback from the Microtask Queue (if any) to the Call Stack.
     If the Microtask Queue is empty, it moves the first callback from the Callback Queue to the Call Stack.
     This process ensures that asynchronous operations are handled efficiently without blocking the main thread.

     ** So how the above program will get executed ? ** 
     >> 1. Global Execution Context is created.
     >> 2. Memory Creation Phase:
              - 'fetchData' function is stored in memory.    
              - res variable is declared but not initialized (remains in TDZ).
     >> 3. Code Execution Phase:
              - console.log("start") gets inside call stack and executed and "start" is printed.
              - setTimeout is encountered, so from call stack it is moves to Web APIs with a delay of 2000ms.
              - setTimeout is encountered, so from call stack it is moves to Web APIs with a delay of 1000ms.
              - fetchData function is called, it is pushed to Call Stack.
              - Inside fetchData, fetch() is called → the async operation is handled by Web APIs → execution of fetchData pauses at await, but the main thread continues executing the remaining synchronous code.
              - nest const res = fetchData() will get a promise --> // ** [RULE - a async function always return a promise ] **
              - now res will be prinited as a pending promise.
              - now middle and end will get into call stack one by one and printed.
              - NOW by the time all the sync code is executed, the
                1000ms is completed in web APIs, so its callback function is moved to Callback Queue.
              - And the 2000ms is also completed by the time in web APIs, so its callback function is moved to Callback Queue.
              - and if by this time fetch is also completed then its callback will be moved to Microtask Queue.
              // // - and if the fetch is not completed yet then it will wait in web APIs until it is completed.
              - now event loop checks call stack, if it is empty then it will check microtask queue first.
              - if fetch is completed then its callback will be in microtask queue, so it will be moved to call stack and ** executed first **
              - always fetch and promise related callbacks are moved to microtask queue so that they get executed first.
              - again event loop checks call stack, if it is empty then it will check microtask queue first.
              - if microtask queue is empty then it will check callback queue.
              - now 1000ms timeout callback will be moved to call stack and executed.
              - once fetch is executed completely then only the 1000ms timeout callback will be moved to call stack and executed.
              - again event loop checks call stack, if it is empty then it will check microtask queue first.
              - if microtask queue is empty then it will check callback queue.
              - finally the 2000ms timeout callback will be moved to call stack and executed.

              // *Q Do fetch / Promise callbacks ALWAYS execute first?
                   >  NO — not “always”
              // *  The real rule (VERY IMPORTANT) --> Microtasks execute first ONLY IF THEY ARE READY  
              // * Example situation:
                      setTimeout(1000) finishes
                      fetch() is still waiting on network
                      👉 Microtask Queue is empty
                      👉 Event loop will execute the 1000ms setTimeout  
                      So timers do NOT wait for fetch.


              // **Q What if fetch takes more time because server is far away?
              Then this happens:
              setTimeout(1000) → callback goes to macrotask queue
              setTimeout(2000) → callback goes to macrotask queue
              fetch() → still running in Web APIs (network)

              # so this will get printed : 
              start
              Promise { <pending> }
              middle
              end
              Inside setTimeout with 1000ms delay
              Inside setTimeout with 2000ms delay
              (data printed later, when fetch resolves)

              // **Q Do all async tasks stay in Web APIs until completion?
              YES — exactly


 */

// async function async_worker(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// }

// async function main() {
//   input = "https://jsonplaceholder.typicode.com/posts/1";
//   const result = await async_worker(input);
//   console.log('result:', result);
// }

// main();

// if you want a result of a async work then the caller function and the worker function both have to be async in nature.
// else you will get a pending promise.
