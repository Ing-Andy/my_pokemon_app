import { useState } from 'react'
import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import ListePokemon from '../Api/ListePokemon'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile/:nom' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
