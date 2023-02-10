console.log("\n------Ejercicio 1 ------\n")

//Escriba un programa que permita imprimir en pantalla cada uno de los elementos del siguiente

let arreglo1 = [0, 28, 30, 10, 4];

function imprimirArreglo(array){
  for (let i = 0; i < array.length; i++){
  console.log("Los numeros del arreglo son: "+array[i]);
}
}  
imprimirArreglo(arreglo1);

console.log("\n------Ejercicio 2 ------\n")

//Escriba un programa que permita imprimir al revés cada uno de los elementos del siguiente

let arregloInvertido= arreglo1.reverse(elementos=>elementos)

imprimirArreglo(arregloInvertido)

console.log("\n------Ejercicio 3 ------\n")

//Escriba un programa que permita calcular la suma de todos los elementos del siguiente arreglo
  
let arreglo2 = [1, 3, 6, 82, 23]
let sumar = 0

function sumaElementos(array){
  for (let i = 0; i < array.length; i++){
   sumar = sumar + array[i]
}
  console.log("Los numeros sumados del arreglo son igual a: ", sumar);
}  
sumaElementos(arreglo2);

console.log("\n------Ejercicio 4 ------\n")

//Escriba un programa que deduzca e imprima en pantalla el número menor en el siguiente 

let arreglo3 = [90, 1, 38, 0, 29, 4]
var numMenor = arreglo3[0];

function numeroMenor(array){
  for (var i = 0; i < array.length ; i++) {
    if (array[i] < numMenor) {
        numMenor = array[i];  
    }
}
  console.log("Numero menor del arreglo es igual a : " + numMenor);
}
numeroMenor(arreglo3)

console.log("\n------Ejercicio 5 ------\n")

//Escriba un programa que permita calcular la suma y el producto entre pares de todos los elementos de los siguientes arreglos: 

let arreglo4 = [0, 28, 30, 10, 4]
let arreglo5 = [1, 3, 6, 82, 23]
let resulSuma= []
let resulProducto=[]

function operarArreglos(a,b){
  for(i = 0; i < a.length; i++){
  resulSuma[i] =a[i]+b[i];
  resulProducto[i]= a[i]*b[i];
}
  console.log("El resultado de la suma de sus indices es: "+ resulSuma)
  console.log("El resultado de la multiplicacion de sus indices es: "+ resulProducto)
}

operarArreglos(arreglo4,arreglo5)

console.log("\n------Ejercicio 6 ------\n")

//Escriba un programa que lea un arreglo de seis elementos (ingresados por el usuario) e intercambie las posiciones de sus elementos, de tal forma que el primero pase a ser el último y el último el primero, el segundo el penúltimo, y así sucesivamente. Imprima en pantalla el arreglo resultante.

let arrUsuario= []

function mostrarArreglo(arreglo){
 for(i = 0; i < 6; i++){
  datosUsuario = arreglo.unshift(parseInt(prompt("Ingrese datos")))
 }  
console.log("El arreglo final es: "+ arreglo)
}
mostrarArreglo(arrUsuario)

console.log("\n------Ejercicio 7 ------\n")

//Escriba un programa que solicite al usuario el número de alumnos de un curso y cree un arreglo que almacene las notas del control 1 del curso. Luego, imprima en pantalla el promedio de todas las notas y muestre cuáles notas resultaron estar sobre el promedio

let numeroAlumnos= (parseInt(prompt("Ingrese numero de Alumnos")));
let notasCurso=[];
let suma=0;
let promedio=0;
const superaronPromedio=[]

function promedioAlumnos(notas){
  for (let i = 1; i <= numeroAlumnos; i++){
    notaIngresada = notas.push(parseFloat(prompt("Ingrese nota de alumno "+i+": ")));
  }
  console.log("Las notas ingresadas son: "+ notas);
  for (let i = 0; i < notas.length; i++){
    suma = suma + notas[i];
}
  let promedio= suma/numeroAlumnos
  //console.log("El resultado de la suma es: ", suma);
  console.log("El promedio es igual a: ", promedio);
  let superaronPromedio= notas.filter(elementos => elementos>promedio)
  console.log("Solo " + superaronPromedio+ " estan por encima del Promedio ")
}

promedioAlumnos(notasCurso)

console.log("\n------Ejercicio 8 ------\n")
  
//Escriba un programa que solicite al usuario el tamaño de un arreglo y un número entero, e imprima en pantalla el resultado de llenar dicho arreglo con los múltiplos del número dado. Por ejemplo, si se define un arreglo de tamaño 5 y se indica el valor 3, el resultado será el arreglo formado por los valores [3, 6, 9, 12, 15]

let tamanioArreglo= parseInt(prompt("Ingrese tamaño del arreglo "));
let numeroOrigen= parseInt(prompt("Ingrese numero de origen"));
const arregloCreado=[];
let numeros=0
  
function crearArreglo(nuevoArreglo){
  for (let i = 1; i <= tamanioArreglo; i++){
    numeros= numeroOrigen * [i]
    creacion= nuevoArreglo.push(numeros)
  }
  console.log(nuevoArreglo)
}

 crearArreglo(arregloCreado)
