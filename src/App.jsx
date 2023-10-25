import { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid'

// import Tasks from "./components/Tasks";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([])

  //when button is pressed, passes el to the obj which will be displayed in <input id="addTask>"
  const handleSubmitTask = (e) => { 
    e.preventDefault()

    let inputText = document.getElementById('addTask')
    if (inputText.value.length > 0) {     // checks if there is an obj present
      /**
       * Thie useState function is important! Since the
       * value of the tasks are immutable, the program has to make a copy of what was passed as the 
       * new reference resulting in the additional task being created for react
       */
      setTasks([...tasks, inputText.value]) // Spread operator (...) expands an iterable so that the function call can allow more args/el
      inputText.value = '';
    }
    console.log("tasks after", tasks)// ok
  }

  return (
    <>
    <header className="text-center text-lg underline">Header</header>

    <main>
      <h2>Your List of Tasks</h2>

      <form id="addTaskForm" onSubmit={handleSubmitTask}> {/**where button is being populated*/}

        <label htmlFor="addTask" className="mr-2">Add a Task</label>
        <input type="text" name="addTask" id="addTask" className="border border-blue-500" />

        <button>Add Task</button>
      </form>

      <div className="tasks border border-red-500">
        {tasks.map((task) => {
          return <Task key={nanoid()} task={task} />;
        })}
      </div>
    </main>

    <footer>Footer</footer>
  </>
  )
}

export default App
