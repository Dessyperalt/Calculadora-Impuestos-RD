/* Calculo deducciones javascript
 * Copyright 2016 Desiree Peralta Encarnacion
 * DesireePeraltaE@gmail.com
 * https://github.com/Dessyperalt */


function calculo() {
    var sueldo = document.getElementById("Sueldo").value;
    var ahorro = document.getElementById("Ahorro").value;

    var afp = AFP(sueldo);
    var sfs = SFS(sueldo);
    var isr = ISR(sueldo - sfs - afp);

    document.getElementById("AFPMensual").innerHTML = "RD$" + (afp).toFixed(2);

    document.getElementById("SFSMensual").innerHTML = "RD$" + (sfs).toFixed(2);

    document.getElementById("ISRMensual").innerHTML = "RD$" + (isr / 12).toFixed(2);

    var subTotal = Subtotal(afp, sfs, (isr / 12));

    console.log("total deducciones: " + subTotal.toFixed(2));

    var total = Total(sueldo, afp, sfs, (isr / 12));

    totalSinAhorro = Total(sueldo, afp, sfs, (isr / 12), ahorro);

    document.getElementById("subTotalMensual").innerHTML = "RD$" + (total).toFixed(2);

    document.getElementById("totalMensual").innerHTML = "RD$" + (totalSinAhorro).toFixed(2);

}

function AFP(sueldo) {
    return sueldo * 0.0287;
}

function SFS(sueldo) {
    return sueldo * 0.0304;
}


function ISR(sueldo) {
    var isr = 0;
    sueldoAnual = sueldo * 12;

    if (sueldoAnual < 416220.00) {
        isr = 0;
    }
    else if (sueldoAnual > 416220.01 && sueldoAnual < 624329.00) {
        isr = (sueldoAnual - 416220.01) * 0.15;
    }
    else if (sueldoAnual > 624329.01 && sueldoAnual < 867123.00) {
        isr = (sueldoAnual - 624329.01) * 0.2 + 31216.00;
    }
    else if (sueldoAnual > 867123.00) {
        isr = (sueldoAnual - 867123.01) * 0.25 + 79776.00;
    }
    Quincena = isr / 24;
    mensual = isr / 12;

    return isr;
}

function Total(sueldo, afp, sfs, isr, ahorro = 0) {
    return sueldo - afp - sfs - isr - ahorro;
}

function Subtotal(afp, sfs, isr) {
    return afp + sfs + isr;
}