#!/usr/bin/node
#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];
const characterId = 18;
let count = 0;

request.get(apiUrl, (error, response, body) => {
    if (error){
        console.error(error.message);
    }else if (response.statusCode !== 200){
        console.error(response.statusCode);
    }else {
        const movieFile = JSON.parse(body)
        movieFile.results.forEach((film) => {
            film.characters.forEach((character) => {
                if (character.includes(characterId)){
                    count += 1;
                }
            })
        })
        console.log(count);
    }
});
