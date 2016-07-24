import React from 'react';
import {Link} from 'react-router';
import Scroll from 'react-scroll';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';

var DirectLink = Scroll.DirectLink;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;




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
              <div className="roww aroundd Footer">
                 <div className="col-6 Footer-Content">
                     <FooterContent/>
                     <FooterTerminos/>`
                 </div>
                 <div className="Footer-Linea"></div>
                 <div className="col-4 Footer-Redes">
                     <FooterRedes/>
                 </div>              
              </div>
              <div className="roww centerr middlee Copy">
                 <div className="col-12">
                   <FooterCopy /> 
                 </div>
             </div>
          </div>
        );
    }
});

const FooterContent = React.createClass({
  render(){
    return(
        <p className="Content">  
          Desarrollo de aplicaciones web,moviles,
          Posicionamiento web, Servicios de Seguridad
          informatica, con el trato que tu te mereces.
        </p>  
     )
  }
});


const FooterTerminos = React.createClass({
   render(){
     return    <p  className="Footer-Terminos"><Link  to="/Terminos">Terminos y Condiciones</Link> </p>
   }

});


const FooterCopy = React.createClass({
    render(){
        return <p className="Footer-Copy">Copyright@2016 Power By Nodezi</p>
    }
})

const  FooterRedes = React.createClass({
    render(){
        return(
           <article>
            <p className="redess">
             <a href="#"><i className="fa fa-facebook-square facebook" aria-hidden="true"></i></a>
             <a href="#"><i className="fa fa-twitter-square twitter" aria-hidden="true"></i></a>
             <a href="#"><i className="fa fa-google-plus-official google" aria-hidden="true"></i></a>
            </p>
            <p className="redess">
             <a href="#"><i className="fa fa-skype skype" aria-hidden="true"></i></a>
             <a href="#"><i className="fa fa-snapchat-ghost snapchat" aria-hidden="true"></i></a>
             <Link to="/Contactenos"><i className="fa fa-envelope-o contact" aria-hidden="true"></i></Link> 
            </p>
         </article>
        )
    }
})


const FormSearch=React.createClass({
  render(){
     return(
          <form className="form-content">
              <span className="form-icon"><i className="fa fa-search" aria-hidden="true"></i></span>
              <input className="form-search" type="text" placeholder="Buscar en Nodezi"/>
          </form>
     )
  }


})


const Header=React.createClass({
    render(){
        return(
            <div>
                <div className="show-for-medium">
                    <header className="headerr">
                        <div className="row">
                            <div className="small-12 medium-4 columns">
                                <Link to="/">
                                    <img src="/asset/images/logo.png" alt=""/>
                                </Link>
                            </div>
                            <div className="small-12 medium-2 columns form">
                                <FormSearch/>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="show-for-small-only">
                    <header className="header-small">
                        <div className="text-center">
                            <Link to="/">
                                <img src="/asset/images/logo.png" alt=""/>
                            </Link>
                            <div className="input-wrapper">
                                <div onClick={this.RedirectTo}>
                                    <Link to="/Search" className="search-nodezi">Buscar en nodezi</Link>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>


        );
    }
})

const MenuNav=React.createClass({
    getInitialState: function(){
        return{
            datos:[
                {key:1,title:'Home',urlLink:'/',styloIcon:'fa fa-home iconos'},
                {key:2,title:'Servicios',urlLink:'/Servicios',styloIcon:'fa fa-asterisk iconos'},
                {key:3,title:'Informacion',urlLink:'/Informacion',styloIcon:'fa fa-info-circle iconos'},
                {key:4,title:'Preguntas',urlLink:'/Preguntas',styloIcon:'fa fa-question-circle iconos'},
                {key:5,title:'Contactenos',urlLink:'/Contactenos',styloIcon:'fa fa-envelope iconos'}
            ],
            showMenu:false
        }
    },
    eachItem(item){

        return(
            <MenuItemSmall key={item.key}
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
                <div className="show-for-small-only">
                    <div className="top-barr">
                        <section className="top-bar-section">
                            <ul onClick={this.handleClickShow} >
                                <li className="listMenu">
                                    <i className="fa fa-list iconos"></i>
                                    <span>Menu</span>
                                </li>
                            </ul>
                            {this.state.showMenu ? this.state.datos.map(this.eachItem) : null}
                        </section>
                    </div>
                </div>
                <div className="show-for-medium">
                    <MenuItem items={this.state.datos} />
                </div>
            </div>

        );
    }
});



const MenuItem = React.createClass({
    render(){
        return (
            <ul className="nav">
                {
                    this.props.items.map((elem) => {
                        return (
                            <li className="nav-item" key={elem.key}> <Link to={elem.urlLink}><i className={elem.styloIcon}></i> {elem.title}</Link></li>
                        )
                    })
                }
            </ul>
        )
    }
});

const MenuItemSmall=React.createClass({
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
});


// (function(){
//    console.log(this.refs.up)
// })()




const IconSubir=React.createClass({ 

 

  componentDidMount: function() {
      this.evento()
  },

   render(props){
       
       return(
           <div className="icon-fixex">
               <DirectLink className="test6"  id="up" to="subir" spy={true} smooth={true} duration={500}><img src="/asset/images/subir.png" height="50px" width="50px" alt=""/></DirectLink>
           </div>
       );
   },


   evento:(function(){
      $('#up').addClass('upHide')
      $(window).scroll(function(e){
         if($(window).scrollTop()>140){
            $('#up').show()
         }
         else{
            $('#up').hide()
         }
      });
   }),
});


const App=React.createClass({
    getInitialState(){
        return{
            datos:[
                {key:1,title:'Home',urlLink:'/',styloIcon:'fa fa-home iconos'},
                {key:2,title:'Informacion',urlLink:'/Informacion',styloIcon:'fa fa-info-circle iconos'},
                {key:3,title:'Preguntas',urlLink:'/Preguntas',styloIcon:'fa fa-question-circle iconos'},
                {key:4,title:'Contactenos',urlLink:'/Contactenos',styloIcon:'fa fa-envelope iconos'}
            ],
            showMenu:false
        }
    },
    eachItem(item){

        return(
            <SmallMenuSmall key={item.key}
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
                <div id="subir">
                    <Header></Header>
                    <MenuNav></MenuNav>
                    {this.props.children}
                    <Footer/>
                </div>
                <IconSubir/>
            </div>

        );
    }
});
export default App;



























