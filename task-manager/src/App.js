import './App.css';
import './components/AddTaskButton';
import React, { useState } from 'react';
import Tasks from './components/Tasks'
import Task from './components/Task'
import AddTaskButton from './components/AddTaskButton.js'

function App() {
  const [tasks, addTask] = useState([]); 

  return (
    <>
      <header>Header</header>
      <main>
        <Tasks>
          <AddTaskButton />
          {tasks.map((task) => {
            <Task task={task} />
          })}
        </Tasks>
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default App;
