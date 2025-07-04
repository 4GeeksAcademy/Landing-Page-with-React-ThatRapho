import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Jumbotron from  './components/Jumbotron.jsx';
import Navbar from  './components/navbar.jsx';
import Card from  './components/Card.jsx';
import Footer from  './components/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Jumbotron/>
    <Card/>
    <Footer/>
  </React.StrictMode>,
)
