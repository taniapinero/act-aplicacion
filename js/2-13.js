/*Elabora una calculadora. El programa debe pedirle al usuario un número, después un símbolo (+, -, *, /, **, %) y después otro número. El programa debe mostrar por consola el resultado de la operación */
let num1=0;
let num2=0;
let resultado=0;
let simbolo="";
let entadaCorrecta=false;

do{
num1=Number(prompt("Escribe un número"));
simbolo=String(prompt("Escribe un símbolo (+, -, *, /, **, %)"));
num2=Number(prompt("Escribe otro número"));

if (isNaN(num1) || isNaN(num2)) {
    alert("Error al ingresar los datos");
    entadaCorrecta=true;
}else{
    switch (simbolo) {
        case "+": resultado=num1+num2; break;
        case "-":resultado=num1-num2; break;
        case "*":resultado=num1*num2; break;
        case "/": resultado=num1/num2; break;
        case "**":resultado=num1**num2; break;
        case "%": resultado%num1+num2; break;
        default:  prompt("El símbolo no es correcto"); break; }
    
    alert("El resultado de la operación es " + resultado);
    
}
}while(entadaCorrecta!=false);




