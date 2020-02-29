import React, { Component } from "react";
import "./custominput.css"

export default class CustomInput extends Component {
    render() {
        const  { input: { value, onChange } } = this.props;
        
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    name={this.props.name}
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    className= "input-reg"
                    type={this.props.type}
                    value={value}
                    onChange={onChange}
                />
            </div>
        )
    }
}