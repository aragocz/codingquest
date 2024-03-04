const fs = require("fs")
const input = fs.readFileSync("./input.txt").toString();
const validN = ["discount", "rebate"];

const inpArray = input.split("\r\n");
let j = 0
let alpha = {};

for(i of inpArray){
    let split = i.split(/: | /gm);

    if(!Object.hasOwn(alpha, split[0])){
        alpha[split[0]] = 0;
    };

    let NorP = ((validN.includes(split[1].toLowerCase())) ? -1 : 1);
    alpha[split[0]] += (parseInt(split[2])*NorP)
};

console.log(alpha);
console.log(Math.min(...Object.values(alpha)));