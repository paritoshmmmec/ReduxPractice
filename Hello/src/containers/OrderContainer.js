import React, { Component } from 'react'
import Counter from '../components/Counter'
import Example from '../components/Example'

const test = <h1> testing </h1>;
const Button = props => {
    const { kind, ...other } = props;
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    return <div className={className}  {...other} />;
};


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
                {test}
                <Example/>
                <Button kind="primary" value="testing" >
                    Hello World!
                </Button>
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