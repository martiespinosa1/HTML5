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
    var numero = generarNumeroAleatorio();
    console.log(numero);
});