function calcularPromedio(edades) {

    let totalEdades = 0;
    let promedio = 0;

    if (edades !== 0) {

        edades.forEach(function(edad) {

            totalEdades += edad;
    
        })
    
        promedio = (totalEdades / edades.length).toFixed(1);
        return promedio;

    } else {

        return '';

    }

}

function calcularMayor(edades) {

    let mayor = 0;

    edades.forEach(function(edad) {

        if (edad > mayor) {

            mayor = edad;

        }

    })

return mayor;

}

function calcularMenor(edades) {

    let menor = edades[0];

    edades.forEach(function(edad) {

        if (edad < menor) {

            menor = edad;

        }

    })

return menor

}