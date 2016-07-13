import React from 'react';
import {Link} from 'react-router'

import ViewPreguntas from '../Preguntas/preguntas'

import Scroll from 'react-scroll'




var scroll     = Scroll.animateScroll;
var Linkk = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;


const Prueba=React.createClass({
    render(){
        return(
            <div className="list">
                <Link to={this.props.urlLink}>
                    {this.props.title} - {this.props.text} - Link: {this.props.urlLink}
                </Link>
            </div>
        );
    }
})

const Prueba1=React.createClass({
    scrollToTop: function() {
        scroll.scrollToTop();
    },

    render(){
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function(item) {
            if (item.name.indexOf(this.props.filterText) === -1 && item.text.indexOf(this.props.filterText) === -1) {
                return;
            }
            rows.push(<Prueba key={item.category} title={item.name} text={item.text} urlLink={item.urlLink}  />);
            lastCategory = item.category;
        }.bind(this));
        return(
            <div className="list-resultado">
                {rows}
            </div>
        );
    }
})



var SearchBar = React.createClass({
    handleChange() {
        this.props.onUserInput(
            this.refs.filterTextInput.value
        );
    },
    render: function() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="SEARCH..."
                    value={this.props.filterText}
                    ref="filterTextInput"
                    onChange={this.handleChange}
                />

            </form>
        );
    }
});


const ViewBuscar=React.createClass({
    getInitialState: function() {
        return {
            filterText: ''
        };
    },

    handleUserInput: function(filterText) {
        this.setState({
            filterText: filterText
        });
    },

    render(){
        return(
            <div>
                <div className="show-for-small-only">
                    <div className="sectionSearch">
                        <div className="content">
                            <div className="row columns content-icon">
                                <div className="small-1 columns">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </div>
                                <div className="small-2 columns">
                                    <div className="span">
                                        <Link to="/">Menu</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row content-search">
                                <SearchBar
                                    filterText={this.state.filterText}
                                    filterText1={this.state.filterText1}
                                    onUserInput={this.handleUserInput}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sectionSearchContent">
                        <div className="resultadoSearch">
                            <div className="text-resultado">
                                Resultado (0)
                            </div>
                        </div>

                        <Linkk activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Linkk>
                        <Linkk activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Test 2</Linkk>
                        <DirectLink className="test6" onClick={this.props.OnClickAnchor} to="anchorrr" spy={true} smooth={true} duration={500}>Test 6 (anchor)</DirectLink>

                        <Prueba1 products={productos}
                                 filterText={this.state.filterText}
                        />
                        <h1>{this.props.prueba} </h1>

                        <div id="anchorr" style={{height:'300px'}}>sdfsd</div>
                    </div>

                </div>
            </div>
        );
    }
})





var productos = [
    {category: 1, name: 'football',text: 'prueba',urlLink:'/'},
    {category: 2, name: 'baseball', text: 'juego',urlLink:'/Informacion'},
    {category: 3, name: 'basketball',text: 'walter', urlLink:'/Preguntas'},
    {category: 4, name: 'iPod Touch',text: 'william', urlLink:'/Contactenos'},
    {category: 5, name: 'iPhone 5',text: 'katty', urlLink:'/Search'},
];


export default ViewBuscar;