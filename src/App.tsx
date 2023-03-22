import React from 'react';
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
    const title2 = 'What to learn2';

    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]
    const tasks2 = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false },
        { id: 4, title: "Yo", isDone: false }
    ]


    return (
    <>
        <TodoList title={title1} task={tasks1}/>
        <TodoList title={title2} task={tasks2} />
    </>
    );
}

export default App;
