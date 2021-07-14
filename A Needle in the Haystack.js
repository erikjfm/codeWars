const findNeedle= haystack => {
    let i;
    haystack.forEach((element,index) => {
        if(element=='needle'){
            i=index;
        }
    })
    return `found the needle at position ${i}`        
};