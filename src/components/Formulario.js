
import React, {Fragment, useState} from 'react';

const Formulario = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        tipo: '',
        DI: '',
        documento: '',
        correo: '',
        celular: '',
        nacimiento: '',
        archivo: '',

    })

    const handleInputChange = (event) => {
    
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido + ' '+ datos.celular)
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"></input>
                </div>
                <div className="col-md-3"  onChange={handleInputChange} name="tipo">
                <label for="DI">Tipo de Documento de identidad</label>
                    <select id="DI" name="DI">
                    <option value="select">Seleccionar</option>  
                    <option value="TI">Tarjeta de Identidad</option>
                    <option value="CC">Cedula de Ciudadania</option>
                    <option value="CE">Cedula de Extranjeria</option>
                    </select>
                </div>
    
                <div className="col-md-3">
                    <input type="tel" placeholder="Documento de identidad" className="form-control" onChange={handleInputChange} name="documento"></input>
                </div>
                <div className="col-md-3">
                    <input type="email" placeholder="Correo electronico" className="form-control" onChange={handleInputChange} name="correo"></input>
                </div>
                <div className="col-md-3">
                    <input type="tel" placeholder="celular" className="form-control" onChange={handleInputChange} name="celular"></input>
                </div>
                <div className="col-md-3">
                    <input type="date" placeholder="fecha de nacimiento" className="form-control" onChange={handleInputChange} name="nacimiento"></input>
                </div>
                <div className="col-md-3">
                    <input type="file" placeholder="archivo" className="form-control" accept=".jpg, .pdf" onChange={handleInputChange} name="archivo"></input>
                </div>
                <button type="submit" className="btn btn-primary btn-sm">Enviar</button>
            </form>
            <ul>
                <li>{datos.nombre}<button name='nombre' onClick={(event) => setDatos({...datos, [event.target.name] : ""})}>X</button></li>
                <li>{datos.apellido}<button name='apellido' onClick={(event) => setDatos({...datos, [event.target.name] : ""})}>X</button></li>
                <li>{datos.DI}<button  name ='DI'ononClick={(event) => setDatos({...datos, [event.target.name] : ""})}>X</button></li>
                <li>{datos.documento}<button name='documento' onClick={(event) => setDatos({...datos, [event.target.name] : ""})}>X</button></li>
                <li>{datos.correo}<button name='correo' onClick={(event) => setDatos({...datos, [event.target.name] : ""})}>X</button></li>
                <li>{datos.celular}<button name='celular' onClick={(event) => setDatos({...datos, [event.target.name] : ""})}>X</button> </li>
                <li>{datos.nacimiento}<button name='nacimiento' onClick={(event) => setDatos({...datos, [event.target.name] : ""})}>X</button></li>
                <li>{datos.archivo}<button name='archivo 'onClick={(event) => setDatos({...datos, [event.target.name] : ""})}>X</button></li>
                
            </ul>
        </Fragment>
    );
}
 
export default Formulario;