#!/usr/bin/node

function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  document.getElementById('spookyButton').addEventListener('click', spooky);
  document.getElementById('darkModeButton').addEventListener('click', darkMode);
  document.getElementById('screamModeButton').addEventListener('click', screamMode);
}

// Create buttons for different modes
const spookyButton = document.createElements('button');
spookyButton.textContent = 'Spooky';
spookyButton.id = 'spookyButton';

const darkModeButton = document.createElements('button');
darkModeButton.textContent = 'Dark mode';
darkModeButton.id = 'darkModeButton';

const screamModeButton = document.createElements('button');
screamModeButton.textContent = 'Scream mode';
screamModeButton.id = 'screamModeButton';

// Add buttons to the body of the page
document.body.appendChild(spookyButton);
document.body.appendChild(darkModeButton);
document.body.appendChild(screamModeButton);

// Call the main function to set up event listeners
main();
