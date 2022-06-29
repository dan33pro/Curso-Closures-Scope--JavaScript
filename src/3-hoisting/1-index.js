console.log(nameOfDog);
var nameOfDog = 'Elmo';
console.log(nameOfDog);

// JavaScript hace esto
var nameOfCat; // Undefined
console.log(nameOfCat);
var nameOfCat = 'Lucas';
console.log(nameOfCat);


//  También se aprecia aquí
namePet();

function namePet() {
    console.log(`La mejor mascota es ${luna}`);
}

var luna = 'Lunita';

// JavaScript hace esto
var lucas; // Undefined
function namePeople() {
    console.log(`El mejor dueño es: ${lucas}`);
}
namePeople();
var lucas = 'Luck';
