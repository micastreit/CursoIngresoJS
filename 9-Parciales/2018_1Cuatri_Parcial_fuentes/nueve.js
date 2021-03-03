function mostrar()
{
let marca;
let peso;
let temperatura;
let seguir;
let temperaturapares=0;
let contadorpeso=0;
let acumpeso=0;
let promediopeso;
do {
//la marca del producto, 
marca=prompt('ingrese la marca del producto');
//el peso el cual debe ser entre 1 y 100 (validar),
peso=parseInt(prompt('ingrese el peso'));
while (peso < 1 || peso > 100) {
    peso=parseInt(prompt('dato invalido. ingrese un peso entre 1 y 100kg.'));
}
contadorpeso++;

//la temperatura de almacenamiento(entre -30 y 30) 
temperatura=parseInt(prompt('ingrese la temperatura de almacenamiento'));
while(temperatura < -30 || temperatura > 30) {
    temperatura=parseInt(prompt('dato invalido. ingrese una temperatura entre -30 y 30 grados'));
}
//hasta que el usuario quiera 
seguir=prompt('desea ingresar otro producto?');
}while(seguir == 'si');
}
if (temperatura % 2 == 0) {
    temperaturapares++;
}
//a) La cantidad de temperaturas pares.
alert('cantidad de temperaturas pares ' + temperaturapares);

//e informar al terminar el ingreso por document.write:
//b) La marca del producto más pesado
//d) El promedio del peso de todos los productos.
//f) El peso máximo y el mínimo.
