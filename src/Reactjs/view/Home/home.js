import React from 'react';
import {Link} from 'react-router';
import Slider from '../../component/slider/slider'
import PruebaModal from '../../component/modalVideo/modalVideo'


const SectionInformacionDesktop=React.createClass({
    render(){
        return(
            <div>
                <div className="row columns" style={{boxShadow:'0 1px 2px 0 #BFBFBF',background:'white',padding:'10px'}}>
                    <div className="medium-3 large-3 columns" >
                        <img src={this.props.imagensrc} style={{width:'110px'}} alt=""/>
                    </div>
                    <div className="medium-6 large-6 columns" >
                        <h5 style={{margin:'27px'}}>{this.props.texto}</h5>
                    </div>
                    <div className="medium-3 large-3 columns" >
                        <a className="secondary button" style={{margin:'35px'}}>Informacion</a>
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
                    textoButton:'Informacion'

                },
                {
                    key:2,
                    imagensrc:'asset/images/seguridad.png',
                    texto:'Auditoria y Seguridad para para empresas y aplicaciones',
                    textoButton:'Informacion'
                },
                {
                    key:3,
                    imagensrc:'asset/images/desarrolloMovil.png',
                    texto:'Desarrollo de Aplicaciones Moviles para personas y empresas',
                }

            ]
        }
    },
    eachItemDesktop:function(info) {
        return (
            <SectionInformacionDesktop key={info.key}
                                        imagensrc={info.imagensrc}
                                        texto={info.texto}>
            </SectionInformacionDesktop>
        )
        ;
    },
    render(){
         return(
            <div className="sectionhomeAll">
                <div className="sectionhome">
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

                <div className="sectionhome1">
                    <div className="row columns">
                        <div className="large-7 columns">
                            <div className="show-for-medium">
                                <div className="container1">
                                    sdfsdf
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

                <div className="show-for-small-only">
                   <div className="separacion"></div>
                    <section id="sectionSlider">
                        <Slider></Slider>
                    </section>
                    <div className="separacion"></div>
                    <section id="SectionInformationDesktop">
                        <div className="row columns">
                            <div className="text-center">
                                <div className="row columns">
                                    <h1>NUESTRAS SOLUCINES INCLUYEN LO SIGUIENTE</h1>
                                </div>
                                {this.state.informacion.map(this.eachItemDesktop)}

                            </div>
                        </div>
                    </section>

                </div>

                <div className="show-for-medium">
                    <section className="sectionQuienesSomos">
                        <div className="text-center information">
                             <span className="information-we">¿Quienes Somos?</span>
                            <Link to="/Informacion" className="information-more">Mas informacion</Link>
                        </div>
                    </section>
                    <section id="sectionSlider">
                        <Slider></Slider>
                    </section>
                    <section id="SectionInformationDesktop">
                        <div className="row columns">
                            <div className="text-center">
                                <div className="row columns">
                                    <h1>Nuestras Soluciones</h1>
                                </div>
                                {this.state.informacion.map(this.eachItemDesktop)}

                            </div>
                        </div>
                    </section>

                </div>

            </div>
        );
    }
});
export default ViewHome;