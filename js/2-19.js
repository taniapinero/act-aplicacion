/*Crea un programa que mueste los números impartes que no sean múltiplo de 3 ni de 7 que hay del 100 al 1. Realiza versiones del programa usando bucles while, do while y for */

//Con bucle while
let num=100;
while (num>=1) {

    if (num % 2!==0 && num % 3!==0 && num % 7!==0) {
        console.log(num);
    }

    num--;
}

//Con bucle do-while
let num1=100;

do {

    if (num1 % 2!==0 && num1 % 3!==0 && num1 %7!== 0) {
        console.log(num1);
    }
    num1--;

} while (num1>=1);


//Con bucle for
let num2;
for (let num2=100; num2>=1; num2--) {

    if (num2 % 2!==0 && num2 % 3!==0 && num2 % 7!==0) {
        console.log(num2);
    }
}


