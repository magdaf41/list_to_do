import React, { Component } from 'react';
import './Counter.css';


class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counterValue: this.props.initValue,
            // step: parseFloat.this._inputStep.value

        };

    }

    addNumber = () => {
        console.log('button działa')
        // console.log(this.step)
        this.setState ({
            counterValue: this.state.counterValue + parseFloat(this._inputStep.value)
        });
    }

    render() {
        return (
            <div className="main-counter">
                Counter:
                <span className='value'>
                    {this.state.counterValue}
                </span>
                <button onClick={this.addNumber}>Add</button> <br />

                    Step: <input ref={(element) => {this._inputStep = element}} type="number" name="number" placeholder="Enter number"></input>
            </div>
        );
    }
}
// let randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);






export default Counter;