import React from 'react';
import "./Task.css"
import { CgCloseO, CgInfo } from 'react-icons/cg'
import { AiFillCheckCircle } from 'react-icons/ai'

const Task = ({ task, handleTaskClick, handleTaskRemove }) => {
    //return <div className="task-container">{task.title}</div>
    return (
        <div 
            className="task-container"
            style={task.completed ? {backgroundColor: 'crimson'} : {}} 
        >
            <div className="completed-task" style={task.completed ? {display: 'flex', backgroundColor: 'crimson', fontSize: '25px', margin: '0', padding: '0'} : {}}>
                <AiFillCheckCircle />
            </div>
            <div className="task-title"
                onClick={() => handleTaskClick(task.id)}
            >
                {task.title}
            </div>

            <div className="buttons-container">
                <button 
                    className="remove-task-button"  style={task.completed ? {backgroundColor: 'crimson'} : {}} 
                >
                    <CgInfo />
                </button>
                <button 
                    className="remove-task-button"  style={task.completed ? {backgroundColor: 'crimson'} : {}} 
                    onClick={() => handleTaskRemove(task.id)}
                >
                    <CgCloseO />
                </button>
            </div>
        </div>
    )
}
 
export default Task;