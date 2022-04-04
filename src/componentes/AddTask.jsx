import React, { useState } from 'react';
import "./AddTask.css"
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
    const [InputData, setInputData] = useState(''); //1º

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(InputData);              //2º
        setInputData(' ');
    }

    return ( 
        <div className="add-task-container">
            <input 
                type="text" 
                placeholder="Ex: Fazer Compras"
                onChange={handleInputChange} 
                value={InputData} 
                className="add-task-input" 
            /> 
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
        
     );
}
 
export default AddTask;