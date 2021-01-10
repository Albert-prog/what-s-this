class Person {
    age = 35

    logAge () {
        // Log out the object's age
        console.log(this.age);
    }


    logAgeArrow = () => {
        // Log out the object's age
        console.log(this.age);
    }
}

const object = new Person();

console.log("Simple function declaration in class");
const defaultfunction = object.logAge;
defaultfunction.call(object);//meghívom a változó értékét
console.log("Arrow function declaration in class");
const ArrowFunction = object.logAgeArrow;
ArrowFunction();//meghívom a változót