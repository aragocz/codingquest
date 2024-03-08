const fs = require("fs");
const input = fs.readFileSync("./routes.txt").toString();
const inputvalues = fs.readFileSync("./values.txt").toString();

const inpArray = input.split("\r\n");
const valArray = inputvalues.split("\r\n");

let ranges = {};

let total = 0;
//ranges
for(i of valArray){
    let arr = i.split(/ {2,}/gm)
    ranges[arr.shift()] = arr
};

for(k of inpArray){
    let pre = k.replace(/Rover \d route: |Rover \d\d route: /g, "").split(" -> ");
    let dist = 0;
    for(let l = 0;l<pre.length;l++){
        let object = ranges[pre[l]]
        dist += (pre.length === l+1) ? 0 : parseInt(object[Object.keys(ranges).indexOf(pre[l+1])]);
    }
    total += dist;
};

console.log(total);