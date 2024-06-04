/*Escribe un conversor de tiempo. El programa debe pedirle al usuario una cantidad de días, horas y minutos, y el programa devolverá la cantidad de segundos que son. */

let segundos=0;

let dias=Number(prompt("Cantidad de días -> "));
let horas=Number(prompt("Cantidad de horas -> "));
let minutos=Number(prompt("Cantidad de minutos -> "));

segundos=dias*86400;
segundos+=horas*3600;
segundos+=minutos*60;

alert("El número total de segundos son " + segundos);


