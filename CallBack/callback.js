// Callbacks are super way of handling async operation in JavaScript

var a = 10;
setTimeout(function(){
    console.log("Hello World");
    console.log("A = ",a);
}, 2000);

function x(y){
    console.log("X");
    y();
}

x(function y(){
    console.log("Y");
})

function attachEventListner(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz(){
        console.log("Button Clicked ",++count);
    });
}

attachEventListner();