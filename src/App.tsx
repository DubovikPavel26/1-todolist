import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import exp from "constants";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const title1 = 'What to learn';

    let [tasks, setTasks] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ])

    let [filter, setFilter] = useState('All')



    const removeTask = (taskid: number) => {
        setTasks(tasks = tasks.filter((el) => el.id !== taskid))

    }

    let filteredTasks = tasks

    if(filter === 'Active'){
        filteredTasks = tasks.filter(el => !el.isDone)
    }

    if(filter === 'Completed'){
        filteredTasks = tasks.filter(el => el.isDone)
    }

    if(filter === 'All'){
        filteredTasks = tasks
    }

    const filterTasks = (value: string) => {
        setFilter(value)
    }




    return (
    <>
        <TodoList title={title1} task={filteredTasks} removeTask={removeTask} filterTasks={filterTasks}/>
    </>
    );
}

export default App;
