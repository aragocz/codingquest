const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\r\n");
let final = {};
let finalamount = 0;
let result = "";
for(let i=0; i<input.length; i++){
    const current = input[i];
    const chararr = current.split("");
    const id = arrayPart(chararr, 4, 12);
    const sequence = arrayPart(chararr, 12, 14);
    const checksum = arrayPart(chararr, 14, 16);
    const payload = arrayPart(chararr, 16, 64);
    const payloadet = payload.match(/.{1,2}/g);
    let check = 0;
    let result = "";
    if(current.match(/.{4}/)[0] === parseInt("0101010101010101",2).toString(16)){
        payloadet.forEach(n => {
            check += parseInt(n, 16);
            result += String.fromCharCode(parseInt(n, 16));
        });

        if((check % 256) === parseInt(checksum, 16)){
            final[parseInt(sequence, 16)] = result;
            finalamount++
        };
    };
}

for(var i = 0; i<finalamount; i++){
    result += final[i];
}

console.log(result)

function arrayPart(array, begin, end){
    let str = "";
    for(var x = begin; x<end; x++){
        str += array[x]
    }
    return str
}