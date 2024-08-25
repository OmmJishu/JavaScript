function TraditionalFunction() {
    this.value = 1;

    // Traditional function expression
    setTimeout(function () {
        this.value++;
        console.log(this.value); // Outputs NaN, as this is not bound to the outer scope
    }, 1000);
}

function ArrowFunction() {
    this.value = 1;

    // Arrow function
    setTimeout(() => {
        this.value++;
        console.log(this.value); // Outputs 2, as this is lexically scoped to the outer scope
    }, 1000);
}

const obj1 = new TraditionalFunction();
const obj2 = new ArrowFunction();




/*

The behavior you're observing in the TraditionalFunction and ArrowFunction examples is due to how this is handled differently in traditional functions versus arrow functions in JavaScript.

Traditional Function
In the TraditionalFunction, the setTimeout callback is defined as a traditional function expression:

javascript
Copy code
setTimeout(function () {
    this.value++;
    console.log(this.value); // Outputs NaN
}, 1000);
In traditional function expressions, this is determined by how the function is called. Inside the setTimeout callback, the function is executed with its own this context, which by default (in non-strict mode) refers to the global object (window in a browser environment). The global object likely does not have a value property, so this.value is undefined. Incrementing undefined results in NaN (Not-a-Number), which is what gets logged.

Arrow Function
In the ArrowFunction, the setTimeout callback is defined as an arrow function:

javascript
Copy code
setTimeout(() => {
    this.value++;
    console.log(this.value); // Outputs 2
}, 1000);
Arrow functions do not have their own this context. Instead, they capture the this value from the surrounding lexical scope (the scope in which the arrow function is defined). In this case, the surrounding scope is the ArrowFunction constructor, where this refers to the instance of ArrowFunction (i.e., obj2).

So, when this.value++ is executed inside the arrow function, it correctly refers to the value property of the ArrowFunction instance (obj2). Since this.value starts at 1, the increment results in 2, which is then logged to the console.

Summary
Traditional Function: this in the callback refers to the global object (window), leading to this.value being undefined, and incrementing undefined results in NaN.
Arrow Function: this in the callback is lexically bound to the ArrowFunction instance, so this.value correctly refers to the instance property, and incrementing it gives 2.

*/