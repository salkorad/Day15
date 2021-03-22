const milili = [10, 25, 4]; // DO NOT change this line

function myArr(mili) {
    'use strict';

// Only change code below this line
// Using mili = [4, 10, 25] would be invalid
milili.pop();
milili.unshift(4);

// Only change code above this line
return mili;

}
console.log(milili);
console.log(myArr(milili));
module.exports = myArr;