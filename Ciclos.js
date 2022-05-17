var casillasLlenas = 0; //Variable que cuenta cuántas casillas se han llenado
var arreglo = []; // Variable que crea el arreglo vacío
 
while(casillasLlenas < 4){ //Ciclo While con la condición que debe evaluar cada vez
    arreglo.push("InsertarValor"); //instrucción para llenar una posición a la vez
    casillasLlenas += 1; //conteo de casillas llenas, se suma 1 con cada vuelta del ciclo
}

var numciclo=0;
while(numciclo<5){
    console.log(2);
    numciclo=numciclo+1
}

var nciclo=0
while(nciclo<8){
    console.log(nciclo);
    nciclo+=1
}
var ciclo3=0
while(ciclo3<20){
    console.log(ciclo3);
    ciclo3+=2
}

var ciclo4="ok"
while(ciclo4 !="ok"){
    ciclo4=prompt("ingrese ok para parar")
    console.log("dijo " + ciclo4)

}

var ciclo5=0
while(ciclo5>=0){
    ciclo5=prompt("ingrese un numero negativo para parar")
    console.log("el numero es " + ciclo5)
}
   var resultado6=0
var ciclo61;
var ciclo62 ;
while(resultado6<=20){
    ciclo61=parseInt(prompt("valor 1"))
    ciclo62=parseInt(prompt("valor 2"))
    resultado6=ciclo61 + ciclo62
    console.log("la suma es " + resultado6)
}

var contraseña = "sofia123"
var intento=prompt("ingrese una contraseña")
while(intento != contraseña){
    console.log("la contraseña es incorrecta")
    intento=prompt("ingrese la contraseña nueva:")

}
console.log("contraseña correcta")

var contraseña = "sofia123"
var intento=prompt("ingrese una contraseña")
var numerointento=1;
while((intento != contraseña) && numerointento<4){
    console.log("la contraseña es incorrecta")
    intento=prompt("ingrese la contraseña nueva:")
        numerointento+=1
}
if(numerointento>=4){
    console.log("intentos agotados")
}else{
    console.log("contraseña correcta")
}

