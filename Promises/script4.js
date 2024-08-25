// Promise APIs + Interview Questions

/* 

1.  Promise.all()

    -> When we have to make parallel api calls and get the results. Eg. Suppose you have to get 10 userIds Info and want to make 10 parallel api calls and get the results for 10 different users.

    -> It is used to handle multiple promises together.

    -> Promise.all() takes an array(iterable) of promises as input parameter.  Eg:-

            Promise.all([p1, p2, p3]);

            p1 takes 3 seconds to fullfill
            p2 takes 1 second
            p3 takes 2 seconds

        Case 1.  Suppose all of them get success, no one failed. Then it will give an array with value of all the promises as [val1, val2, val3] and total time taken is 3 seconds. 

        Case 2.  V.V.I  What if any of promises is failed or rejected then promise.all will throw an error immidiately. 



2.  Promise.allSettled([p1,p2,p3])

    -> case 1. If all of them get successful then same result as success in promise.all()

    -> Case 2. If any one of promises get rejected then still it wait for all other promise to get settle and then it return result as [va1, error2, val3]   assumed p2 got rejected



3.  Promise.rece([p1,p2,p3])

    -> as soon as any one of promise is First SETTLED (success or fail) it just gave result of that promise or first settled promise INTO (val2) ROUND BRACKET  and all other got stop. 

    -> if first settled throws error then result will be   (ERROR)

    -> Simply it return result of first settled(success or fail) Promise



4.  Promise.any([p1,p2,p3])

    -> Similar to race but as soon as First RESOLVE it returns the result of first one who got success irrespective of any reject promise previously.

    -> If all promise gets failed then error will be agreegate error as list of all errors as [err1, err2, err3]

    -> Simply it seeking for first success promise

*/



const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("P1 Success");
    },3000);
});

const p2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("P2 Success");
    },1500);
});

const p3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("P3 Success");
    },2000);
});

const p4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject(new Error("P4 Failed"));
    },1000);
});


Promise.all([p1,p2,p3])
    .then(function(res){
        console.log("All = ",res)
    })
    .catch(function(err){
        console.error(err.message);
    });


Promise.allSettled([p1,p2,p3,p4])
.then(function(res){
    console.log("All Settled = ",res);
})
.catch(function(err){
    console.error(err.message);
});


Promise.race([p1,p2,p3,p4])
    .then(function(res){
        console.log("Race = ",res);
    })
    .catch(function(err){
        console.error(err.message);
    }); 


Promise.any([p1,p2,p3])
    .then(function(res){
        console.log("Any = ",res);
    })
    .catch(function(err){
        console.error(err.message);
    });


Promise.any([p4])
    .then(function(res){
        console.log(res);
    })
    .catch(function(err){
        console.error(err); // AggregateError: All promises were rejected will be output

        console.log(err.errors); // will output all the agreegate errors in an array
    });