import React, { useState } from "react";
import "./App.css";
import AddTask from "./componentes/AddTask";
import Tasks from "./componentes/Tasks";

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

  return (
    <>
        <div className="container">
            <AddTask />
            <Tasks tasks={tasks}/>
        </div>
    </> 
  )   
};

export default App;
