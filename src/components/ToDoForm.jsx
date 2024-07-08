import { useState } from 'react';

const ToDoForm = ({ addToDoItem }) => {
    const [toDoItem, setToDoItem] = useState('');

    const handleToDoItem = (value) => {
        setToDoItem(value);
    };

    const createToDoItem = (e) => {
        e.preventDefault();
        // using lifted state, evoke the 'addToDoItem' method from the parent App component. Then return value of "('')" to clear the forms text field.
        if (toDoItem.trim()) {
            addToDoItem(toDoItem);
            setToDoItem('');
        }
    };

    return (
        <form className="formStyle" onSubmit={createToDoItem}>
            <div>
                <label>Add to your list:</label>
                <input type="text" value={toDoItem} onChange={(e) => handleToDoItem(e.target.value)} />
            </div>
            <input type="submit" value="Add" />
        </form>
    );
};

export default ToDoForm;