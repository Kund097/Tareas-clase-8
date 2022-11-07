function validarSueldo(sueldo) {

    if (sueldo > 0) {

        if (/^[0-9]+$/.test(sueldo)) {

            return '';
    
        } else {
    
            return 'sueldo no válido';
    
        }

    } else {

        return 'sueldo no válido';

    }

}