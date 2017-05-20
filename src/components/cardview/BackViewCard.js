import React, { Component } from 'react'
import { RFIcon } from 'react-font-icon';
import ColorSelector from '../formitems/ColorSelector';
import FormSlider from '../formitems/FormSlider';
import FormSelectField from '../formitems/FormSelectField';
import Checkbox from 'material-ui/Checkbox';

class BackViewCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            fontSize : '5',
            rotate : '0',
            spin : false,
            gradient : '90deg, #000000, #000000'
        }
        this.flipBtnClickHandler = this.flipBtnClickHandler.bind(this);
        this.onColorChangeHandler = this.onColorChangeHandler.bind(this);
        this.onSelectFieldHandler = this.onSelectFieldHandler.bind(this);
        this.onSliderChangeHandler = this.onSliderChangeHandler.bind(this);
        this.onCheckChangeHandler = this.onCheckChangeHandler.bind(this);
    }
    onSliderChangeHandler(val){
        this.setState({
            fontSize : val
        })
    }
    onSelectFieldHandler(val){
        this.setState({
            rotate : val.val
        })
    }
    onColorChangeHandler(val){
        let color1, color2;
        if(val.length == 2){
            color1 = val[0];
            color2 = val[1];
        }else{
            color1 = val[0];
            color2 = val[0];
        }
        this.setState({
            gradient : `90deg, ${color1}, ${color2}`
        })
    }
    flipBtnClickHandler(){
        this.props.flipClickHandler(this.state);
    }
    onCheckChangeHandler(evt,val){
        this.setState({
            spin : val
        })
    }
    render () {
        const { cardStyle, headerStyle } = style;
        const {data} = this.props;
        const sizeArr = [
                            {id:1, val:'lg'},
                            {id:2, val:'2x'},
                            {id:3, val:'3x'},
                            {id:4, val:'4x'},
                            {id:5, val:'5x'}
                        ]
        const rotateArr = [
                            {id:1, val:'0'},
                            {id:2, val:'90'},
                            {id:3, val:'180'},
                            {id:4, val:'270'}
                        ]                
        return (
            <div style={cardStyle}>
                <div style={headerStyle}>
                    <div>
                    </div>
                    <div onClick={this.flipBtnClickHandler} style={{cursor:'pointer'}}>
                        <RFIcon name='retweet'  textShadow='0 1px 0 rgba(1, 0, 0, 0.1)'
                                color="#000000" />
                    </div>
                </div>
                
                <div style={{ display : 'flex', flexDirection:'column', }}>
                    <ColorSelector onColorChange={this.onColorChangeHandler} />
                    <FormSlider onSliderChange={this.onSliderChangeHandler}/>
                    <FormSelectField label='Rotate' data={rotateArr} onSelectField={this.onSelectFieldHandler}/>
                    {/*<Checkbox label="Spin" width={250} style={{marginTop:20}} labelPosition="left" onCheck={this.onCheckChangeHandler} />*/}
                  </div>
                <div style={{height: 100}} />
            </div>
        )
    }
}

const style = {
    cardStyle: {
        display: 'flex',
        justifyContent : 'space-between',
        flexDirection : 'column' , 
        width : '96%',
        margin : 10,
        height : '90%'
    },
    headerStyle:{
        display : 'flex',
        justifyContent : 'space-between'
    }
}

export default BackViewCard