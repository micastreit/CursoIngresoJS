function mostrar() {
    let nombre1;
    let nombre2;
    let peso1;
    let peso2;
    let suma;
    let promedio;

    nombre1 = prompt('ingrese el nombre de la persona 1:');
    nombre2 = prompt('ingrese el nombre de la persona 2:');
    peso1 = parseFloat(prompt('ingrese el peso de la persona 1:'));
    peso2 = parseFloat(prompt('ingrese el peso de la persona 2:'));
    suma = peso1 + peso2;
    promedio = suma / 2;
    alert(" ustedes se llaman" + nombre1 + " y " + nombre2 + " pesan " + peso1 + " y " + peso2 + "kilos, que sumados son " + suma + " kilos y el promedio de peso es " + promedio);
}
/*A una pareja se le pide los datos para mostrar un mensaje
 " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos
 y el promedio de peso xx ". */