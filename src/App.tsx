import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import exp from "constants";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

function App() {
    const title1 = 'What to learn';

    let [tasks, setTasks] = useState([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false }
    ])

    let [filter, setFilter] = useState('All')



    const removeTask = (taskid: string) => {
        setTasks(tasks = tasks.filter((el) => el.id !== taskid))

    }

    const addTasks = (title: string) => {
        const newTask = { id: v1(), title: title, isDone: false }
        setTasks([newTask, ...tasks])

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
        <TodoList
            title={title1}
            task={filteredTasks}
            removeTask={removeTask}
            filterTasks={filterTasks}
            addTasks={addTasks}
        />
    </>
    );
}

export default App;
