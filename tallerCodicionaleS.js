//1
var saludar="si";
 
if(saludar=="si"){
    console.log("Hola, soy un condicional simple");
}
//2
var x=20;
 
if(x<=20){
    console.log("La condición es verdadera");
}
//3
var edad=20;
 
if(edad>=18){	
    console.log("Bienvenido, puede ingresar");
}else{
    console.log("Lo siento, no tiene edad suficiente para entrar aquí");
}

//4
var numero1 = 5;
var numero2 = 8;
 
if(numero1<numero2) {
  console.log("numero1 no es mayor que numero2");
}
if(0<numero2) {
  console.log("numero2 es positivo");
}
if(0>numero1 || numero1 != 0) {
  console.log("numero1 es negativo o distinto de cero");
}
if(numero1+1<=numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
//5
var numerito = 100;
 
if(numerito<50) {
  console.log("numerito sí es estrictamente menor que 50");
}else if(numerito>50 && numerito<80) {
  console.log("numerito sí está entre 50 y 80");
}else if(numerito>80 && numerito<100) {
  console.log("numerito es mayor que 80 pero no mayor ni igual a 100");
}else if(numerito==100) {
  console.log("numerito es igual a 100");
}else{
    console.log("numerito es estrictamente mayor a 100");
}
 //6
var numerito = 90;
 
if(numerito<50) {
  console.log("numerito sí es estrictamente menor que 50");
}else if(numerito>50 && numerito<80) {
  console.log("numerito sí está entre 50 y 80");
}else if(numerito>80 && numerito<100) {
  console.log("numerito es mayor que 80 pero no mayor ni igual a 100");
}else if(numerito==100) {
  console.log("numerito es igual a 100");
}else{
    console.log("numerito es estrictamente mayor a 100");
}
//7
var numerito = 70;
 
if(numerito<50) {
  console.log("numerito sí es estrictamente menor que 50");
}else if(numerito>50 && numerito<80) {
  console.log("numerito sí está entre 50 y 80");
}else if(numerito>80 && numerito<100) {
  console.log("numerito es mayor que 80 pero no mayor ni igual a 100");
}else if(numerito==100) {
  console.log("numerito es igual a 100");
}else{
    console.log("numerito es estrictamente mayor a 100");
}0
//8
var numerito = 101;
 
if(numerito<50) {
  console.log("numerito sí es estrictamente menor que 50");
}else if(numerito>50 && numerito<80) {
  console.log("numerito sí está entre 50 y 80");
}else if(numerito>80 && numerito<100) {
  console.log("numerito es mayor que 80 pero no mayor ni igual a 100");
}else if(numerito==100) {
  console.log("numerito es igual a 100");
}else{
    console.log("numerito es estrictamente mayor a 100");
}
//9
var tocapolideportivo = "jueves";
var dia;
 
if(tocapolideportivo != "jueves"){
    dia = "no toca";
}else{
    dia = "si toca"
}
 
console.log("Este dia " + dia);
//10
x=9
y=3
if(x == 0 || y == 0){
  console.log("no se puede dividir")
}else{
  console.log("la division es " + x/y)
}

//11
var diaespecial="miercoles"


if (diaespecial =="lunes"){
console.log("el plato del dia es arroz con pollo")
}else if (diaespecial=="martes"){
  console.log("el plato del dia es Chuleta de Cerdo/Pollo")
}else if (diaespecial=="miercoles"){
  console.log("el plato del dia es Fríjoles")
}else if (diaespecial=="jueves"){
  console.log("el plato del dia es Sancocho de Pescado")
}else if (diaespecial=="viernes"){
  console.log("el plato del dia es Bandeja Paisa")
}else if (diaespecial=="sabado"){
  console.log("el plato del dia es ajiaco")
}else{
  console.log("el plato del dia es sancocho de gallina")
}
//12
 var caracteres = "8"
 
 
if(caracteres ==  "a"|| caracteres =="e" || caracteres == "i" || caracteres=="o"|| caracteres=="u" ){
 console.log("el caracter es una vocal")
}else if (caracteres == "1" || caracteres =="2" || caracteres=="3"|| caracteres=="4" || caracteres =="5"|| caracteres == "6" || caracteres =="7" || caracteres =="8" || caracteres =="9"){
  console.log("el caracter es un numero")
}else{
  console.log("el caracter es una consonante")
}