import React, { Component } from 'react'


export default class Likes extends Component {

    constructor(){
        super();
        this.state = {
            counter: 0 
        }
        this.addCounter = this.addCounter.bind(this)
    }

    addCounter() {
        this.setState ({
            counter: this.state.counter + 1
        })
    }

          
    render() {
        
        const counter = this.state.counter

        return (
            <>
                <button onClick={this.addCounter}>Like</button>
            
                <p>{ counter }</p>
            </>

        )

    }
}


