import React, { Component } from 'react';
import './Lottery.css';
import BallGenerator from '../ball_generator/BallGenerator';
export default class Lottery extends Component {
    static defaultProps = {
        noOfBalls : 8,
        randomRange : 60,
    }
    constructor(props) {
        super(props);
        this.state = {
            nums : Array.from({length : this.props.noOfBalls})
        }
        this.generate= this.generate.bind(this);
    }

    generate(){
        this.setState(curState => ({
            nums: curState.nums.map(
                n => Math.floor(Math.random() * this.props.randomRange) +1
            )
        })); 
    }

    render() {
        return (
            <div className='lottery'>
                <h1>Lottery Generator</h1>
                <BallGenerator balls={this.state.nums}/>

                <button onClick={this.generate}>Generate</button>
            </div>
        )
    }
}