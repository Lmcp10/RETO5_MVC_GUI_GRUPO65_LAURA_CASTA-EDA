import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <MDBFooter className="font-small pt-4 mt-4" style={menu}>
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title" style={{color: "white", fontSize: "30px"}}>Ubicación</h5>
                        <p>
                            Autopista Norte Km 14, Vía La Inmaculada
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title" style={{color: "white", fontSize: "30px"}}>Redes Sociales</h5>
                        <div className="footer-right">
                        <Link to="https://www.facebook.com/Clublosarrayanes/">
                            <i className="fa fa-facebook"  style={{fontSize: "30px"}}></i>
                        </Link>
                        
                        <Link to="https://www.instagram.com/club.arrayanes/" >
                            <i className="fa fa-instagram" style={{fontSize: "30px"}}></i>
                        </Link>
                        </div>
                    
                       
                    </MDBCol>
                        
                       
                      
                   
                    
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                &copy; {new Date().getFullYear()}  <Link to="/"> CLUB CAMPESTRE ARRAYANES </Link>
                </MDBContainer>
            </div>
            </MDBFooter>
    )
}

const menu = {
    backgroundColor: '#263555'
  };