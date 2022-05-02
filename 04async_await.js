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

const getEmpleadoById = async (id) => {

    //! con Async/await --> es aqui donde se agrega el async antes del parametro
    try {
        const empleado =  empleados.find((e) => e.id === id);
            if (empleado) {
                return empleado;
            }
            throw new Error(`No existe un empleado con id ${id}`);
    
    } catch (error) {
        //throw new Error(`El empleado con id ${id} no existe`);
        throw error;
    }

    //! Promesas
    /* return new Promise((resolve, reject) => {
        const empleado  = empleados.find(e => e.id === id);
        if(empleado){
            resolve(empleado);
            return
        }
        reject(`El empleado con id ${id} no existe`)
    }) */
    //! con Callback
    /* const empleado  = empleados.find(e => e.id === id);
    if(empleado){
        callback(null, empleado);
        return
    }
    callback(`El empleado con id ${id} no existe`) */
}

const getSueldoById = async (id) => {
    try {
        const sueldo =  sueldos.find((s) => s.id === id);
        if (sueldo) {
            return sueldo;
        }
        throw new Error(`No existe un sueldo con id ${id}`);
    } catch (error) {
        throw error
    }
}

const id = 2;
const getDatosEmpleado = async (id) => {
    
    try {

        const empleado = await getEmpleadoById(id);
        const sueldo = await getSueldoById(id);
        
        //return `El empleado con id ${id} es ${empleado.nombre} y tiene un sueldo de ${sueldo.monto}`
        return {
            id,
            nombre: empleado.nombre,
            sueldo: sueldo.monto
        }

    } catch (error) {
        throw error;
        
    }
}

getDatosEmpleado(id)
.then(data => console.log(`El empleado con id ${data.id} es ${data.nombre} y tiene un sueldo de ${data.sueldo}`))
.catch(error => console.log(error.message))


