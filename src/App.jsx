import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListePokemon from '../Api/ListePokemon'
import Home from '../pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/data' element={<ListePokemon />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
