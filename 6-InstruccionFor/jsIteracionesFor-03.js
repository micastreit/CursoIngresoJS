function mostrar()
{
	let repeticiones=0;
	repeticiones = parseInt(prompt("ingrese el número de repeticiones"));
	while(isNaN(repeticiones)) {
		repeticiones=parseInt(prompt('Lo siento, ese no es un numero. Ingrese un numero.'));
	}
	for (let i =0; i < repeticiones;i++) {
		console.log('hola UTN FRA.');
	}

}//FIN DE LA FUNCIÓN