import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router,Route,IndexRoute} from 'react-router';

//Layout
import App from './layout/index.jsx';
//Component
import ViewHome from './view/Home/home';
import ViewInformacion from './view/Informacion/informacion';
import ViewPreguntas from './view/Preguntas/preguntas';
import Inbox from './view/Contactenos/contactenos'
import PageNotFound from './view/Error/404';
import ViewBuscar from './view/buscar/buscar'
import ViewFrontend from './view/Frontend/frontend'
import ViewMoviles from './view/Moviles/moviles'
import ViewSeguridad from './view/Seguridad/seguridad'


ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={ViewHome}></IndexRoute>
            <Route path="/" component={ViewHome}></Route>
            <Route path="/Frontend" component={ViewFrontend}></Route>
            <Route path="/Moviles" component={ViewMoviles}></Route>
            <Route path="/Seguridad" component={ViewSeguridad}></Route>
            <Route path="Informacion" component={ViewInformacion}></Route>
            <Route path="Contactenos" component={Inbox}>
                <Route path="Nuevo"></Route>
            </Route>
            <Route path="Preguntas" component={ViewPreguntas}></Route>
        </Route>
        <Route path="Search" component={ViewBuscar}></Route>
        <Route path="*" component={PageNotFound} />
    </Router>
),document.getElementById('react_app'));
