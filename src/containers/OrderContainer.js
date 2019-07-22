import React, { Component } from 'react'
import Counter from '../components/Counter'

class OrderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        };
    }

    increment = (x, y) => {
       console.log('testing');
    };

    render() {
        return (
            <div>
                <h1>Tes ting</h1>
                <h1>{this.state.value}</h1>
                <Counter value={this.state.value} increment={this.increment} />
            </div>
        );
    }

}

export default OrderContainer;