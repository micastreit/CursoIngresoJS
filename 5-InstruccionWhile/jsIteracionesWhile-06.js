function mostrar()
{
let total = 0;
let i = 0;
while (i < 5) {
	total += parseInt(prompt("ingrese un numero."));
	i++;
}
document.getElementById("txtIdSuma").value = total;
document.getElementById("txtIdPromedio").value = total / 5;
}