function colorToBlack(e){
    console.log(e);
    e.target.classList.remove("inactive");
    e.target.classList.add("colored-pixel");
}
function reset(){
    const reset = document.querySelector("#restart")
    reset.addEventListener("click", () => {
        const gridBox = document.querySelector("#grid-box")
        while (gridBox.firstChild) {
            gridBox.removeChild(gridBox.firstChild);
        }
        makePixels(prompt("rows, please?"), prompt("columns, please?"))
    })   
}

function makePixels(rows = 16, cols = 16){
    const gridBox = document.getElementById("grid-box");
    gridBox.style.setProperty('--grid-rows', rows);
    gridBox.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        gridBox.appendChild(cell).classList.add("pixel", "inactive");
        
    };
    let pixels = Array.from(document.querySelectorAll(".pixel"));
    pixels.forEach(pixel => pixel.addEventListener("mouseover", colorToBlack));
}

makePixels()
reset()
