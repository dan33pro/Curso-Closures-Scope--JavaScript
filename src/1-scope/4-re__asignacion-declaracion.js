var primerNombre;                   // Declarar / Undefined
primerNombre = 'Daniel';            // Asignar
console.log(primerNombre);

var apellido = 'Grandos';           // Declarar / asignar
apellido = 'Cespedes';              // Reasignar
console.log(apellido);          

var segundoNombre = 'Lucas';        // Declarar / asignar
var segundoNombre = 'Santiago';     // Re / delarar-asignar
console.log(segundoNombre+'\n');


//                    Let

let fruta = 'Mango';                // Declarar / asignar
fruta = 'Kiwi';                     // Reasignar
console.log(`A ${primerNombre} le fusta el ${fruta}`);
// let fruta = 'Banano';   // NO se puede Redeclarar Block-Scope


//                   Const

const animal = 'Perro';             // Declarar / asignar
console.log(`${primerNombre} tiene un ${animal}`);

// const animal = 'Elefante';   // NO se puede Redeclarar Block-scope
// animal = 'Gato';             // NO se puede Reasignar Block-scope

//         Conceptos de inmutabilidad

const vehiculos = [];
vehiculos.push('🚒', '🚙');
console.log("Vehiculos: "+vehiculos);
vehiculos.pop();
console.log(vehiculos);