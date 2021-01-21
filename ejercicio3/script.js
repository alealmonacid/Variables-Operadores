//Realizar operaciones con dos números
//Se pide a usuario que ingrese dos numeros diferentes y mayores a cero.
//Se consulta grado de temperatura
var temp = prompt("ingrese temperatura en °C");
var temp =parseInt(temp);
//se da valor a los grados kelvin
var kelvin = 273.15;
var fahrenheit = 32;

var calculok = temp + kelvin;
var calculof = (temp * 9 / 5) + fahrenheit;
//calculo grados kelvin
document.write(temp + " °C + " + kelvin + " = " + calculok + "<br>");
//calculo grados farenheit
document.write("(" + temp + " °C * 9/5)" + fahrenheit + " = " + calculof + "<br>");