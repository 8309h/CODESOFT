let keys = document.querySelectorAll("#keybord>div");
let bag = "";
let display = document.querySelector("#display");
display.innerText = "0"; 

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", myCal);
}
 

function myCal(event) {
    let targetNumber = event.target.innerText;

    if (targetNumber === "C") {
        bag = ""; 
        display.innerText = "0"; 
    } else if (targetNumber === "=") {
        try {
            let res = eval(bag);
            display.innerText = res; 
        } catch (error) {
            display.innerText = "Error"; 
        }
    } else {
        if (bag === "0") {
            bag = "";
        }
        bag += targetNumber;
        display.innerText = bag; 
    }
}
