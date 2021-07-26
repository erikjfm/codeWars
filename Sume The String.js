const sumStr=(a,b)=> {
    parseInt(a)
    parseInt(b)
    resultado= parseInt(a)+parseInt(b)
    if(a==""){
        a=0
        resultado= a + parseInt(b)
    }
    if(b==""){
        b=0
        resultado= parseInt(a)+ b
    }
    console.log(a)
    return resultado.toString()   
}