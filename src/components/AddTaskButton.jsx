
function AddTaskButton({ tasks, setTasks }) {

  const handleSubmitTask = (e) => {
    e.preventDefault()
    const data = new FormData(e.target);
    console.log("data: ", data)
    const taskText = data.get('addTask');

    console.log("added: ", taskText)
    
    if (taskText.length > 0) {
      setTasks([...tasks, taskText])
    }
  }

  return (
    <>
      <form id="addTaskForm" onSubmit={handleSubmitTask}>
        <label htmlFor="addTask" className="mr-2">Add a Task</label>
        <input type="text" name="addTask" id="addTask" className="border border-blue-500" />
        <button>Add Task</button>
      </form>
    </>
  )
}
//getAttributes('id');
// var id = e.target.id
export default AddTaskButton