import React, { Component } from 'react'

class Counter extends Component {
    render() {
        return (
            <div>
                <p>{this.props.value}</p>
                <input type="button" value="Click me!" onClick = {this.props.increment}/>
            </div>
        );
    }
}

export default Counter;