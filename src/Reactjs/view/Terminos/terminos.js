import React from 'react'

const ViewTerminos = React.createClass({
  render(){
  	 return(
  	 	  <section className="containerr">	
  	 	       
  	 	       <div className="row">
  	 	         <div className="large-12 columns">
                  <TerminosTitle />
                 </div>
                 <div className="large-12 columns">
                  <TerminosTitleContent />
                 </div>
               </div>
               
               <div className="row">
                 <div className="large-12 columns">
                  <TerminosGeneralidades />
                 </div>
                 <div className="large-12 columns">
                  <TerminosGeneralidadesTitle />
                 </div>
               </div>

               <Cargos />
  	      </section>
  	 )
  }
})


const TerminosTitle = React.createClass({

  render(){
  	return  <h1 className="terminos">Terminos de Servicio de Nodezi.com</h1>
  }
})




const TerminosTitleContent = React.createClass({
  render(){
  	return  <p className="terminos-content">Bienvenido a Nodezi.com proporcionado por Platzi.com. Nos complace ofrecerte nuestros 
  	      servicios, sujeto a estos terminos y condiciones.
  	</p>
  }
})




const TerminosGeneralidades = React.createClass({
  render(){
  	return(  
       <ol className="general-listaMaster">
  	        <h3 className="general">Generalidades sobre los terminos del Servicio.</h3>
       </ol>
      )
  }
})



const TerminosGeneralidadesTitle = React.createClass({

   getInitialState(){
   	  return{
   	  	terminos:[]
   	  }
   },

   componentDidMount(){
      fetch('src/Reactjs/view/Terminos/terminos.json')
       .then((response)=>{
       	  return response.json()
       })
       .then((terminos) =>{
          this.setState({terminos:terminos})
       })
    },

    
    render(){
		 return  <ol className="general-list">
                      <p className="general-content">La compañia posee y opera el sitio Nodezi.com.Le ofrecemos diversos servicios desde
                        Desarrollo de aplicaciones personales como empresariales,Marketing,Diseño de interfaces y
                        experiencia de usuario, Desarrollo de Applicaciones Moviles.
                        Ademas Auditorias informaticas para pequeñas y grandes empresas.
                       </p>
                       <p className="general-content">
                      	Lo siguiente es un breve resumen de determinados terminos y condiciones quese incluyen 
                      	en estos Terminos de Servicio.No obstante, este resumen se proporciona unicamente para
                      	su comodidad, por lo tanto,Usted deeberia leer todos los terminos  y condiciones antes
                      	de aceptarlos.
                      </p>     
                      <TerminosLista terminos={this.state.terminos} />
		         </ol>
	}
})





const TerminosLista = React.createClass({
   render(){
   	 return(
           <ul className="general-lista">
            {
             this.props.terminos.map((term)=>{
                return <li key={term.id}>{term.termino}</li>
             })	
            }   
           </ul> 
   	 	)
   }
})




const Cargos = React.createClass({
   render(){
     return(
           <div>
               <CargosPago />
               <CargosReembolso />
               <CargosTerminacion /> 
           </div>
     	)
   }
})


const CargosPago =React.createClass({
   render(){
   	 return <div>
                <h4 className="acuerdo">Acuerdo de Pago.</h4>
                <p className="acuerdo-content">Todos lo usuarios del servicio deben estar de acuerdo, en primer lugar, estos terminos de servicio para
                   luego acordar com osera el deposito
                </p> 
            </div>
   }	
})




const CargosReembolso = React.createClass({
	render(){
		return  <div>
                    <h4 className="politica">Politica de Reembolso.</h4>
                    <p  className="politica-content">Podemos Hacerte un Reembolso siempre cuando, no se cumpla con el desarrollo del proyecto,si
                     no es el caso no hay reembolsos por parte de la empresa
                    </p> 
		        </div>
	}
})


const CargosTerminacion = React.createClass({
   render(){
   	  return  <div>
                   <h4 className="terminacion">Terminacion.</h4> 
                   <p className="terminacion-content">La empresa se desliga de dar soporte al  proyecto cuando acaba el contrato acordado,
                      pero si desea quel e sigan dando soporte al proyecto tendra que hacer un apago adicional eso
                      en acuerdo con la empresa
                   </p>
   	          </div>
   }

})




export default ViewTerminos
