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

// const getEmpleadobyId = (id, callback) => {
//     const empleado  = empleados.find(e => e.id === id);
//     if(empleado){
//         callback(empleado);
//     }
// }

// const id = 1;

// getEmpleadobyId(id, e => {
//     console.log(`El empleado es: ${e.nombre}`);
// })

const getEmpleadobyId = (id, callback) => {
    const empleado  = empleados.find(e => e.id === id);
    if(empleado){
        callback(null, empleado);
        return
    }
    callback(`El empleado con id ${id} no existe`)
}

const getSueldobyEmpleadoId = (id, callback) => {
    const sueldo = sueldos.find(s => s.id === id);
    if(sueldo){
        callback(null, sueldo);
        return
    }
    callback(`No se encontro sueldo para el id ${id}`)
}

const id = 3;

getEmpleadobyId(id, (error, e) => {
    if(error){
        console.log('ERORR!!!..')
        console.log(error);
        return
    }
    
        getSueldobyEmpleadoId(id, (error, s) => {
            if(error){
                console.log('ERORR!!!..')
                console.log(error);
                return
            }
            if(s){
                console.log(`El sueldo del empleado ${e.nombre} es de ${s.monto}`);
            }
        })
    
    
})