/* 

async  :  async is a keyword that is used before a function to create a async function

NOTE  :  It always returns a Promise weather you return a promise or any string or other it will always wrape string in promise and then return it


await  :  await is a keyword that can only be used inside an async function infront of a promise


//  async and await combo is used to handle promises


*/


const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        return resolve("Promise 1 resolved Value");
    },20000);
});

const p2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        return resolve("Promise 2 resolved Value");
    },40000);
});



// new way to handle promises
async function handlePromise() {
    console.log("Namaste JavaScript");

    // Now JS Engine appears to wait (in reality it does not wait) this promise P to be settled in this new way and will go to next line once promise gets settled
    const val = await p1;
    console.log("Res New Way = ", val);
    console.log("Hello World 1");

    const val2 = await p2;
    console.log("Res New Way = ", val2);
    console.log("Hello World 2");

    // VERY IMPORTANT  Here both val, val2  promises will rum parallely and ORDER OF EXECUTION OF PROMIS Matters the Most and time will depend on the order and the time of promise
}
handlePromise();



/*

// Older way to handle promises
function getData() {
    // JS Engine will Not wait this promise P to be settled in this way and it will move to next line
    p.then(function(res){
        console.log("Res Older way = ",res);
    });
    console.log("Old Way");
}
getData();

*/




/*
// async always returns a Promise
async function getData() {
    return p;
}

const dataPromise = getData();
dataPromise.then(function(res){
    console.log(res);
});
*/


