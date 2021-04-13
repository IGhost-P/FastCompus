import React from 'react';
import Hello from './Hello';



function App() {
  return (
    <div>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello color="pink" />
    </div>
  )
}

export default App;