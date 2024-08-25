// make a promise chain createOrder, proceedToPayment, showOrderSummery, updateWallet

const cart = ["shoes", "pants","kurta"];

// Consumer Part Code
createOrder(cart)
    .then(function(orderId){
        console.log("Your OrderId =  ",orderId);
        return orderId;
    })
    .then(function (orderId){
        var payment = proceedToPayment(orderId);
        return payment;
    })
    .then(function (payment){
        console.log("Payment Successful for OrderId =  ",payment);
        return payment;
    })
    .then(function (payment){
        var res2 = showOrderSummery(payment);
        return res2;
    })
    .then(function (res2){
        console.log("Your Order Summary =  ",res2);
        return res2;
    })
    .then(function (res2){
        return updateWallet(res2);
    })
    .then(function(){
        console.log("Wallet Updated");
    })
    .catch(function (err){
        console.log(err.message);
    })


// Producer Part Code


function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        if(!validateCart(cart)){
            const err = new Error("Cart is Not Valid");
            reject(err);
        }

        const orderId = 123456;
        if(orderId){
            setTimeout(function (){
                resolve(orderId);
            }, 3000);
        }
    });
    return pr;
}

function validateCart(cart){
    return true;
}

function proceedToPayment(orderId){
    const pr = new Promise(function(resolve, reject){
        if(!orderId){
            const err = new Error("Invalid OrderId");
            reject(err);
        }

        setTimeout(function(){
            resolve(orderId);
        },2000);
    });
    return pr;
}

function showOrderSummery(payment){
    const pr = new Promise(function(resolve, reject){
        if(!payment){
            const err = new Error("Payment failed");
            reject(err);
        }

        setTimeout(function(){
            resolve(payment);
        },1000);
    });
    return pr;
}

function updateWallet(res2){
    return new Promise(function(resolve, reject){
        resolve();
        // reject(new Error("Failed to Update wallet"));
    });
}