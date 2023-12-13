import './App.css'
import ForsidePage from './pages/ForsidePage'
import LoginPage from './pages/LoginPage'
import Order1 from './pages/Order1'
import Order2 from './pages/Order2'
import Order3 from './pages/Order3'
import Kvitering from './pages/Kvitering'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<ForsidePage/>}/>
        <Route path="/ForsidePage" element={<ForsidePage/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/Order1" element={<Order1/>}/>
        <Route path="/Order2" element={<Order2/>}/>
        <Route path="/Order3" element={<Order3/>}/>
        <Route path="/Kvitering" element={<Kvitering/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
