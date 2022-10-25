//juan jose espinoza y sofia aguiar 
console.log ("primer punto")
var numInicio = parseInt(prompt("porfavor ingresar desde qué número empieza el ciclo"))
var numFin = parseInt(prompt("porfavor ingresar hasta el número que va el ciclo"))
 
for(var i=numInicio; i<=numFin; i++){
    console.log (i)
    }
    
    
for(var i=numFin; i<=numInicio; i++){
    console.log(i)
}

console.log("segundo punto")
var numtablademultiplicar = parseInt(prompt("digite el numero que desea en la tabla")) 
for(var i=0; i<=10; i++)
console.log(numtablademultiplicar +"x" + i + "=" + numtablademultiplicar*i)


console.log("tercer punto")
var numtablademultiplicar = parseInt(prompt("digite el numero que desea en la tabla"))
var numtablademultiplicarfin = parseInt(prompt("ingrese hasta que numero desea que le muestre en la tabla"))
for(var i=0; i<numtablademultiplicarfin; i++){
console.log(numtablademultiplicar +"x" + i + "=" + numtablademultiplicar*i)
}

console.log("cuarto punto")
var arreglonumeros=[] 
var numerr; 
for(var i=1; i<=10; i++){ 
    numerr=parseInt(prompt("Ingrese diez numeros "+i))
    arreglonumeros.push(numerr);
}

//for(var i=0; i<arreglonumeros.length; i++){ 
  //  console.log("El nombre en la posicion "+ i +" es "+ arreglonumeros[i]) 
//}
var nummayor =arreglonumeros[0]
for(var i=1; i<=10; i++){

    if (arreglonumeros[i]>nummayor){
        nummayor=arreglonumeros[i]
    }
}
console.log("el numero mayor es " + nummayor)

console.log("quinto punto")

var arreglito=[]
var producto

for(var i=1; i<=5; i++){
    producto=prompt("ingrese los articulos que desea comprar")
    arreglito.push(producto)

}
var arregloprecio=[]
for(var i=0; i<arreglito.length; i++){ 
var precio= parseInt(prompt("ingrese el precio de "+arreglito[i] ))
arregloprecio.push(precio)
}



