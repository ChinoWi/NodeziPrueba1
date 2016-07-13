import React from 'react';



const ViewFrontend = React.createClass({

  getInitialState(){
      return{
         data:[]
     }
   },

  componentWillMount(){
    fetch('./src/Reactjs/view/Frontend/data.json')
     .then((response) => {
        return response.json()
     })
     .then((data)=>{
     	setTimeout(() => {
          this.setState({data:data})
     	},300)
     })
  },

  render(){
     if(this.state.data.length > 0){
     	return(
              <Articulo datos = {this.state.data}/>
             )
     }
     else{
     	return(
     	     <section className="section-loader">   
     	        <div className="loader">Cargando</div>
     	      </section>
     	    )
     }
  }
});





const Articulo = React.createClass({
  render(){
  	 return(
  	     <section className="section-frontend">
	         {this.props.datos.map((elem)=>{
	             return(
	                 <article key={elem.key}>
	                       <h3>{elem.Tecnologia}</h3>    
	                 </article>
	              )           	
	         })}
	     </section>
  	  )   
   }
});





export default ViewFrontend;
