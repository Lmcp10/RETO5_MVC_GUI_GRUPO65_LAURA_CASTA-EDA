import React from 'react'

// import { AppRouter } from '../router/AppRouter'

import fuente from '../assets/images/fuente.jpg';
import restaurante from '../assets/images/restaurante.jpg';
import sendero from '../assets/images/sendero.jpg';
import piscina from '../assets/images/piscina.jpg';

import {Image} from 'react-bootstrap'

export const Nosotros = () => {
    return (
        <div className="container_12">
        
            <figure id="banner_nosotros">
            <Image style={{"width": "100%"}} src="https://www.clubcampestre.co/wp-content/uploads/2019/03/el-club-banner-club-campestre-1366x450_c.jpg" alt="El Club" title="El Club"/>
            </figure>
            
            <div className="grid_7">
                <div className="">
                    <br/>
                    <h3 style={{"width": "100%"}}>Historia</h3>
                    <p className="text1">
                        Siendo la misión del Club netamente deportiva en sus inicios y dado el gusto de sus fundadores por este deporte, se conformó un sólido equipo de fútbol que hizo respetar el campo hasta tal punto que llegó a conocerse como la “cancha sagrada”. <br />
                        Era tal el nivel futbolístico de la selección del Club que, en repetidas ocasiones, equipos profesionales como Millonarios y Santafé eran invitados a compartir este terreno de juego. Con la llegada de las grandes glorias taurinas durante las temporadas 
                        de toros, la afición al fútbol propició que la cancha sagrada acogiera equipos cuyos integrantes eran los maestros Luis Miguel Dominguín “Chicuelo” segundo, Antonio Ordóñez, Dámaso Gómez, César Girón, Pepe Cáceres y Joselillo de Colombia, entre otros, quienes año tras año visitaban nuestra cancha para compartir momentos de alegría y diversión.
                        Cuando el Club Campestre Santafé cambió su nombre por el de Club Campestre la Colina, el fútbol sufrió una época de transición donde florecieron otros deportes. Más tarde, gracias al empuje y deseo de continua mejora de sus socios, el Club Campestre la Colina, en sus pequeñas pero acogedoras instalaciones, sería el origen de lo que hoy en día conocemos como el CLUB CAMPESTRE LOS ARRAYANES.</p>
                </div>
            </div>
            <br/>
            <br/>
                      
            <div className="grid_3">
                <img className="img-responsive" style={{"width":"650px", "height": "400px"}} src={fuente} alt=""/>
            </div>
          
            <br/>
            <br/>
            <div class="grid_3">
                <img className="img-responsive" style={{"width":"600px", "height": "300px"}} src={restaurante} alt=""/>
                <p/>
                <br/>
                <img className="img-responsive" style={{"width":"600px", "height": "300px"}} src={sendero} alt=""/>
                <p/>
                <br/>
                <img className="img-responsive" style={{"width":"600px", "height": "300px"}} src={piscina} alt="" />
            </div>

            <div class="grid_91">
                <h3>Misión</h3>
                <p className="text1 tx2">Somos un Club privado que brinda satisfacción a los socios sus familias, amigos y colaboradores en ambientes de esparcimiento deportivo, social, cultural y recreativo. Comprometidos con el servicio, la responsabilidad social y ambiental.</p>

                <h3>Visión</h3>
                <p className="text1 tx2">Arrayanes será un Club Campestre vigente, como la mejor opción de esparcimiento e interacción social para los socios y sus familias. Reconocido por generar experiencias memorables.</p>

                <h3>Nuestros Valores</h3>
                <p className="text1 tx3">En el Club Campestre los Arrayanes promovemos y nos comprometemos con los siguientes valores como base fundamental:</p>
            
                <ul className="list2">
                    <li>Integridad y Honestidaad</li>
                    <li>Equidad y Justicia</li>
                    <li>Excelencia en el servicio</li>
                    <li>Administracion con sentido humano</li>
                    <li>Union familiar</li>
                    <li>Compromiso Social y Ambiental</li>
                </ul>
            </div>
            <div class="clear"></div>
            
        </div>
                           
    )
}
