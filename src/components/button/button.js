import Text from "components/text/text";
import React, { Component } from "react";
import './button.css'

export default class Button extends Component {

    handleClick() {
        console.log("click")
        if (this?.props?.onClick) {
            this.props.onClick();
        }
    }

    classes() {
        return this.props.class ? this.props.class : ""
    }

    render() {
        return (
            <div className={"button " + this.classes()} onClick={this.handleClick}>
                <Text>{this.props.display}</Text>
            </div>
        )
    }
}