import ToDoDeleteButton from './ToDoDeleteButton';
import CompleteTask from './CompleteTask';
import { useState } from 'react';

const ToDoItem = (props) => {
    const { item, checkOffTask, deleteToDoItem } = props;
    const [isComplete, setIsComplete] = useState(false);


    return (
        <div className={`toDoStyle ${isComplete ? 'complete' : ''}`}>
            <div className="toDoItemContent">
                <span className={`completedStyle ${item.isComplete ? 'line-through' : ''}`}>{item.text}</span>
                <div className="optionsStyle">
                    <CompleteTask onClick={() => checkOffTask(item.id)} />
                    <ToDoDeleteButton onClick={() => deleteToDoItem(item.id)} />
                </div>
            </div>
        </div>
    );
}

export default ToDoItem;