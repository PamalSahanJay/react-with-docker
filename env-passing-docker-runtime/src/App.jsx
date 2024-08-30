import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(import.meta.env.VITE_SOME_KEY)
  return (
    <>
      <div>
        <h1>client id : {import.meta.env.VITE_OIDC_CLIENT_ID}</h1>
        <h1>client secreat : {import.meta.env.VITE_OIDC_CLIENT_SECRET}</h1>
        <h1>authority url : {import.meta.env.VITE_OIDC_AUTHORITY}</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
