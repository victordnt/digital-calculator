import Text from "components/text/text";
import React, { Component } from "react";
import './display.css'
export default class Display extends Component {

    appendText() {
        return () => {
            this.props.value.push("4");
            this.forceUpdate();
            console.log("foi?")
            return
        };
    }

    textValue() {
        if (!this.props?.value) return;
        if (!Array.isArray(this.props.value)) return (<Text>{this.props.value}</Text>)

        return this.props.value.map(v => (<Text> {v} </Text>)).reverse()

    }
    render() {
        return (
            <div className={"display borderBlack"} onClick={this.appendText()}>
                {this.textValue()}
            </div>
        )
    }
}

