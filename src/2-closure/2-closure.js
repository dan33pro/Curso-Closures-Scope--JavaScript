function saludar() {
    let userName = 'Daniel';

    function displayUserName() {
        return `Hola ${userName}`;
    }
    return displayUserName;
}

const saludo = saludar();
console.log(saludo);
console.log(saludo());