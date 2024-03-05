const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();

const inpArray = input.split("\r\n");

let shipInternal = 0;
let passengerWiFi = 0;


for(i of inpArray){
    let split = i.slice(4);
    let size = parseInt(split.slice(0,4), 16);
    let sender = split.slice(20,28).match(/.{1,2}/g);
    let receiver = split.slice(28,36).match(/.{1,2}/g);


    if(parseInt(sender[0], 16) === 192 && parseInt(sender[1], 16) === 168 ){
        if(parseInt(sender[2], 16) === 255 || parseInt(sender[3], 16) === 255){continue}

        shipInternal += size
    }else if(parseInt(receiver[0], 16) === 192 && parseInt(receiver[1], 16) === 168 ){
        if(parseInt(receiver[2], 16) === 255 || parseInt(receiver[3], 16) === 255){continue}

        shipInternal += size
    }else if(parseInt(sender[0], 16) === 10 && parseInt(sender[1], 16) === 0 ){
        if(parseInt(sender[2], 16) === 255 || parseInt(sender[3], 16) === 255){continue}

        passengerWiFi += size
    }else if(parseInt(receiver[0], 16) === 10 && parseInt(receiver[1], 16) === 0 ){
        if(parseInt(receiver[2], 16) === 255 || parseInt(receiver[3], 16) === 255){continue}

        passengerWiFi += size
    }
}
console.log(shipInternal + "/" + passengerWiFi)