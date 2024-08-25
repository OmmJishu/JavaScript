// IN operator

let car = {
    make : 'Toyota',
    model : 'Camry',
    year : 2022
};

let hasMake = 'make' in car;
let hasColor = 'color' in car;

console.log('HasMake in Car object : ', hasMake);
console.log('hasColor in car object : ', hasColor);




// instanceof  operator

// Creating a constructor function
function myFunction(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

// creating an instance of the car constructor
let car2 = new myFunction('Toyota','Carmy',2022);

// Checking if the object is an instance of a particular class 
let isCarInstance = car2 instanceof myFunction;

// Output
console.log('Is Car2 instance of myFunction :  ',isCarInstance)



// String Concatenation
let str1 = "Geeks"; 
let str2 = "forGeeks"; 
let result = (str1 + str2); 
console.log(result);