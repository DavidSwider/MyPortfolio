import React from 'react'
import Footer from './components/FooterComponent';
import NavComponent from './components/NavComponent';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Outlet />
      <Footer />
    </div>
  )
}


export default App
