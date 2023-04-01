import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {TaskType} from "./App";


type TodolistPropsType = {
    title: string
    task: Array<TaskType>
    removeTask: (taskid: string) => void
    filterTasks: (value: string) => void
    addTasks: (title: string) => void
}
const TodoList = (props: TodolistPropsType) => {

    const [title, setTitle] = useState('')

    const onclickHandler = () => {
        props.addTasks(title)
        setTitle('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onclickHandler()
        }
    }

    const onClickMapHandler = (tID: string) => props.removeTask(tID)

    const tsarFunct = (filter: string) => {
        props.filterTasks(filter)
    }

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input value={title} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
                    <button onClick={onclickHandler}>+</button>
                </div>
                <ul>
                    {props.task.map((el, index) => {

                            return (
                                <li key={index}>
                                    <button onClick={() => onClickMapHandler(el.id)}>x</button>
                                    <input type="checkbox" checked={el.isDone}/>
                                    <span>{el.title}</span>
                                </li>)
                        }
                    )
                    }


                </ul>
                <div>
                    <button onClick={() =>tsarFunct('All')}>All</button>
                    <button onClick={() =>tsarFunct('Active')}>Active</button>
                    <button onClick={() =>tsarFunct('Completed')}>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default TodoList;