import React, { Component } from 'react';
import Card from './Card';
import FrontViewCard from '../cardview/FrontViewCard';
import BackViewCard from '../cardview/BackViewCard';

class GridItem extends Component {
    constructor(props){
        super(props);
        this.flipClickHandler = this.flipClickHandler.bind(this);
    }
    flipClickHandler(data){
        if(typeof data != "string"){
             const { fontSize, rotate, spin , gradient } = data;
             this.frontView.setState({fontSize,rotate,spin,gradient});
        }
        this.card.cardFlipHandler();
    }
    render () {
        const { gridItem } = style;
        return (
            <Card ref={(card) => { this.card = card; }}>
                <FrontViewCard ref={(frontView) => { this.frontView = frontView; }} data= {this.props.data} flipClickHandler={this.flipClickHandler}/>
                <BackViewCard data= {this.props.data} flipClickHandler={this.flipClickHandler}/>
            </Card>
        )
    }
}

const style = {
    gridItem:{
        height: 400,
        width: 400,
        margin: 10
    }
}

export default GridItem