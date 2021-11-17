import React from 'react';

//import logo from '../assets/images/logo.png';

import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';

import social from '../assets/images/3.jpg';
import dep from '../assets/images/8.jpg';
import cult from '../assets/images/7.jpg';


import not1 from '../assets/images/noticia1.jpg';
import not2 from '../assets/images/noticia2.jpg';
import not3 from '../assets/images/Noticia3.jpg';



import {CardGroup, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap'
import {Carousel} from 'react-bootstrap';

export const Inicio = () => {
    return(
        <>
         
         <div className="container_12">
            {/* CARRUSEL */}
            
            <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
                height="480px"
                />
                
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={slide2}
                alt="Second slide"
                height="480px"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide"
                height="480px"
                />
            
            </Carousel.Item>
            </Carousel>
            

            {/* SERVICIOS */}
            
            <h3>SERVICIOS</h3>
            <CardGroup>
                <Card>
                    <CardImg
                    alt="Card image cap"
                    src={social}
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5" style={{color: "#263555", fontSize: "25px"}}>
                        Eventos Sociales
                    </CardTitle>
                    <CardText>
                    Prestamos un servicio a los socios, para que celebren con sus familiares y amigos una nueva etapa de su vida
                    </CardText>              
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                    alt="Card image cap"
                    src={dep}
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5" style={{color: "#263555", fontSize: "25px"}}>
                        Eventos Culturales
                    </CardTitle>
                    <CardText>
                        Nuestro club le brinda a los hijos de los socios eventos didacticos y recreativos.
                    </CardText>
                
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                    alt="Card image cap"
                    src={cult}
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5" style={{color: "#263555", fontSize: "25px"}}>
                        Eventos Deportivos
                    </CardTitle>
                    <CardText>
                        El deporte despierta interés en la sociedad y por medio de su práctica se logra aprender sobre la convivencia y valores fundamentales.                </CardText>
                    
                    </CardBody>
                </Card>
            </CardGroup>
            
            
            {/* NOTICIAS */}
            
            <h3>NOTICIAS</h3>      
            <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={not1}
                alt="First slide"
                height="360px"
                />
            
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={not2}
                alt="Second slide"
                height="360px"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={not3}
                alt="Third slide"
                height="360px"
                />
                
            </Carousel.Item>
            </Carousel>

            
     

            {/* EQUIPO DE TRABAJO */}
            
            <h3>EQUIPO DE TRABAJO</h3>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <div className="card border-0 shadow-lg ">
                        <div className="card-body p-4">
                            <div className="card-text pt-1">
                                <h5 className="member-name mb-0 text-center" style={servicios}>Felipe Andres Muñoz</h5>
                                <div className="mb-3 text-center">Desarrollador</div>
                                <div>Ingeniero Industrial</div>
                            </div>
                        </div>
                        
                    </div>
                </div> 
                
                <div className="col-12 col-md-6">
                    <div className="card border-0 shadow-lg ">
                        <div className="card-body p-4">
                            
                            <div className="card-text pt-1">
                                <h5 className="member-name mb-0 text-center" style={servicios}>Sebastian Barragan</h5>
                                <div className="mb-3 text-center">Desarrollador</div>
                                <div>"Descripcion"</div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card border-0 shadow-lg my-5 position-relative">
                        <div className="card-body p-4">
                            
                            <div className="card-text pt-1">
                                <h5 className="member-name mb-0 text-center " style={servicios}>Laura Castañeda</h5>
                                <div className="mb-3 text-center">Desarrolladora</div>
                                <div>"Descripción" </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card border-0 shadow-lg my-5 position-relative">

                        <div className="card-body p-4">
                            
                            <div className="card-text pt-1">
                                <h5 className="member-name mb-0 text-center" style={servicios}>Diana Cataño</h5>
                                <div className="mb-3 text-center">Product Manager</div>
                                <div>"Descripcion"</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card border-0 shadow-lg my-5 position-relative">
                        <div className="card-body p-4">
                            <div className="card-text pt-1">
                                <h5 className="member-name mb-0 text-center" style={servicios}>Diana Lorena Herrera</h5>
                                <div className="mb-3 text-center">iOS Developer</div>
                                <div>"Descripcion"</div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
           
        </div>
        </> 
        
        )
}
const servicios={
  fontSize: "35px",
  color: "#263555"
}


 





