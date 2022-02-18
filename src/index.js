import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Formulario from './components/Formulario';


ReactDOM.render(
  <React.StrictMode>
    <Formulario>
    <App />
    </Formulario>
    
  </React.StrictMode>,
  document.getElementById('root')
);

