import React, { Component, useState } from 'react'
import List from '../components/List';

function Example() {
    // Declare a new state variable, which we'll call "count"

    const [isOpen, toggle] = useState(false);

    return (
        <div>
            <p>You clicked {isOpen.toString()} times</p>
            <button onClick={() => toggle(!isOpen)}>
                Click me
        </button>
        </div>
    );
}

export default class KanbanBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    id: 1,
                    title: "Read the Book",
                    description: "I should read the whole book",
                    status: "in-progress",
                    tasks: [],
                    isSelected: false
                },
                {
                    id: 2,
                    title: "Write some code",
                    description: "Code along with the samples in the book",
                    status: "todo",
                    isSelected: false,
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
                {
                    id: 3,
                    title: "Write some code",
                    description: "Code along with the samples in the book",
                    status: "todo",
                    isSelected: false,
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
                }
            ]
        };
    }
    handleChange = (card) => {
        console.log(card);
        let cards = [...this.state.cards];
        const index = cards.findIndex(obj => obj.id === card.id);
        cards[index].isSelected = !cards[index].isSelected;
        this.setState(cards);
    }
    render() {
        return (
            <div className="app">
                <Example />
                {/* <div className="list">
                    <h1>To Do</h1>
                    {this.state.cards.filter((card) => card.status === "todo")
                        .map((card) => {
                            return <Card key={card.id} card={card} isSelected={card.isSelected}
                                handleChange={() => this.handleChange(card)} />
                        })}
                </div> */}


                <List id='todo' title="Todo" handleChange={this.handleChange} cards={
                    this.state.cards.filter((card) => card.status === "todo")
                } />

                <List id='in-progress' handleChange={this.handleChange} title="In Progress" cards={
                    this.state.cards.filter((card) => card.status === "in-progress")
                } />

                {/* <List id='in-progress' title="In Progress" cards={
                    this.state.cards.filter((card) => card.status === "in-progress")
                } />
                <List id='done' title='Done' cards={
                    this.state.cards.filter((card) => card.status === "done")
                } /> */}
            </div>
        );
    }
}