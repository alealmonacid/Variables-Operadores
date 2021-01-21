//solicitar 5 numeros
var num1 = prompt("Ingrese primer numero");
var num2 = prompt("Ingrese segundo numero");
var num3 = prompt("Ingrese tercer numero");
var num4 = prompt("Ingrese cuarto numero");
var num5 = prompt("Ingrese quinto numero");
//se declaran los num como numeros enteros
var num1 = parseInt(num1);
var num2 = parseInt(num2);
var num3 = parseInt(num3);
var num4 = parseInt(num4);
var num5 = parseInt(num5);

//calculo suma
suma= num1+num2+num3+num4+num5;
//calculo promedio
promedio= (num1+num2+num3+num4+num5)/5;

document.write("la suma de los 5 numeros da un total de "+suma+"<br>");
document.write("el promedio de los 5 numeros da un total de "+promedio+"<br>");
