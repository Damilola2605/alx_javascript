#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error('Usage: node webpage_scraper.js <URL> <outputFilePath>');
  process.exit(1);
}

const url = args[0];
const outputPath = args[1];

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    // Save the webpage content to the output file with UTF-8 encoding
    fs.writeFile(outputPath, body, 'utf-8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Webpage content saved to', outputPath);
      }
    });
  } else {
    console.error('Error fetching webpage:', error);
  }
});
