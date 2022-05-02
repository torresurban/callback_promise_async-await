const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Ricardo'
    },
    {
        id: 3,
        nombre: 'Carlos'
    }
];

const sueldos = [
    {
        id: 1,
        monto: 1000
    },
    {
        id: 2,
        monto: 2000
    }
]

const getEmpleadoById = (id) => {

    //! Promesas
    return new Promise((resolve, reject) => {
        const empleado  = empleados.find(e => e.id === id);
        if(empleado){
            resolve(empleado);
            return
        }
        reject(`El empleado con id ${id} no existe`)
    })
    //! con callback
    /* const empleado  = empleados.find(e => e.id === id);
    if(empleado){
        callback(null, empleado);
        return
    }
    callback(`El empleado con id ${id} no existe`) */
}

const getSueldoById = (id) => {

    //! Promesas
    return new Promise((resolve, reject) => {
        const sueldo = sueldos.find(s => s.id === id);
        if(sueldo){
            resolve(sueldo);
            return
        }
        reject(`No se encontro sueldo para el id ${id}`)
    })

    //! con callback
    /* const sueldo = sueldos.find(s => s.id === id);
    if(sueldo){
        callback(null, sueldo);
        return
    }
    callback(`No se encontro sueldo para el id ${id}`) */
}

const id = 1;
let trabajador;

//! primera forma pero no es viable
/* getEmpleadobyId(id).then(empleado => {
    console.log(`El empleado con id ${id} es ${empleado.nombre}`);
        return getSueldobyEmpleadoId(id).then(sueldo => {
            console.log(`El sueldo del empleado con id ${id} es ${sueldo.monto}`);
        }).catch(error => {
            console.log(error);
        })
    
}).catch(error => console.log(error)) */

//! segunda forma
getEmpleadoById(id)
    .then(empleado => {
        trabajador = empleado.nombre;
        return getSueldoById(id)
    })
    .then(sueldo => {
        console.log(`El sueldo del empleado ${trabajador} con id ${id} es ${sueldo.monto}`);
    })
    .catch(error => console.log(error))