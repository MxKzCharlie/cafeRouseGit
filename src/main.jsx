import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/homePage'
import StorePage from './pages/storePage'
import StoreMain from './components/storePage/storeMain'
import HotDrinks from './components/storePage/hotDrinks'
import ColdDrinks from './components/storePage/coldDrinks'
import SessonDrinks from './components/storePage/sessonDrinks'
import Bakery from './components/storePage/bakery'
import Extras from './components/storePage/extras'
import CarMain from './components/storePage/carMain'
import DetailsStore from './components/storePage/detailsStore'
import ThankYouPage from './pages/thankyouPage'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "tienda/",
    element: <StorePage />,
    children: [
      {
        path: "main/",
        element: <StoreMain />,
      },
      {
        path: "bebidas-calientes/",
        element: <HotDrinks />,
        children: [
          {path: "personalizacion/",element: <DetailsStore />,},
        ],
      },
      {
        path: "bebidas-frias/",
        element: <ColdDrinks />,
        children: [
          {path: "personalizacion/",element: <DetailsStore />,},
        ],
      },
      {
        path: "bebidas-de-temporada/",
        element: <SessonDrinks />,
        children: [
          {path: "personalizacion/",element: <DetailsStore />,},
        ],
      },
      {
        path: "reposteria/",
        element: <Bakery />,
        children: [
          {path: "personalizacion/",element: <DetailsStore />,},
        ],
      },
      {
        path: "adicionales/",
        element: <Extras />,
        children: [
          {path: "personalizacion/",element: <DetailsStore />,},
        ],
      },
      {
        path: "pagar/",
        element: <CarMain />,
      },
      {
        path: "thankyou/",
        element: <ThankYouPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)


