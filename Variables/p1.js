let petName = 'Rocky'; // Global variable
myFunction()

function myFunction() {
    fruit = 'apple'; // Considered global
    let num = 15;
    console.log(typeof petName + ' - ' + 'My pet name is ' + petName)
}

console.log( typeof fruit + ' and Fruit name is ' +
fruit)

console.log(num); // Can Not access as num is a Local Variable

/*

In the provided code, fruit is treated as a global variable because it is not declared using the var, let, or const keyword within the myFunction function. When a variable is not explicitly declared using one of these keywords inside a function, it becomes a global variable by default.

*/