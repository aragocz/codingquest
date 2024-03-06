const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();

const inpArray = input.split(" ");
let odd = true;
let array = [];

for(i of inpArray){
    if(odd){
        for(let j = 0; j<i; j++){
            array.push(".")
        }
    }else if(!odd){
        for(let j = 0; j<i; j++){
            array.push("#")
        }
    }

    odd = !odd
}

console.log(array.join("").replace(/.{100}/g, "$&\n"))