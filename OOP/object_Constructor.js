// Using a Constructor
function person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName
}

let person1 = new person("OMM","Kumar");
let person2 = new person("Jishu","Kumar");

console.log(`The name of Person1 = ${person1.firstName} ${person1.lastName}`);
console.log(`The name of Person2 = ${person2.firstName} ${person2.lastName}`);

person1.branch = "BTech";
console.log(`The name of Person1 = ${person1.firstName} ${person1.lastName} and Branch is ${person1.branch}`);


// Copied the Properties of person1 object into a new Object named
let newObject = Object.create(person1);
console.log(newObject.firstName);