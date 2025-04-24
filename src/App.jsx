import React from 'react'
import Footer from './components/FooterComponent';
import NavComponent from './components/NavComponent';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="bg-dark text-white min-vh-100 d-flex flex-column">
      <NavComponent />
      <Container as="main" className="container flex-grow-1 py-5">
        <Outlet />
      </Container>
      <Footer />
    </div>
  )
}


export default App
