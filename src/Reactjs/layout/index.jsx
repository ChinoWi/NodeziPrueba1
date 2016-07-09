import React from 'react';
import {Link} from 'react-router';
import AppSidebar from '../component/sidebar/sidebar'


const styles = {
    contentHeaderMenuLink: {
        textDecoration: 'none',
        color: 'white',
        padding: 8,
    },
    content: {
        padding: '16px',
    },
    menuNav:{
        zIndex: '1000',
        marginLeft: '0px',
        width: '170px',
        left: '45.3px',
        maxWidth:'50%'

    },
};

const Footer=React.createClass({
    render(){
        return(
          <div className="main-footer">
              <div className="roww centerr middlee">
                 <div className="col-6">
                     <FooterContent/>
                     <FooterTerminos/>
                 </div>
                 <div className="col-6">
                     <FooterRedes/>
                 </div>              
              </div>
              <div className="roww">
                 <div className="col-12">
                   <FooterCopy/> 
                 </div>
             </div>
          </div>
        );
    }
});

const  FooterRedes = React.createClass({
    render(){
        return(
           <p className="redess">
             <a href="#"><i className="fa fa-facebook-square facebook" aria-hidden="true"></i></a>
             <a href="#"><i className="fa fa-twitter-square twitter" aria-hidden="true"></i></a>
             <a href="#"><i className="fa fa-google-plus-official google" aria-hidden="true"></i></a>
             <a href="#"><i className="fa fa-skype skype" aria-hidden="true"></i></a>
           </p>
        )
    }
})

const SmallMenu=React.createClass({
    render(){
        return(
            <ul className="rightt" onClick={this.props.handleClickSubTitle}>
                <li>
                    <Link to={this.props.urlLink}>
                        <i className={this.props.styloIcon} ></i>
                        <span>{this.props.title} </span>
                    </Link>
                </li>
            </ul>
        );
    }
})

const App=React.createClass({
    getInitialState(){
        return{
            datos:[
                {key:1,title:'Informacion',urlLink:'/Informacion',styloIcon:'fa fa-home iconos'},
                {key:2,title:'Preguntas',urlLink:'/Preguntas',styloIcon:'fa fa-question-circle iconos'},
                {key:3,title:'Contactenos',urlLink:'/Contactenos',styloIcon:'fa fa-envelope iconos'}
            ],
            showMenu:false
        }
    },
    eachItem(item){

        return(
            <SmallMenu key={item.key}
                       title={item.title}
                       urlLink={item.urlLink}
                       styloIcon={item.styloIcon}
                       handleClickSubTitle={this.handleClickShowSubTitle}
            />
        );
    },
    handleClickShowSubTitle(){
        this.setState({
            showMenu:false
        });
    },
    handleClickShow(){
        this.setState({
            showMenu:!this.state.showMenu
        });
    },
    render(){
        return(
            <div>
                <div className="body-container">
                    <div className="show-for-medium">
                        <header className="headerr">
                            <div className="row">
                                <div className="small-12 medium-4 columns">
                                    <Link to="/">
                                        <img src="asset/images/logo.png" alt=""/>
                                    </Link>
                                </div>
                                <div className="small-12 medium-2 columns">
                                    <div className="input-wrapper right">
                                        <input type="text" className="search-box" placeholder="Buscar en Nodezi"/>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </div>

                    <div className="content-row">
                        <div className="row">
                            <div className="medium-3 large-2 hide-for-small-only columns menu-izq">
                                <div className="text-center">
                                    <div className="menu-izq-content" style={styles}>
                                        <div className="row">
                                            <ul className="menu-izq-nav text-left">
                                                <li>
                                                    <Link to="/" className="active">
                                                        <img src="https://res.cloudinary.com/hashnode/image/upload/v1450381587/static_imgs/nodes-img.png"/>
                                                        <span>Inicio</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/Informacion">
                                                        <img src="https://res.cloudinary.com/hashnode/image/upload/v1450381587/static_imgs/nodes-img.png"/>
                                                        <span>Informacion</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/Preguntas">
                                                        <img src="https://res.cloudinary.com/hashnode/image/upload/v1450381587/static_imgs/nodes-img.png"/>
                                                        <span>Preguntas</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/Contactenos">
                                                        <img src="https://res.cloudinary.com/hashnode/image/upload/v1450381587/static_imgs/nodes-img.png"/>
                                                        <span>Contactenos</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="show-for-small-only">
                                <header className="header-small">
                                    <div className="text-center">
                                        <Link to="/">
                                            <img src="asset/images/logo.png" alt=""/>
                                        </Link>
                                        <div className="input-wrapper">
                                            <input type="text" className="search-box" placeholder="Buscar en Nodezi"/>
                                        </div>
                                    </div>
                                </header>
                                <div className="top-barr">
                                    <section className="top-bar-section">
                                        <ul onClick={this.handleClickShow} >
                                            <li className="listMenu">
                                                <Link to="/">
                                                    <i className="fa fa-list iconos"></i>
                                                    <span>Menu</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        {this.state.showMenu ? this.state.datos.map(this.eachItem) : null}
                                    </section>
                                </div>

                            </div>
                            <div className="medium-9 large-10 columns menu-der">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});
export default App;



























