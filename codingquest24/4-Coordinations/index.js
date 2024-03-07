const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();

const inpArray = input.split("\r\n");

let starcombos = []
let distances = [];

for(i of inpArray){
    //name, dist, x, y, z
    let star = i.split(/ {2,}/gm);

    for(j of inpArray){
        let star2 = j.split(/ {2,}/gm);

        if(star[0] === star2[0] || starcombos.includes([star2[0], star[0]])) continue;

        starcombos.push([star[0], star2[0]])
        distances.push(Math.sqrt(Math.pow(parseFloat(star[2])-parseFloat(star2[2]), 2) + Math.pow(parseFloat(star[3])-parseFloat(star2[3]), 2) + Math.pow(parseFloat(star[4])-parseFloat(star2[4]), 2)))
    }
};
console.log(Math.min(...distances))