//Solicitar dias

var dias_solicitados = prompt("Ingrese cantidad de dias");
var dias_solicitados = parseInt(dias_solicitados);

//calcular año, semana y dias
var anos = parseInt(dias_solicitados/365);
var semanas = parseInt((dias_solicitados%365)/7);
var dias = parseInt((dias_solicitados%365)%7);

//resultado
document.write(anos+" Años "+semanas+" semanas "+dias+" dias.");