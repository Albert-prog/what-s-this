function init() {
	const button = document.querySelector(".click-btn");
	logButtonAsArrowFunction(button);
	logButtonAsDeclaredFunction(button);
}

function logButtonAsArrowFunction(button) {
	button.addEventListener("click", (event) => {
		console.log(event.target);
	});
}

function logButtonAsDeclaredFunction(button) {
	button.addEventListener("click", clickHandler);
}

function clickHandler() {
	console.log(this);
}

init();
