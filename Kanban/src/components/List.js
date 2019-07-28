import React from 'react';
import Card from './Card';

const List = ({ cards, title, handleChange }) => {
    console.log(handleChange);
    return (
        <div className="list">
            <h1>{title}</h1>
            {cards.map((card) => {
                return <Card key={card.id}
                 card={card} 
                 isSelected={card.isSelected} 
                 handleChange = {handleChange}  />
            })}
        </div>
    );
}

export default List;