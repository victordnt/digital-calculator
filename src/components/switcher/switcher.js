import React, { Component } from "react";
import './switcher.css'
import Text from "components/text/text"

export default class Switcher extends Component {
    render() {
        return (
            <div className={"switch"}>
                <label className={"switcher"}>
                    <input type={"checkbox"} />
                    <span className={"slider"}></span>
                </label>
                <Text>Mude o tema aqui</Text>
            </div>
        )
    }
}

