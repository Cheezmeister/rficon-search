import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    width: 300px;
    height: 300px;
    margin: 10px;
    position: relative;
    -webkit-perspective: 800px;
    -moz-perspective: 800px;
    -o-perspective: 800px;
    perspective: 800px;
`
const AnimCard = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    -webkit-transition: -webkit-transform 1s;
    -moz-transition: -moz-transform 1s;
    -o-transition: -o-transform 1s;
    transition: transform 1s;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform-origin: 50% 50%;
`

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            rotateDeg : 0,
        }
        this.cardFlipHandler = this.cardFlipHandler.bind(this);
    }
    cardFlipHandler(){
        const {rotateDeg} = this.state;
        this.setState({
            rotateDeg : (rotateDeg == 0) ? 180 : 0
        })
    }
    render () {
        const { frontCardStyle, backCardStyle } = style;
        const {rotateDeg} = this.state;
        let rotateVal = `rotateY(${rotateDeg}deg)`;
        return (
           <Container>
                <AnimCard style={{ transform: `${rotateVal}` }}>
                    <Paper zDepth={2} style={frontCardStyle}>
                        {this.props.children[0]}
                    </Paper>
                    <Paper zDepth={2} style={backCardStyle}>
                        {this.props.children[1]}
                    </Paper>
                </AnimCard>
           </Container>  
        )
    }
}
const style = {
    frontCardStyle:{
        height: '100%',
        width: '100%',
        position: 'absolute',
        backfaceVisibility: 'hidden'
    },
    backCardStyle:{
        height: '100%',
        width: '100%',
        position: 'absolute',
        backfaceVisibility: 'hidden',
        transform: 'rotateY(180deg)'
    }
}
export default Card