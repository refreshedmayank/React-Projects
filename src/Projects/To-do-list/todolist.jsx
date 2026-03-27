import { useState } from 'react';

function Todolist() {
  const [inputValue, setInputValue] = useState("")
  const [tasks, setTasks] = useState([])

  function addTask() {
    if (inputValue.trim() === "") return
    setTasks([...tasks, inputValue])
    setInputValue("")
  }

  return (
    <div className="Card">
      <input
        className="Enter"
        id="InputValue"
        type="text"
        placeholder="Enter Tasks"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />
      <ul
       className="Tasks"
        id="Tasklist">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}
export default Todolist;