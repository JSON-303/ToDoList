import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoItem from './components/ToDoItem';


function App() {
  const [toDoList, setToDoList] = useState([]);


  // -- Methods for adding & deleting items: These can be considered 'props', thus can be passed/deconstructed within child components --

  const addToDoItem = (item) => {
    setToDoList([...toDoList, { id: toDoList.length, text: item }])
  };

  const deleteToDoItem = (id) => {
    setToDoList(toDoList.filter(item => item.id !== id));
  };

  const checkOffTask = (id) => {
    setToDoList(toDoList.map(item => item.id === id ? { ...item, isComplete: !item.isComplete } : item));
  };

  return (
    <>
      <Header />
      < ToDoForm addToDoItem={addToDoItem} />
      <div className="bodyContainerStyle">
        {toDoList.map(item => (
          <ToDoItem key={item.id} item={item} checkOffTask={checkOffTask} deleteToDoItem={deleteToDoItem} />
        ))}
      </div>
    </>
  )
}

export default App
