class Person {
    age = 35

    logAge () {
        // Log out the object's age
        console.log("35",this);
    }

    logAgeArrow = () => {
        // Log out the object's age
        console.log("35",this)
    }
}

const object = new Person();

console.log("Simple function declaration in class");
const defaultfunction = object.logAge;
console.log("Arrow function declaration in class");
const ArrowFunction = object.logAgeArrow;
