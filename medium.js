const fs = require('fs');
let file = "./test.txt"
let buffer = fs.readFileSync(file).toString()
let text = buffer.replace(/\s/g, "").split(",")
console.log(text)
