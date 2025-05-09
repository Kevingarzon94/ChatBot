import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {WizyBot} from "./WizyBot.tsx";
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WizyBot />
  </StrictMode>,
)