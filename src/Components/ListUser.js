/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import FormUser from './FormUser';


class ListUser extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            users: [],
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.newUser = this.newUser.bind(this);
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users/')
            .catch((err) => console.log('Error llamando usuarios', err))
            .then((res => res.json()))
            .then((users) => this.setState({users}))
    }

    deleteUser(index){
        fetch('https://jsonplaceholder.typicode.com/users/',{
            method: 'DELETE'
        })
        .catch((err) => console.log('Error al eliminar', err))
        .then(() => {
            let users = this.state.users;
            users.splice(index, 1);
            this.setState({users});
        })
    }

    newUser(result){
        var users = this.state.users;
        console.log(users);

        let lastid = users[users.length-1].id;
        lastid++;
        console.log(lastid);
        fetch('https://jsonplaceholder.typicode.com/users/', {
            method: 'POST',
            body: JSON.stringify({
                id: lastid,
                name: result.name,
                email: result.email,
                phone: result.phone,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
        .catch((err) => {console.log('Error agregando usuario', err)})
        .then(() => {
            users.put({
                id: lastid,
                name: result.name,
                email: result.email,
                phone: result.phone,
            })
            this.setState({users})
        })
    }

    render(){
        return(
            <div className='row'>
                <div className='col-lg-8'>
                    <table className='table'>
                        <tr>
                            <th>
                                Nombre
                            </th>
                            <th>
                                Correo
                            </th>
                            <th>
                                Teléfono
                            </th>
                            <th></th>
                            <th></th>
                        </tr>
                        {
                            this.state.users.map((user) => (
                                <tr>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.phone}
                                    </td>
                                    <td>
                                        <a href='#'>
                                            Ver
                                        </a>
                                    </td>
                                    <td>
                                        <a href='#'>
                                            Eliminar
                                        </a>
                                    </td>
                                </tr>        
                            ))
                        }
                    </table>
                </div>
                <FormUser users={this.state.users} newUser={this.newUser}/>
            </div>
        )
    }
    
}

export default ListUser;