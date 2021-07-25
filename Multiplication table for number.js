const multiTable = number => {
    let arrayNumbers=[1,2,3,4,5,6,7,8,9,10];
    let resultado='';
    for (let i = 0; i < arrayNumbers.length; i++) {
        const element = arrayNumbers[i]; 
        if(i==9){
            resultado+=`${element} * ${number} = ${element*number}` 
            return resultado 
        }
        resultado+=`${element} * ${number} = ${element*number}\n`
    }
    return resultado 
}