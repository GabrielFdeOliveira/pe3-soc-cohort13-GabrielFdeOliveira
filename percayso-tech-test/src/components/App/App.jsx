import { useState } from 'react'
import AppCSS from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <div className={AppCSS.btn}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>      
    </div>
  )
}

export default App