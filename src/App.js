import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />}>Home</Route>
            <Route path='/about' element={<About />}>Sobre</Route>
            <Route path='/login' element={<Login />}>Login</Route>
            <Route path='/register' element={<Register />}>Cadastrar</Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
