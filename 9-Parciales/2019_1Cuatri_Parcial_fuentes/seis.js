function mostrar() {
    //declarar variables
    let hora;
    //pedir variables
    hora = parseInt(document.getElementById('laHora').value);

    //if para las horas 
    if (hora >= 6 && hora <= 11) {
        //Si está entre las 6 y las 11 mostrar:"es de mañana",
        alert('es de mañana.');
    } else if (hora > 11 && hora <= 19) {
        //si es desde las 12 a las 19: "es de tarde",
        alert('es de tarde');
    } else if (hora > 19 && hora <= 24 || hora >= 0 && hora < 6) {
        //de lo contrario informar que es de noche.
        alert('es de noche');
    } else {
        //Informar si la hora no es válida.
        alert('hora no valida');
    }

    //Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".
    if (hora >= 0 && hora < 6) {
        alert('a mimir.');
    }

}