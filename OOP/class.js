class Vechile{
    // Constructor
    constructor(name,maker,engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }

    getDetails = function() {
        return (`The name of the bike is ${this.name}, ${this.maker}, ${this.engine}`);
    }
}

// Making objects

let bike1 = new Vechile("Hayabusa","Suzuki","130cc");
let bike2 = new Vechile("Ninja","Kawasaki","998cc");

const bike3 = Object.create(bike1);

console.log(bike1.getDetails());
console.log(bike2.getDetails());

bike3.name = "Hero";
console.log(bike3.getDetails());