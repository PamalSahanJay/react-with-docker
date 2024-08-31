import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Home() {
  return (
    <div>
      <h1>client id : {import.meta.env.VITE_OIDC_CLIENT_ID}</h1>
      <h1>client secreat : {import.meta.env.VITE_OIDC_CLIENT_SECRET}</h1>
      <h1>authority url : {import.meta.env.VITE_OIDC_AUTHORITY}</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
