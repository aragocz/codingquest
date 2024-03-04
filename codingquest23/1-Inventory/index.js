const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();
const items = input.split("\r\n")
const itemsDetailed = [];
var categories = [];
var amounts = {};
const alpha = {};
var mod = {};
var product = 1;
var alphastring = "";

items.forEach(n=>{
    itemsDetailed.push(n.split(" "))
})

for(let i=0; i<items.length; i++){
    const cat = itemsDetailed[i][2];
    const amount = parseInt(itemsDetailed[i][1]);
    if(!categories.includes(cat)){
        categories.push(cat);
        amounts[cat] = amount;
    }else{
        amounts[cat] += amount;
    }
}

for(let x=0; x<categories.length; x++){
    const category = categories[x];
    const modded = amounts[category] % 100;
    mod[category] = modded;
    product *= modded;
}

alpha["amounts"] = amounts;
alpha["mod"] = mod;
alpha["product"] = product;

console.log(alpha)