import React from 'react'

const Tasks = (props) => {
  return (
    <ul>
      {props.tasks.map((task, index) => (
        <li key={index}>
          <button onClick={() => props.removeTask(index)}>x</button> {task}
        </li>
      ))}
    </ul>
  )
}

export default Tasks
