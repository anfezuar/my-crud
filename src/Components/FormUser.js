import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Components.css';

class FormUser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
        }
        this.newUser = this.newUser.bind(this);
    }

    newUser(){
        this.props.newUser({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
        })
    }

    render(){
        return(
            <div className='col-lg-4 formulario'>
                <h3 className='titulo'>Nuevo Usuario</h3>
                <label>Nombre</label>
                <input type="text" className='form-control' onChange={(name) => {this.setState({name})}} />
                <label>Correo</label>
                <input type="text" className='form-control' onChange={(email) => {this.setState({email})}} />
                <label>Teléfono</label>
                <input type="text" className='form-control' onChange={(phone) => {this.setState({phone})}} />
                <button className='btn btn-primary boton' onClick={this.newUser}>Agregar</button>
            </div>
        )
    }
}

export default FormUser;