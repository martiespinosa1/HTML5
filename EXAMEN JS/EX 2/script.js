function anadirTarea() {
    document.getElementById("default").innerHTML = "";

    let tarea = document.getElementsByTagName("input")[0].value;
    
    let prioridad = document.getElementsByName("prioridad")[0].value;

    const newDiv = document.createElement("div");
    document.querySelector("main").appendChild(newDiv);
    newDiv.innerHTML = tarea
    newDiv.classList.add("divNegro");

    switch (prioridad) {
        case "1":
            newDiv.classList.add("verde");
            break;
        case "2":
            newDiv.classList.add("amarillo");
            break;
        case "3":
            newDiv.classList.add("rojo");
            break;
    }
}