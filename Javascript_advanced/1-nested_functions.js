#!/usr/bin/node

// Create a variable named globalVariable with value "Welcome"
const globalVariable = "Welcome";

// Create the outer function and write the inner function within it
function outer() {
  // Alert the content of the variable globalVariable
  alert(globalVariable);

  //Create a variable named course with value "Holberton"
  const course = "Holberton";

  //Create the inner function within outer
  function inner() {
    //Alert the content of the variable globalVariable and course (concatenated)
    alert(globalVariable + ' ' + course);

    // Create a variable named exclamation with value "!"
    const exclamation = '!';

    //  Create the inception function within inner
    function inception() {
      // Alert the content of globalVariable, course, and exclamation (concatenated)
      alert(globalVariable + ' ' + course + exclamation);
    }

    //  Call the inception function within inner
    inception();
  }

  // Call the inner function within outer
  inner();
}

// Call the outer function in the main code (outside any function)
outer();

