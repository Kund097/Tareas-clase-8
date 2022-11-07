function obtenerSueldos() {

    familiares.forEach(function(familiar,indice) {

        let sueldo = familiar.sueldo();

        if (!validarSueldo(sueldo)) {

            sueldosObtenidos[indice] = sueldo;

        } else {

            '';

        }

    })

}

function calcularPromedio(sueldosFamiliares) {

    let totalSueldos = 0;
    let promedio;

    let familiares = Object.keys(sueldosFamiliares);
    familiares.forEach(function(sueldo) {

        totalSueldos += sueldosFamiliares[sueldo];

    })

    promedio = Number((totalSueldos / familiares.length).toFixed(2));

return promedio;

}

function calcularPromedioMensual(sueldosFamiliares) {

    let totalSueldos = 0;
    let promedioMensual;
    const MESES_EN_UN_ANIO = 12;

    let familiares = Object.keys(sueldosFamiliares);
    familiares.forEach(function(sueldo) {

        totalSueldos += sueldosFamiliares[sueldo];

    })

    promedioMensual = Number((totalSueldos / MESES_EN_UN_ANIO).toFixed(2));

return promedioMensual;

}

function calcularMayorSalario(sueldosFamiliares) {

    let mayor = 0;

    let familiares = Object.keys(sueldosFamiliares);
    familiares.forEach(function(sueldo) {

        if (sueldosFamiliares[sueldo] > mayor) {

            mayor = sueldosFamiliares[sueldo];

        }

    })

return mayor;

}

function calcularMenorSalario(sueldosFamiliares) {

    let menor = Number(Object.values(sueldosFamiliares)[0]);
    let familiares = Object.keys(sueldosFamiliares);
    
    familiares.forEach(function(sueldo) {

        if (sueldosFamiliares[sueldo] < menor) {

            menor = sueldosFamiliares[sueldo];

        }

    })


return menor;

}