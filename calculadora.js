function suma(n1,n2){
    var resultado = n1+ n2;
    var mensaje= " el total suma " + n1 + " y " + n2 + " es igual a "
 + resultado;
 //return mensaje;
 return resultado
}
function resta(n1,n2){
    var resultado = n1- n2;
    var mensaje= " el total de la resta " + n1 + " y " + n2 + " es igual a "
 + resultado;
 //return mensaje;
 return resultado
}
function multiplicar(n1,n2){
    var resultado = n1*n2;
    var mensaje= " el total de la multiplicacion " + n1 + " y " + n2 + " es igual a "
 + resultado;
 //return mensaje;
 return resultado
}
function division(n1,n2){
    var resultado = n1/ n2;
    var mensaje= " el total de la division" + n1 + " y " + n2 + " es igual a "
 + resultado;
// return mensaje;
 return resultado
}
function potencia(n1,n2){
    var resultado = n1**n2;
    var mensaje= " el total de la potencia " + n1 + " a la " + n2 + " es igual a "
 + resultado;
 //return mensaje;
 return resultado
}


function main_calculadora(){
var menu = prompt("¿que operacion desea hacer? (digite el numero)\n 1.suma \n 2.resta \n 3.multiplicacion \n 4. division \n 5. potencia \n 6.doble de la suma \n 7.mitad de la potencia \n 8.el producto de dos numeros aumentado en 3")
var numero1 = parseFloat(prompt("ingrese el primer valor:"))
var numero2 = parseFloat(prompt("ingrese el segundo valor:"))
if(menu==1){
    console.log(suma(numero1,numero2))
}else if(menu==2){
    console.log(resta(numero1,numero2))
}else if(menu==3){
    console.log(multiplicar(numero1,numero2))
}else if(menu==4){
    console.log(division(numero1,numero2))
}else if(menu==5){
    console.log(potencia(numero1,numero2))
}else if (menu==6){
    var sumaNumeros = suma (numero1, numero2);
    console.log(multiplicar(sumaNumeros, 2));
}else if (menu == 7){
    var potenciaNumeros=potencia (numero1,numero2);
  console.log (division (potenciaNumeros, 2))
}else if(menu==8){
    var multiplicacionNumeros = multiplicar(numero1,numero2)
    console.log(suma(multiplicacionNumeros,3)  )
}
}
