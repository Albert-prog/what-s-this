const person = {
    age: 35,
    logAge: function () {
        //Log out the object's age
        console.log("person", this);
    }
}

function logReferenceObjectsAge() {
    const logAge = person.logAge;
    logAge();
}

console.log("Object's function call");
person.logAge();
console.log("Object's function's reference call");
logReferenceObjectsAge();
