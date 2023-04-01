import React, {useState} from 'react';
import {TaskType} from "./App";



type TodolistPropsType ={
    title: string
    task:Array<TaskType>
    removeTask: (taskid: number) => void
    filterTasks: (value: string) => void

}
const TodoList = (props: TodolistPropsType) => {

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                  </div>
                <ul>
                    {props.task.map((el, index) =>{
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
                    <button onClick={() => props.filterTasks('All')}>All</button>
                    <button onClick={() => props.filterTasks('Active')}>Active</button>
                    <button onClick={() => props.filterTasks('Completed')}>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default TodoList;