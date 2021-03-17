/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array
of objects as the first parameter and a string as the second. The
`keyInObjectArray` function will return `true` if any of the objects contains
the `keyString` as a key within them, and `false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/
// Understand
  // 1. accepts and arr of obj, and string (key)
  // 2. find  the string as a key in the object;
  // 3. return true if we do, false if we don't
// Plan
  //  1. create a boolean variable initialized to false
  // 2. iterate through the array
  // 3. look at the object individually checking for the key string
    // 3-1. if keystring found, set boolean true
  // 4. return the boolean
// Do
// Improve

function keyInObjectArray(objArray, keyString) {
  // your code here
  let found = false;

  objArray.forEach(function (obj) {
      if (obj[keyString] !== undefine) {
        found = true;
      }
  })
  return found;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
