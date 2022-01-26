const boton = document.getElementById("color-btn");
boton.addEventListener("click", colorChange)

function colorChange() 
{
    document.body.classList.toggle("dark")
    boton.classList.toggle("actived");
}
