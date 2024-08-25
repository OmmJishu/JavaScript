// TWO  Problems with callBack 

// 1. CallBack Hell  : callback inside callback inside callback and so on such that code is growing Horizontaly instead of vertically this is callback Hell

const cart = ["Shooes", "Shirt", "Paint"];

// Example CallBack Hell   and  this structure is called as   Pyramid of Doom
api.createOrder(cart, function (){
    api.proceedToPayment(function (){
        api.showOrderSummery(function (){
            api.updateWallet();
        });
    });
});


// 2. INVERSION OF CONTROL  : It is  another problem while using callbacks  that  is  You lose your control on the code while using callbacks

// Go to Promises Folder