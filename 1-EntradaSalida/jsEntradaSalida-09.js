/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
let sueldo;
let incremento;
let resultado;
sueldo = parseInt(document.getElementById("txtIdSueldo").value);
incremento = 10 * sueldo / 100
resultado = incremento + sueldo
document.getElementById("txtIdResultado").value = resultado ;
}