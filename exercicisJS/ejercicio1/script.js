let numUsuario = window.prompt("Introduce un número");


let numRandom = Math.floor(Math.random() * 100);

console.log(numRandom);
if(numUsuario != null) {
    do {
        
        if (numUsuario < numRandom) {
            window.alert("Más grande");
            numUsuario = window.prompt("T'has equivocat. Introduce un número");

        } else if (numUsuario > numRandom) {
            window.alert("Más pequeño");
            numUsuario = window.prompt("T'has equivocat. Introduce un número");
        }

    } while (numRandom != numUsuario)


    window.alert("HAS ACERTADO: " + numRandom);
} else if (numUsuario == null) {
    window.alert("Adios");
}