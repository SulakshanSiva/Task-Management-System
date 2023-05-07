import React, { useState, useContext, useEffect} from 'react';
import '../Styles/Column.scss';
import { Droppable } from 'react-beautiful-dnd'
import Card from './Card';
import Popup from 'reactjs-popup';
import Axios from "axios";
import { AuthContext } from '../Context/AuthContext';

const Column = ({ column: { cards, id } }) => {
    const {currentUser} = useContext(AuthContext);
    const [item, setItem] = useState("");
    const [list, setList] = useState(cards);


    useEffect(() => {
        setList(cards);
    }, [cards]);


    const createTodo = () => {
        Axios.post("http://localhost:4000/todo/addTodo", {
            list: id,
            uid: currentUser.uid,
            item: item
        }).then(response => {
            setList([...list, item]);
            setItem('');
        })
        .catch(error => {
            console.error(error);
        })
    }

    const deleteTodo = (text) => {
        Axios.post("http://localhost:4000/todo/deleteTodo", {
            list: id,
            uid: currentUser.uid,
            item: text
        }).then(response => {
            const newList = list.filter((item) => item !== text);
            setList(newList);
        })
        .catch(error => {
            console.error(error);
        })
    }

  return (
    <Droppable droppableId={id}>
      {provided => (
        <div className="colContainer" {...provided.droppableProps} ref={provided.innerRef}>

          <h2>{id}</h2>

          <Popup className="wrapper" trigger={<button>Add Todo</button>} position="center" modal>
            {close => (
                <div>
                    <input type="text" onChange={(e) => setItem(e.target.value)}/>
                    <button onClick={() => {
                        createTodo();
                        close();
                    }}>Add</button>
                    <button onClick={close}>Exit</button>
                </div>
            )}
           </Popup>

          <div className="column">
            {list.map((text, index) => (
                <div>
                <Card key={index.toString()} text={text} index={index}/>
                <button onClick={() => deleteTodo(text)}>Delete</button>
                </div>
            ))}
            {provided.placeholder}
          </div>

        </div>
      )}
    </Droppable>
  )
}

export default Column;