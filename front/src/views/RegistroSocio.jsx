import React, {useState} from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import { Col, Row } from 'reactstrap'





export const RegistroSocio = () => {
    const[nombre, setNombre]=useState('')
    const[apellido, setApellido]=useState('')
    const[documento, setDocumento]=useState('')
    const[correo, setCorreo]=useState('')
    const[telefono, setTelefono]=useState('')
    const[contraseña, setContraseña]=useState('')
    

    const registroSocio=async(e)=>{
        e.preventDefault();
        const usuario={documento,nombre, apellido, correo, telefono,contraseña}
        const respuesta = await Axios.post('/socio/nuevo-socio', usuario);

        const mensaje = respuesta.data.mensaje

        if(mensaje!=='Bienvenido'){
            Swal.fire({
                icon:'error',
                title:mensaje,
                showConfirmButton:false,
                
            })
        }
        else{
            const token=respuesta.data.token
            const nombre=respuesta.data.nombre
            const idsocio=respuesta.data.idsocio

            sessionStorage.setItem('token', token)
            sessionStorage.setItem('nombre',nombre)
            sessionStorage.setItem('idsocio', idsocio)

            Swal.fire({
                icon:'success',
                title:mensaje,
                showConfirmButton:false,
                timer:1500
            })
        }

    }
    return (
        <div>
            <div className="regwrapper fadeInDown container">
                <div className="user-details2 ">
                    <h3 className="active fadeIn first" >REGISTRAR SOCIO</h3>
                   
                        <form onSubmit={registroSocio} style={{width: "500px"}}>
                            <Row xs="2" className="input-resev">
                                <Col><input type="text" className="fadeIn first"  name="login" placeholder="Nombre" onChange={(e) =>setNombre(e.target.value)} required/></Col>
                                <Col><input type="text" className="fadeIn first" name="login" placeholder="Apellido" onChange={(e) =>setApellido(e.target.value)} required/></Col>
                            </Row>
                            <Row xs="2" className="input-resev">
                                <Col><input type="number" className="fadeIn second" name="login" placeholder="Documento"  onChange={(e) =>setDocumento(e.target.value)} required/></Col>
                                <Col><input type="email" className="fadeIn second" name="login" placeholder="Correo" onChange={(e) =>setCorreo(e.target.value)} required/></Col>
                            </Row>
                            <Row xs="2" className="input-resev">
                                <Col><input type="number" className="fadeIn second" name="login" placeholder="Telefono"  onChange={(e) =>setTelefono(e.target.value)} required/></Col>
                                <Col><input type="password" className="fadeIn second" name="login" placeholder="Contraseña" onChange={(e) =>setContraseña(e.target.value)} required/></Col>
                            </Row>
                           
                            <Row> 
                                <Col><input type="submit" value="Registrar"/></Col>
                            </Row>
                        </form>
                        <Row xs="">
                        <input  className="input-resev1" onClick="location.href='/historialsocio'"  rows="8" cols="40" type="submit" value="Atrás"/>
                        </Row>
                  </div>
            </div>
        </div>
    )
}

