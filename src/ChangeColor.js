import React, { Component } from 'react';
import Buttons from './Buttons';
import Header from './Header';



class ChangeColor extends Component {


    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
            headingText: this.props.text
        }
    }


    changeColor = (event) => {
        let colorValue = event.target.innerText;
        this.setState({color: colorValue});
    }

    changeText = (displayText) => {

        this.setState({headingText: displayText});
    }

    render() {
        return (

            <div>
                <Header text={this.state.headingText} color={this.state.color} />
                {this.props.buttons && <Buttons changeColor={this.changeColor} changeText={this.changeText} />}
            </div>
        );
    }
}

export default ChangeColor