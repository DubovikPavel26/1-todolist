import React, {useState} from 'react';
import {TaskType} from "./App";



type TodolistPropsType ={
    title: string
    task:Array<TaskType>
    removeTask: (taskid: number) => void

}
const TodoList = (props: TodolistPropsType) => {

    let [filter, setFilter] = useState('All')

    let filteredTasks = props.task

    if(filter === 'Active'){
        filteredTasks = props.task.filter(el => !el.isDone)
    }

    if(filter === 'Completed'){
        filteredTasks = props.task.filter(el => el.isDone)
    }

    if(filter === 'All'){
        filteredTasks = props.task
    }

    const filterTasks = (value: string) => {
        setFilter(value)
    }
    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                  </div>
                <ul>
                    {filteredTasks.map((el, index) =>{
                        return (
                            <li key={index}>
                                <button onClick={() => props.removeTask(el.id)}>x</button>
                                <input type="checkbox" checked={el.isDone}/>
                                <span>{el.title}</span>
                            </li>)}
                        )
                    }


                </ul>
                <div>
                    <button onClick={() => filterTasks('All')}>All</button>
                    <button onClick={() => filterTasks('Active')}>Active</button>
                    <button onClick={() => filterTasks('Completed')}>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default TodoList;