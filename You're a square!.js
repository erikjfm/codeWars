const isSquare= n =>{
let resultado;
    if(n<0){
        resultado=false;
    }
    for (let i = 0; i <= n; i++) {
        let mult=i*i;
        if(mult===n){
            resultado= true;
            return resultado;  
            }
            else{   
            resultado=false;   
            }
    }
    return resultado;
};