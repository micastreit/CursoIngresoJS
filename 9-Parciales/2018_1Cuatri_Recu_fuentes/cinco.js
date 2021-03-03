function mostrar() {
    let dia;
    dia = prompt('ingrese un dia de la semana');
    switch (dia) {
        case 'lunes':
        case 'martes':
        case 'miercoles':
        case 'jueves':
        case 'viernes':
            alert('a trabajar.');
            break;
        case 'sabado':
        case 'domingo':
            alert('buen fin de semana.');
            break;
        default:
            alert('lo siento, dato invalido.');

    }
}
