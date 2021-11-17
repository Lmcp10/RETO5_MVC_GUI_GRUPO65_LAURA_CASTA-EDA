import React from 'react'
import {Row, Col} from 'reactstrap'
import '../assets/css/forms.css'


export const Micuenta = () => {
    return (
      
        <div className="regwrapper fadeInDown container">
            <Row xs="">
                <input  className="input-resev1"  rows="8" cols="40" type="submit" value="Mis reservas"/>
            </Row>
            <h3>Datos personales</h3>
            <p>Edita y Actualiza tu informacion personal </p>
            <Row xs="">
                <Col><input className="fadeIn first input-resev1" placeholder="Identificación" type="number" id="documento" name="documento"/></Col>       
            </Row>
            <Row xs="">
                <input  className="fadeIn first" rows="8" cols="40" type="submit" value="Buscar"/>
            </Row>
    
            <div className="user-details2">       
                <form>
                    <Row xs="2" className="input-resev">
                        <Col><input type="text" className="fadeIn first"  name="login" placeholder="Correo"  required/></Col>
                        <Col><input type="text" className="fadeIn first" name="login" placeholder="Nombre" required/></Col>      
                        <Col><input type="text" className="fadeIn first" name="login" placeholder="Apellido" required/></Col>
                        <Col><input type="text" className="fadeIn first" name="login" placeholder="Telefono" required/></Col>
                    </Row>
                    <Row xs="3" col="4"> 
                        <input type="submit" value="Actualizarr"/>
                    </Row>
                </form>
            </div>
           
        </div>
       
    )
}
