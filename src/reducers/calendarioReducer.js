const estadoInicial = {
    categorias: ["Vacaciones", "Planificacion", "Preparativos"],
    categoriaSeleccionada: "Vacaciones",
    dias: {
        1: "Vacaciones",
        2: "Vacaciones",
        3: "Vacaciones",
        4: "Vacaciones",
        5: "Vacaciones",
        6: "Vacaciones",
        7: "Vacaciones",
        8: "Planificacion",
        9: "Planificacion",
        10: "Planificacion",
        11: "Planificacion",
        12: "Planificacion",
        13: "Planificacion",
        14: "Planificacion",
        15: "Planificacion",
        16: "Planificacion",
        17: "Planificacion",
        18: "Planificacion",
        19: "Planificacion",
        20: "Planificacion",
        52: "Preparativos",
        53: "Preparativos",
        54: "Preparativos",
        57: "Preparativos",
        58: "Preparativos"
    }
};

const calendarioReducer = (estadoPrevio = estadoInicial, action) => {
    switch(action.type) {
        case 'ADD_CAT':
            return{
                ...estadoPrevio,
                categorias: [...estadoPrevio.categorias, action.categoria]
            }
        case 'DEL_CAT':
            return {
                ...estadoPrevio,
                categorias: estadoPrevio.categorias.filter(cat => cat !== action.categoria)
            }
        case 'SEL_CAT':
            return {
                ...estadoPrevio,
                categoriaSeleccionada : action.categoria
            }
        case 'ADD_DIA':        
        return {
            ...estadoPrevio,
            dias : {...estadoPrevio.dias, [action.dia] : action.categoria }
        }
        case 'DEL_DIA':
            //console.dir("Del Dia :"+estadoPrevio.dias[action.dia])
            //let diasNuevo = { delete estadoPrevio.dias[action.dia]}
            delete estadoPrevio.dias[action.dia]
            //let diasNuevo = estadoPrevio.dias.splice(action.dia, 1)
            //console.log(diasNuevo)
        return estadoPrevio
            //{...estadoPrevio, dias: diasNuevo}            
            //dias : estadoPrevio.dias.filter(dia => dia !== action.dia)
            //dias :  {...estadoPrevio.dias, [action.dia] : undefined }
            //dias :  {...estadoPrevio.dias, delete estadoPrevio.dias[] }
            
        default:
            return estadoPrevio
    };
};

export default calendarioReducer;
