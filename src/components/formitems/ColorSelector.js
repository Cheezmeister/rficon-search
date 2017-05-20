import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ColorPicker from './ColorPicker';

class ColorSelector extends Component {
    constructor(props){
        super(props);
        this.state = {
            colorDisabled: true,
            gradientDisabled: false,
            color1 : '#000000',
            color2 : '#000000',
            colorsArr : ['#000000','#000000']
        }
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.colorPickerChangeHandler = this.colorPickerChangeHandler.bind(this);
    }
    colorPickerChangeHandler(val,color){
        let {colorDisabled, color1, color2} = this.state;
        let colorsArr = [];
        if(color == "color1"){
          color1 = val;  
        }else {
            color2 = val;
        }
        if(colorDisabled){
            colorsArr.push(color1);
        }else{
            colorsArr.push(color1,color2);
        }
        this.setState({color1,color2,colorsArr});
        this.props.onColorChange(colorsArr);
    }
    buttonClickHandler(evt){
        let {colorDisabled, gradientDisabled, colorsArr} = this.state;
        this.setState({
            colorDisabled: !colorDisabled,
            gradientDisabled : !gradientDisabled
        })
        this.props.onColorChange(colorsArr);
    }
    render () {
        const {colorDisabled,gradientDisabled} = this.state;
        const gradientVisibility = !gradientDisabled ? 'hidden' : 'visible';
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <RaisedButton label="Color" primary={true} disabled={colorDisabled} style={style} onTouchTap={this.buttonClickHandler}/>
                    <RaisedButton label="Gradient" disabled={gradientDisabled} secondary={true} style={style} onTouchTap={this.buttonClickHandler}/>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10}}>
                    <ColorPicker changeHandler={(val)=>this.colorPickerChangeHandler(val,'color1')} />
                    <div style={{ marginLeft: 10, visibility : `${gradientVisibility}`}}>
                        <ColorPicker changeHandler={(val)=>this.colorPickerChangeHandler(val,'color2')} />
                    </div>
                </div>
            </div>
        )
    }
}

const style = {
    margin: 2,
}


export default ColorSelector;