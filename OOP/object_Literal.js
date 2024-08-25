let person = {
    firstName : "Jishu",
    lastName : "Kumar",

    // methods
    getFunction : function() {
        return (`The name of person is ${person.firstName} ${person.lastName}`);
    },

    // Object inside object
    phoneNumber : {
        mobile : 6207732099,
        Landline : 123456789
    }
}

console.log(person.getFunction());
console.log(person.phoneNumber.mobile);



// Copied the Properties of person object into a new Object named
const newObject = Object.create(person);
console.log(newObject.firstName);