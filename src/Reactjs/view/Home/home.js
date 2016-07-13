import React from 'react';
import {Link} from 'react-router';
import Slider from '../../component/slider/slider'
import PruebaModal from '../../component/modalVideo/modalVideo'


const SectionInformacionDesktop=React.createClass({
    render(){
        return(
            <div>
                <div className="row columns content-item">
                    <div className="medium-3 large-3 columns " >
                        <img src={this.props.imagensrc} style={{width:'110px'}} alt=""/>
                    </div>
                    <div className="medium-6 large-6 columns" >
                        <h5 style={{margin:'27px'}}>{this.props.texto}</h5>
                    </div>
                    <div className="medium-3 large-3 columns" >
                         <Link to={this.props.url} className="secondary button" style={{margin:'35px'}}>Informacion</Link>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
});


const ViewHome=React.createClass({
    getInitialState(){
        return{
            informacion:[
                {
                    key:1,
                    imagensrc:'asset/images/desarrolloWeb.png',
                    texto:'Desarrollo de Aplicaciones web para personas y empresas',
                    textoButton:'Informacion',
                    url:'/Frontend'

                },
                {
                    key:2,
                    imagensrc:'asset/images/seguridad.png',
                    texto:'Auditoria y Seguridad para para empresas y aplicaciones',
                    textoButton:'Informacion',
                    url:'/Seguridad'
                },
                {
                    key:3,
                    imagensrc:'asset/images/desarrolloMovil.png',
                    texto:'Desarrollo de Aplicaciones Moviles para personas y empresas',
                    url:'/Moviles'
                }

            ]
        }
    },
    eachItemDesktop:function(info) {
        return (
            <SectionInformacionDesktop key={info.key}
                                        imagensrc={info.imagensrc}
                                        texto={info.texto}
                                        url={info.url}>
            </SectionInformacionDesktop>
        )
        
    },
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

                <div className="sectionhome2">
                    <div className="row columns">
                        <div className="large-7 columns">
                            <div className="show-for-medium">
                                <div className="container1">
                                    <p>Confie en Nosotros.</p>
                                </div>
                            </div>
                        </div>
                        <div className="large-5 columns">
                            <div className="container2">
                                <h6><small>video</small></h6>
                                <div className="show-for-small-only">
                                    <div className="flex-video">
                                        <iframe style={{background:'#DBD8F0'}} className="thumbnail" src="https://www.youtube.com/embed/aiBt44rrslw"></iframe>
                                    </div>
                                    <div className="text-center">
                                            sdfsdfsdf
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

                <div className="sectionhome2">
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

                <div className="sectionhome3">
                    <div className="row columns">
                        <div className="text-center">
                            <div className="text-title">
                                <p>NUESTRAS SOLUCINES INCLUYEN LO SIGUIENTE</p>
                            </div>
                            <div className="container">
                                {this.state.informacion.map(this.eachItemDesktop)}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
});
export default ViewHome;