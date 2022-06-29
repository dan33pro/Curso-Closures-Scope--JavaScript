// Variables

var a; // Declarando
var b = "b"; // Declaramos / Asignamos
var a = "aa"; // Redeclaración
b = "bb"; // Reasignación


// Global Scope
var fruit = "Manzana";  // Global
console.log(fruit);

function laMejorFruta() {
    console.log(fruit);
}

laMejorFruta();

function platos(){
    ensalada = 'Dulce'; // Global
    console.log(ensalada);
}

platos();
console.log(ensalada);