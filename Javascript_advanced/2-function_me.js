#!/usr/bin/node

function welcomeMessage(fullName) {
  return function () {
    alert('Welcome ' + fullName);
  };
}
 // Create variables with welcomeMessage closures
const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');

// Call the closures to display the welcome messages
guillaume();
alex();
fred();
