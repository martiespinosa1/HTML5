var contador = 0

function crearRecurs () {
    if (contador === 0) document.getElementById("inicial").remove();
    contador ++;
    document.getElementById("contador").innerHTML = "Tens un total de " + contador + " recursos"

    let titol = document.getElementsByTagName("input")[0].value;
    let url = document.getElementsByTagName("input")[1].value;
    let modul = document.getElementsByTagName("select")[0].value

    const nuevoDiv = document.createElement("div");
    document.querySelector("main").appendChild(nuevoDiv);
    
    switch (modul) {
        case "M02 - Bases de dades": {
            nuevoDiv.classList.add("rojo");
            break;
        }
        case "M03 - Programació": {
            nuevoDiv.classList.add("amarillo");
            break;
        }
        case "M04 - Llenguatge de marques": {
            nuevoDiv.classList.add("verde");
            break;
        }
    }

    const p = document.createElement("p");
    const a = document.createElement("a");

    nuevoDiv.appendChild(p);
    p.innerHTML = titol

    nuevoDiv.appendChild(a);
    a.innerHTML = "Visitar"
    a.href = url

    console.log(titol)
    console.log(url)
    console.log(modul)
}


function filtrarRecursos () {
    let modul = document.getElementsByTagName("select")[0].value

    switch (modul) {
        case "M02 - Bases de dades": {
            document.getElementsByClassName("amarillo")[0].style.opacity = 0
            document.getElementsByClassName("verde")[0].style.opacity = 0
            break;
        }
        case "M03 - Programació": {
            document.getElementsByClassName("rojo")[0].style.opacity = 0
            document.getElementsByClassName("verde")[0].style.opacity = 0
            break;    
        }
        case "M04 - Llenguatge de marques": {
            document.getElementsByClassName("amarillo")[0].style.opacity = 0
            document.getElementsByClassName("rojo")[0].style.opacity = 0
            break; 
        }
    }

}