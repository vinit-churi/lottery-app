import React, { Component } from 'react';
import './BallGenerator.css';
export default class BallGenerator extends Component {
    render(){

        return(
            <div className='ballgenerator'>
                {
                    this.props.balls.map((num)=>{
                        return (
                            <div className='ball'>
                                {num}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}