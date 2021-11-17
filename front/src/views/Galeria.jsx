import React from 'react'
import big1 from '../assets/images/big1.jpg';
import big2 from '../assets/images/big2.jpg';
import big3 from '../assets/images/big3.jpg';
import big4 from '../assets/images/big4.jpg';
import big5 from '../assets/images/big5.jpg';
import big6 from '../assets/images/big6.jpg';
import big7 from '../assets/images/big7.jpg';
import big8 from '../assets/images/big8.jpg';
import big9 from '../assets/images/big9.jpg';
import big10 from '../assets/images/big10.jpg';
import big11 from '../assets/images/big11.jpg';
import big12 from '../assets/images/big12.jpg';
import big13 from '../assets/images/big13.jpg';
import big14 from '../assets/images/big14.jpg';
import big15 from '../assets/images/big15.jpg';



export const Galeria = () => {
    return (
        <div>
          <div className="main">
          {/* <!--=======content================================--> */}

          <div className="content"><div className="ic"></div>
            <div className="container_12">
                <div className="grid_12">
                  <h3 style={{"padding-left": "350px", "padding-top": "20px"}}>Eventos Realizados en nuestro Club</h3>
                </div>
                <div className="clear"></div>
                <div className="gallery">
                  <div className="grid_4">
                    <img src={big1} alt=""/>
                  </div>
                  <div className="grid_4">
                    <img src={big2} alt=""/>
                  </div>
                  <div className="grid_4">
                    <img src={big3} alt=""/>
                  </div>
                <div className="clear"></div>

                  <div className="grid_4">
                    <img src={big4} alt=""/>
                  </div>
                  <div className="grid_4">
                    <img src={big5} alt=""/>
                  </div>
                  <div className="grid_4">
                    <img src={big6} alt=""/>
                  </div>
                <div className="clear"></div>

                <div className="grid_4">
                  <img src={big7} alt=""/>
                </div>
                <div className="grid_4">
                <img src={big8} alt=""/>
                </div>
                <div className="grid_4">
                  <img src={big9} alt=""/>
                </div>
                <div className="clear"></div>

                <div className="grid_4">
                  <img src={big10} alt=""/>
                </div>
                <div className="grid_4">
                <img src={big11} alt=""/>
                </div>
                <div className="grid_4">
                  <img src={big12} alt=""/>
                </div>
                <div className="clear"></div>

                <div className="grid_4">
                  <img src={big13} alt=""/>
                </div>
                <div className="grid_4">
                <img src={big14} alt=""/>
                </div>
                <div className="grid_4">
                <img src={big15} alt=""/>
                </div>
                <div className="clear"></div>
                
              </div>
                <div className="clear"></div>
            </div>
          </div>
          </div>
        </div>

        
    )
}