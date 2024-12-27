import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Signup from "./pages/Signup"
import Login from "./pages/Login"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App