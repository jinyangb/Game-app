import React from 'react'

const Input = (props) => {
  return (
    <div className="tasks">
      <label>Username: </label>
      <input
        type="text"
        name="task"
        onChange={props.handleChange}
        value={props.value}
      />
      <button onClick={props.addTask}>Login</button>
    </div>
  )
}

export default Input
