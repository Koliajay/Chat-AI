// import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Chat from "./component/chat"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Team from "./pages/team"
import Login from "./pages/login"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="" element={<Home/>} />
    <Route path="chat" element={<Chat/>} />
    <Route path="home" element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path="team" element={<Team/>} />
    <Route path="login" element={<Login/>} />
    <Route path="contact" element={<Contact/>} />

    
    </Routes>
  
    </BrowserRouter>
    
    </>
  )
}

export default App
