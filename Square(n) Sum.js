function squareSum(numbers){
    let resultado=0
    numbers.forEach(element => resultado = resultado+ Math.pow(element,2));
    return resultado
}