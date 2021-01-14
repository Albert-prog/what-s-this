const person = {
    age: 35,
    logAge: function () {
        //Log out the object's age
        //console.log(person);
        //console.log(person.age)
        console.log(this.age);
    }
}

function logReferenceObjectsAge() {
    const logAge = person.logAge.bind(person);
    logAge();
    //logAge.call(person);
}

console.log("Object's function call");
person.logAge();
console.log("Object's function's reference call");
logReferenceObjectsAge();
