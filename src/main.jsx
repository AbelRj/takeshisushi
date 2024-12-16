
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router.jsx'
import { CarritotProvider } from './context/CarritoContext.jsx'

createRoot(document.getElementById('root')).render(
    <CarritotProvider>
        <RouterProvider router={Router} />
    </CarritotProvider>


)
