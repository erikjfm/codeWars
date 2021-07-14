const solve= s =>{
    let contadorActual=0;
    let contadorTotal=0;
    let string = s.split("");
    for(i=0;i<string.length;i++){
            if(string[i]=="a"||string[i]=="e"||string[i]=="i"||string[i]=="o"||string[i]=="u"){
                contadorActual++
                if(contadorActual>contadorTotal){
                    contadorTotal=contadorActual;
                }
            }
            else{
                contadorActual=0;
            } 
    }
    return contadorTotal;
};
console.log(solve("cuaaaaalquieraooioioioi"))