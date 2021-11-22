import React, { useState, useEffect } from "react";
import "./App.css";
import AddTask from "./componentes/AddTask";
import Tasks from "./componentes/Tasks";
import { v4 as uuidv4 } from "uuid";
import Header from './componentes/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./componentes/Search";

const App = () => {

  const tarefas = [
    {
      id: "1",
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: "2",
      title: 'Trabalhar',
      completed: false,
    },
  ]
  
  const [tasks, setTasks] = useState(tarefas);

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

  const [search, setSearch] = useState('');
  
  const searchFilter = tasks.filter((tarefa) => tarefa.title.toLowerCase().includes(search.toLowerCase()))


  return (
    <Router>
        <div className="container">
            <Header />
              <Search search={search} setSearch={setSearch} />
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks 
                tasks={searchFilter} 
                handleTaskClick={handleTaskClick} 
                handleTaskRemove={handleTaskRemove}
              />
        </div>
    </Router> 
  )   
};

export default App;
