function probarValidarSueldo() {

    console.assert(

        validarSueldo('hola') === 'sueldo no válido',
        'validar sueldo no validó que se ingrese un valor incorrecto tipo string'

    );

    console.assert(

        validarSueldo('1') === '',
        'validar sueldo no validó que se ingrese un valor numerico correcto'

    )

    console.assert(

        validarSueldo(1) === '',
        'validar sueldo no validó que se ingrese un valor numerico correcto'

    )

    console.assert(

        validarSueldo(0) === 'sueldo no válido',
        'validar sueldo no validó que se ingrese un valor 0'

    )

}

probarValidarSueldo();