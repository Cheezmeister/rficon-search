import React, { Component } from 'react';
import { RFIcon } from 'react-font-icon';


class FrontViewCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            fontSize : 5,
            rotate : 0,
            spin : false,
            gradient : '90deg, #000000, #000000'
        }
        this.flipBtnClickHandler = this.flipBtnClickHandler.bind(this);
    }
    flipBtnClickHandler(){
        this.props.flipClickHandler(this.props.data);
    }
    render () {
        const { cardStyle, headerStyle } = style;
        const {data} = this.props;
        const {fontSize,rotate,spin,gradient} = this.state;
        return (
            <div style={cardStyle}>
                <div style={headerStyle}>
                    <div>
                        {data}
                    </div>
                    <div onClick={this.flipBtnClickHandler} style={{cursor:'pointer'}}>
                        <RFIcon name='retweet'  textShadow='0 1px 0 rgba(1, 0, 0, 0.1)'
                                color="#000000" />
                    </div>
                </div>
                <div style={{ alignSelf : 'center'}}>
                        <RFIcon name= {data} 
                                textShadow='0 1px 0 rgba(1, 0, 0, 0.1)'
                                color="#000000" size="2x" fontSize={`${fontSize}em`} spin={`${spin}`}  rotate={`${rotate}`} gradient={`${gradient}`}/>
                </div>
                <div>
                </div>
            </div>
        )
    }
}

const style = {
    cardStyle: {
        display: 'flex',
        justifyContent : 'space-between',
        flexDirection : 'column' , 
        margin : 10 ,
        width : '96%',
        height : '90%'
    },
    headerStyle:{
        display : 'flex',
        justifyContent : 'space-between'
    }
}

export default FrontViewCard