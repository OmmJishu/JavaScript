// Map Function is used to transform an Array

const arr = [5, 1, 3, 2, 6];

// double = [10, 2, 6, 4, 12]

// triple = [15, 3, 9, 4, 18]

// Binary = ["101", "1", "11", "10", "110"];

function double(x){
    return x*2;
}

function triple(x){
    return x*3;
}

function binary(x){
    return x.toString(2);
}

const doub = arr.map(double);
console.log(doub);

const trip = arr.map(triple);
console.log(trip);

console.log(arr.map(binary));

// OR WE CAN USE

console.log(arr.map(function binary(x){
        return x.toString(2);
    }
));

// OR

console.log(arr.map((x) => x.toString(2)));



// Filter Function is Used to Filter the values inside the arrays

// Filter all the ODD values
const output = arr.filter(function isOdd(x){
    return x%2;
});
console.log(output);

// Filter all the EVEN values
console.log(arr.filter(function isOdd(x){
    return x%2 === 0;
}));

// Filter all greater than 3
console.log(arr.filter(function isOdd(x){
    return x > 3;
}));



// Reduce Function is used when you have to take all elements of an array and com up with a single result

// NOTE FUNCTION INSIDE REDUCE TAKES TWO PARAMETERS  'res'   store result  and  'it'  represent each element in array
// And reduce 1st argument is function and second argument is initial value of res.

// Sum of all the element of the array
console.log("Sum of elements of Array  =  ", arr.reduce(function(res, it){
    res += it;
    return res;
}, 0));


// Maximum element of array
console.log("Max element of Array  =  ", arr.reduce(function(res, it){
    res = Math.max(res,it);
    return res;
}, 0));

// Minimum element of array
console.log("Min element of Array  =  ", arr.reduce(function(res, it){
    res = Math.min(res, it);
    return res;
}, 1e9));

