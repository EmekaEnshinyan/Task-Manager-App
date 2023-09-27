import { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid'

import Tasks from "./components/Tasks";
import Task from "./components/Task";
import AddTaskButton from "./components/AddTaskButton";

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <>
    <header className="text-center text-lg underline">Header</header>
    <main>
      <Tasks>
        <AddTaskButton />
        {tasks.map((task) => {
          return <Task key={nanoid} task={task} />;
        })}
      </Tasks>
    </main>
    <footer>Footer</footer>
  </>
  )
}

export default App
