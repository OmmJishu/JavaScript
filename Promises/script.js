// Promises are used to handle async operation in JavaScript 

// const cart = ["Shoes", "Pants", "Kurta"];

/*

createOrder(cart);     // createOrder will return  orderId and proceed to payment will take orderId and work on it
proceedToPayment(orderID)    // this will only be executed only if a order is placed

// So,  proceedToPayment()  will be executed only if  createOrder()  has already been executed.  So we can se proceedToPayment() as callBack for createOrder()

*/




/*

createOrder(cart, function(orderId){
    proceedToPayment(orderId);  // This is INVERSION OF CONTROL  problem associated with callback 
}); 

// To handle  Inversion of control problem we do promises 

const promise = createOrder(cart);      // once we get promises filled with objects i.e. orderID  here
promise.then(function(orderId){        // Then attach the callback function with this promise
    proceedToPayment(orderId); 
})


*/

const GITHUB_API = "https://api.github.com/users/OmmJishu"

const user = fetch(GITHUB_API);   // This fetch function returns us a promise. Let us store this promise

console.log(user);

user.then(function(data){
    console.log(data);
});






// This is call back Hell
/*

createOrder(cart, function(orderId){
    proceedToPayment(orderId, function(paymentInfo){
        showOrderSummary(paymentInfo, function(){
            updateBalance();    
        });
    });  
}); 

*/

// TO Handle CALLBACK  HELL  we use     PROMISE CHAINING

createOrder(cart)
    .then(function (orderId){
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo){
        return showOrderSummery(paymentInfo);
    })
    .then(function (){
        return updateBalance();
    });