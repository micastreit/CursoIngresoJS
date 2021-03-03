function mostrar()
{
	
	//Genero el número RANDOM entre 1 y 10 
	let numero;
	let min;
	let max;
min = 1;
max = 10;
numero = Math.floor ( Math.random() * (max - min + 1) + min);
	alert(numero);


}//FIN DE LA FUNCIÓN