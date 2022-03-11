console.log("Solucion del punto #1");

var numlado = prompt ("Por favor ingrese la medida del lado para hallar el área del cuadrado ");
var area;
area = numlado * numlado;
console.log ("el area del cuadrado es: "+ area );

var medidalado = prompt ("Por favor ingrese la medida del lado para hallar el volumen del cubo ");
var volumen;
volumen  = medidalado**3
console.log("el volumen del cubo es: "+ volumen );

console.log("Solucion del punto #2");

var numbase = prompt("Por favor ingrese la medida del base para hallar el area del rectangulo ");
var arear;
var numl = prompt("Por favor ingrese la medida del lado para hallar el area del rectangulo ");
arear = numbase * numl
console.log("el area del rectangulo es: "+ arear);

var perimetro;
perimetro = numbase* 2 + numl* 2
console.log("el perimetro del rectangulo es: "+ perimetro);

console.log("Solucion del punto #3");

var diametro = prompt("Por favor ingrese la medida del diametro para hallar el area del circulo");
var areaa;
areaa = diametro*Math.PI
console.log("el area del circulo es: "+areaa);
var radio = prompt("Por favor ingrese la medida del radio para hallar el volumen de  la esfera");
var volumen;
volumen = 4/3*Math.PI*radio**3
console.log("el volumen de la esfera es:"+volumen); 

console.log("Solucion Punto #4");


var base1 = prompt("Favor de ingresar la primera base");
var base2 = prompt("Favor de ingresar la segunda base");
var h = prompt("Favor de ingresar la altura") ;
console.log("El Area Del Trapezoide Es ", + (h * (base1 + base2) / 2) ); // profe califique la formula

console.log("Solucion Punto #5");


var ancho = prompt("por favor ingresa el ancho de la piscina");
var largo = prompt("por favor ingresa el largo de la piscina");
var profundo = prompt("por favor ingresa el largo de la piscina");
console.log("La piscina se llenaria con", + ancho * largo * profundo, "litros");

console.log("Solucion Punto #6");



var totall
var altoo = prompt("por favor ingresa el alto");
var anchoo = prompt("por favor ingresa el ancho");
totall = (altoo * anchoo) * 22000
console.log("El Total que debe pagar al pintor es de: $ " + totall );

console.log("Solucion Punto #7a");


var cm = prompt("por favor ingrese la longitud de centimetros que quieres convertir a kilometros");
var resultadoo = cm*(1/100)*(1/1000)
console.log("Los Centimetros convertidos a kilometros son " + resultadoo + "Km");

console.log("Solucion Punto #7b");


var dl = prompt("por favor ingrese los decilitros que desea convertir a litro");
var resultadooo = dl*(0.1/1.0);
console.log("Los Decilitroso convertidos a litros son " + resultadooo + "L");

console.log("Solucion Punto #7c");


var mg = prompt("Favor ingresar los microgramos que quieres convertir a gramos");
var resul = mg*(1.0/1000000);
console.log("Los Microgramos convertidos a gramos son " + resul + "G");

console.log("Solucion Punto #7d");

var resultad;
var kilito = prompt("Favor ingresar los kilometros que quieres convertir a milimetros");
resultad = kilito*1000000
console.log("Los Kilometros han sido convertidos son " + resultad + " mm");
