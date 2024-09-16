//1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”. 
//alert("Hello World")

//2. Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
//document.write("Hello World<br/>")

//3. Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
//document.write(3+5)

//4. Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
//let nombre = prompt("Ingrese su nombre")
//alert("Hola " + nombre)

//5. Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
//let num1 = Number(prompt("Ingrese numero 1"))
//let num2 = Number(prompt("Ingrese numero 2"))
//alert("La suma de " + num1 + " y " + num2 + " es: " + (num1 + num2)) 

//6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
/* let num1 = Number(prompt("Ingrese numero 1"))
let num2 = Number(prompt("Ingrese numero 2"))
if (num1 > num2) {
    document.write("El numero mayor es: " + num1)
} else {
    document.write("El numero mayor es: " + num2)
} */

//7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
/* let num1 = Number(prompt("Ingrese numero 1"))
let num2 = Number(prompt("Ingrese numero 2"))
let num3 = Number(prompt("Ingrese numero 3"))

if (num1 > num2 && num1 > num3) {
    document.write("El numero mayor es: " + num1)
} else if (num2 > num1 && num2 > num3) {
    document.write("El numero mayor es: " + num2)
} else if (num3 > num1 && num3 > num2) {
    document.write("El numero mayor es: " + num3)
} */

//8. Escribe un programa que pida un número y diga si es divisible por 2
/* let num = Number(prompt("Ingrese un numero"))

if (num%2==0) {
    document.write("El numero es divisible por 2")
} else {
    document.write("El numero NO es divisible por 2")
} */

//9. Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
/* let frase = String(prompt("Ingrese una frase"))
let longitud = frase.length
let contador = 0

for (let i = 1; i < longitud; i++) {
    if (frase[i] == "a" || frase[i] == "A") {
        contador++
    }
}

document.write("La letra A aparecer " + contador + " veces.") */

//10. Escribe un programa que pida una frase y escriba las vocales que aparecen 
/* let frase = String(prompt("Ingrese una frase"))
let longitud = frase.length
let contador = 0

for (let i = 1; i < longitud; i++) {
    if (frase[i] == "a" || frase[i] == "A") {
        contador++
    }
} */

//13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
/* let num = Number(prompt("Ingrese un numero"))

if (num % 2 == 0) {
    document.write("El numero es divisible por 2")
} else if (num % 3 === 0) {
    document.write("El numero es divisible por 3")
} else if (num % 5 === 0) {
    document.write("El numero es divisible por 5")
} else if (num % 7 === 0) {
    document.write("El numero es divisible por 7")
} else {
    document.write("El numero no es divisible por 2, 3, 5 o 7")
} */

//14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)
/* let num = Number(prompt("Ingrese un numero"))
let divisible = false
let impresion = "El numero es divisible por: "

if (num % 2 === 0) {
    impresion += " 2"
    divisible = true
}

if (num % 3 === 0) {
    impresion += " 3"
    divisible = true
}

if (num % 5 === 0) {
    impresion += " 5"
    divisible = true
}

if (num % 7 === 0) {
    impresion += " 7"
    divisible = true
}

if (divisible === true) {
    document.write(impresion)
} else {
    document.write("El numero NO es divisible por 2, 3, 5 o 7")
} */

//15. Escribir un programa que escriba en pantalla los divisores de un número dado
/* let num = Number(prompt("Ingrese un numero"))
let impresion = "Los divisores de " + num + " son : "

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        impresion += i + " "
    }
}

document.write(impresion) */

//16. Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
/* let num1 = Number(prompt("Ingrese un numero"))
let num2 = Number(prompt("Ingrese un segundo numero"))
let menor = Math.min(num1, num2)
let impresion = "Los divisores comunes de " + num1 + " y " + num2 + " son : "

for (let i = 1; i <= menor; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        impresion += i + " "
    }
}

document.write(impresion) */

//17. Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o uno) 
/* let num = Number(prompt("Ingrese un numero"))
let esPrimo = true;

if (num != 1) {
    for (let i = 2; i <= num - 1; i++) {
        if (num % i === 0) {
            esPrimo = false
        }
    }
} else {
    esPrimo = false
}

if (esPrimo === true) {
    document.write("El numero " + num + " es primo")
} else {
    document.write("El numero " + num + " NO es primo")
}  */

//18. Pide la edad y si es mayor de 18 años indica que ya puede conducir
/* let edad = Number(prompt("Ingrese su edad"))
let esMayor = true

if (edad<18) {
    esMayor = false
}

if (esMayor === true) {
    alert("Usted esta habilitado para conducir")
} else {
    alert("Usted NO esta habilitado para conducir")
}  */

/*19. Pide una nota (número). Muestra la calificación según la nota:
● 0-3: Muy deficiente
● 3-5: Insuficiente
● 5-6: Suficiente
● 6-7: Bien
● 7-9: Notable
● 9-10: Sobresaliente */
/* let nota

do{
    nota = Number(prompt("Ingrese su nota"))

    switch (true) {
        case (nota >= 0 && nota < 3):
            alert("Muy deficiente");
            break;
        case (nota >= 3 && nota < 5):
            alert("Insuficiente");
            break;
        case (nota >= 5 && nota < 6):
            alert("Suficiente");
            break;
        case (nota >= 6 && nota < 7):
            alert("Bien");
            break;
        case (nota >= 7 && nota < 9):
            alert("Notable");
            break;
        case (nota >= 9 && nota <= 10):
            alert("Sobresaliente");
            break;
        default:
            alert("Ingrese un numero entre 0 y 10");
    }
} while (nota < 0 || nota > 10) */

/* 20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión */
/* let texto
let concat = ""

while (true) {
    texto = prompt("Introduce una cadena de texto (presione cancelar para finalizar")

    if (texto === null) {
        break
    }

    if (concat !== "") {
        concat = concat + " - " + texto
    } else {
        concat = texto
    }

}

alert(concat) */

/* 21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar”
deberá indicarse la suma total de los números introducidos. */
let num
let suma = 0

while (true) {
    num = prompt("Introduce un numero (presione cancelar para finalizar")

    if (num === null) {
        break
    }

    num = Number(num)

    if (isNaN(num)) {
        alert("Lo que introdujo no es numero")
    } else {
        suma += numero
    }
}

document.write(suma)