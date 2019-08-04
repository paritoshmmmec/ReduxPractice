import React, { Component, useState } from 'react'
const List = React.lazy(() => import('../components/List'));

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


                <React.Suspense fallback={<div>Loading Component...</div>}>
                    <List id='todo' title="Todo" handleChange={this.handleChange} cards={
                        this.state.cards.filter((card) => card.status === "todo")
                    } />

                </React.Suspense>

                <React.Suspense fallback={<div>Loading Component...</div>}>
                    <List id='in-progress' handleChange={this.handleChange} title="In Progress" cards={
                        this.state.cards.filter((card) => card.status === "in-progress")
                    } />

                </React.Suspense>
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