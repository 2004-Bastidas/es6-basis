function imprimir( c ) {
    console.log(c)
}


//callback: funcion a jecutar dentro de sumar
function sumar(a , b , callback){
    let suma = a + b
    imprimir(suma)
}

let resultado = 0

//ejecutar: llamar a sumar
sumar(7, 8 , imprimir(resultado) )