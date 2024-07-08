import React from 'react';

const ToDoDeleteButton = ({ onClick }) => {
    return (
        <button className="toDoDeleteStyle" onClick={onClick}>Delete</button>
    );
};

export default ToDoDeleteButton;