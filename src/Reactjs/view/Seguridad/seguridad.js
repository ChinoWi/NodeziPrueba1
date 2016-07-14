import React from 'react'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const ViewSeguridad = React.createClass({
  render(){
  	return(

    <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={800} transitionLeaveTimeout={300}>
        <h3>Aqui va la vista de seguridad</h3>
    </ReactCSSTransitionGroup>

  	)
  }
})


export default ViewSeguridad
