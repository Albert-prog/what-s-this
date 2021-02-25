class Person {
	constructor() {
		this.logAge = this.logAge(this);
	}
	age = 35;

	logAge() {
		// Log out the object's age
		console.log(this.age);
	}

	logAgeArrow = () => {
		// Log out the object's age
		console.log(this.age);
	};
}

const object = new Person();
console.log("Simple function declaration in class = logAge");

console.log("Arrow function declaration in class = logAgeArrow");
