import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { RFIcon } from 'react-font-icon';

class Header extends Component {
    constructor(props){
        super(props);
      this.githubIconClickHandler = this.githubIconClickHandler.bind(this);  
    }
    githubIconClickHandler(){
        window.open("https://github.com/san2beerelli/rficon-search","_blank");
    }
    render () {
        const {githubIcon} = style;
        
        return (
             <AppBar 
                title= "React-Font-Icon Search" 
                style = {{ background: `rgba(40,69,99,1)`}}
                showMenuIconButton = {false}
                iconElementRight = { 
                    <div style={githubIcon} onClick={this.githubIconClickHandler}>
                        <RFIcon name="github" size="2x" color="#ffffff" />
                    </div>
                }
             />
        )
    }
}

const style = {
    githubIcon:{
        margin: 10,
        cursor:'pointer'
    }
}

export default Header