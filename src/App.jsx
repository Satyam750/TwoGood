import React from 'react'
import "./App.css"
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Nav from './components/Nav'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Page6 from './components/Page6'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app'>
    <Nav/>
     <Page1/>
     <Page2/>
     <Page3/>
     <Page4/>
     <Page5/>
     <Page6/>
     <Footer/>
    </div>
  )
}

export default App