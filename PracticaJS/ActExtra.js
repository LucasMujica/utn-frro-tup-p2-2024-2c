let nombre = prompt("Ingrese su nombre")
document.getElementById("nombre").textContent = "Nombre: " + nombre

let num1 = Number(prompt("Ingrese un numero"))
document.getElementById("num1").textContent = "Numero 1: " + num1

let num2 = Number(prompt("Ingrese un segundo numero"))
document.getElementById("num2").textContent = "Numero 2: " + num2

document.getElementById("suma").textContent = "Suma: " + num1 + " + " + num2 + " = " + (num1 + num2)

document.getElementById("resta").textContent = "Resta: " + num1 + " - " + num2 + " = " + (num1 - num2)

document.getElementById("multiplicacion").textContent = "Multiplicacion: " + num1 + " * " + num2 + " = " + (num1 * num2)

document.getElementById("division").textContent = "Division: " + num1 + " / " + num2 + " = " + (num1 / num2)

/* let nombre = prompt("Ingrese su nombre")
let num1 = Number(prompt("Ingrese un numero"))
let num2 = Number(prompt("Ingrese un segundo numero"))

document.write("Nombre: " + nombre)
document.write("Numero 1: " + num1)
document.write("Numero 2: " + num2)

document.write("Suma: " + num1 + " + " + num2 + " = " + (num1 + num2) + <br/>)
document.write("Resta: " + num1 + " - " + num2 + " = " + (num1 - num2) + <br/>)
document.write("Multiplicacion: " + num1 + " * " + num2 + " = " + (num1 * num2) + <br/>)
document.write("Division: " + num1 + " / " + num2 + " = " + (num1 / num2) + <br/>) */