import React from 'react'
import matrimonio from '../assets/images/matrimonio.jpg';
import empresariales from '../assets/images/empresariales.jpg';
import grados from '../assets/images/grados.jpg';
import big9 from '../assets/images/big9.jpg';
import exterior from '../assets/images/exterior.jpg';
import siete from '../assets/images/7.jpg';
import futbol from '../assets/images/futbol.jpg';
import tenis from '../assets/images/tenis.jpg';
import squash from '../assets/images/squash.jpg';
import natacion from '../assets/images/natacion.jpg';
import Billar from '../assets/images/Billar.jpg';
import bolos from '../assets/images/bolos.jpg';


export const Eventos = () => {
    return (
        <div>   
            <div className="main">
                {/* <!--=======content================================--> */}
            
                <div className="content">
                <div className="container_12">
                    <figure id="banner_internas">
                    <img className="img-responsive" style={{"width": "100%"}} src="https://www.clubcampestre.co/wp-content/uploads/2019/03/eventos-banner-club-campestre-1366x450_c.jpg" alt="Eventos" title="Eventos"/>
                    </figure>
            {/* <!-- EVENTOS SOCIALES --> */}
                    <div className="grid_12">
                    <h3 style={{"padding-left": "450px", "padding-top": "20px"}}>EVENTOS SOCIALES</h3>
                    </div>
                    <div className="boxes">
                    <div className="grid_4">
                        <figure>
                            <div><img src={matrimonio} alt=""/></div>
                            <figcaption>
                                <h3 style={{"font-size": "30px"}}>Matrimonios</h3>
                                Prestamos un servicio a los socios, para que  celebren con sus familiares y amigos una nueva etapa de su vida
                            </figcaption>
                        </figure>
                    </div>
                    <div className="grid_4">
                        <figure>
                            <div><img src={empresariales} alt=""/></div>
                            <figcaption>
                                <h3 style={{"font-size": "30px"}}>Reuniones Empresariales</h3>
                                Nuestro Club Cuenta con espacios especializados para compartir, disfrutar y pasar un momentos especial, ofrecemos un servicio todo incluido en eventos empresariales.
                            </figcaption>
                        </figure>
                    </div>
                    <div className="grid_4">
                        <figure>
                            <div><img src={grados} alt=""/></div>
                            <figcaption>
                                <h3>Grados</h3>
                                Realizamos su celebración con altura y efeciencia para que sus invitados vivan una experiencia inolvidable.
                            </figcaption>
                        </figure>
                    </div>
                    </div>
                    <div className="grid_12">
                    <p></p>
                    </div>
                    <div className="boxes">
            
                    <div className="grid_4">
                        <figure>
                            <div><img src={big9} alt="" style={{"height": "281px"}} /></div>
                            <figcaption>
                                <h3>Fiestas Infantiles</h3>
                                Nuestro club cuenta con estaciones de juego como Arenero, Bolos entres otras atracciones donde tus hijos podrán celebrar sus cumpleaños, compartirán muchas experiencias y se divertirán de principio a fin.
                            </figcaption>
                        </figure>
                    </div>
                    <div className="grid_4">
                        <figure>
                            <div><img src={exterior} alt=""/></div>
                            <figcaption>
                                <h3>Parrilladas</h3>
                                Nuestro club le brinda a los hijos de los socios eventos didacticos y recreativos.
                            </figcaption>
                        </figure>
                    </div>
                    <div className="grid_4">
                        <figure>
                            <div><img src={siete} alt="" style={{"height": "281px"}} /></div>
                            <figcaption>
                                <h3>Eventos Deportivos</h3>
                                    El deporte despierta interés en la sociedad y por medio de su práctica se logra aprender sobre la convivencia y valores fundamentales.
                            </figcaption>
                        </figure>
                    </div>
                    </div>
            
                    <div className="grid_12">
                    <h3 style={{"padding-left": "450px", "padding-top": "20px"}}>EVENTOS DEPORTIVOS</h3>
                    </div>
                    
                    <div className="boxes">
                    <div className="grid_4">
                        <figure>
                            <div><img src={futbol} alt=""/></div>
                            <figcaption>
                                <h3>Futbol</h3>
                                Cada fin de semana, los amantes de uno de los deportes más populares del mundo se reúnen en Arrayanes 
                                para disfrutar, de encuentros libres que sirven participar en el Torneo anual.
                            </figcaption>
                        </figure>
                    </div>
                    <div className="grid_4">
                        <figure>
                            <div><img src={tenis} alt=""/></div>
                            <figcaption>
                                <h3>Tenis</h3>
                                El club ofrece una gran variedad de programas para jovenes y adultos, lecciones privadas semanales
                            </figcaption>
                        </figure>
                    </div>
                    <div className="grid_4">
                        <figure>
                            <div><img src={squash} alt=""/></div>
                            <figcaption>
                                <h3>Squash</h3>
                                Com 4 amplias canchas y excelentes profesores, el club ofrece direferentes horarios para que disfrute de esta disciplina
                            </figcaption>
                        </figure>
                    </div>
                    </div>
            
                    <div className="grid_12">
                    <p></p>
                    </div>
                    <div className="boxes">
                    <div className="grid_4">
                        <figure>
                            <div><img src={natacion} alt=""/></div>
                            <figcaption>
                                <h3>Natación</h3>
                                Aca se encuentra la mejor opcion, donde se combinan escenarios naturales y las mejores instalaciones para 
                                practicar natación
                            </figcaption>
                        </figure>
                    </div>
                    <div className="grid_4">
                        <figure>
                            <div><img src={Billar} alt=""/></div>
                            <figcaption>
                                <h3>Billar</h3>
                                A un lado de la taberna del club se encuentra un espacio comdo con cuatro meses de billar 
                                donde nuestros socioes pueden disfrutar de este acjedor espacio.
                            </figcaption>
                        </figure>
                    </div>
                    <div className="grid_4">
                        <figure>
                            <div><img src={bolos} alt=""/></div>
                            <figcaption>
                                <h3>Bolos</h3>
                                Contamos con un salón de bolos de cuatro líneas, donde el confort y el desanso se hacen presente en este acogedor espacio de juego 
                                y de porte para toda la familia.
                            </figcaption>
                        </figure>
                    </div>
                    </div>
            
                    
                    
                    <div className="clear"></div>
                </div>
                </div>
            </div>
        </div>
       )
}