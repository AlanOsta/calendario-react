import React from 'react'
//import { db } from "../../firebase";
import { connect } from 'react-redux';
import { selCatAction, delCatAction, addCatAction } from '../../actions/actions';

class Categorias extends React.Component {

    constructor () {
        super()
        this.state = {
            inputCategoria: ""                             
        };     
    }

    // cargaAnio = () => {
    //     var docRef = db.collection("calendario").doc("anio");
    //     docRef.get().then(function(doc) {               // Fetch del array completo 
    //     let anioFB = doc.data().anioFB;						 
    //     let categorias = [...new Set(anioFB)];			// Filtra solo valores unicos de categorias incluida " "
    //     categorias.splice(categorias.indexOf(" "),1);	// Saco el " " del array    
    //     console.log(categorias);
    //     }).catch(function(error) {
    //         console.log("Error al obtener el documento:", error);
    //     });
    // };

    actualizaInputValue = (e) => {
        this.setState({inputCategoria: e.target.value});        
    };

    selCatClickHandler = (cat) => {
      //  console.log(cat);
        this.props.selCat(cat);
    };

    agregarCategoria = (cat) => {
        this.props.addCat(cat);
    };

    eliminarCategoria = (cat) => {
       this.props.delCat(cat);
    };
    
    render() {
        // Creo los botones para las categorias
        let botonesCategorias = this.props.categorias.map((cat) => {
            return (
                <div key={cat+"div"} className="botonCat">
                    <button 
                        key={cat} 
                        className={this.props.categoriaSeleccionada === cat ? 'botonCat seleccionado' : 'botonCat'} 
                        onClick={() => this.selCatClickHandler(cat)}>
                        {cat}
                    </button>
                    <button 
                    key={cat+"x"} 
                    onClick={ () => this.eliminarCategoria(cat)}>
                        X
                    </button>
                </div>
            )
        });

        return (
            <div>
                <div>
                    <h4 className="titulo">Seleccione una categoria:</h4>
                    {botonesCategorias}                    
                </div>
                <div>
                    <h4 className="titulo">Agregar una categoria:</h4>
                    <label htmlFor="addCatValue">
                        <input 
                        type="text" 
                        name="addCat"
                        value={this.state.inputCategoria}
                        onChange={this.actualizaInputValue} 
                        placeholder="Ingrese una categoria"/>
                        <button className="botonCat" onClick={() => this.agregarCategoria(this.state.inputCategoria)}>Agregar</button>
                        {/* <button className="botonCat">Eliminar</button> */}
                    </label>
                </div>
            </div>
            
        );
    };
};

function mapStateToProps(state) {
    return {
        categorias: state.categorias,
        categoriaSeleccionada: state.categoriaSeleccionada        
    };
};

function mapDispatchToProps(dispatch) {
    return {
        selCat: (cat) => dispatch(selCatAction(cat)),
        delCat: (cat) => dispatch(delCatAction(cat)),
        addCat: (cat) => dispatch(addCatAction(cat))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categorias);
