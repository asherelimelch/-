import React from 'react'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import Vudinput from './vudinput'
import Futer from './futer'
import Home from './home'
import Movieinfo from './movieinfo'

import './home.css'
export default function Comp() {
  return (
    <BrowserRouter>
      <Vudinput />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/info/:id" element={<Movieinfo />} />
      </Routes>
      <Futer />
    </BrowserRouter>

  )
}
