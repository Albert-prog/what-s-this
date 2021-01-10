function init() {
    const button = document.querySelector(".click-btn");
    logButtonAsArrowFunction(button);
    logButtonAsDeclaredFunction(button);
}

function logButtonAsArrowFunction(button) {
    button.addEventListener("click", (event) => {
        console.log("Arrow function output", );
        // Log out the button element
        //console.log(button);
        console.log(event.target);
        // események átruházása
    });
}

function logButtonAsDeclaredFunction(button) {
    button.addEventListener("click", clickHandler);
}

function clickHandler() {
    console.log("Declared function output");
    // Log out the button element
    console.log(this);
}

init()
