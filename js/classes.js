class Person {
    age = 35

    logAge () {
        // Log out the object's age
    }

    logAgeArrow = () => {
        // Log out the object's age
    }
}

const object = new Person();

console.log("Simple function declaration in class");
const defaultfunction = object.logAge;
console.log("Arrow function declaration in class");
const ArrowFunction = object.logAgeArrow;
