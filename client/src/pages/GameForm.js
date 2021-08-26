import React from 'react'
import TextInput from '../components/TextInput'

function GameForm(props) {
  const handleSubmit = (e) => {
    props.addGame(e)
    props.history.push('/listings')
  }
  return (
    <div>
      <h1>Add A New Game Listing</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          value={props.newGame.name}
          onChange={props.handleChange}
          name={'name'}
          placeholder={'name'}
        />
        <TextInput
          type="text"
          value={props.newGame.img}
          onChange={props.handleChange}
          name={'img'}
          placeholder={'image'}
        />
        <TextInput
          type="text-area"
          value={props.newGame.description}
          onChange={props.handleChange}
          name={'description'}
          placeholder={'description'}
        />
        <TextInput
          type="text"
          value={props.newGame.price}
          onChange={props.handleChange}
          name={'price'}
          placeholder={'price'}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default GameForm
