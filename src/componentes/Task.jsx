import React from 'react';
import "./Task.css"
import { CgCloseO, CgInfo } from 'react-icons/cg'

const Task = ({ task, handleTaskClick, handleTaskRemove }) => {
    //return <div className="task-container">{task.title}</div>
    return (
        <div 
            className="task-container" 
            style={task.completed ? {borderLeft: '15px solid crimson'} : {}}
        >

            <div className="task-title"
                onClick={() => handleTaskClick(task.id)}
            >
                {task.title}
            </div>

            <div className="buttons-container">
                <button 
                    className="remove-task-button"
                >
                    <CgInfo />
                </button>
                <button 
                    className="remove-task-button"
                    onClick={() => handleTaskRemove(task.id)}
                >
                    <CgCloseO />
                </button>
            </div>
        </div>
    )
}
 
export default Task;