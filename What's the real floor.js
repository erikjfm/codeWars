const getRealFloor= n =>{
    let resultado=0; 
    if(n>0&&n<=12){
        n--;
        resultado=n;  
      }
    if(n>13 ){
        resultado=n-2;
      }
      else{resultado=n}
    return resultado;
};