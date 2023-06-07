const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();
const inputarray = input.split("\r\n");
var all = 0;
var even = 0;


inputarray.forEach(n => {
    const bit = parseInt(parseInt(n, 10).toString(2));
    if(!(hammingWeight(bit) % 2)){
        even++
        all += parseInt(clearBit(bit,16),2)
    }
})

console.log(Math.round(all/even))

function hammingWeight(n){
    var total = 0;
    n = n.toString().split("")
    n.forEach(e => {
        total += parseInt(e)
    })
    return total
}

function clearBit(n, bitPosition) {
    var m = n.toString().split("")
    const bx = m[m.length-bitPosition]
    var x;
    
    if(bx){
        m[m.length-bitPosition] = 0
        x = m.join("");
    }else {
        x = n
    }

    return x;
}
  