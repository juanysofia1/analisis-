console.log("punto 1")
var numerociclo=0
while(numerociclo<7){
    console.log(numerociclo);
    numerociclo+=1
}
console.log("punto 2")
var ciclomult=0
while(ciclomult<=30){
    console.log(ciclomult);
    ciclomult+=3
}
console.log("punto 3")

var ciclopar=0
while(ciclopar<=50){
    console.log(ciclopar);
    ciclopar+=2
}
console.log("punto 4")
var cicloimpar=1
var numerollegada
numerollegada=parseInt(prompt("ingrese un numero al que desee llegar "))
while(cicloimpar <= numerollegada){
    
    console.log("este numero es impar "+ cicloimpar)
    cicloimpar+=2

} 

console.log("punto 5")
var numero = parseInt(prompt("ingrese un  numero impar"));
var numpar
while(numero%2==0){
console.log("el numero "+ numero +" es par")
numero=parseInt(prompt("ingrese un nuevo numero"))

}
console.log("el numero "+ numero + " es impar")


console.log("punto 6")
var cantidadestu = parseInt(prompt("ingrese la cantidad de estudiantes que hay en el salon")); ; 
var edades 
var ciclom = 0
 var acumulado = 0
while(ciclom<cantidadestu){
  
    edades=parseInt(prompt("ingrese la edad de los estudiantes"));
   
    acumulado += edades; 
 ciclom += 1

}
console.log("el acumulado de las edades del salon es de "+ acumulado)

console.log("punto 7")

var palabraa = "perro"
var intentoo = 1
var intentorifa=prompt("cual cree que es la palabra correcta")
while(intentorifa != palabraa){
    console.log("la palabra es incorrecta")
var intentorifa=prompt("cual cree que es la palabra correcta")
intentoo +=1

}
console.log("felicidades se gano la rifa")
console.log("el numero de intentos fue " + intentoo)

console.log("punto 8")

var nombreest = prompt("ingrese el nombre del estudiantes")
var cantidadnota = parseInt(prompt("ingrese la cantidad de notas que tiene el estudiante")); ; 
var promedio
var cicl = 0
 var acumul = 0
while(cicl<cantidadnota){
  
   var notasestudiante=parseFloat(prompt("ingrese la nota del estudiante"));
    acumul += notasestudiante; 
 cicl += 1
}

promedio =acumul /cantidadnota
console.log("la nota final de estudiante es " + promedio)
if(promedio >= 3.5){
    console.log ("el estudiante "+nombreest+" gano la materia ")

}else {
    console.log("el estudiante"+ nombreest+ " perdio la materia")
}



console.log("punto 9")
var ciclo9=0
var cantiestu = prompt("ingrese la cantidad estudiantes")
while(ciclo9<cantiestu){
    var nombreest = prompt("ingrese el nombre del estudiante")
var cantidadnota = parseInt(prompt("ingrese la cantidad de notas que tiene el estudiante")); ; 
var promedio
var cicl = 0
 var acumul = 0
while(cicl<cantidadnota){
  
   var notasestudiante=parseFloat(prompt("ingrese la nota del estudiante"));
    acumul += notasestudiante; 
 cicl += 1
}

promedio =acumul /cantidadnota
console.log("la nota final de estudiante es " + promedio)
if(promedio >= 3.5){
    console.log ("el estudiante "+nombreest+" gano la materia ")

}else {
    console.log("el estudiante "+nombreest+" perdio la materia")

}

ciclo9 +=1
}


