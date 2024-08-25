// fetch function is a promise and when it gets resolved it returns response object and this response has a body which is readable stream

    // to convert this readable stream to JSON  just use  .json()  and it is again a promise and when this  .json() is resolved it gives result as jsonValue



// Error Handling in async await   try  catch 


const API_URL = "https://api.github.com/users/ommjishu";

async function handlePromise() {

    try{
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);
    }
    catch (err){
        console.log(err); // can handle error via this way
    }

}
handlePromise().catch(function(err){console.log(err)});  // or can handle error via this way


