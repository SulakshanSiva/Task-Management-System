import React, { useState } from 'react';
import {DragDropContext} from 'react-beautiful-dnd'
import Column from './Column';
import Card from './Card';
import '../Styles/Home.scss'
import Navbar from "./Navbar";

const Home = () => {
  const [cards, setCards] = useState(['Item 1', 'Item 2', 'Item 3'])

  const initialColumns = {
    todo: {
      id: 'todo',
      cards: ['item 1', 'item 2', 'item 3']
    },
    doing: {
      id: 'doing',
      cards: []
    },
    done: {
      id: 'done',
      cards: []
    }
  }
  const [columns, setColumns] = useState(initialColumns)

  const onDragEnd = ({ source, destination }) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;
  
    // Make sure we're actually moving the item
    if (source.droppableId === destination.droppableId &&
      destination.index === source.index) return null;

    // Set start and end variables
    const start = columns[source.droppableId]
    const end = columns[destination.droppableId]
    
    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newCards = cards.filter((_, idx) => idx !== source.index);
    
      // Then insert the item at the right location
      newCards.splice(destination.index, 0, cards[source.index]);

      
      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        cards: newCards
      }
    
      // Update the list
      setCards(state => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      const newStartCards = start.cards.filter((_, idx) => idx !== source.index);
      
      // Create a new start column
      const newStartCol = {
        id: start.id,
        cards: newStartCards
      }

      // Make a new end list array
      const newEndCards = end.cards

      // Insert the item into the end list
      newEndCards.splice(destination.index, 0, start.cards[source.index])

      // Create a new end column
      const newEndCol = {
        id: end.id,
        cards: newEndCards
      }
      // Update the state
      setColumns(state => ({...state, [newStartCol.id]: newStartCol, [newEndCol.id]: newEndCol}))
      return null;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="home">
        {Object.values(columns).map((column) => (
          <Column key={column.id} column={column}/>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Home;