// import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Chat from "./component/chat"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="" element={<Chat/>} />

    
    
    </Routes>
  
    </BrowserRouter>
    
    </>
  )
}

export default App
