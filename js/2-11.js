/**Escribe un fragmento de código donde se aprecie la diferencia de usar los tipos
 * de variables let, var y const*/

const PRECIO=50;
var producto=10;
const IVA = 21;
let total=0;

total = (PRECIO * (IVA/100 + 1))*producto;
console.log("El precio total es " + total);

