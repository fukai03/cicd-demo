import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

interface Props {
  value?: string;
}

const App: React.FC<Props> = ({value}) => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((e) => e + 1)} role="button">
          count is {count}
        </button>
      </div>
      <p role="props">{value}</p>
      <p>test change</p>
    </div>
  )
}

export default App
