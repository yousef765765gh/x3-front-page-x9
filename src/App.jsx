
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import Process from './pages/process'
import About from './pages/About'
import NavBar from './components/NavBar/NavBar'
import Contact from './pages/Contact'

function App() {
  const navitem =[
    {
      content:"Home",
      href:"/"
    },
    {
      content:"Work",
      href:"/work"
    },
    {
      content:"Process",
      href:"/process"
    },
    {
      content:"About",
      href:"/about"
    },
    {
      content:"Contact",
      href:"/contact_us"
    }
  ]
  return (
    <>
    <NavBar
      logo="/assets/img/logo-navbar.png"
      items={navitem}
      btn="Contact Us"
      media_btn= "/assets/img/nav-ul-media.png"
    />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/process" element={<Process/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact_us" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
