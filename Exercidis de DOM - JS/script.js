// EXERCICI 1
function estiljs() {
    document.getElementById("text").style.color = "red";
}

// EXERCICI 2
function prenValorForm() {
    let nom = document.getElementsByTagName("input")[0].value;
    let cognom = document.getElementsByTagName("input")[1].value;

    console.log("Nom: " + nom);
    console.log("Cognom: " + cognom);
}

// EXERCICI 3
function lorem() {
    document.getElementsByClassName("lorem")[0].style.backgroundColor = "lightblue";
    document.getElementsByClassName("lorem")[1].style.backgroundColor = "lightblue";
}

// EXERCICI 4
function obtenirAtributs() {
    let element = document.getElementById("itb");
    let atributes = element.attributes;
    console.log(atributes);
}

// EXERCICI 5
function insertarFilaAdalt() {
    document.getElementById('Taula').insertRow(0).innerHTML = '<td>fila 0 cel·la 1</td><td>fila 0 cel·la 2</td>'
}
function insertarFilaAbaix() {
    document.getElementById('Taula').insertRow(-1).innerHTML = '<td>fila 3 cel·la 1</td><td>fila 3 cel·la 2</td>'
}

// EXERCICI 6
function modificarValor() {
    document.getElementsByTagName("td")[5].innerHTML = "Valor modificado"
}
function modificarValorUsuari() {
    let fila = window.prompt("De quina fila mols vodificar el valor? (0 o 1)");
    let columna = window.prompt("De quina columna vols modificar el valor? (0 o 1)");
    document.getElementsByTagName("table")[1].rows[fila].cells[columna].innerHTML = "Valor modificado";
}

// EXERCICI 7
function crearTablaPersonalizada() {
    let filas = parseInt(window.prompt("De quantes files vols la taula?"));
    let columnas = parseInt(window.prompt("De quantes columnes vols la taula?"));
    let miTabla = document.getElementsByTagName("table")[2];
    miTabla.innerHTML = ""

    for (let i = 0; i < filas; i++) {
        let filasTabla = document.createElement("tr");
        for (let j = 0; j < columnas; j++) {
            let celaTabla = document.createElement("td");
            miTabla.appendChild(celaTabla);
        }
        miTabla.appendChild(filasTabla)
    }
}