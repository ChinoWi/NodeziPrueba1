import React from 'react';
import CircularProgressInfo from '../../component/ProgressCircular/progresscircularInfo'
import {Chart,Pies,Transform} from 'rumble-charts'


const CircularProgress=React.createClass({
    render(){
        return(
            <div className="row">
                <div className="small-6 medium-6 large-4 columns">
                    <div className="progressCircle">
                        <CircularProgressInfo
                            strokeWidth="3"
                            radius="20"
                            stroken="#6BAED6"
                            fontsize="10px"
                            percentage="22"
                        />
                    </div>
                </div>
                <div className="small-6 medium-6 large-8 columns">
                    <div className="progressText">
                        <div className="columns">html5, css3, javascript,
                            angular, polimer, react, sass, stylus  </div>
                    </div>
                </div>
            </div>
        );
    }
});

const QuienesSomos=React.createClass({
    getInitialState(){
        return {
            cantidadDatos:[
                {key:1,key:2,key:3}
            ]
        }
    },
    eachItem(item){
        return(
            <CircularProgress key={item.key}
            />
        );
    },
    render(){
        return(
            <div className="container">
                <div className=" medium-5 large-6 columns" style={{border:'1px solid red'}}>
                    <Chart width={150} height={150} series={series}>
                        <Transform method={['transpose', 'stackNormalized']}>
                            <Pies
                                colors='category10'
                                combined={true}
                                innerRadius='35%'
                                padAngle={0.025}
                                cornerRadius={3}
                                innerPadding={2}
                                pieAttributes={{
                                                                onMouseMove: (e) => e.target.style.opacity = 1,
                                                                onMouseLeave: (e) => e.target.style.opacity = 0.5
                                                              }}
                                pieStyle={{opacity: 0.8}}
                            >
                            </Pies>
                        </Transform>
                    </Chart>
                </div>
                <div className=" medium-7 large-6 columns" style={{border:'1px solid red'}}>
                    {this.state.cantidadDatos.map(this.eachItem)}
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
                                <div className="large-6 columns" style={{border:'1px solid green'}}>
                                    <QuienesSomos/>
                                </div>
                                <div className="large-6 columns" style={{border:'1px solid green'}}>
                                    <QuienesSomos/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
});
    
const series = [{
    data: [1, 3, 2, 5, 7,]
}];


export default ViewInformacion;