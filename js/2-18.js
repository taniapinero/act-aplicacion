/**Idea un programa en el que usar un bucle do while sea mejor idea que usar un bucle while */

let num;
let entradaCorrecta=false;

do {
    num = Number(prompt("Indica un número del 1 al 10: "));

    if (isNaN(num)) {
        alert("Error al ingresar los datos");
    } else if (num >= 1 && num <= 10) {
        alert("Número válido. El número indicado es " + num);
        entradaCorrecta = true;
    } else {
        alert("Número no válido. Indica otro.");
    }

} while (!entradaCorrecta);


