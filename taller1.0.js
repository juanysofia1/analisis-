console.log("primer punto");
var litrospiscina;
var horastardadas;

litrospiscina = prompt("por favor ingrese la cantidad de litros que caben en la piscina");
horastardadas = litrospiscina/145
console.log("las horas que se tarda la piscina es llenarse es de " + horastardadas + " h");

console.log("puntos 2,3,4");
var metros
var milimetros 
var decimetro
var kilometro

metros = prompt("por favor digite los metros que desea convertir a milimetros");
milimetros = metros * 1000
console.log("la longitud de metros convertidos a milimetros es " + milimetros + " mm");

decimetro = milimetros/100
console.log("lo milimetros convertidos anteriormente, en decimetros equivalen a "+ decimetro +" dm");
 
kilometro = decimetro/10000
console.log("lo decimetros convertidos anteriormente en kilometros equivalen equivalen a "+ kilometro +" km");

console.log("punto 5");

var horas
var valort

horas = prompt ("por favor digite las horas que va a estar en llamada");
valort = 120 * 60 * horas
console.log("el valor total de la llamada es de $ "+ valort);
 
console.log("punto 6")
var cantidadhoras
var totalpagar

cantidadhoras = prompt("por favor ingrese el numero de horas de clase");
totalpagar = 40000 + (25000 * (cantidadhoras - 1))
console.log("el total a pagar por las horas vistas es de $ "+ totalpagar);
