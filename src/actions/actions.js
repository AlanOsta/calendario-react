const addCatAction = (categoria) => {
    return {
        type: 'ADD_CAT',
        categoria: categoria
    };
};

const delCatAction = (categoria) => {
    return {
        type: 'DEL_CAT',
        categoria: categoria
    };
};

const selCatAction = (categoria) => {
    return {
        type: 'SEL_CAT',
        categoria: categoria
    };
};

const addDiaAction = (dia, categoria) => {
    return {
        type: 'ADD_DIA',
        dia: dia,
        categoria: categoria
    };
};

const delDiaAction = (dia) => {
    return {
        type: 'DEL_DIA',
        dia: dia    
    };
};

export  {addCatAction, delCatAction, selCatAction, addDiaAction, delDiaAction};