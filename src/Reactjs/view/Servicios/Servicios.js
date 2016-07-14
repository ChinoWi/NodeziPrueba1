import React from 'react'


const ViewServicios = React.createClass({
    render(){
        let { idSeguridad } = this.props.params
        return(

            <div>
                <h1>view Servicios RUTA: {idSeguridad} </h1>
            </div>
        )
    }
})


export default ViewServicios
