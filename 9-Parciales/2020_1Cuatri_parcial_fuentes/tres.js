function mostrar() {
	//1 variables sexo est civil temp tempmax nombremax contador de vuidos mayores solteros
	// vuidos temp de mayores cont y acum hombres promedioedad  
	let nombre;
	let sexo;
	let edad;
	let estadocivil;
	let temperatura;
	let temperaturamax;
	let nombreTmax;
	let flagtemperatura = 1;
	let contHSV = 0;
	let contVuidosmayores = 0;
	let contSolteros = 0;
	let contTempMayores = 0;
	let acumEdadHS = 0;
	let contedadHS = 0;
	let promedioEdadHS = 0;
	let seguir;

	//pedir sexo est civil temp
	//validarlos
	do {
		nombre = prompt('ingrese su nombre');
		//sexo("f" o "m")  
		sexo = prompt('ingrese su sexo utilizando m o f');
		while (sexo != 'f' && sexo != 'm') {
			sexo = prompt('dato invalido. ingrese su sexo utilizando m o f');
		}
		edad = parseInt(prompt('ingrese su edad'));
		while (edad < 0 || isNaN(edad)) {
			edad = parseInt(prompt('dato invalido. ingrese su edad'));
		}
		//estado civil("soltero", "casado" o "viudo") 
		estadocivil = prompt('ingrese su estado civil (soltero, casado, o vuido');
		while (estadocivil != 'soltero' && estadocivil != 'casado' && estadocivil != 'vuido') {
			estadocivil = prompt('dato invalido. ingrese su estado civil (soltero, casado, o vuido');
		}
		//temperatura corporal.
		temperatura = parseFloat(prompt('ingrese su temperatura corporal'));
		while (temperatura < 0 || isNaN(temperatura)) {
			temperatura = parseFloat(prompt('dato invalido. ingrese su temperatura corporal'));
		}

		if (flagtemperatura || temperatura > temperaturamax) {
			temperaturamax = temperatura;
			nombreTmax = nombre;
			flagtemperatura = 0;
		}

		if (edad >= 18 && estadocivil == 'vuido') {
			contVuidosmayores++;
		}

		if (sexo == 'm' && (estadocivil == 'soltero' || estadocivil == 'vuido')) {
			contHSV++;
		}

		if (edad > 60 && temperatura > 38) {
			contTempMayores++;
		}
		if (sexo == 'm' && estadocivil == 'soltero') {
			contedadHS++;
			acumEdadHS += edad;
		}

		seguir = prompt('desea ingresar otro pasajero?');
	} while (seguir == 'si');



	//a) El nombre de la persona con mas temperatura.
	console.log('a) El nombre de la persona con mas temperatura es' + nombreTmax + ' y tiene ' + temperaturamax + ' de temperatura corporal');

	//b) Cuantos mayores de edad estan viudos
	console.log('b) Cuantos mayores de edad estan viudos: ' + contVuidosmayores);

	//c) La cantidad de hombres que hay solteros o viudos.
	console.log('c) La cantidad de hombres que hay solteros y viudos: ' + contHSV);

	//d) cuantas personas de la tercera edad( mas de 60 años) ,tienen mas de 38 de temperatura
	console.log('d) cuantas personas de la tercera edad tienen mas de 38 de temperatura: ' + contTempMayores);

	//e) El promedio de edad entre los hombres solteros.
	if (contedadHS != 0) {
		promedioEdad = acumEdadHS / contedadHS;
		console.log('e) El promedio de edad entre los hombres solteros:' + promedioEdad);
	} else {
		console.log('e) no se ingresaron hombres solteros');
	}


}
/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */