import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Atividade1 from "./atividades/atividade1/app.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Atividade1 />
  </StrictMode>,
)
