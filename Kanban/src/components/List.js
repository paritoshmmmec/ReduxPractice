import React from 'react';
import Card from './Card';

const List = ({ cards, title }) => {
    return (
        <div className="list">
            <h1>{title}</h1>
            {cards.map((card) => {
                return <Card key={card.id} card={card} />
            })}
        </div>
    );
}

export default List;