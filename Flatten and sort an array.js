"use strict";

const flattenAndSort= array =>{
let bigArray=[];
array.map(x=>{
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        bigArray.push(element);
    }
    bigArray= bigArray.sort(function(a, b){return a - b});
})
return bigArray;
};