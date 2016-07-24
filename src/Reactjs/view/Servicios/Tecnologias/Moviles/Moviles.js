import React from 'react'

const ViewMoviles = React.createClass({ 
   
   render(){
   	 return(
         <div className="sectionTecnologias">
             <div className="text-content text-center">
                 <div className="row">
                     <div className="title">
                         Tecnologias Movil
                     </div>
                 </div>

             </div>
             <div className="content-up">
                 <div className="row">
                     <div className="text-center">
                         <h6>
                             Nuestro Team dedica tiempo desarrollando y aprendiendo multiples herramientas
                             y tecnologias web.
                         </h6>
                     </div>
                     <div className="small-up-1 medium-up-2 large-up-3 separacion">
                         <div className="columns separacion">
                             <div className="row card-item">
                                 <div className="small-4 medium-5 columns text-center">
                                     <div className="item-img">
                                         <img src="/asset/images/angularjs.png" alt=""/>
                                     </div>
                                 </div>
                                 <div className="small-8 medium-7 columns">
                                     <div className="item-text">
                                         <div className="text-title"><h6>PHP 5/7</h6></div>
                                         <div className="text-texto">Angular Js lets you extend HTML
                                             for your application. Resulting environment is extraordinarilly expressive,
                                             readable and quick to develop.</div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="columns separacion">
                             <div className="row card-item">
                                 <div className="small-4 medium-5 columns text-center">
                                     <div className="item-img">
                                         <img src="/asset/images/angularjs.png" alt=""/>
                                     </div>
                                 </div>
                                 <div className="small-8 medium-7 columns">
                                     <div className="item-text">
                                         <div className="text-title"><h6>Backbone</h6></div>
                                         <div className="text-texto">A javascritp library for building user interfaces.
                                             Independient from you technology stack, a simpler programming model and reactive data flow.</div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="columns separacion">
                             <div className="row card-item">
                                 <div className="small-4 medium-5 columns text-center">
                                     <div className="item-img">
                                         <img src="/asset/images/angularjs.png" alt=""/>
                                     </div>
                                 </div>
                                 <div className="small-8 medium-7 columns">
                                     <div className="item-text">
                                         <div className="text-title"><h6>Polimer</h6></div>
                                         <div className="text-texto">A javascritp library for building user interfaces.
                                             Independient from you technology stack, a simpler programming model and reactive data flow.</div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="columns separacion">
                             <div className="row card-item">
                                 <div className="small-4 medium-5 columns text-center">
                                     <div className="item-img">
                                         <img src="/asset/images/angularjs.png" alt=""/>
                                     </div>
                                 </div>
                                 <div className="small-8 medium-7 columns">
                                     <div className="item-text">
                                         <div className="text-title"><h6>Ruby on Rails</h6></div>
                                         <div className="text-texto">A project based on Query and HTML5 for non Angular users.
                                             This version will simplify any integration with manu other popular frameworks web.</div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="columns separacion">
                             <div className="row card-item">
                                 <div className="small-4 medium-5 columns text-center">
                                     <div className="item-img">
                                         <img src="/asset/images/angularjs.png" alt=""/>
                                     </div>
                                 </div>
                                 <div className="small-8 medium-7 columns">
                                     <div className="item-text">
                                         <div className="text-title"><h6>Visual.Net</h6></div>
                                         <div className="text-texto">A project based on Query and HTML5 for non Angular users.
                                             This version will simplify any integration with manu other popular frameworks web.</div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="columns separacion">
                             <div className="row card-item">
                                 <div className="small-4 medium-5 columns text-center">
                                     <div className="item-img">
                                         <img src="/asset/images/angularjs.png" alt=""/>
                                     </div>
                                 </div>
                                 <div className="small-8 medium-7 columns">
                                     <div className="item-text">
                                         <div className="text-title"><h6>MVC + ASP.NET</h6></div>
                                         <div className="text-texto">A project based on Query and HTML5 for non Angular users.
                                             This version will simplify any integration with manu other popular frameworks web.</div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <hr/>
                     <div className="content-bottom">
                         <div>Ir a Tecnologia</div>
                         <a className="urlDir" href="/Servicios/Tecnologias/Frontend">Frontend</a>
                         <a className="urlDir" href="/Servicios/Tecnologias/Backend">Backend</a>
                         <a className="urlDir" href="/Servicios/Tecnologias/Almacenamiento-de-datos">Almacenamiento de Datos</a>
                     </div>
                 </div>

             </div>
         </div>
   	  )
   }
})

export default ViewMoviles;