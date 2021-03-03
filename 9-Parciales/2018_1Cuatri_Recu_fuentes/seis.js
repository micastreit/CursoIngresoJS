function mostrar() {
    let hora;
    hora = parseInt(document.getElementById('laHora')).value;
    if (hora >= 6 && hora <= 11) {
        alert('es de mañana.');
    } else if (hora > 11 && hora <= 19) {
        alert('es de tarde.');
    } else if (hora > 19 && hora <= 24 || hora >= 0 && hora < 6) {
        alert('es de noche');
    } else {
        alert('dato invalido.')
    }
    if (hora > 19 && hora <= 24) {
        alert('a mimir.');
    }
    /*Se ingresa una hora.
Si está entre las 6 y las 11 mostrar:"es de mañana",
si es desde las 12 a las 19: "es de tarde",
de lo contrario informar que es de noche.
Informar si la hora no es válida.
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".
 */
}
