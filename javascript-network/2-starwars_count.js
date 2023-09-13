#!/usr/bin/node

const request = require('request');

const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';
const characterId = 18;

// Make a GET request to the Star Wars API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('API request failed with status code:', response.statusCode);
  } else {
    const films = JSON.parse(body);

    // Filter the films where "Wedge Antilles" (character ID 18) is present
    const moviesWithWedgeAntilles = films.results.filter(film => {
      return film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`);
    });

    console.log(moviesWithWedgeAntilles.length);
  }
});

