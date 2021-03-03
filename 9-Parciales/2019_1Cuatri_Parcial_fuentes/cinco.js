function mostrar() {
    //definir variables
    //continente dias preciobruto precioneto cantdias descuentocontinente descuentopago
    let continente;
    let constdia = 100;
    let cantdias;
    let preciobruto;
    let precioneto;
    let descuentocontinente;
    let descuentopago;
    let metodopago;
    let descuentototal;
    //pedir variables
    continente = document.getElementById('Marca').value;
    cantdias = parseInt(prompt('ingrese la cantidad de dias:'));
    metodopago = prompt('ingrese metodo de pago: (mercadopago, debito, efectivo)');

    preciobruto = cantdias * constdia;

    switch (continente) {
        case 'africa':
            //Si es África tiene un 60% de descuento y si
            descuentocontinente = 60;
            precioneto = preciobruto - preciobruto * descuentocontinente / 100;
            //si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
            if (metodopago == 'mercadopago' || metodopago == 'efectivo') {
                descuentopago = 15;
                descuentototal = descuentopago + descuentocontinente;
                precioneto = preciobruto - preciobruto * descuentototal / 100;
            }
            break;
        case 'asia':
            //cualquier otro continente tiene un recargo del 20%
            precioneto = preciobruto + preciobruto * 20 / 100;
            break;
        case 'europa':
            //Si es Europa tiene un 20% de descuento y si 
            descuentocontinente = 20;
            precioneto = preciobruto - preciobruto * descuentocontinente / 100;
            //ademas paga por débito se le agrega un 15% , 
            if (metodopago == 'debito') {
                descuentopago = 15;
                descuentototal = descuentopago + descuentocontinente;
                precioneto = preciobruto - preciobruto * descuentototal / 100;
            }

            break;
        case 'america':
            //Si es América tiene un 50% de descuento
            descuentocontinente = 50;
            precioneto = preciobruto - preciobruto * descuentocontinente / 100;
            //ademas paga por débito se le agrega un 10% mas de descuento
            if (metodopago == 'debito') {
                descuentopago = 10;
                descuentototal = descuentopago + descuentocontinente;
                precioneto = preciobruto - preciobruto * descuentototal / 100;
                //por mercadoPago un 10%
            } else if (metodopago == 'mercadopago') {
                descuentopago = 10;
                descuentototal = descuentopago + descuentocontinente;
                precioneto = preciobruto - preciobruto * descuentototal / 100;
                // y cualquier otro medio 5%
            } else if (metodopago == 'efectivo') {
                descuentopago = 5;
                descuentototal = descuentopago + descuentocontinente;
                precioneto = preciobruto - preciobruto * descuentototal / 100;
            }
            break;
        case 'oceania':
            //cualquier otro continente tiene un recargo del 20%
            precioneto = preciobruto + preciobruto * 20 / 100;
            break;
    }


alert('e total a pagar es: $' + precioneto);
}
/*SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 ,
 que se puede pagar de todas las maneras
Curso de ingreso UTN FRA
 */
