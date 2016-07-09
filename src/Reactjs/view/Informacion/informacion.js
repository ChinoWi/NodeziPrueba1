import React from 'react';
import CircularProgressInfo from '../../component/ProgressCircular/progresscircularInfo'

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
                <section className="sectionInfoQue">
                    <div className="content">
                        <div className="content-title">
                            <div className="title-mensaje">
                                <i className="fa fa-th-large" aria-hidden="true"></i>
                                Que es Nodezi?
                            </div>
                        </div>
                        <div className="imgFondo">
                            <div className="imgFondo-content">
                                <div className="medium-7 columns">
                                    <div className="text-mensaje">
                                        Welcome a Nodezi, Somos una empresa especializada en dar servicios
                                        y soluciones informática en el sector profesional.
                                        Nuestra especialización se centra en el desarrollo de apliaciones web, moviles,
                                        implementando las mejores tecnicas  de seguridad segun OWASP Top.
                                    </div>
                                </div>
                                <div className="medium-5 columns">
                                    <div className="show-for-medium text-center">
                                        <img src="asset/images/mocad.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sectionInfoDif">
                    <div className="content">
                        <div className="content-title">
                            <div className="title-mensaje">
                                <i className="fa fa-th-large" aria-hidden="true"></i>
                                Que nos diferencia Nodezi?
                            </div>
                        </div>
                        <div className="content-content">
                            <div className="row">
                                <div className="small-up-1 medium-up-1 large-up-3" >
                                    <div className="columns" >
                                        <div className="spaces text-center">
                                            <div className="medida">
                                                <img src="asset/images/software-medida1.png" alt="software medidda"/>
                                                <h5 className="titlebox">Software a Medida</h5>
                                                <div className="description">No tienes nada que hacer. El desarrollo ya corre por nuestra parte.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="spaces text-center">
                                            <div className="medida">
                                                <img src="asset/images/ux.png" alt="software medidda"/>
                                                <h5 className="titlebox">Experiencia de Usuario</h5>
                                                <div className="description">Mejor experiencia para tus usuario. dfsdfsdfsdf</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="columns" >
                                        <div className="spaces text-center">
                                            <div className="medida">
                                                <img src="asset/images/ui.png" alt="software medidda"/>
                                                <h5 className="titlebox">Interfaz Grafica</h5>
                                                <div className="description">No tienes nada que hacer. El desarrollo ya corre por nuestra parte.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="columns" >
                                        <div className="spaces text-center">
                                            <div className="medida">
                                                <img src="asset/images/compromiso.png" alt="software medidda"/>
                                                <h5 className="titlebox">Compromiso con el cliente</h5>
                                                <div className="description">No tienes nada que hacer. El desarrollo ya corre por nuestra parte.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="columns" >
                                        <div className="spaces text-center">
                                            <div className="medida">
                                                <img src="asset/images/testing.png" alt="software medidda"/>
                                                <h5 className="titlebox">Testing De hacking</h5>
                                                <div className="description">No tienes nada que hacer. El desarrollo ya corre por nuestra parte.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="spaces text-center">
                                            <div className="medida">
                                                <img src="asset/images/seo.png" alt="software medidda"/>
                                                <h5 className="titlebox">Seo y Posicionamiento</h5>
                                                <div className="description">No tienes nada que hacer. El desarrollo ya corre por nuestra parte.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="sectionInforQuie">
                    <div className="content">
                        <div className="content-title">
                            <div className="title-mensaje">
                                <i className="fa fa-th-large" aria-hidden="true"></i>
                                Quienes Somos?
                            </div>
                        </div>
                        <div className="content-content">
                            <div className="row">
                                <div className="medium-6 columns">
                                    <div className="personal">
                                        <CircularProgressInfo
                                            strokeWidth="10"
                                            radius="50"
                                            percentage="22"
                                            percentage1="10"
                                        />
                                    </div>
                                </div>
                                <div className="medium-6 columns">
                                    <div className="personal">
                                        B
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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