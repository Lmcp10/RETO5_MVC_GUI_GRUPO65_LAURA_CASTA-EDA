import React, {useState} from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import team from '../assets/images/team.jpg';
import '../assets/css/login.css';




export const Login = () => {
  
    const[documento, setDocumento]=useState('')
    const [contraseña, setContraseña]=useState('')

    const login=async(e)=>{
        e.preventDefault();
        const usuario={documento, contraseña}
        const respuesta = await Axios.post('/socio/login', usuario);

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
            const idsocio=respuesta.data.id

            sessionStorage.setItem('token', token)
            sessionStorage.setItem('nombre',nombre)
            sessionStorage.setItem('idsocio', idsocio)

            window.location.href='/menusocio'
          

        
            Swal.fire({
                icon:'success',
                title:mensaje,
                showConfirmButton:false,
                timer:1500
            })
      
           
            
        }

    }

    return (
            <div className="main">
                <div className="content"> 
                    {/* <!--=======content================================--> */}
                    
                        <div className="wrapper fadeInDown">
                            <div id="formContent">
    
                                {/* <!-- Tabs Titles --> */}
                                <h3 className="active"> LOGIN SOCIO </h3>
                            
                                {/* <!-- Icon --> */}
                                <div className="fadeIn first">
                                    <img src={team} id="icon" alt="User Icon" />
                                </div>
                            
                                {/* <!-- Login Form --> */}
                                <form onSubmit={login}>
                                
                                    <input type="text" className="fadeIn second"  placeholder="Ingrese con su documento" onChange={(e)=>setDocumento(e.target.value)} required autoFocus/> 
                                    <input type="password" className="fadeIn third" placeholder="Contraseña" onChange={(e)=>setContraseña(e.target.value)} required/>
                                    <input type="submit" value="Ingresar" className="fadeIn fourth"/>
                                  
                                </form>
                            
                                {/* <!-- Remind Passowrd --> */}
                                <div id="formFooter">
                                    <p className="underlineHover">Si desea recuperar su contraseña comuniquese directamente con el Club</p>
                                </div>
                            </div>
                        </div>
                    
                    <div className="clear"></div>
                </div>
            </div>
    )
}