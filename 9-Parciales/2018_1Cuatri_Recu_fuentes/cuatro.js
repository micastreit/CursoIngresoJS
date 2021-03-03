function mostrar() {
    let num1;
    let num2;
    let suma;
    num1 = parseInt(prompt('ingrese un numero.'));
    num2 = parseInt(prompt('ingrese otro numero.'));
    alert('usted ingreso el numero ' + num1 + ' y el ' + num2);
    if (num1 == num2) {
        alert(num1 * num2);
    } else if (num1 > num2) {
        alert(num1 / num2);
    } else if (num1 < num2) {
        suma = num1 + num2;
        alert(suma);
    }
    if (suma < 50) {
        alert('la suma es ' + suma + ' y es menor a 50.');
    }
    /*(IF)Pedir dos números
     y mostrar el resultado:
    Si son iguales los muestro concatenados.
    Si el primero es mayor, los divido,
    de lo contrario los sumo.
    Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje
    "la suma es xxx y es menor a 50".
     */
}
