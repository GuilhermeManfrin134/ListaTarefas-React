import React, { useState, useEffect } from "react";
import "./App.css";
import AddTask from "./componentes/AddTask";
import Tasks from "./componentes/Tasks";
import { v4 as uuidv4 } from "uuid";
import Header from './componentes/Header';
import Search from "./componentes/Search";

const App = () => {

  const tarefas = [];
  
  const [tasks, setTasks] = useState(tarefas);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tasks');

    if(tarefasStorage){
      setTasks(JSON.parse(tarefasStorage));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  const handleTaskClick = (taskId) => { //Selecionar
    const newTask = tasks.map(task => {
      if(task.id === taskId) return { ...task, completed: !task.completed}

      return task;
    })

    setTasks(newTask);
  }

  const handleTaskAddition = (taskTitle) => { //Adiconar
    const newTask = [                                 //3º
      ...tasks,                                      //Tudo que está em tasks
      {      
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    },
  ];

  setTasks(newTask);                                  //4º

  }

  const handleTaskRemove = (taskId) => { //Remover
    const removeTask = tasks.filter(task => task.id !== taskId)

    setTasks(removeTask)
  }

  const handleOrderClick = () => {
    let newListTask = [...tasks];

    newListTask.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))

    setTasks(newListTask)
  }

  const [search, setSearch] = useState('');

  const lowerSearch = search.toLowerCase();
  
  const searchFilter = tasks.filter((tarefa) => tarefa.title.toLowerCase().includes(lowerSearch))

  return (
    <>
        <div className="container">
            <Header />
              <Search handleOrderClick={handleOrderClick} search={search} setSearch={setSearch} />
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks 
                tasks={searchFilter} 
                handleTaskClick={handleTaskClick} 
                handleTaskRemove={handleTaskRemove}
              />
        </div>
    </> 
  )   
};

export default App;
