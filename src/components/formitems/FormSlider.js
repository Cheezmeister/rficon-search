import React, { Component } from 'react';
import Slider from 'material-ui/Slider';

class FormSlider extends Component {
    constructor(props){
        super(props);
        this.state = {
            sliderValue : 5
        }
        this.sliderChangeHandler = this.sliderChangeHandler.bind(this);
    }
    sliderChangeHandler(evt, val){
        this.setState({
            sliderValue: val
        });
        this.props.onSliderChange(val);
    }
    render () {
        const { sliderValue } = this.state;
        return (
            <div style={{display: 'flex', justifyContent:'space-between' , marginTop: 20}}>
                <div>
                    Font Size :
                </div>
                <Slider
                sliderStyle = {{width: 150, marginTop: -1}} onChange={this.sliderChangeHandler} value={sliderValue}
                min={1}
                max={15}
                step={1} />
                <div style={{ marginRight : 10}}>
                    { sliderValue }
                </div>
            </div>
        )
    }
}

export default FormSlider;