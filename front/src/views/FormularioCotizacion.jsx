import React, {useState} from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import { Col, Row } from 'reactstrap'
import '../assets/css/forms.css';


export const FormularioCotizacion = () => {
    const[nombre, setNombre]=useState('')
    const[apellido, setApellido]=useState('')
    const[documento, setDocumento]=useState('')
    const[correo, setCorreo]=useState('')
    const[telefono, setTelefono]=useState('')
    const[tipo_evento, setTipoEvento]=useState('')
    const[num_personas, setNumPersonas]=useState('')
    const[area, setArea]=useState('')
    const[fecha, setFecha]=useState('')
    const[hora, setHora]=useState('')
    const[comida, setComida]=useState('')
    const[bebidas, setBebidas]=useState('')
    const[grupo_musical, setGrupoMusical]=useState('')
    const[adicionales, setAdicionales]=useState('')

 

    const reserva=async(e)=>{
        e.preventDefault();
        const usuario={documento,nombre, apellido, correo, telefono, tipo_evento, num_personas,area, fecha, hora, comida, bebidas, grupo_musical, adicionales}
        const respuesta = await Axios.post('/reserva/nueva-reserva', usuario);

        const mensaje = respuesta.data.mensaje

        if(mensaje!=='Bienvenido'){
            Swal.fire({
                icon:'success',
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
        {/* <!--=======content================================--> */}
            <div className="regwrapper fadeInDown container">
                <div className="user-details2 ">
                    {/* <!-- Tabs Titles --> */}
                    <h3 className="active fadeIn first"> COTIZA AQUÍ </h3>
                           
                    {/* <!-- Login Form --> */}
                    {/* <form @submit.prevent="buscarUser()" v-if="show"> */}
                    
                    
                        <form onSubmit={reserva}>
                            <Row xs="2" className="input-resev">
                                <Col><input type="text" className="fadeIn first"  name="login" placeholder="Documento"  onChange={(e) =>setDocumento(e.target.value)} required/></Col>
                            </Row>
                            <Row xs="2" className="input-resev">
                                <Col><input type="text" className="fadeIn first"  name="login" placeholder="Nombre" onChange={(e) =>setNombre(e.target.value)} required/></Col>
                                <Col><input type="text" className="fadeIn first" name="login" placeholder="Apellido" onChange={(e) =>setApellido(e.target.value)} required/></Col>
                            </Row>
                            <Row xs="2" className="input-resev">
                                <Col><input type="number" className="fadeIn second" name="login" placeholder="Teléfono"  onChange={(e) =>setTelefono(e.target.value)} required/></Col>
                                <Col><input type="email" className="fadeIn second" name="login" placeholder="Correo" onChange={(e) =>setCorreo(e.target.value)} required/></Col>
                            </Row>
                            <Row xs="3" className="input-resev">
                                <Col><select name="tipoEvento" id="tipoEvento" className="fadeIn third" onChange={(e) =>setTipoEvento(e.target.value)}>
                                        <option selected>Seleccione evento:</option>
                                        <option value="matrimonio">Matrimonio</option>
                                        <option value="grado">Grado</option>
                                        <option value="cumpleaños">Cumpleaños</option>
                                        <option value="reunion">Reunión Empresarial</option>
                                    </select></Col>
                                <Col><select name="tipoEspacio" id="tipoEspacio" className="fadeIn fourth " onChange={(e) =>setArea(e.target.value)}>
                                        <option selected>Seleccione Area:</option>
                                        <option value="presidencial">Salón presidencial</option>
                                        <option value="gourtmet">Salón gourmet</option>
                                        <option value="piscina">Piscina</option>
                                        <option value="parilla">Terraza parilla</option>
                                        <option value="futbol">Terraza fútbol</option>
                                        <option value="parque">Parque</option>
                                    </select></Col>

                                <Col><input type="number" className="fadeIn third" name="login" placeholder="Número de personas" onChange={(e) =>setNumPersonas(e.target.value)}required/></Col>
                            </Row>
                            <Row xs="2" className="input-resev">
                                <Col><input type="date" className="fadeIn fourth" name="login" placeholder="Fecha" onChange={(e) =>setFecha(e.target.value)} required/></Col>
                                <Col><input type="time" className="fadeIn fourth" name="login" placeholder="Hora" onChange={(e) =>setHora(e.target.value)} required/></Col>
                            </Row>
                            <Row xs="3" className="input-resev">
                                <Col>
                                    <h2 className="fadeIn fourth">COMIDA</h2>
                                    <label className="fadeIn fourth"><input type="checkbox" id="buffet" name="buffet" onChange={(e) =>setComida(e.target.value)} /> Buffet</label><br />
                                    <label className="fadeIn fourth"><input type="checkbox" id="americano" name="americano" onChange={(e) =>setComida(e.target.value)} /> Servicio Americano</label><br />
                                    <label className="fadeIn fourth"><input type="checkbox" id="bocadillos" name="bocadillos" onChange={(e) =>setComida(e.target.value)} /> Bocadillos</label><br />
                                    <label className="fadeIn fourth"><input type="checkbox" id="cathering" name="cathering" onChange={(e) =>setComida(e.target.value)} /> Cathering</label><br />
                                </Col>
                                <Col>
                                    <h2 className="fadeIn fourth">BEBIDAS</h2>
                                    <label className="fadeIn fourth"><input type="checkbox" id="vino" name="vino" onChange={(e) =>setBebidas(e.target.value)} /> Vino Espumoso</label><br />
                                    <label className="fadeIn fourth"><input type="checkbox" id="wisky" name="wisky" onChange={(e) =>setBebidas(e.target.value)} /> Wisky</label><br />
                                    <label className="fadeIn fourth"><input type="checkbox" id="tequila" name="tequila" onChange={(e) =>setBebidas(e.target.value)} /> Tequila</label><br />
                                    <label className="fadeIn fourth"><input type="checkbox" id="agua" name="agua" onChange={(e) =>setBebidas(e.target.value)} /> Agua</label><br />
                                </Col>

                                <Col>
                                    <h2 className="fadeIn fourth">MÚSICA</h2>
                                    <label className="fadeIn fourth"><input type="checkbox" id="dj" name="dj" onChange={(e) =>setGrupoMusical(e.target.value)}/> DJ</label><br />
                                    <label className="fadeIn fourth"><input type="checkbox" id="parranda" name="parranda" onChange={(e) =>setGrupoMusical(e.target.value)}/> Parranda Vallenata</label><br />
                                    <label className="fadeIn fourth"><input type="checkbox" id="serenata" name="serenata" onChange={(e) =>setGrupoMusical(e.target.value)}/> Serenata</label><br />
                                </Col>
                            </Row>
                            <textarea className="fadeIn fourth input-resev" name="textarea" rows="8" cols="40" placeholder="Adicionales" onChange={(e) =>setAdicionales(e.target.value)}></textarea>
                            <input type="submit" className="fadeIn fourth" value="COTIZAR"/>
                        </form>
                    
                
                    {/* <!-- Remind Passowrd --> */}
                </div>
            </div>
            </div>
   )
}