import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home, Social, About, Projects, Skills } from './pages/index'
import './App.css'
import Contact from './components/Contact'


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/about' element={ <About /> }/>
        <Route path='/projects' element={ <Projects /> }/>
        <Route path='/skills' element={ <Skills /> }/>
        <Route path='/social' element={ <Social /> }/>
      </Routes>
      <Contact />
    </HashRouter>
    
  )
}

export default App
