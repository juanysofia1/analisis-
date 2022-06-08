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
