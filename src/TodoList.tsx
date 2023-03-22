import React from 'react';
import {TaskType} from "./App";



type TodolistPropsType ={
    title: string
    task:Array<TaskType>
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
                    {props.task.map(el => <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>)}

                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default TodoList;