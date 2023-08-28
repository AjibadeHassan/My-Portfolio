import React from 'react'
import Header from './Components/Header'
import './SCSS/Style.scss'
import './SCSS/Mobile.scss'
import Home from './Components/Home'
import About from './Components/About'

const App = () => {
  return (
    <div className='App_container'>
      <Header/>
      <Home/>
      <About/>
    </div>
  )
}

export default App