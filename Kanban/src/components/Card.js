import React from 'react';
import CheckList from './CheckList';

const Card = ({card}) => {
    return (
        <div className="card" key ={card.id}>
            <div className="card__title">{card.title}</div>
            <div className="card__details">
                {card.description}
                <CheckList cardId={card.id} tasks={card.tasks} />
            </div>
        </div>
    );
}

export default Card;
