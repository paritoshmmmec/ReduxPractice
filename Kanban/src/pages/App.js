import React, { Component } from 'react'
import KanbanBoard from '../containers/KanbanBoard'

const TestComponent = React.lazy(() => import('../components/TestComponent'));

export const createHead = (withWidth) => {
    return {
        cells: [
            {
                key: 'id',
                content: 'id'
            }
        ],
    };
};

export const head = createHead(true);


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBasketDetails: false,
            isLoaded: false,
            items: [],
            error: null
        };
    }

    toggleDetails = () => {
        this.setState((prevState) => ({
            showBasketDetails: !prevState.showBasketDetails,
        }));
    }

    showDetails = () => {
        this.setState(() => ({
            showBasketDetails: true,
        }));
    }


    render() {
        return (
            <div onScroll={this.showDetails}>
                <KanbanBoard />
                <input type="button" value="Click me!" onClick={this.toggleDetails} />

                <React.Suspense fallback={<div>Loading Component...</div>}>
                    <TestComponent />
                </React.Suspense>

            </div>
        );
    }

}