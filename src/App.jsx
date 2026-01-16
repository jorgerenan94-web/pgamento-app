import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Cards from "./pages/cards"
import { ToastContainer } from "react-toastify"
import Card from "./pages/card"

export default function App(){
  return(
    <>
      <ToastContainer 
        position="top-right" //posição do toast
        autoClose={5000} //fecha automaticamente após 5 segundos
        theme="colored" //tema colorido
        pauseOnHover={true} //pausa o toast quando o mouse passa sobre ele
        hideProgressBar={true} //esconde a barra de progresso
        closeOnClick={true} //fecha o toast ao clicar nele  
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/card/:id" element={<Card />}/>
        </Routes>
      </BrowserRouter>
    </>    
  )
}