let mensaje = document.getElementById("mensaje")
let alerta = document.getElementById("alerta")
let button = document.getElementById("button")
let titulo = document.getElementById("title")

setTimeout(cambiarMensaje, 3300)

function cambiarMensaje() {

    mensaje.innerText = "Me enamoré exitosamente!"

}

setTimeout(enviarAbrazo, 3700)

function enviarAbrazo() {

    alerta.style.display = "block"

}

button.addEventListener("click", presionarBoton)

function presionarBoton() {

    alerta.style.display = "none"
    titulo.innerText = "Escribamos nuestra historia!!"


}