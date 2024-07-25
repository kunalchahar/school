import React from 'react'
import { BrowserRouter , Route , Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Academics from './components/Academics'
import Admission from './components/Admission'
import Faculty from './components/Faculty'
import Student from './components/Student'
import Gallery from './components/Gallery'
import ContactUs from './components/ContactUs'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<AboutUs></AboutUs>}></Route>
      <Route path='/about' element={<AboutUs></AboutUs>}></Route>
      <Route path='/academics' element={<Academics></Academics>}></Route>
      <Route path='/admissions' element={<Admission></Admission>}></Route>
      <Route path='/faculty' element={<Faculty></Faculty>}></Route>
      <Route path='/students' element={<Student></Student>}></Route>
      <Route path='/gallery' element={<Gallery></Gallery>}></Route>
      <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App