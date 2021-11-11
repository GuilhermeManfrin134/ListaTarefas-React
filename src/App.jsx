import React, { useState } from "react";
import "./App.css";
import AddTask from "./componentes/AddTask";
import Tasks from "./componentes/Tasks";
import { v4 as uuidv4 } from "uuid";
import Header from './componentes/Header';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: "2",
      title: 'Trabalhar',
      completed: true,
    },
  ]);

  
  const handleTaskClick = (taskId) => { //Selecionar
    const newTask = tasks.map(task => {
      if(task.id == taskId) return { ... task, completed: !task.completed}

      return task;
    })

    setTasks(newTask);
  }

  const handleTaskAddition = (taskTitle) => { //Adiconar
    const newTask = [                                 //3º
      ... tasks,                                      //Tudo que está em tasks
      {      
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    },
  ];

  setTasks(newTask);                                  //4º

  }

  const handleTaskRemove = (taskId) => { //Remover
    const removeTask = tasks.filter(task => task.id != taskId)

    setTasks(removeTask)
  }


  return (
    <>
        <div className="container">
            <Header />
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove}/>
        </div>
    </> 
  )   
};

export default App;
