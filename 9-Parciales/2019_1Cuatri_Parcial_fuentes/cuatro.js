function mostrar() {
    let numero1;
    let numero2;
    let rta;

    numero1 = parseInt(prompt('ingrese un numero'));
    numero2 = parseInt(prompt('ingrese otro numero'));
    if (numero1 == numero2) {
        rta = numero1 * numero2;
    } else if (numero1 > numero2) {
        rta = numero1 - numero2;
        if (rta > 10) {
            alert("la resta es" + rta + "y superó el 10")
        }
    } else {
        rta = numero1 + numero2;
    }

    alert(rta);

}
/*Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10". */