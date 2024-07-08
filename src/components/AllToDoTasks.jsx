import ToDoItem from "./components/ToDoItem";

const AllToDoTasks = (props) => {
    const {allTasks} = props;
    return (
        <>
            {
                allTasks.map = (toDoList) => {
                    return <ToDoItem name={task.taskDesctiption} />
                }
            }
        </>
    )
}

export default AllToDoTasks;