// juan jose espinoza y sofia aguiar 
//primer punto
var variable = "Mostrar";
 
if (variable=="Mostrar" ){
   console.log("La condición es verdadera")
}

//segundo punto 
var valor=13;
 
if (valor >= 10 && valor <= 15){
   console.log("El valor es correcto")
}
//tercer punto 
var numero=  5;
 
if (numero !=7 ){
   console.log("El número es diferente que 7");
}else if(numero==="5"){
    console.log('El número es igual a "5" en valor y tipo');
}else if(numero==5){
    console.log("El número es igual a 5 en valor");
}else if(numero>12 || numero<15){
    console.log("El número es mayor que 12 y menor a 15");
}

//Respuesta 3.A
numero= 4
//Respuesta 3.B
    numero= "5"
//Respuesta 3.C
    numero= 5
//Respuesta 3.D
    numero=13

//cuarto punto 
var numero1 = 2
var numero2 = 2
if (numero1>numero2){
    console.log (numero1 + "es mayor a" + numero2)
} else if (numero1 < numero2){
    console.log(numero1 + "es menor que" + numero2)
}else {
    console.log (numero1 + " y "  +  numero2 + "son iguales")
}
 // quinto punto 
 var idioma="español"


if (idioma =="español"){
console.log("Hola, ¿cómo estás?")
}else if (idioma=="ingles"){
  console.log("Hello, how are you?")
}else if (idioma=="frances"){
  console.log("Bonjour, comment allez-vous ?")
}else if (idioma=="italiano"){
  console.log("Ciao, come stai?")

}else{
  console.log("aun no posee el saludo en este idioma")
}

//sexto punto 
var cantidadbolas=4
var toppinghelado="oreo"
var total
var valorbolas
valorbolas=cantidadbolas*1000
if (toppinghelado=="oreo"){
  total =  valorbolas + 1000
console.log ("el helado cuesta" + total)
}else if (toppinghelado=="chocolate"){
    total =  valorbolas + 2000
    console.log ("el helado cuesta" + total)
}else if (toppinghelado=="KitKat"){
    total =  valorbolas + 2500
console.log ("el helado cuesta" + total)
}else if (toppinghelado=="brownie"){
    total =  valorbolas + 3000
    console.log ("el helado cuesta" + total)
}else{
console.log ("no contamos con ese topping" )
}

