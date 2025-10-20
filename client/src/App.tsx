import Navbar from './components/Navbar';
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Edit from './pages/Edit';
import Index from './pages/Index';

function App() {


  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/edit" element={<Edit/>} />
        </Routes>
      </div>
    </>
  );
}

export default App
