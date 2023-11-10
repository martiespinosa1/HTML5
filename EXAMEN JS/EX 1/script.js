function crearTablero() {
    document.querySelector("main").classList.add("bordeTablero");
    let fila = 1
    for (let div = 0; div < 64; div++) {
        const newDiv = document.createElement("div");
        document.querySelector("main").appendChild(newDiv);

        if (div % 8 === 0) fila++

        if (fila % 2 === 0) {
            if (div % 2 === 0) newDiv.classList.add("divBlanco");
            else newDiv.classList.add("divNegro");
        } else {
            if (div % 2 === 0) newDiv.classList.add("divNegro");
            else newDiv.classList.add("divBlanco");
        }
        
    }
    document.getElementsByTagName("button")[0].disabled = true
}
