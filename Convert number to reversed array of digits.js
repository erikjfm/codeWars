const digitize = n => {
    let array=[];
    string=String(n);
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        array.push(parseInt(element));
    }  
    return array.reverse();
}
