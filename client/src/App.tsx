import Navbar from './components/Navbar';
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Index from './pages/Index';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {


  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          {/* <Route path="/" element={< />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App
