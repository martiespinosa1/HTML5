// Definir la función para generar un número aleatorio
function generarNumeroAleatorio() {
    // Generar un número aleatorio entre 0 y 99999
    var numeroAleatorio = Math.floor(Math.random() * 100000);
    // Rellenar con ceros al inicio si el número tiene menos de 5 cifras
    numeroAleatorio = numeroAleatorio.toString().padStart(5, '0');
    return numeroAleatorio;
}

// Llamar a la función cuando se cargue el documento
document.addEventListener("DOMContentLoaded", function() {
    var numeroRandom = generarNumeroAleatorio();
    numerorandomSplit = numeroRandom.split("")
    console.log(numeroRandom);
});

var intents = 0;
var numerosCorrectes = 0

function comprobar() {
    numerosCorrectes = 0
    if (intents < 5) {
        var numUsuari = document.getElementById("numUsuari").value;
        numUsuariSplit = numUsuari.split('')
        for (let i = 0; i < 5; i++) {
            const newdiv = document.createElement("div");
            newdiv.className = "newdiv"
            document.querySelector("main").appendChild(newdiv);
            newdiv.classList.add("newdiv");

            newdiv.innerHTML = numUsuariSplit[i]

            if (numUsuariSplit[i] === numerorandomSplit[i]) {
                newdiv.style.backgroundColor = "#00cd00"
                numerosCorrectes++
            } else {
                for (let j = 0; j < 5; j++) {
                    if (numUsuariSplit[i] === numerorandomSplit[j]) newdiv.style.backgroundColor = "#ffd731"
                }   
            }
        }
        document.getElementById("numUsuari").value = ""
        intents++
    
    } if (numerosCorrectes === 5) {
        document.getElementById("rojo").innerHTML = "Has guanyat!" 
        document.getElementById("rojo").style.backgroundColor = "#00cd00"    
        intents = 5
    } else {
        switch (intents) {
            case 1: {
                document.getElementById("rojo").innerHTML = "Segon intent, sort!" 
                break
            } case 2: {
                document.getElementById("rojo").innerHTML = "Tercer intent, sort!"
                break
            } case 3: {
                document.getElementById("rojo").innerHTML = "Quart intent, sort!"
                break
            } case 4: {
                document.getElementById("rojo").innerHTML = "Últim intent, sort!"
                break
            } default: document.getElementById("rojo").innerHTML = "Has perdut"
    
        }
    }
    
}
