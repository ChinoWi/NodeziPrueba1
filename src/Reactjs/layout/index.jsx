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
                                    <img src="asset/images/logo.png" alt=""/>
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
                                <img src="asset/images/logo.png" alt=""/>
                            </Link>
                            <div className="input-wrapper">
                                <div className="span" onClick={this.RedirectTo}>
                                    <Link to="/Search"><i className="fa fa-search" aria-hidden="true"></i> Buscar en nodezi</Link>
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
                {key:2,title:'Informacion',urlLink:'/Informacion',styloIcon:'fa fa-info-circle iconos'},
                {key:3,title:'Preguntas',urlLink:'/Preguntas',styloIcon:'fa fa-question-circle iconos'},
                {key:4,title:'Contactenos',urlLink:'/Contactenos',styloIcon:'fa fa-envelope iconos'}
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
})


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
                <Header></Header>
                <MenuNav></MenuNav>
                {this.props.children}

            </div>

        );
    }
});
export default App;



























