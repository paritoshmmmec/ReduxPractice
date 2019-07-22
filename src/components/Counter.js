import React, { Component } from 'react'
import Orders from './Orders'

class Counter extends Component {
    render() {
        return (
            <div>
                <Orders {...this.props} />
                <p>{this.props.value}</p>
                <input type="button" value="Click me!"
                 onClick = {this.props.increment}/>
            </div>
        );
    }
}

export default Counter;