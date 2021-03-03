function mostrar() {
    //declarar variables
    //letra numero contnumpar contnumimpar contceros promediopositivos 
    //contpositivos acumpositivos acumneg nummax letramax nummin letramin flag seguir
    let letra;
    let numero;
    let contPar = 0;
    let contImpar = 0;
    let contCeros = 0;
    let promedioPositivos = 0;
    let contPositivos = 0;
    let acumPositivos = 0;
    let acumNeg = 0;
    let nummax = 0;
    let letramax;
    let nummin = 0;
    let letramin;
    let flagmax = 1;
    let flagmin = 1;
    let seguir;

    //generar bucle
    do {
        //pedir variables y validarlas 
        letra = prompt('ingrese una letra');
        //un número entre -100 y 100 (validar)
        numero = parseInt(prompt('ingrese un numero'));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt('dato invalido. ingrese un numero'));
        }
        //if para acumular y contar
        if (numero > 0) {
            contPositivos++;
            acumPositivos += numero;
        } else if (numero < 0) {
            acumNeg += numero;
        } else {
            contCeros++;
        }

        if (numero / 2 == 0) {
            contPar++;
        } else {
            contImpar++;
        }

        //identoficar maximo y minimo
        if (flagmax || nummax > numero) {
            nummax = numero;
            letramax = letra;
            flagmax = 0;
        }

        if (flagmin || nummin > numero) {
            nummin = numero;
            letramin = letra;
            flagmin = 0;
        }

        //seguir
        seguir = prompt('desea agregar otro dato?');
    } while (seguir == 'si');

    //promedio
    if (contPositivos != 0) {
        promedioPositivos = acumPositivos / contPositivos;

    }

    //a) La cantidad de números pares.
    console.log('a) La cantidad de números pares.' + contPar);
    //b) La cantidad de números impares.
    console.log('b) La cantidad de números impares.' + contImpar);
    //c) La cantidad de ceros.
    console.log('c) La cantidad de ceros.' + contCeros);
    //d) El promedio de todos los números positivos ingresados.
    console.log('d) El promedio de todos los números positivos ingresados.' + promedioPositivos);
    //e) La suma de todos los números negativos.
    console.log('e) La suma de todos los números negativos.' + acumNeg);
    //f) El número y la letra del máximo y el mínimo.
    console.log('f) El número y la letra del máximo es; ' + nummax + ' y ' + letramax + 'y del mínimo son: ' + nummin + ' y ' + letramin);


}