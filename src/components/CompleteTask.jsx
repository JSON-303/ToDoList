const CompleteTask = ({ onClick }) => {
    return (
        <input type="checkbox" className="checkStyle" onClick={onClick} />
    );
}

export default CompleteTask;