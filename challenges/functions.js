// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function highOrderFunction(parameter1, parameter2, cb) {
  return cb(parameter1, parameter2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(parameter1, parameter2) {
  return (parameter1 + parameter2);
}
console.log(add(30, 48))

function multiply(parameter1, parameter2) {
  return (parameter1 * parameter2);
}
console.log(multiply(30, 48))

function greeting(parameter1, parameter2) {
  return (`Hello ${parameter1} ${parameter2}  nice to meet you!`)
}
console.log(greeting("James", "Starks"));

/* Step 3: Check your work by un-commenting the following calls to consume(): */
highOrderFunction(2, 2, add); // 4
highOrderFunction(10, 16, multiply); // 160
highOrderFunction("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: Because of closure or better put, 'enclosure' it is part of the same lexical 
//              environment due to being created within another function.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
