function mostrar() {
    let nota;
    let sexo;
    let promedio;
    let acummasc = 0;
    let acumfem = 0;
    let contadornota = 0;
    let acumnota = 0;
    let mascaprobados=0;
    for (i = 0; i < 5; i++) {
    //ingreso por prompt de las notas (validar entre 0 y 10) ,
    nota = parseInt(prompt('ingrese su nota.'));
    while (nota < 0 || nota > 10 || isNaN(nota)) {
        nota = parseInt(prompt('dato invalido, por favor ingrese su nota.'));
    }
    //el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
        sexo = prompt('ingrese su sexo ultilizando m o f');
        while (sexo != m || sexo != f) {
            sexo = prompt('lo siento. dato invalido.por favor ingrese su sexo.');
        }
        switch (sexo) {
            case 'f':
            acumfem++
            acumnota++
            contadornota = nota + contadornota;
            break;
        case 'm':
            acummasc++
            acumnota++
            contadornota = nota + contadornota;
            break;
        }
    }
    //a) El promedio de las notas totales.
    promedio = contadornota / acumnota;
    //c) La cantidad de varones que su nota haya sido mayor o igual a 6. */
if (sexo == 'm' && nota < 6) {
mascaprobados++;
}
alert ('cantidad de varones con nota mayor a 6: ' + mascaprobados);

//b) La nota más baja y el sexo de esa persona.
}
