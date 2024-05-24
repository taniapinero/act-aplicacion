/*Desarrolla un programa con la lógica que desees donde expliques las diferencias de usar los operadores a++. a--, ++a --a. Utiliza los comentarios de una y varias líneas en tu explicación. */

let a = 5;
let resultado1;
let resultado2;
let resultado3;
let resultado4;

alert("Valor inicial de a -> " + a);

 resultado1 = a++; //Incremento
alert("Después de a++ el valor es " + resultado1); // Da 5 porque es el valor original de a

alert("Ahora a es " + a); // Muestra 6 (a incrementado en 1)

a = 5; // Reinicio al valor inicial

resultado2 = ++a;
alert("Después de ++a el resultado es " + resultado2);
alert("Ahora vale " + a); //  6

a = 5;// Reinio 
resultado3 = a--;
alert("Después de a-- el resultado es " + resultado3);

a = 5;// Reinio 
resultado4 = --a;
alert("Después de --a el resultado es " + resultado4);



    


