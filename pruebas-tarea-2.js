function probarValidarEdad() {

    console.assert(

        validarEdad(1) === '', 
        'Validar edades no validó que se ingrese valores correctos'

    );

    console.assert(

        validarEdad(['f','a']) === 'El campo edad solo acepta numeros mayores a 0',
        'validarEdades no validó que se ingrese un letras'

    );

    console.assert(

        validarEdad(0) === 'El campo edad solo acepta numeros mayores a 0',
        'validarEdades no validó que se ingrese edad mayor a 0'

    );

}

function probarValidarGrupoFamiliar() {

    console.assert(

        validarGrupoFamiliar(12) === '',
        'validarGrupoFamiliar no validó que se ingrese un valor correcto'

    );

    console.assert(

        validarGrupoFamiliar('') === 'El campo cantidad familiares solo acepta numeros',
        'validarGrupoFamiliar no validó que se ingrese un valor vacio'

    );

    console.assert(

        validarGrupoFamiliar('       1') === 'El campo cantidad familiares solo acepta numeros',
        'validarGrupoFamiliar no validó que se ingrese espacios vacios'

    );

}

probarValidarGrupoFamiliar();
probarValidarEdad();