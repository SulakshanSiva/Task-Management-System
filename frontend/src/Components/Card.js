import React from 'react';
import '../Styles/Card.scss';
import { Draggable } from 'react-beautiful-dnd'

const Card = ({ text, index }) => {
  return (
    <Draggable key={index.toString()} draggableId={index.toString()} index={index}>
      {provided => (
        <div className="card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          {text}
        </div>
      )}
    </Draggable>
  )};

export default Card;