// Creating a Promise, Chaining & Error Handling

const cart = ["shoes", "pants","kurta"];

// Consumer Part code 
createOrder(cart)
    .then(function (orderId){
        console.log(orderId);
        return orderId;
        // proceedToPayment(orderId);
    })
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function(err){  // to handle error
        console.log(err.message);
    })
    .then(function(orderID){
        console.log("No Matter what happens, I will definitely be called as my code is down to catch code");
    });


// Producer Part function
function createOrder(cart){
    // NOTEEE :  Create promise (pr) with help of Promise constructor and this constructor takes a function as parameter and this function takes two parameter resolve and reject functions (given by JavaScript)
    const pr = new Promise(function(resolve, reject){
        // CreateOrder
        // ValidateCart
        // OrderId
        if(!validateCart(cart)){ // Not valid then throw error and reject
            const err = new Error("Cart is Not Valid");
            reject(err);
        }

        // Logic for create order to resolve a promise
        const orderId = "12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 5000);
        }
    });

    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("Payment Successful");
    });
}

function validateCart(cart){
    return true;
}