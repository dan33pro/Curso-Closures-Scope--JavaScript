function fruta() {
    if (true) {
        var fruta1 = 'Manzana';     // Function Scope
        let fruta2 = 'Kiwi';        // Block Scope
        const fruta3 = 'Banano';    // Block Scope
        console.log(fruta2);
        console.log(fruta3);
    }

    console.log(fruta1);
    // console.log(fruta2);    no definido
    // console.log(fruta3);    no definido
}

fruta();