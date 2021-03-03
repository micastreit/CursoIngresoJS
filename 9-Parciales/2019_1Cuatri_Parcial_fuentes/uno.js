
function mostrar()
{
let lado;
let area;

lado=parseInt(prompt('ingrese el valor de un lado del triangulo equilatero'));
area= (lado * Math.sqrt(3)) / 4;
alert('el area del triangulo es:' + area);
}
/*Realizar el algoritmo que pida los datos necesarios 
para un triángulo equilátero por prompt 
y que muestre el perímetro por aler */