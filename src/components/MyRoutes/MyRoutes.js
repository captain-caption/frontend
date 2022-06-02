import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import About from '../About/About'

export default class MyRoutes extends Component {
  render() {
    return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
    </Routes>
    )
  }
}
