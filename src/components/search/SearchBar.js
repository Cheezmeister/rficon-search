import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { RFIcon } from 'react-font-icon';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.searchIcon = 'search';
        this.timesIcon = 'times';
        this.state = {
            dataSource: props.dataSource,
            iconType : this.searchIcon,
            textValue : ''
        };
        this.searchIconClickHandler = this.searchIconClickHandler.bind(this);
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
    }
    searchIconClickHandler(){
        this.setState({
            textValue: '',
            iconType: this.searchIcon
        });
         if(typeof this.props.onInputChange === 'function'){
            this.props.onInputChange("");
        }
    }
    handleUpdateInput(evt){
         const {iconType} = this.state;
         let textValue = evt.target.value
          this.setState({
                textValue
            })
        
        if(iconType == this.searchIcon){
            this.setState({
                iconType: this.timesIcon
            })
        } 
        if(textValue.trim().length == 0){
             this.setState({
                iconType: this.searchIcon
            })
        }
        if(typeof this.props.onInputChange === 'function'){
            this.props.onInputChange(textValue);
        }
    }
    
    render () {
        const {searchBg} = style;
        const {iconType, textValue} = this.state;
        return (
            <div style={searchBg}>
                <div style={{ marginLeft : -20 , cursor:'pointer' , zIndex: 2}} onClick={this.searchIconClickHandler}>
                        <RFIcon name= {iconType} textShadow='0 1px 0 rgba(1, 0, 0, 0.1)'
                         color="#ffffff" size="lg" />
                </div>
                <TextField
                    hintText="Search"
                    ref={(autoComplete) => {this.autoComplete = autoComplete}}
                    inputStyle = {
                       {
                            color : '#ffffff',
                            fontSize : '12pt',
                            textAlign : 'center',
                        }
                    }
                    hintStyle = {{
                        width: '100%',
                        color : '#BDBDBD',
                        fontSize : '12pt',
                        textAlign : 'center',
                    }}
                    value = {textValue}
                    onChange={this.handleUpdateInput}
                    fullWidth={true}
                    />
                   
            </div>
        )
    }
}

const style = {
    searchBg:{
        display: 'flex',
        flexDirection : 'row-reverse',
        alignItems: 'center',
        margin : 15,
        borderRadius: '4px',
        height: `50px`,
        alignSelf : 'center',
        width: '80%',
    }
}

export default SearchBar