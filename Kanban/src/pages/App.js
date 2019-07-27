import React, { Component } from 'react'
import DetailContainer from '../components/DetailContainer';
import KanbanBoard from '../containers/KanbanBoard'

let cardsList = [
    {
        id: 1,
        title: "Read the Book",
        description: "I should read the whole book",
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book",
        status: "todo",
        tasks: [
            {
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]
    },
];

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
                <KanbanBoard cards={cardsList} />
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