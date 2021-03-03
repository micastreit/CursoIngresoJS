/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de
 $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz"
 se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas”
 se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
 si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% 
de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let precio;
    let cantidad;
    let marca;
    let preciocondescuento;
    let impuesto;
    let preciofinal;
    let descuento;
    precio = 35;
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    switch (cantidad) {
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            if (marca == "ArgentinaLuz") {
                descuento = 15;
            } else if (marca == "FelipeLamparas") {
                descuento = 10;
            } else {
                descuento = 5
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || mrca == "Felipelamparas") {
                descuento = 25;
            } else {
                descuento = 20;
            }
            break;
        case 5:
            if (marca == "ArgentinaLuz") {
                descuento = 40;
            } else {
                descuento = 30;
            }
            break;
        default:
            descuento = 50;
    }
    preciocondescuento = precio - precio * descuento / 100;
    document.getElementById("txtIdprecioDescuento").value = preciocondescuento;
    preciofinal = preciocondescuento * cantidad;
    if (preciofinal > 120) {
        impuesto = preciofinal * 10 / 100;
        preciofinal = preciofinal + impuesto;
        alert("total $" + preciofinal + ". Usted pago $" + impuesto + "de ingresos brutos.");
    } else {
        alert(preciofinal)
    }
}

/*    precio = cantlampara * preciolamp ;
    document.getElementById("txtIdprecioDescuento") = preciofinal;
    if (cantlampara >= 6) {
        preciofinal = precio - precio * 0.5;
    } else if (cantlampara = 5) {
        switch (marca) {
            case ArgentinaLuz:
                preciofinal = precio - precio * 0.4;
                break;
                case FelipeLamparas:
            case JeLuz:
            case HazIluminacion:
                case Osram:
                preciofinal = precio - precio * 0.3;
                break;
            }
    } else if (cantlampara = 4) {
        switch (marca) {
            case ArgentinaLuz:
            case FelipeLamparas:
                preciofinal = precio - precio * 0.25;
                break;
            case JeLuz:
            case HazIluminacion:
                case Osram:
                preciofinal = precio * 0.2;
                break;
            }
    } else if (cantlampara = 3) {
        switch (marca) {
            case ArgentinaLuz:
                preciofinal = precio - precio * 0.15;
                break;
                case FelipeLamparas:
                preciofinal = precio - precio * 0.1;
                break;
                case JeLuz:
            case HazIluminacion:
            case Osram:
                preciofinal = precio - precio * 0.05;
                break;
            }
    } else if (preciofinal > 120) {
        impuesto = preciofinal * 1, 1;
        totalfinal = preciofinal + impuesto;
        alert("Usted pago " + totalfinal + "de IIBB.”, siendo " + impuesto + " el impuesto que se pagó.")
    }
}*/
