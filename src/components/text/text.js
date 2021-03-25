import React, { Component } from "react"
import './text.css'
export default class Text extends Component {

    render() {
        return (
            <span className="text">{this.props.children}</span>
        )
    }

}