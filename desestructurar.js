let colors = require('colors');
const estudiantes1 = ["Juan Diego" , 
                      "Juan Camilo" ,
                      "Laura" ,
                      "Nicolas"];

const estudiantes2 = [
                        "Enrique",
                        "Michael",
                        "Daniela",
                        "Julian"
                    ]

//operador espread(resto)
const estudiantes3 = [ 'Veronica' ,
                       ...estudiantes1 ,
                       'Paula' ,
                       ...estudiantes2 ]                    

console.log(estudiantes3)
