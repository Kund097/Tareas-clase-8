/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).


*/


//      >>>>>>>>>>>>>>>> Version Clase 8 implementa objetos <<<<<<<<<<<<<<<<<<


const $botonAgregarFamiliar = document.querySelector('#agregar-familiar');

$botonAgregarFamiliar.onclick = crearFamiliar;
let contadorFamiliares = 0;

const familiares = []

function crearFamiliar() {

    contadorFamiliares++
    crearInput();
    familiares.push(new Familiar(contadorFamiliares-1));

}

function crearInput() {

    let $div = document.createElement('div');
    let $label = document.createElement('label');
    let $input = document.createElement('input');
    $div.classList.add('familiar');
    $label.textContent = `Familiar Nro ${contadorFamiliares}:`
    $input.type = 'number';
    $input.classList.add('sueldo');

    adjuntarInput($div,$label,$input)
}

function adjuntarInput(div,label,input) {

    $nodoPadre = document.formulario;

    $nodoPadre.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
   
}

const $botonBorrarUltimoFamiliar = document.querySelector('#borrar-familiar');

$botonBorrarUltimoFamiliar.onclick = borrarUltimoFamiliar;

function borrarUltimoFamiliar() {

    contadorFamiliares --;

    const $nodoPadre = document.formulario;
    const $familiares = document.querySelectorAll('div.familiar');
    let ultimoFamiliar = $familiares.length - 1;

    if (ultimoFamiliar < 0) {

        alert('no hay nada que quitar');
        contadorFamiliares = 0;

    } else { 

        $nodoPadre.removeChild($familiares[ultimoFamiliar]);
        familiares.splice(ultimoFamiliar,1);

    }

}

$botonBorrarTodo = document.querySelector('#borrar-todo');

$botonBorrarTodo.onclick = borrarTodo;

function borrarTodo() {

    let $familiares = document.querySelectorAll('div.familiar');

    $familiares.forEach(function() {

        borrarUltimoFamiliar();

    })
    ocultarResultados();

}

class Familiar {
    constructor(posicion) {

        this.posicion = posicion;
        this.sueldo = function() {

            let $obtenerSueldo = document.querySelectorAll('.sueldo');
            let sueldo = Number($obtenerSueldo[this.posicion].value);
            return sueldo;

        }

    }
}

const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = calcularSueldos;
let sueldosObtenidos = [];
let resultados = {}
function calcularSueldos() {

    sueldosObtenidos = [];
    obtenerSueldos()
    resultados = {

        ['mayor-salario-anual']:calcularMayorSalario(sueldosObtenidos),
        ['menor-salario-anual']:calcularMenorSalario(sueldosObtenidos),
        ['promedio-anual']:calcularPromedio(sueldosObtenidos),
        ['promedio-mensual']:calcularPromedioMensual(sueldosObtenidos)

    }
    textoResultados(resultados);
}

function textoResultados(resultados) {

    document.querySelector('#resultado').classList.remove('oculto');

    operatoria = Object.keys(resultados)

    operatoria.forEach(function(resultado) {

        document.querySelector(`#${resultado}`).textContent = `El ${resultado.replace(/-/g,' ')} es: ${resultados[resultado]}`;

    })

}

function ocultarResultados() {

    document.querySelector('#resultado').classList.add('oculto');

}