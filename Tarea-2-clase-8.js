const $botonEnviar = document.querySelector('#enviar');
$botonEnviar.onclick = enviarGrupoFamiliar;

function enviarGrupoFamiliar() {

    const $grupoFamiliar = formulario.familiares.value;
    const resultadoValidacion = validarGrupoFamiliar($grupoFamiliar);

    if (!resultadoValidacion) {

        grupoFamiliarEsValido($grupoFamiliar,resultadoValidacion,true);

    } else {

        grupoFamiliarNoValido(resultadoValidacion,false);

    }

}

function validarGrupoFamiliar(grupoFamiliar) {

    if (!/^[0-9]+$/.test(grupoFamiliar)) {

        return 'El campo cantidad familiares solo acepta numeros'

    } else {

        return ''

    }

}

function crearInputFamiliares(cantidadFamiliares) {

    const inputFamiliares = {};

    for (let i = 0 ; i < cantidadFamiliares; i++) {

        const $divEdades = document.createElement('div');
        const $labelEdades = document.createElement('label');
        const $inputEdades = document.createElement('input');

        $divEdades.classList.add('familiar');
        $labelEdades.textContent = `Edad familiar #${i+1}`;
        $labelEdades.classList.add('familiar');
        $inputEdades.type = 'number';
        $inputEdades.classList.add('familiar');

        inputFamiliares[`divEdades${i+1}`] = $divEdades;
        inputFamiliares[`labelEdades${i+1}`] = $labelEdades;
        inputFamiliares[`inputEdades${i+1}`] = $inputEdades;

    }

   return adjuntarInputs(inputFamiliares);

}

function adjuntarInputs(inputFamiliares) {

    const $nodoFormulario = document.formulario;
    const inputs = Object.values(inputFamiliares);

    inputs.forEach(function(input) {

        $nodoFormulario.appendChild(input);

    })

}

function borrarInputsAnteriores() {

    const $nodoPadre = document.formulario;
    const $edades = document.querySelectorAll('.familiar');

    if ($edades) {

        $edades.forEach(function(familiar) {

            $nodoPadre.removeChild(familiar);
    
        })

    }

}

function manejarTextoError(error) {

    const $textoError = document.querySelector('.error');

    if (error) {

        $textoError.textContent = error;
        
    } else {
        
        $textoError.textContent = error;

    }

}

function mostrarOcultarBotonCalcular(resultado) {

    const $botonCalcular = document.querySelector('#calcular');

    if (resultado) {

        $botonCalcular.classList.remove('oculto');

    } else {

        $botonCalcular.classList.add('oculto');

    }

}

function grupoFamiliarEsValido(grupoFamiliar,resultadoValidacion,botonCalcular) {

    borrarInputsAnteriores();
    crearInputFamiliares(grupoFamiliar);
    manejarTextoError(resultadoValidacion);
    mostrarOcultarBotonCalcular(botonCalcular);
    mostrarOcultarTextoResultado(false);

}

function grupoFamiliarNoValido(resultadoValidacion,botonCalcular) {

    manejarTextoError(resultadoValidacion);
    mostrarOcultarBotonCalcular(botonCalcular);

}

const $botonLimpiar = document.querySelector('#limpiar');
$botonLimpiar.onclick = limpiarFormulario;

function limpiarFormulario() {

    borrarInputsAnteriores();
    manejarTextoError('');
    mostrarOcultarBotonCalcular(false);
    mostrarOcultarTextoResultado(false);

}

const $botonCalcular = document.querySelector('#calcular');
$botonCalcular.onclick = calcularEdades;

function calcularEdades() {

    const edades = obtenerEdades();

    if (edades.length !== 0) {

        const promedio = calcularPromedio(edades);
        textoResultado('promedio',promedio);

        const mayor = calcularMayor(edades);
        textoResultado('mayor',mayor);

        const menor = calcularMenor(edades);
        textoResultado('menor',menor);

        mostrarOcultarTextoResultado(true);

    }

}

function obtenerEdades() {

    const $edades = document.querySelectorAll('input.familiar');
    const edadesObtenidas = [];

    for (let i = 0; i < $edades.length; i++) {

        let edad = Number($edades[i].value);


        if (!validarEdad(edad)) {

            edadesObtenidas.push(edad);

        }

    }

    return edadesObtenidas;
}

function validarEdades(edades) {

    const edadesValidas = [];

    edades.forEach(function(edad) {

        if (!validarEdad(edad)) {
    
            edadesValidas.push(edad);
    
        }
    
    })


return edadesValidas;

}

function validarEdad(edad) {

    if (!/^[0-9]+$/.test(edad) || edad === 0) {

        return 'El campo edad solo acepta numeros mayores a 0'

    }

    return ''

}

function textoResultado(operatoria,resultado) {

    const $texto = document.querySelector(`.${operatoria}`);
    $texto.textContent = `El ${operatoria} es: ${resultado}`;

}

function mostrarOcultarTextoResultado(mostrarUOcultar) {

    const $textoResultados = document.querySelector('#resultado');
    
    if (mostrarUOcultar) {

        $textoResultados.classList.remove('oculto');

    } else {

        $textoResultados.classList.add('oculto');

    }

}
