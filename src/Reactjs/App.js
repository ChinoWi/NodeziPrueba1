import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router,Route,IndexRoute} from 'react-router';

//Layout
import App from './layout/index.jsx';
//View Menu
import ViewHome from './view/Home/home';
import ViewServicios from './view/Servicios/Servicios'
import ViewInformacion from './view/Informacion/informacion';
import ViewPreguntas from './view/Preguntas/preguntas';
import Inbox from './view/Contactenos/contactenos'
import ViewTerminos from './view/Terminos/terminos'


//View Error
import PageNotFound from './view/Error/404';

//View Tecnologias
import ViewFrontend from './view/Servicios/Tecnologias/Frontend/Frontend'
import ViewMoviles from './view/Servicios/Tecnologias/Moviles/Moviles'
import ViewBackend from './view/Servicios/Tecnologias/Backend/Backend'
import ViewAlmacenamientoDatos from './view/Servicios/Tecnologias/AlmacenamientoDatos/AlmacenamientoDatos'

//View Servicios
import ViewSeguridad from './view/Servicios/Servicios/Seguridad/Seguridad'


import ViewBuscar from './view/buscar/buscar'

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={ViewHome}></IndexRoute>
            <Route path="/" component={ViewHome}></Route>
            <Route path="Informacion" component={ViewInformacion}></Route>
            <Route path="Contactenos" component={Inbox}></Route>
            <Route path="Preguntas" component={ViewPreguntas}></Route>
            <Route path="Servicios" component={ViewServicios}></Route>
            <Route path="Terminos" component={ViewTerminos}></Route>

            <Route path="Servicios/Seguridad" component={ViewSeguridad}></Route>

            <Route path="Servicios/Tecnologias/Frontend" component={ViewFrontend}></Route>
            <Route path="Servicios/Tecnologias/Movil" component={ViewMoviles}></Route>
            <Route path="Servicios/Tecnologias/Backend" component={ViewBackend}></Route>
            <Route path="Servicios/Tecnologias/Almacenamiento-de-datos" component={ViewAlmacenamientoDatos}></Route>
            
        </Route>
        <Route path="Search" component={ViewBuscar}></Route>
        <Route path="*" component={PageNotFound} />
    </Router>
),document.getElementById('react_app'));
