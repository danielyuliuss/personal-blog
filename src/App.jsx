import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog/:id' element={<BlogDetail />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
