import React from 'react';
import CircularProgressInfo from '../../component/ProgressCircular/progresscircularInfo'
import {Chart,Pies,Transform} from 'rumble-charts'


const CircularProgress1=React.createClass({
    render(){
        return(
            <div className="row text-left">
                <div className="small-3 medium-6 large-4 columns">
                    <CircularProgressInfo
                            strokeWidth="3"
                            radius="20"
                            stroken={this.props.colorCircle}
                            fontsize="10px"
                            percentage={this.props.experience}
                        />
                </div>
                <div className="small-9 medium-6 large-8 columns">
                    <div className="progressText">
                        {this.props.text}
                    </div>
                </div>
            </div>
        );
    }
});

const QuienesSomos1=React.createClass({
    getInitialState(){
        return {
            cantidadDatos:[
                {key:1,text:"html5, css3, javascript,angular, polimer, react, sass, stylus.",experience:"2",colorCircle:"#FF3333"},
                {key:2,text:"php, ruby on rails, go, java EE, asp.net.",experience:"2",colorCircle:"#33B2FD"},
                {key:3,text:"mysql,sql server, mongo-db, postgress.",experience:"2",colorCircle:"#6E9AC2"},
                {key:4,text:"marketing,seo,google analitycs, estrategia digital, email marketing",experience:"2",colorCircle:"#4F5053"},
                {key:5,text:"Ux, UI, APPs.",experience:"2",colorCircle:"#52CBCF"}
            ]
        }
    },
    eachItem(item){
        return(
            <CircularProgress1 key={item.key}
                               text={item.text}
                               experience={item.experience}
                               colorCircle={item.colorCircle}
            />
        );
    },
    render(){
        return(
            <div className="container">
                <div className=" medium-5 large-6 columns">
                    <div className="chart">
                        <Chart width={150} height={150} series={series1}>
                            <Transform method={['transpose', 'stackNormalized']}>
                                <Pies
                                    colors='category10'
                                    combined={true}
                                    colors={['red', '#009FFD', '#4A81B3','#232528','#27BEC4']} //category20, category20, category20b, category20c
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
                </div>
                <div className=" medium-7 large-6 columns">
                    {this.state.cantidadDatos.map(this.eachItem)}
                </div>
            </div>
        );
    }
});

const CircularProgress2=React.createClass({
    render(){
        return(
            <div className="row">
                <div className="small-3 medium-6 large-4 columns">
                    <div className="progressCircle">
                        <CircularProgressInfo
                            strokeWidth="3"
                            radius="20"
                            stroken={this.props.colorCircle}
                            fontsize="10px"
                            percentage={this.props.experience}
                        />
                    </div>
                </div>
                <div className="small-9 medium-6 large-8 columns">
                    <div className="progressText">
                        <div className="columns">{this.props.text} </div>
                    </div>
                </div>
            </div>
        );
    }
});
const QuienesSomos2=React.createClass({
    getInitialState(){
        return {
            cantidadDatos:[
                {key:1,text:"html5, css3, javascript, typescript, angular, react, sass, stylus.",experience:"2",colorCircle:"#1F77B4"},
                {key:2,text:"php, ruby on rails, go, visual.net, asp.net.",experience:"1",colorCircle:"#FF7F0E"},
                {key:3,text:"mysql,sql server, mongo-db, postgress, firebase.",experience:"2",colorCircle:"#56B356"},
                {key:4,text:"Ux, UI, APPs.",experience:"1",colorCircle:"#DE5253"},
                {key:5,text:"Hacking Etico, Pruebas de penetracion, ofensive security Profesional, Owasp Top 10,python pentester",experience:"3",colorCircle:"#9467BD"}
            ]
        }
    },
    eachItem(item){
        return(
            <CircularProgress2 key={item.key}
                               text={item.text}
                               experience={item.experience}
                               colorCircle={item.colorCircle}
            />
        );
    },
    render(){
        return(
            <div className="container">
                <div className=" medium-5 large-6 columns">
                    <div className="chart">
                        <Chart  width={150} height={150} series={series2}>
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
                </div>
                <div className=" medium-7 large-6 columns">
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
                                <i className="fa fa-cogs" aria-hidden="true"></i>
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
                                        <img src="/asset/images/mocad.png" alt=""/>
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
                            <h4>Trabajamos segun las preferencias de ustedes</h4>
                            <div className="row">
                                <div className="small-up-1 medium-up-2 large-up-3" >
                                    <div className="columns" >
                                        <div className="spaces text-center">
                                            <div className="medida">
                                                <img src="/asset/images/software-medida1.png" alt="software medidda"/>
                                                <h5 className="titlebox">Software a Medida</h5>
                                                <div className="description">No tienes nada que hacer. El desarrollo ya corre por nuestra parte.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="spaces text-center">
                                            <div className="medida">
                                                <img src="/asset/images/time-real.png" alt="software medidda"/>
                                                <h5 className="titlebox">Software en Tiempo Real</h5>
                                                <div className="description">No tienes nada que hacer. El desarrollo ya corre por nuestra parte.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="spaces text-center">
                                            <div className="medida">
                                                <img src="/asset/images/seo.png" alt="software medidda"/>
                                                <h5 className="titlebox">Veloz</h5>
                                                <div className="description">No tienes nada que hacer. El desarrollo ya corre por nuestra parte.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="spaces text-center">
                                            <div className="medida">
                                                <img src="/asset/images/ux.png" alt="software medidda"/>
                                                <h5 className="titlebox">Experiencia de Usuario</h5>
                                                <div className="description">Mejor experiencia para tus usuario. dfsdfsdfsdf</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="columns" >
                                        <div className="spaces text-center">
                                            <div className="medida">
                                                <img src="/asset/images/ui.png" alt="software medidda"/>
                                                <h5 className="titlebox">Interfaz Grafica</h5>
                                                <div className="description">No tienes nada que hacer. El desarrollo ya corre por nuestra parte.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="columns" >
                                        <div className="spaces text-center">
                                            <div className="medida">
                                                <img src="/asset/images/compromiso.png" alt="software medidda"/>
                                                <h5 className="titlebox">Compromiso con el cliente</h5>
                                                <div className="description">No tienes nada que hacer. El desarrollo ya corre por nuestra parte.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="columns" >
                                        <div className="spaces text-center">
                                            <div className="medida">
                                                <img src="/asset/images/testing.png" alt="software medidda"/>
                                                <h5 className="titlebox">Testing De hacking</h5>
                                                <div className="description">No tienes nada que hacer. El desarrollo ya corre por nuestra parte.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="columns">
                                        <div className="spaces text-center">
                                            <div className="medida">
                                                <img src="/asset/images/seo.png" alt="software medidda"/>
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
                                <i className="fa fa-users" aria-hidden="true"></i>
                                Quienes Somos?
                            </div>
                        </div>
                        <div className="content-content">
                            <div className="row">
                                <div className="large-6 columns">
                                    <img className="icon-user-admin" src="/asset/images/user-admin1.png" height="100px" alt=""/>
                                    User Admin
                                    <QuienesSomos1/>
                                </div>
                                <div className="large-6 columns">
                                    <img className="icon-user-admin" src="/asset/images/user-admin2.png" height="100px" alt=""/>
                                    User Admin
                                    <QuienesSomos2/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
});
    
const series1 = [{
    data: [1, 3, 2, 5, 7]
}];
const series2 = [{
    data: [2, 1, 2, 1, 3]
}];



export default ViewInformacion;