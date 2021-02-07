import React from 'react'
import { connect } from 'react-redux';
import { selCatAction, delCatAction, addCatAction, inputCatAction, cargarFirebaseAction } from '../../actions/actions';

class Categorias extends React.Component {

    componentDidMount() {this.props.cargarFirebase()};

    actualizaInputValue = e => {this.props.inputCat(e.target.value)};

    selCatClickHandler = cat => {this.props.selCat(cat)};

    agregarCategoria = cat => {this.props.addCat(cat)};

    eliminarCategoria = cat => {this.props.delCat(cat, this.props.dias)};
    
    render() {
        // Creo los botones para las categorias
        let botonesCategorias = this.props.categorias.map((cat) => {
            return (
                <div key={cat+"div"} className="boton-cat-container">
                    <button 
                        key={cat} 
                        className={this.props.categoriaSeleccionada === cat ? 'botonCat seleccionado' : 'botonCat'} 
                        onClick={() => this.selCatClickHandler(cat)}>
                        {cat}
                    </button>
                    <button 
                    key={cat+"x"} 
                    onClick={ () => this.eliminarCategoria(cat)}>
                        🗑️
                    </button>
                </div>
            )
        });

        return (
            <div>
                <div className= 'seleccion-categorias'>
                    <h4 className="titulo">Seleccione una categoria:</h4>
                    {botonesCategorias}                    
                </div>
                <div>
                    <h4 className="titulo">Agregar una categoria:</h4>
                    <label htmlFor="addCatValue">
                        <input 
                        type="text" 
                        value={this.props.inputCatValue}
                        onChange={(e) => this.actualizaInputValue(e)} 
                        placeholder="Ingrese una categoria"/>
                        <button className="botonCat" onClick={() => this.agregarCategoria(this.props.inputCatValue)}>Agregar</button>
                    </label>
                </div>
            </div>
            
        );
    };
};

function mapStateToProps(state) {
    return {
        categorias: state.categorias,
        categoriaSeleccionada: state.categoriaSeleccionada,
        inputCatValue: state.inputCatValue,
        dias: state.dias 
    };
};

function mapDispatchToProps(dispatch) {
    return {
        selCat: (cat) => dispatch(selCatAction(cat)),
        delCat: (cat, diasPrevio) => dispatch(delCatAction(cat, diasPrevio)),
        addCat: (cat) => dispatch(addCatAction(cat)),
        inputCat: (value) => dispatch(inputCatAction(value)),
        cargarFirebase: () => dispatch(cargarFirebaseAction())

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categorias);
