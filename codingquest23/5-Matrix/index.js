const fs = require("fs")
const input = fs.readFileSync("./input.txt").toString().split("\r\n")
let matrix = Array.apply(null, Array(10)).map(() => {return Array.apply(null, Array(50)).map(() => {return 0})})

for(const i of input){
    const inp = i.split(" ");
    draw(matrix, posfield(parseInt(inp[0]), parseInt(inp[1]), parseInt(inp[2]), parseInt(inp[3])));
}

function draw(matrix, data){
    data.forEach((coords) => swap(matrix, coords))
}

function posfield(xpos, ypos, width, height){
    let dataset = [];
    
    for(let i=0; i<width; i++){
        for(let j=0; j<height; j++){
            dataset.push([xpos+i, ypos+j])
        }
    }

    return dataset;
}

function swap(matrix, pos){
    matrix[pos[1]][pos[0]] = Math.abs(matrix[pos[1]][pos[0]]-1)
}

fs.writeFileSync("./output.txt", "");

matrix.forEach((row) => {
    let str = row.join("").replace(/0/g, ".").replace(/1/g, "#")
    fs.writeFileSync("./output.txt", str + "\n", { flag: "a+"});
});