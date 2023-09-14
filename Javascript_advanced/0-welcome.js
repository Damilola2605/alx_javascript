#!/usr/bin/node

//creating a function
function welcome(firstName, lastName){
  const fullName = `${firstName} ${lastName}`;
  function displayFullName() {
    alert(`Welcome ${fullName}!`);
  }
  displayFullName();
}
