function mostrar() {
    //declarar variables
    //altura sexo promedio acumaltura alturamin sexomin contmujeresaltas
    let altura;
    let sexo;
    let promedio;
    let acumaltura = 0;
    let alturamin;
    let sexomin;
    let contmujeresaltas = 0;
    let flag = 1;
    //ciclo de 5 veces
    for (i = 0; i < 5; i++) {
        //las alturas en centimetros(validar entre 0 y 250) , 
        altura = parseInt(prompt('ingrese su altura de centimetros'));
        while (altura < 0 && altura > 250 && isNaN(altura)) {
            altura = parseInt(prompt('dato invalido. ingrese su altura de centimetros'));
        }
        //el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet,
        sexo = prompt('ingrese su sexo utilzando f o m.');
        while (sexo != 'm' && sexo != 'f') {
            sexo = prompt('dato invalido. ingrese su sexo utilzando f o m.');
        }

        // acumular las alturas
        acumaltura += altura;
        //determinar la menor altura y anclar el sexo
        if (flag || altura < alturamin) {
            alturamin = altura;
            sexomin = sexo;
            flag = 0;
        }
        //contar mujeres altas
        if (sexo == 'f' && altura > 190) {
            contmujeresaltas++;
        }

    }
    //sacar el promedio
    promedio = acumaltura / 5;

    //respuestas
    //a) El promedio de las alturas totales.
    alert('a) El promedio de las alturas totales.' + promedio);
    //b) La altura más baja y el sexo de esa persona.
    alert('b) La altura más baja es ' + alturamin + ' y el sexo de esa persona es ' + sexomin);
    //c) La cantidad de muheres que su altura supere los 190 centimetros.
    alert('c) La cantidad de muheres que su altura supere los 190 centimetros.' + contmujeresaltas);

}