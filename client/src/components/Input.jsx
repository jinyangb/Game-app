import React from 'react'

const Input = (props) => {
  return (
    <div className="tasks">
      <label>Input Task: </label>
      <input
        type="text"
        name="task"
        onChange={props.handleChange}
        value={props.value}
      />
      <button onClick={props.addTask}>Add</button>
    </div>
  )
}

export default Input
