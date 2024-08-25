class person{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }

    add_Address(add){
        this.add = add;
    }

    getDetails(){
        console.log(`Name is ${this.name} and Address is ${this.add}`);
    }
}

let person1 = new person('OMM',2129700);
person1.add_Address('Bihar');

person1.getDetails();