#!/usr/bin/node

// import request
const request = require('request');


// pass cmd line argument
const url = process.argv[2];
const parts = [];
// make a GET request
request
.get(url+ '/'+18, {encoding: 'utf-8'})
.on('data', function (data) {
    parts.push(data);
})
.on('complete', function () {
    response = parts;
    const count_ = response.films;
    console.log(count_);
})
