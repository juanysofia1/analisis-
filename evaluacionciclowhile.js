console.log("primer punto");
var  numero = parseInt(prompt("ingrese el numero hasta el cual desea llegar y quiere conocer los multiplos de 5"));
var acum = 0;
 
while(acum<=numero){
    if(acum%5==0){
      console.log("el numero "+acum+" es multiplo de 5")
    }else{
        console.log("el numero "+acum+" no es multiplo de 5" )
    }

    acum+=1
}
console.log("segundo punto");
var cantidadarticu = parseInt(prompt("porfavor ingrese la cantidad de articulos que desea registrar"));

var valortotal= 0;
var cicloo2 = 0;
while(cicloo2<cantidadarticu){
        var precio=parseInt(prompt("porfavor ingrese el valor del articulo"));
       valortotal += precio
       cicloo2+=1
}
console.log("el valor total es "+valortotal)

console.log("tercer punto");

var valortotal= 0;
var cicloo2 = 0;
var respu=prompt("si deseas ingresar un articulo ponga si y si no desea ponga no")
while(respu=="si"){
        var precio=parseInt(prompt("porfavor ingrese el valor del articulo"));
       valortotal += precio
       cicloo2+=1
       respu=prompt("si deseas ingresar un articulo ponga si y si no desea ponga no")
}
console.log("el valor total es "+valortotal)

console.log("cuarto punto");

var valortotal= 0;
var cicloo2 = 0;
var respu=prompt("si deseas ingresar un articulo ponga si y si no desea ponga no")
while(respu=="si"){
        var precio=parseInt(prompt("porfavor ingrese el valor del articulo"));
       valortotal += precio
       cicloo2+=1
       respu=prompt("si deseas ingresar un articulo ponga si y si no desea ponga no")

      
}
console.log("el valor total es "+valortotal)
if(cicloo2>=25){
      var descuentico =  valortotal*0.8
      console.log("y con el descuento el precio total es de "+descuentico)
}else if(cicloo2>=15){
  var descuentico =  valortotal*0.85
  console.log("y con el descuento el precio total es de "+descuentico)
}else if(cicloo2>=8){
  var descuentico =  valortotal*0.90
  console.log("y con el descuento el precio total es de "+descuentico)
}else{
  console.log("su compra no tiene descuento")
}

console.log("quinto punto")
var perdio = 0
var cantidadnota = parseInt(prompt("ingrese la cantidad de notas que hay en el curso")); ; 
var notaactual
var cicl = 1
 var gano = 0
 
while(cicl<=cantidadnota){
  
   var notaactual=parseFloat(prompt("ingrese la nota final del estudiante "+cicl));
   
 cicl += 1



if(notaactual >= 3.5){
    console.log ("el estudiante gano la materia ")
   gano +=1
}else {
    console.log("el estudiante perdio la materia")
    perdio +=1
}
}

if(gano<=perdio){
   console.log("debe abrirse el curso de verano")

}else{
  console.log("la cantidad de estudiantes no es suficiente para el curso de verano")
}