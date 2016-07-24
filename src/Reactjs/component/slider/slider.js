import React from 'react'
import autoPlay from 'react-swipeable-views/lib/autoPlay';
import SwipeableViews from 'react-swipeable-views';
import Pagination from './pagination/pagination'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const SliderItem=React.createClass({
    render(){
        return(
            <div className="container">
                <div className="row content">
                    <div className="large-4 columns">
                        <div className="content-text">
                            <div className="text-title">
                                {this.props.title}
                            </div>
                            <div className="text-mensaje">
                                {this.props.mensaje}
                            </div>
                        </div>
                    </div>
                    <div className="large-8 columns">
                        <div className="content-img">
                            <img src={this.props.imagensrc} alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
});

const Slider=React.createClass({
    getInitialState(){
        return{
            index:0,
            datos:[
                {key:1,title:"title1",urlImg:'asset/images/slider/design1.png',mensaje:"dfsdfsdf"},
                {key:2,title:"title2",urlImg:'asset/images/slider/design.png',mensaje:"aaaaaaa"}
            ]
        }
    },
    handleChangeIndex(index){
        this.setState({
            index:index
        })
    },

    eachItem(item){
        return(
            <SliderItem key={item.key}
                        title={item.title}
                        imagensrc={item.urlImg}
                        mensaje={item.mensaje}
            />
        );
    },

    render(){
        const {
            index,
        } = this.state;
        return(
            <div>
                <AutoPlaySwipeableViews
                            index={index}
                            onChangeIndex={this.handleChangeIndex}
                >
                    {this.state.datos.map(this.eachItem)}
                </AutoPlaySwipeableViews>
                
                <div className="show-for-medium">
                    <div className="text-center" style={{padding:'10px',borderTop:'1px solid #BFBFBF',background:'white'}}>
                        <Pagination
                            dots={2}
                            index={index}
                            onChangeIndex={this.handleChangeIndex}/>
                    </div>
                </div>
           
            </div>
        );
    }
});

export default Slider;