const fs = require("fs")
const input = fs.readFileSync("./input.txt").toString().split("\n")
let inputdata = [];
let matrix = Array.apply(null, Array(5)).map(() => {return Array.apply(null, Array(50)).map(() => {return 0})})

for(const i of input){
    const inp = i.split(" ");
    inputdata.push(inp)
}

console.log(matrix)