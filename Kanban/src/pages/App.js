import React, { Component } from 'react'
import DetailContainer from '../components/DetailContainer';
import KanbanBoard from '../containers/KanbanBoard'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBasketDetails: false,
        };
    }

    toggleDetails = () => {
        this.setState((prevState) => ({
            showBasketDetails: !prevState.showBasketDetails,
        }));
    }


    render() {
        return (
            <div>
                <KanbanBoard  />
                <input type="button" value="Click me!" onClick={this.toggleDetails} />
                <DetailContainer
                    handleClose={this.toggleDetails}
                    isOpen={this.state.showBasketDetails}
                   
                >
                    <code>Drawer contents</code>
                </DetailContainer>
            </div>
        );
    }

}