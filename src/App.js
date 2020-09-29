import React from 'react';
import './App.css';
import ListUser from './Components/ListUser';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className='container'>
      <div className='App'>
        <h1>Usuarios</h1>
      </div>
      <ListUser />
    </div>
  );
}

export default App;
