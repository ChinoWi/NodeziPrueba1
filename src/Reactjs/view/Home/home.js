import React from 'react';
import {Link} from 'react-router';
import Slider from '../../component/slider/slider'
import PruebaModal from '../../component/modalVideo/modalVideo'

const ViewHome=React.createClass({

    render(){
         return(
            <div className="sectionhomeAll">
                <div className="sectionhome1">
                    <div className="show-for-small-only">
                        <div className="content-small">
                            <div className="description-small">
                                Desarrollo de Software Aplicaciones Web, Móviles
                                y Desktop, implementando Seguridad Hacking
                            </div>
                        </div>
                    </div>
                    <div className="show-for-medium">
                        <div className="content">
                            <div className="text-content">
                                <div className="description">
                                    Desarrollo de Software Aplicaciones Web, Móviles
                                    y Desktop, implementando Seguridad Hacking.
                                </div>
                            </div>
                            <div className="text-img">
                                <img src="asset/images/desktop.png" alt=""/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="sectionhome2">
                    <div className="row">
                        <div className="large-7 columns">
                            <div className="show-for-medium">
                                <div className="container1">
                                    <p>Confie en Nosotros.</p>
                                </div>
                            </div>
                        </div>
                        <div className="large-5 columns">
                            <div className="container2">
                                <div className="show-for-small-only">
                                    <div className="sectionVideo">
                                        <h6><small>video</small></h6>
                                        <div className="flex-video">
                                            <iframe style={{background:'#DBD8F0'}} className="thumbnail" src="https://www.youtube.com/embed/aiBt44rrslw"></iframe>
                                        </div>
                                    </div>
                                    <div className="sectionTexto">
                                        <div className="text-content text-center">
                                            sdfsdfsdf
                                        </div>
                                        <div className="bottomVideo-span">
                                            <span className="texto"><h3><small>Website</small></h3></span><div className="spacio"></div>
                                            <span className="texto"><h3><small>Desing</small></h3></span><div className="spacio"></div>
                                            <span className="texto"><h3><small>Security</small></h3></span><div className="spacio"></div>
                                            <span className="texto"><h3><small>Movil</small></h3></span><div className="spacio"></div>
                                            <span className="texto"><h3><small>Marketing</small></h3></span>
                                        </div>
                                    </div>

                                </div>

                                <div className="show-for-medium text-center">
                                    <h6><small>video</small></h6>
                                    <PruebaModal></PruebaModal>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="sectionQuienesSomos">
                    <div className="text-center information">
                        <span className="information-we">¿Quienes Somos?</span>
                        <Link to="/Informacion" className="information-more">Mas informacion</Link>
                    </div>
                </div>

                <div className="sectionhome3">
                    <div className="show-for-small-only">
                        <section id="sectionSlider">
                            <Slider></Slider>
                        </section>
                    </div>
                    <div className="show-for-medium">
                        <section id="sectionSlider">
                            <Slider></Slider>
                        </section>
                    </div>
                </div>
                
                
                <div className="sectionhome4">
                    <div className="container">
                        <div className="section-title">
                            <div className="title">
                                NUESTROS SERVICIOS
                            </div>
                        </div>
                        <div className="row small-up-1 medium-up-2 large-up-4 text-center">
                            <div className="columns">
                                <div className="spaces">
                                    <div className="content">
                                        <img src="asset/images/icno-home-web.png" alt=""/>
                                        <div className="text-content">Diseño Web y Desarrollo</div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="spaces">
                                    <div className="content">
                                        <img src="asset/images/icon-home-mobil.png" alt=""/>
                                        <div className="text-content">Diseño Movil y Desarrollo</div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="spaces">
                                    <div className="content">
                                        <img src="asset/images/icon-home-pentesting.png" alt=""/>
                                        <div className="text-content">Pentesting Web</div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="spaces">
                                    <div className="content">
                                        <img src="asset/images/icon-home-hacking.png" alt=""/>
                                        <div className="text-content">Seguridad Informatica</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="content-button">
                            <Link to="/Servicios" className="button secondary hollow large">Ver más</Link>
                        </div>
                    </div>
                </div>

                <div className="sectionhome5">
                    <div className="container">
                        <div className="section-title">
                            <div className="title">
                                TECNOLOGIAS DE TRABAJO
                            </div>
                        </div>
                        <div className="row small-up-1 medium-up-2 large-up-4 text-center">
                            <div className="columns">
                                <div className="spaces">
                                    <div className="content">
                                        <img src="asset/images/icno-home-web.png" alt=""/>
                                        <div className="text-title">FRONTEND</div>
                                        <div className="text-texto">
                                            sdfsdfsdfsdfsd sad asd asd asd asd ass
                                        </div>
                                        <div className="buttonEnvio">
                                            <Link to="/Servicios/Tecnologias/Frontend" className="secondary hollow button">Ver más</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="spaces">
                                    <div className="content">
                                        <img src="asset/images/icon-home-mobil.png" alt=""/>
                                        <div className="text-title">BACKEND</div>
                                        <div className="text-texto">
                                            sdfsdfsdfsdfsd sad asd asd asd asd ass
                                        </div>
                                        <div className="buttonEnvio">
                                            <Link to="/Servicios/Tecnologias/Backend" className="secondary hollow button">Ver más</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="spaces">
                                    <div className="content">
                                        <img src="asset/images/icon-home-pentesting.png" alt=""/>
                                        <div className="text-title">MOVIL</div>
                                        <div className="text-texto">
                                            sdfsdfsdfsdfsd sad asd asd asd asd ass
                                        </div>
                                        <div className="buttonEnvio">
                                            <Link to="/Servicios/Tecnologias/Movil" className="secondary hollow button">Ver más</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="spaces">
                                    <div className="content">
                                        <img src="asset/images/icon-home-hacking.png" alt=""/>
                                        <div className="text-title">ALMACENAMIENTO DE DATOS</div>
                                        <div className="text-texto">
                                            sdfsdfsdfsdfsd sad asd asd asd asd ass
                                        </div>
                                        <div className="buttonEnvio">
                                            <Link to="/Servicios/Tecnologias/Almacenamiento-de-datos" className="secondary hollow button">Ver más</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>


            </div>
        );
    }
});
export default ViewHome;