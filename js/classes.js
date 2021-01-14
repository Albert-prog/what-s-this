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

const defaultfunction = object.logAge.bind(object); 
const ArrowFunction = object.logAgeArrow;

console.log("Simple function declaration in class");
defaultfunction();
console.log("Arrow function declaration in class");
ArrowFunction();

/* 
const defaultfunction = object.logAge;
defaultfunction.call(object);//meghívom a változó értékét
const ArrowFunction = object.logAgeArrow;
ArrowFunction();//meghívom a változót 
*/