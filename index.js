//traer dependencia del

//import { restar, sumar } from './sumar.js'

import materias from './materias.js'

//let: variables
//let a = 10;
//const: constantes
//const b = 29;

//console.log(`suma de a+b:${ restar(a , b) }`);


//let { first_name , last_name , id , DNI} = estudiantes
//console.log(`Nombre estudiante ${ first_name }`)
//console.log(`Nombre estudiante ${ last_name }`)
//console.log(`Nombre estudiante ${ id }`)
//console.log(`Nombre estudiante ${ DNI }`)

//1. recorrido de arreglo
materias.forEach((materia) => {
    if(materia.profesor === 'Cristian Buitrago'){
        console.log( `Materias: ${materia.name}`)
        console.log( `Notas: ${materia.notas}`)
    }
})

//2. Convertir a un arreglo de profesores
let profesores = materias.map(function(materia){
    return materia.profesor
})

//3. agregar una materia
materias.push({
    id: 5,
    name: "Cultur Física",
    profesor: "Luis Baquero",
    notas: [
        2 ,
        3.5
    ]
})

//4. busqueda en arreglos
//find 
const PHP = materias.find(function(materia){
    return materia.profesor === 'Cristian Buitrago'
})

console.log(PHP)