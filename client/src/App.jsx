import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import { SnackbarProvider } from 'notistack'

const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/aboutus' element={<AboutPage/>}/>
          <Route path='/contactus' element={<ContactPage/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/
        </Routes
      </BrowserRouter>
    </SnackbarProvider>
  )
}

export default App;
