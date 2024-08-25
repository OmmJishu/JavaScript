const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 }
];

// Get List of full Name
const output = users.map(function get(it){
    return it.firstName + " " + it.lastName;
})
console.log(output);

// get Age and its frequency in a list
const answer = users.reduce(function solve(res, it){
    if(res[it.age]){
        res[it.age]++;
    }
    else{
        res[it.age] = 1;
    }

    return res;
}, {});  // return represents this empty list(the second parameter of reduce function)
console.log(answer);


// get first name of all the people whose age is less than 30
const answer2 = users.filter(function solve(it){ // Filter gave list of all people with all details
    if(it.age < 30){
        return it.firstName;
    }
}).map(function getOnlyName(x){  // applied map to get only first name out of filtered result
    return x.firstName;
}) // HERE WE CHAINED the Methods
console.log(answer2);  


// OR
const ans1 = users.reduce(function solve(ans, it){
    if(it.age < 30){
        ans.push(it.firstName);
    }
    return ans;
}, [])  // ans represents the empty array here
console.log(ans1);