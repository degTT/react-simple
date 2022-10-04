import React from 'react'
const App = () => {
const suma = (a, b) => a + b 
const click = () => console.log(suma(10,5))
return (
    <button onClick={click}>
      Click to sum in console!
    </button>
  )
}

export default App
