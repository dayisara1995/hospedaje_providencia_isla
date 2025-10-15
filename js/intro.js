//Tipos de Dato
//number, string, boolean, undefined, null, bigint, 

65 //number

"65" //string - cadena de caracteres (es un texto)
'Hola' //string
    `Hola ${}` //string. Comillas invertidas para colocar código de JavaScript

// comentario en línea; /*comentario con cierre especifico*/

true //boolean
false //boolean

// (5 > 21) //false
// (65 + 74) //number

//Variables
let edad; //creación de la variable
const NOMBRE = "Roxana"; //no puedo modificar esta variable
// var (no se aconseja su uso, let es mas actual)

let miPrimeraVariable = (5 > 21); //camel case, no se comienza con números, no se usan espacios ni guiones
let calculo = (24 - 5);

console.log(calculo);
console.log(miPrimeraVariable);

//typeof


//Funciones
function nombreFuncion(parametro, parametro2)  /*normalmente la funcion comienza por un verbo, porque es una serie de instrucciones para realizar algo*/ {
    typeof parametro;
    parametro2++;
    let resultado = parametro2 + 27;
    return resultado;
}

let resultadoFuncion = nombreFuncion(edad, calculo);


let crearLista = () => {
}

// Object     clave: valor,            -----no van guardados con posición como los Arrays sino por clave y valor-------
let persona1 = {
    nombre: "Raul",
    edad: 23,
    esPremium: false,
    tel: "5454212"
}

// Arrays         0        1        2
let nombres = ["Raul", "Pepita", "Maria"];


// DOM - Document Object Model (Modelo de Objetos del Documento) ----estructura como javascript interactua con la página web----
document.head.title //se usa document. para llegar a un elemento de HTML
document.body

let caja = document.getElementById("caja")

document.getElementsByClassName("noticias");

document.querySelector("#caja") //usar el selector de CSS, ejemplo de ID las almohadillas
document.querySelector(".noticias") //ejemplo con clases
document.querySelector("p") //ejemplo con parrafos

//------------------------------

//
let opcion1 = document.querySelector("·opcion1");
let opcion2 = document.getElementById("opcion2");




//Enlazar un archivo JavaScript externo. En el HTML, usa la etiqueta <script> con el atributo src para apuntar al archivo .js.  <script src="script.js"></script> ----justo antes de cerrar la etiqueta </body> para asegurar que el contenido HTML se cargue completamente antes de que se ejecute el código JavaScript.
//Escribir JavaScript directamente en HTML: Coloca el código JavaScript dentro de las etiquetas <script> y puedes colocar esta etiqueta en la sección <head> o <body>. <body> <h1>Hola Mundo</h1> <script> alert("¡Hola desde JavaScript!"); </script> </body>