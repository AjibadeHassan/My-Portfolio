import React from 'react'
import Header from './Components/Header'
import './SCSS/Style.scss'
import './SCSS/Mobile.scss'
import Home from './Components/Home'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
    </div>
  )
}

export default App