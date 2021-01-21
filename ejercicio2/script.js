//Realizar operaciones con dos números
//Se pide a usuario que ingrese dos numeros diferentes y mayores a cero.
//Se consulta si n1 es distinto a n2 y ambos son mayores a 0
do {
    var num1 = parseInt(prompt("Ingrese primer número (debe ser distinto de cero): "));
} while (num1 == 0);

do {
    var num2 = parseInt(prompt("Ingrese segundo número (debe ser distinto de cero y distinto del primer número ingresado): "));
} while (num2 == 0 || num2 == num1);

//se añaden operaciones matemáticas
var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;
var modulo = num1 % num2;

//se hace consulta mediante If - Else 
document.write("El resultado de la suma entre " + num1 + " y " + num2 + " es " + suma + "<br>");
document.write("El resultado de la resta entre " + num1 + " y " + num2 + " es " + resta + "<br>");
document.write("El resultado de la multiplicación entre " + num1 + " y " + num2 + " es " + multiplicacion + "<br>");
document.write("El resultado de la division entre " + num1 + " y " + num2 + " es " + division + "<br>");
document.write("El resultado del modulo entre " + num1 + " y " + num2 + " es " + modulo);