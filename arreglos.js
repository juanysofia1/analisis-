 /*es una estructura que alamcena cualquier tipo de datos y caulquier cantidad, es decir, string, double, array, objetos, entre otros.
Los arreglos o arrays tienen operacines como incertar, eliminar, modificar y consultar.
 la declaracion de un arreglo se hace con corchetes [] y los elementos dentro de el se separan con comas. tambien se crea o se declara con las palabras reservadas VAR o let seguidas del nombre del arreglo     
 */
var miPrimerArreglo= ["jose",14];
console.log (miPrimerArreglo);
// Arreglo de arreglos 
var notaEst = [["sofia",4.5],["mari",4.2]];
console.log (notaEst);
//consultar segun posicion

//recordar que las posiciones de un vector o arreglo comienza desde 0 
console.log (miPrimerArreglo[0]);
console.log (miPrimerArreglo[1]);

//consultar posiciones de arreglos dentro de arreglos
//primero se accede a la posicion del arreglo mas grande y luego a las posiciones de los arreglos internos

console.log (notaEst[0][0]);
console.log (notaEst[0][1]);
console.log (notaEst[1][0]);

//modificar elementos 
//se debe indicar la posicion del elemento y luego se asigna el nuevo valor 
miPrimerArreglo[0]="mario";
console.log(miPrimerArreglo);
notaEst[1][0]="laura";
console.log(notaEst[1]);
miPrimerArreglo[1]=18;
console.log(miPrimerArreglo[1]);
notaEst[0][1]=4.8;
console.log(notaEst[0][1]);

//agregar elementos al arreglo

miPrimerArreglo.push("10b");
console.log(miPrimerArreglo);
miPrimerArreglo.unshift("gomez");
console.log(miPrimerArreglo);

//eliminar elementos del arreglo

miPrimerArreglo.pop();
console.log(miPrimerArreglo);
miPrimerArreglo.shift();
console.log(miPrimerArreglo);

/*crear un arreglo que contenga los elementos 
      - analisis
      - tecnologia
      -desarrollo
2-cambiar desarrollo por BBDD
3-convertir el arreglo para que quede 
     -introduccion
     -analisis
     -tecnologia
nota: para cada punto, imprima el arreglo completo 
*/
console.log("primer punto")
var arreglo = ["analisis","tecnologia","desarrollo"];
console.log(arreglo)

console.log("segundo punto")
arreglo[2]="BBDD"
console.log(arreglo)

console.log("tercer punto")
arreglo.unshift("introduccion")
arreglo.pop("BBDD");
console.log(arreglo)