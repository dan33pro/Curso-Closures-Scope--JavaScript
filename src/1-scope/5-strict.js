'use strict';
pi = 3.1416; // NO ha sido definido
console.log(pi);

// Sin el modo stricto JavaScript con hoisting y
// elevación de variables hace esto
// var pi; // undefined
// pi = 3.1416;
// console.log(pi);

function miFuncion(){
    // Este ya esta arriba pero lo dejo para saber que se puede
    //solo en este bloque ⬇️
    'use strict';
    return pi = 3.1416;
}

console.log(miFuncion()); 