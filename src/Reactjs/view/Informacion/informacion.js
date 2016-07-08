import React from 'react';


const CuerpoInformacion=React.createClass({
    render(){
        return(
            <div className="row small-up-1 medium-up-2 large-up-3">
                <div className="columns" style={{border:'1px solid red'}}>
                    <div className="sepa">
                        <div className="row">
                            <img src="asset/images/software-medida1.png" style={{height:'160px'}} alt="Escaneo vuln"/>
                        </div>
                        <div className="row" style={{margin:'10px'}}>
                            <h5 className="title">Software a Medida</h5>
                            <p>No tienes nada que hacer. El desarrollo ya corre por nuestra parte.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

const ViewInformacion=React.createClass({
    render(){
        return(
            <div>
                <section className="sectionInformation">
                    <div className="imagenInformacion" style={{height:'350px'}}>
                        <div className="row">
                            <div className="text-center">
                                <h1>¿Que es Nodezi?</h1>

                                <div className="medium-5 large-5 columns" style={{marginTop:'-30px'}}>
                                    <div className="show-for-medium">
                                        <img src="asset/images/mocad.png" alt="" width="280px"/>
                                    </div>
                                </div>
                                <div className="medium-7 large-7 columns">
                                    <p className="welcome-info">Bievenidos a Nodezi, Somos una empresa especializada en servicios y soluciones
                                        informaticas en el sector profesional. Nuestra especializacion se centra  en el desarrollo de software
                                        implementando las mejores tecnicas de seguridad.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sectionInfo">
                    <div className="content">
                        <div className="content-title">
                            sdfsdf
                        </div>
                        <div className="content-content">
                            <div className="row">
                                <div className="small-up-1 medium-up-1 large-up-3" >
                                    <div className="columns" >
                                        <div className="spaces text-center">
                                            <img src="asset/images/software-medida1.png" alt="software medidda"/>
                                            <h5 className="titlebox">Software a Medida</h5>
                                            <div className="description">No tienes nada que hacer. El desarrollo ya corre por nuestra parte.</div>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="spaces text-center">
                                            <img src="asset/images/ux.png" alt="software medidda"/>
                                            <h5 className="titlebox">Experiencia de Usuario</h5>
                                            <div className="description">No tienes nada que hacer. El desarrollo ya corre por nuestra parte.</div>
                                        </div>
                                    </div>
                                    <div className="columns" >
                                        <div className="spaces text-center">
                                            <img src="asset/images/ui.png" alt="software medidda"/>
                                            <h5 className="titlebox">Interfaz Grafica</h5>
                                            <div className="description">No tienes nada que hacer. El desarrollo ya corre por nuestra parte.</div>
                                        </div>
                                    </div>
                                    <div className="columns" >
                                        <div className="spaces text-center">
                                            <img src="asset/images/compromiso.png" alt="software medidda"/>
                                            <h5 className="titlebox">Compromiso con el cliente</h5>
                                            <div className="description">No tienes nada que hacer. El desarrollo ya corre por nuestra parte.</div>
                                        </div>
                                    </div>
                                    <div className="columns" >
                                        <div className="spaces text-center">
                                            <img src="asset/images/testing.png" alt="software medidda"/>
                                            <h5 className="titlebox">Testing De hacking</h5>
                                            <div className="description">No tienes nada que hacer. El desarrollo ya corre por nuestra parte.</div>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="spaces text-center">
                                            <img src="asset/images/seo.png" alt="software medidda"/>
                                            <h5 className="titlebox">Seo y Posicionamiento</h5>
                                            <div className="description">No tienes nada que hacer. El desarrollo ya corre por nuestra parte.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="text-left">
                            <div className="sectionInfo-titl">¿Que nos hace diferente?</div>
                        </div>

                    </div>

                </section>

                <section className="sectionInformationDife">
                    <div className="row">
                        <div className="text-center" style={{padding:'20px'}}>
                            <h1 className="diferences-title">¿Que nos hace diferente?</h1>
                            <div className="row">

                            </div>
                        </div>
                    </div>

                </section>
                <section className="sectionInformationQ">
                    <div className="text-center">
                        <h1 className="diferences-title">¿Quienes Somos?</h1>
                        <p>Somos un grupo de jovenes, emprendedores e innovadores, apasionados por la tecnologia
                            informatica y seguridad informatica y dar soluciones informatica.</p>
                    </div>
                </section>

            </div>

        );
    }
});
export default ViewInformacion;