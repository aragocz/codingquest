const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().replace(/ /g,"").split("\r\n");
const wincond = require("./wincond.json").win;
var windet = [];
var winx = 0;
var wino = 0;
var draw = 0;

wincond.forEach(c => {
    windet.push(c.split(""));
})

for(var x = 0; x<input.length; x++){
    var n = input[x]
    const movesd = n.split("");
    var movx = [];
    var movo = [];
    for(var i = 0; i<movesd.length; i++){
        const mod = i%2;
        if(mod){
            movo.push(movesd[i])
            if(check(windet,movo) && movo.length >= 3) {
                wino++
                break;
            }
        }else if(!mod) {
            movx.push(movesd[i])
            if(check(windet,movx) && movx.length >= 3){
                winx++
                break;
            }
        }
        if(movo.length + movx.length === 9){
            draw ++
        }
    }
    
}

console.log(winx+" games won by X\n"+wino+" games won by O\n"+draw+" games were drawn")

function check(arr1, arr2){
    var end = 0;
    for(var i = 0; i<arr1.length; i++){
        if(!end) end = arr1[i].every(n => {
            return arr2.includes(n)
        })
    }
    return end;
};

console.log("Result: " + (winx*wino*draw))