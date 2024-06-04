// Escribe un programa que ponga en práctica la siguiente lógica:
// - Mostrará el siguiente menú y el usuario deberá elegir una de las opciones
// a. Área del triángulo (b*h/2)
// b. Área del rectángulo (b*h)
// c. Área del círculo (PI*r**2)
// d. Salir
// - En función de la opción que elija el usuario, se le pedirán los datos necesarios en cada caso
// - El programa calculará el resultado y lo mostrará en la consola
// - La lógica anterior se repetirá indefinidamente hasta que el usuario pulse la tecla de salir

let opciones=0;
let resultado=0;
let b=0;
let h=0;
let radio=0;
let salir=0;


do{
opciones=Number(prompt("Escribe una opción -> [1]Área del triángulo [2]Área del rectángulo [3]Área del círculo [4]Salir"));

switch (opciones) {
    case 1:{
        b=Number(prompt("Indica la base:"));
        h=Number(prompt("Indica la altura:"));

        resultado=(b*h/2);

        alert("El área del triángulo es " + resultado);
        break;
    }

    case 2:{
        b=Number(prompt("Indica la base:"));
        h=Number(prompt("Indica la altura:"));

        resultado=(b*h);

        alert("El área del rectángulo es " + resultado);
        break;  
    }
        
    case 3:{
        radio=Number(prompt("Radio:"));

        resultado=(Math.PI*radio**2);

        alert("El radio es " + resultado);
        break; 
    } 
    
    case 4:{
        salir=1;
        alert("Saliendo del programa...");
        break;
    }

    default:
    
        break;
}
}while (salir==0);