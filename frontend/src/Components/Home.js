import React, { useState, useContext, useEffect } from 'react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import {DragDropContext} from 'react-beautiful-dnd'
import Column from './Column';
import '../Styles/Home.scss'
import Navbar from "./Navbar";

const Home = () => {
  const { currentUser, endSession } = useContext(AuthContext);

  const navigate = useNavigate();

    const initialColumns = {
        todo: {
            id: 'todo',
            cards: [],
        },
        doing: {
            id: 'doing',
            cards: [],
        },
        done: {
            id: 'done',
            cards: [],
        },
    };

    const [columns, setColumns] = useState(initialColumns);

    const initializeList = (listName) => {
        Axios.post("http://localhost:4000/todo/loadList", {
            list: listName,
            uid: currentUser.uid
        }).then(response => {

            setColumns(prevColumns => ({
                ...prevColumns,
                [listName]: {
                  ...prevColumns[listName],
                  cards: response.data.list,
                },
            }))
            
          })
          .catch(error => {
            console.error(error);
          })
    }   

    useEffect(() => {
        initializeList(initialColumns.todo.id);
        initializeList(initialColumns.doing.id);
        initializeList(initialColumns.done.id);
    }, []);


  const onDragEnd = ({ source, destination }) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;
  
    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    ) return null;
  
    // Set start and end variables
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];
  
    console.log(`Dragged Card ID: ${start.cards[source.index]}`);
    console.log(`Source Column: ${start.id}`);
    console.log(`Destination Column: ${end.id}`);
  
  
    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      const newCards = Array.from(start.cards);
      const [removedCard] = newCards.splice(source.index, 1);
      newCards.splice(destination.index, 0, removedCard);
  
      const newCol = {
        ...start,
        cards: newCards,
      };
  
      setColumns(state => ({
        ...state,
        [newCol.id]: newCol,
      }));
    } else {
      // Moving between columns
      const startCards = Array.from(start.cards);
      const [removedCard] = startCards.splice(source.index, 1);
  
      const endCards = Array.from(end.cards);
      endCards.splice(destination.index, 0, removedCard);
  
      const newStartCol = {
        ...start,
        cards: startCards,
      };
  
      const newEndCol = {
        ...end,
        cards: endCards,
      };
  
      setColumns(state => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
    }
  };

  return (
    <div className="container">
        <Navbar/>
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="home">
            
                {Object.values(columns).map((column) => (
                <Column key={column.id} column={column} />
                ))}
            </div>
        </DragDropContext>
    </div>
  );
};

export default Home;