// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(value)
  }

  function handleChange(event) {
    const {value} = event.target
    setValue(value.toLowerCase())
  }

  const inputRef = React.useRef(null)
  const [value, setValue] = React.useState('')

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          value={value}
          onChange={handleChange}
          ref={inputRef}
          id="usernameInput"
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
