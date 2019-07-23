import React, { Component } from 'react'
import Counter from '../components/Counter'

class OrderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            orders: [
                { id: 1, amount: 90 },
                { id: 2, amount: 100 },
                { id: 3, amount: 350 },
            ]
        };
    }

    increment = () => {
        console.log('testing');
    };

    render() {
        return (
            <div>
                <h1>Tes ting</h1>
                <h1>{this.state.value}</h1>
                <Counter value={this.state.value}
                    increment={this.increment}
                    orders={this.state.orders} />
            </div>

        );
    }
}


export default OrderContainer;