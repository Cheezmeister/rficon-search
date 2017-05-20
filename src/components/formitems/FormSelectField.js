import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class FormSelectField extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : 1
        }
        this.selectFieldOnChangeHandler = this.selectFieldOnChangeHandler.bind(this);
    }
    selectFieldOnChangeHandler(evt,indx,value){
        this.setState({ value});
        this.props.onSelectField(this.props.data[indx]);
    }
    render () {
        const {label, data} = this.props;
        const {value} = this.state;
        return (
            <SelectField floatingLabelText ={`${label}`} onChange={this.selectFieldOnChangeHandler} value={value} style={{width: 280, marginTop: 20}}>
                {data.map((item,indx) =>
                                <MenuItem key={indx} value={item.id} primaryText={item.val}>
                                </MenuItem>
                )}
            </SelectField>
        )
    }
}

export default FormSelectField;