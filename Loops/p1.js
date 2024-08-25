let x;
 
// for loop begins when x=2
// and runs till x <=4
for (x = 2; x <= 4; x++) {
    console.log("Value of x:" + x);
}

console.log(' ');

x = 2;
for (; ; x++) {
	console.log("Value of x:", x);
	break;
}


console.log(' ');

const subjects = ["Maths", "Science", "Polity", "History"];
let i = 0;
let len = subjects.length;
let gfg = "";

for (; i < len;) {
	gfg += subjects[i] + ' ';
	i++;
}
console.log(gfg)

console.log(' ');

function GFG() {
    let Platform = { fname: "geeks", Mname: "for", lname: "geeks", };
 
    let text = "";
    let x;
    for (x in Platform) {
        text += x + " and " + Platform[x] + "     ";
    }
    console.log(text);
}
GFG();



console.log(' ');

const arr = [23, 54, 46, 3];

gfg = "";
for (let i in arr) {
	gfg += arr[i] + '\n';
}
console.log(gfg)




console.log(' ');
// JavaScript code to use while loop
let val = 1;
while (val < 6) {
	console.log(val); 
	val++;
}


console.log(' ');
// JavaScript code to use while loop
val = 1;
do {
	console.log(val);

	val += 1;

} while (val < 6);




console.log(' ');
const courses = { 

	// Declaring a courses object 
	firstCourse: "C++ STL", 
	secondCourse: "DSA Self Paced", 
	thirdCourse: "CS Core Subjects"
}; 

// Creating a new empty object with 
// prototype set to courses object 
const student1 = Object.create(courses); 

// Defining student1 properties and methods 
student1.id = 123; 
student1.firstName = "Prakhar"; 

// Iterating over all properties of 
// student1 object 
for (let prop in student1) { 
	console.log(prop + " -> "
		+ student1[prop]); 
}



