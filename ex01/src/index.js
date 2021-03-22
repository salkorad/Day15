// Only change code below this line
let myName;
let message;
// Only change code above this line
myName = "Padawns";
function myMsg(name) {
    "use strict";
    message = "Hello, " + name + "!";

    return message
}

console.log(myMsg(myName));
module.exports = myMsg;