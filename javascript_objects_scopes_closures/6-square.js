#!/usr/bin/node

//import class Square
const Square_ = require ('./5-square');

//Square inherits form Square
class Square extends Square_ {

    constructor (size) {
        super(size, size);
    }

    charPrint(c) {
        if (c) {
            for (let i = 1; i <= this.height; i++) {
                const rect_c = c.repeat(this.width);
                console.log(rect_c);
            }
        } else {
            for (let i = 1; i <= this.height; i++) {
                const rect_X = 'X'.repeat(this.width);
                console.log(rect_X);
            }
        }
    }
}

module.exports = Square;
