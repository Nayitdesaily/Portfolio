import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home, Social, About, Projects, Skills } from './pages/index'
import './App.css'
import { useEffect } from 'react'
import gsap from 'gsap'

function App() {

  useEffect(() => {
    gsap.fromTo('.contact', {opacity:0, y: '-50%'}, {opacity: 1, duration: 1, y: '0%'})
    gsap.fromTo('.ancore-my-resume', {opacity:0}, {opacity: 1})

  }, [])

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/about' element={ <About /> }/>
        <Route path='/projects' element={ <Projects /> }/>
        <Route path='/skills' element={ <Skills /> }/>
        <Route path='/social' element={ <Social /> }/>
      </Routes>
      <div className='contact'>
            <a href="" className='ancore-my-resume'>My Resume</a> 
        </div>
    </HashRouter> 
    
  )
}

export default App
