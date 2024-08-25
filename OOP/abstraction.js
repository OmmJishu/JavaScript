// Abstraction example
// creating object named person with object Constructor function

function person(fname, lname) {
	let firstname = fname;
	let lastname = lname;

	let getDetails_noaccess = function () {
		return (`First name is: ${firstname} Last 
			name is: ${lastname}`);
	}



    let person2 = {
        name : "Jishu",
        getData : function(){
            console.log(`Person2 name = ${person2.name}`);
        }
    }
    person2.name = firstname;
    person2.getData();



	this.getDetails_access = function () {
		return (`First name is: ${firstname}, Last name is: ${lastname}`);
	}
}

let person1 = new person('Mukul', 'Latiyan');

console.log(person1.firstname); // undefined 
console.log(person1.getDetails_noaccess); // undefined

console.log(person1.getDetails_access()); // Access 