import { createBrowserRouter } from "react-router-dom";
import Error404 from "../componets/pages/Error404";
import Home from "../componets/pages/Home";
import App from "../componets/templates/App";
import Nosotros from "../componets/pages/Nosotros";
import ComidaPeruana from "../componets/pages/ComidaPeruana";
import Sushi from "../componets/pages/Sushi";
import Ubicacion from "../componets/pages/Ubicacion";
import Product from "../componets/pages/product";
import Carrito from "../componets/pages/Carrito";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                index: true,
                element: <Home/>,
              },
              {
                path: "/nosotros",
                element: <Nosotros/>,
              },
              {
                path: "/Comida-Peruana",
                element: <ComidaPeruana/>,
              },
              {
                path: "/sushi",
                element: <Sushi/>,
              },
              {
                path: "/ubicación",
                element: <Ubicacion/>,
              },
              {
                path: "/producto/:id",
                element: <Product/>,
              },
              {
                path: "/carrito",
                element: <Carrito/>,
              },
        ]
    }

])

export default Router;