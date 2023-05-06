import React, { useState } from 'react';
import '../Styles/Column.scss';
import { Droppable } from 'react-beautiful-dnd'
import Card from './Card';

const Column = ({ column: { cards, id } }) => {
  return (
    <Droppable droppableId={id}>
      {provided => (
        <div className="colContainer" {...provided.droppableProps} ref={provided.innerRef}>
          <h2>{id}</h2>
          <div className="column">
            {cards.map((text, index) => (
              <Card key={index.toString()} text={text} index={index} />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  )
}

export default Column;