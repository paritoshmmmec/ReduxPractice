import React, { Component } from 'react';
import CheckList from './CheckList';

class Card extends Component {

    constructor() {
        super();
        this.state = {
            showDetails: false
        }
    }

    handleDetails = () => {
        this.setState({ showDetails: !this.state.showDetails });
    }

    render() {
        return (
            <div className="card" key={this.props.card.id}>
                <input type="checkbox" checked={this.props.isSelected} onChange={() => { this.props.handleChange(this.props.card) }} />
                <div className="card__title" onClick={this.handleDetails}>
                    {this.props.card.title}
                </div>
                <div className="card__details">
                    {this.props.card.description}
                    {this.state.showDetails && <CheckList cardId={this.props.card.id} tasks={this.props.card.tasks} />}
                </div>
            </div >
        );
    }
}

export default Card;
