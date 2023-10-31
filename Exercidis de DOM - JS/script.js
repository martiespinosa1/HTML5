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