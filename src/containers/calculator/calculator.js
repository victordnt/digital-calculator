import React, { Component } from "react";
import Button from "components/button/button";
import Display from "components/display/display";
import 'containers/calculator/calculator.css'
import Switcher from "components/switcher/switcher";

export class Calculator extends Component {
    render() {
        return (
            <div className={"calculator"}>
                <Display value={["1+1", "2", "Teste!", "Teste!"]} />
                <Switcher />
                <Button display={"⭥"}></Button>
                <Button display={"∁"} />
                <Button display={"√"} />
                <Button display={"("} />
                <Button display={"×"} />
                <Button display={"%"} />
                <Button display={")"} />
                <Button display={"±"} />
                <Button display={"÷"} />
                <Button display={"7"} />
                <Button display={"8"} />
                <Button display={"9"} />
                <Button display={"−"} />
                <Button display={"4"} />
                <Button display={"5"} />
                <Button display={"6"} />
                <Button display={"+"} />
                <Button display={"1"} />
                <Button display={"2"} />
                <Button display={"3"} />
                <Button class={"equal"} display={"="} />
                <Button display={"."} />
                <Button display={"0"} />
                <Button display={"⌫"} />

            </div>
        )
    }
}
